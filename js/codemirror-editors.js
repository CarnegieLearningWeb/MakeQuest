var editor_js = CodeMirror($('#js_editor')[0], {
  lineNumbers: true,
  mode: 'javascript'
});

function refreshPreview() {
  console.log("Refreshing view");

  // css_content = editor_css.getValue();
  // html_content = editor_html.getValue();

  // view.contents().find('body').html(
  //     "<html><head><style>" + css_content + "</style></head><body>" + html_content + "</body></html>"
  // );

  var js_content = editor_js.getValue();

  //Error checking (provide user feedback)
  try {
     console.log("Eval js");
     console.log(js_content);
      //Eval the code to overwrite existing function. Access the iframe by name
    preview.eval(js_content);
    preview.remove();
    preview.p5PlayRebind();
    preview.eval("new p5();");
  } catch (err) {
      // ReferenceError: alph is not defined
      console.log("ERROR");
      console.log(err);
      alert(err);
      // alert("Make sure you've defined your variable before trying to use it");
  }
}
