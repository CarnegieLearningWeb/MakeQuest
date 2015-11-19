var CustomErrors = {
  //Main funciton to be called when performing tests
  test: function(){
    var code = editor_js.getValue();
    tokens = esprima.tokenize( code, {range: true, loc: true} );

    // Find all tokens for which we have a custom error checking function
    for (var i = 0; i < tokens.length; i++) {
      
      // Each custom function should handle errors on its own.
      if( tokens[i].type == "Identifier" && tokens[i].value == "createPlatform" ){
        var err = CustomErrors.createPlatform(tokens, i);
        if( err ){
          //Break as soon as we find an error to provide errors one at a time
          return true;  
         
        }
      }

    };
    
  },

  displayError: function(err){
    debug2 = err;
    markJsErrorAtLine( err.token.loc.start.line );

    $('#errorModal p.error-text').text( err.errMsg );
    $('#errorModal').foundation('reveal', 'open');
  },

  errorMsgs: {
    color: "You need a valid color name. Make sure you're spelling the name of your color correctly, and that it's surrounded with quotation marks.",
    comma: "Every value or ARGUMENT inside parentheses must be separated by a comma",
    semicolon: "Every line of code or STATEMENT must end with a semicolon ';' ",
  },

  // Custom functions to handle tailored feedback.
  createPlatform: function(tokens, index){
    var tests = [
                // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
                 {type: ['Punctuator'],            value: ['('],  errorMsg: ''  },
                 {type: ['Numeric'],               value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
                 {type: ['Numeric'],               value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
                 {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
                 {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
                 {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
                 {type: ['String', 'Identifier'],  value: null ,  errorMsg: CustomErrors.errorMsgs.color },
                 {type: ['Punctuator'],            value: [')'],  errorMsg: ''  },
                 {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
                 ];
  
    for (var j = 0; j < tests.length; j++) {
      // Need to add 1 to the passed index to begin checks after the triggering identifier
      var tokenIndex = index + 1 + j;

      var tokenType = tokens[tokenIndex].type;
      var tokenValue = tokens[tokenIndex].value;

      if( tests[j].type.indexOf( tokenType ) == -1 ){
        // Error found. Display to the user and exit
        


        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: tests[j].errorMsg
        };

        this.displayError( err );
        
        return true;
      }

      // If we need a specific value, check it
      if( tests[j].value && tests[j].value.indexOf( tokenValue ) == -1 ){
        // Error found. Display to the user and exit

        console.log(tokens[tokenIndex]);

        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: tests[j].errorMsg
        };

        this.displayError( err );
        
        return true;
      }
    };           
    
  },
}


