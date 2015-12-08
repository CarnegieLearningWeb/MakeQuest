var originalEditorContent = '';

var editor_js = CodeMirror($('#js_editor')[0], {
  lineNumbers: true,
  lineWrapping: true,
  foldGutter: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  mode: 'javascript',
  // theme : 'monokai'
});

editor_js.on('changes', function() {
  // if (editor_js.getValue() === originalEditorContent) {
  //   $("#revert").hide();
  // } else {
  //   $("#revert").show();
  // }
});

function markHint(/* esprima token match pattern ... */) {
  var candidateMarks = [];
  var candidateIndex = 0;
  var numHighlights = 0;
  var code = editor_js.getValue();

  // For guidance on what this might look like in practice, play around
  // with http://esprima.org/demo/parse.html and select the "Tokens" tab.
  var tokens = esprima.tokenize(code, {range: true});

  var pattern = [].slice.call(arguments).map(function(arg) {
    if (arg === null) return {canBeAnything: true};
    if (typeof(arg) == 'string') {
      arg = {value: arg};
    }
    return arg;
  });
  var patternPartMatches = function(patternPart, token) {
    if (patternPart.canBeAnything) return true;
    if ('value' in patternPart) {
      return token.value === patternPart.value;
    }
    if ('type' in patternPart) {
      return token.type == patternPart.type;
    }
  };

  tokens.forEach(function(token, i) {
    var patternPart = pattern[candidateIndex];

    if (patternPartMatches(patternPart, token)) {
      candidateIndex++;
      if (patternPart.highlight) {
        candidateMarks.push(token);
      }
      if (pattern.length == candidateIndex) {
        candidateMarks.forEach(function(token) {
          var start = editor_js.posFromIndex(token.range[0]);
          var end = editor_js.posFromIndex(token.range[1]);

          if (numHighlights++ == 0) {
            editor_js.scrollIntoView(start);
          }
          editor_js.markText(start, end, {
            className: 'js-hint'
          });
        });
        candidateIndex = 0;
      }
    } else {
      candidateIndex = 0;
      candidateMarks = [];
    }
  });
}

// Make inline chars readonly
// Reusing markHint
function readOnlyToken(/* esprima token match pattern ... */) {
  var candidateMarks = [];
  var candidateIndex = 0;
  var numHighlights = 0;
  var code = editor_js.getValue();



  // For guidance on what this might look like in practice, play around
  // with http://esprima.org/demo/parse.html and select the "Tokens" tab.
  var tokens = esprima.tokenize(code, {range: true});

  var pattern = [].slice.call(arguments).map(function(arg) {
    if (arg === null) return {canBeAnything: true};
    if (typeof(arg) == 'string') {
      arg = {value: arg};
    }
    return arg;
  });
  var patternPartMatches = function(patternPart, token) {
    if (patternPart.canBeAnything) return true;
    if ('value' in patternPart) {
      return token.value === patternPart.value;
    }
    if ('type' in patternPart) {
      return token.type == patternPart.type;
    }
  };

  tokens.forEach(function(token, i) {
    var patternPart = pattern[candidateIndex];

    if (patternPartMatches(patternPart, token)) {
      candidateIndex++;
      if (patternPart.highlight) {
        candidateMarks.push(token);
      }
      if (pattern.length == candidateIndex) {
        candidateMarks.forEach(function(token) {
          var start = editor_js.posFromIndex(token.range[0]);
          var end = editor_js.posFromIndex(token.range[1]);

          if (numHighlights++ == 0) {
            editor_js.scrollIntoView(start);
          }
          editor_js.markText(start, end, {
            className: 'js-read-only',
            readOnly: true
          });
        });
        candidateIndex = 0;
      }
    } else {
      candidateIndex = 0;
      candidateMarks = [];
    }
  });
}

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

  // Test for custom feedback first and exit if found. 
  // Errors will be displayed to the user.
  if( CustomErrors.test() ) return;

  // Error feedback fallback
  // TODO: Currently catching errors with esprima and eval.
  var js_content = editor_js.getValue();

  if (typeof(esprima) !== 'undefined') {
    try {
      esprima.parse(js_content);
    } catch (e) {
      if (e.lineNumber) {
        markJsErrorAtLine(e.lineNumber);

        // alert(e.description + " at line " + e.lineNumber);
        $('#errorModal p.error-text').text( e.description + " at line " + e.lineNumber );
        $('#errorModal').foundation('reveal', 'open');

        return;
      }
    }
  }

  //Error checking (provide user feedback)
  try {
     console.log("Eval js");
     console.log(js_content);
      //Eval the code to overwrite existing function. Access the iframe by name
    document.getElementById('preview').contentWindow.eval(js_content + '//# sourceURL=user-level.js');
    document.getElementById('preview').contentWindow.remove();
    document.getElementById('preview').contentWindow.p5PlayRebind();
    document.getElementById('preview').contentWindow.eval("new p5();");
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
      
      $('#errorModal p.error-text').text( err );
      $('#errorModal').foundation('reveal', 'open');
      // alert("Make sure you've defined your variable before trying to use it");
  }
}

function insertEditoTooltip(text, line, ch){
  // **** EXAMPLE USE *****:
  // EDITOR: insertTooltip("Lines that begin with '//' are comments and can't be read by the computer.", 4, 0);
  
  // Create a new tooltip
  // Updating the title property of the tooltip is problematic after foundation,
  // so we create a new one every time. We also delete the tooltip when its clicked to close.
  // TOOD: Improve to have a single tooltip?
  $('body').prepend('<span id="editor-tooltip" data-tooltip class="has-tip" title="'+text+'"></span>');
  
  // Widget gets inserted one line below. Use line - 1 to account for this
  editor_js.addWidget({ch: ch , line: line-1}, $('#editor-tooltip')[0], true);

  $(document).foundation('tooltip', 'reflow');
  Foundation.libs.tooltip.showTip( $('#editor-tooltip') );

}
