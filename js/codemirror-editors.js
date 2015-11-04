var editor_js = CodeMirror($('#js_editor')[0], {
  lineNumbers: true,
  mode: 'javascript'
});

function markJsErrorAtLine(line) {
  var start = {line: line - 1, ch: 0};
  editor_js.markText(start, {line: line, ch: 0}, {
    className: 'js-error',
    clearOnEnter: true
  });
  editor_js.scrollIntoView(start);
}

function refreshPreview() {
  console.log("Refreshing view");

  // css_content = editor_css.getValue();
  // html_content = editor_html.getValue();

  // view.contents().find('body').html(
  //     "<html><head><style>" + css_content + "</style></head><body>" + html_content + "</body></html>"
  // );

  var js_content = editor_js.getValue();

  if (typeof(esprima) !== 'undefined') {
    try {
      esprima.parse(js_content);
    } catch (e) {
      if (e.lineNumber) {
        markJsErrorAtLine(e.lineNumber);
        alert(e.description + " at line " + e.lineNumber);
        return;
      }
    }
  }

  //Error checking (provide user feedback)
  try {
     console.log("Eval js");
     console.log(js_content);
      //Eval the code to overwrite existing function. Access the iframe by name
    preview.eval(js_content + '//# sourceURL=user-level.js');
    preview.remove();
    preview.p5PlayRebind();
    preview.eval("new p5();");
  } catch (err) {
    StackTrace.fromError(err, {
      offline: true,
      filter: function(stackFrame) {
        return /user-level\.js/.test(stackFrame.fileName);
      }
    }).then(function(frames) {
      if (frames.length) {
        markJsErrorAtLine(frames[0].lineNumber);
      }
    });
      // ReferenceError: alph is not defined
      console.log("ERROR");
      console.log(err);
      alert(err);
      // alert("Make sure you've defined your variable before trying to use it");
  }
}
