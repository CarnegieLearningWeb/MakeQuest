var CustomErrors = {
  test: function(){
    var code = editor_js.getValue();
    tokens = esprima.tokenize( code, {range: true, loc: true} );

    for (var i = 0; i < tokens.length; i++) {
      
      if( tokens[i].type == "Identifier" && tokens[i].value == "createPlatform" ){
        var err = CustomErrors.createPlatform(tokens, i);
        if( err ){
          
          markJsErrorAtLine( err.token.loc.start.line );

          $('#errorModal p.error-text').text( err.errMsg );
          $('#errorModal').foundation('reveal', 'open');
        }
      }

    };
    
  },
  createPlatform: function(tokens, index){
    var tests = [
                // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
                 {type: ['Punctuator'],           value: ['('],  errorMsg: ''  },
                 {type: ['Numeric'],              value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],           value: [','],  errorMsg: ''  },
                 {type: ['Numeric'],              value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],           value: [','],  errorMsg: ''  },
                 {type: ['Numeric'],              value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],           value: [','],  errorMsg: ''  },
                 {type: ['Numeric'],              value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],           value: [','],  errorMsg: ''  },
                 {type: ['String', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.color },
                 {type: ['Punctuator'],           value: [')'],  errorMsg: ''  },
                 ];
  
    for (var j = 0; j < tests.length; j++) {
      // Need to add 1 to the passed index to begin checks after the triggering identifier
      var tokenIndex = index + 1 + j;

      var tokenType = tokens[tokenIndex].type;
      var tokenValue = tokens[tokenIndex].value;

      if( tests[j].type.indexOf( tokenType ) == -1 ){
        console.log( tokenIndex )
        return {token: tokens[tokenIndex], errMsg: tests[j].errorMsg}
      }

      // If we need a specific value, check it
      if( tests[j].value && tests[j].value.indexOf( tokenValue ) == -1 ){
        
      }
    };           
    
  },
  errorMsgs: {
    color: "You need a valid color name. Make sure you're spelling the name of your color correctly, and that it's surrounded with quotation marks."
  }
}


