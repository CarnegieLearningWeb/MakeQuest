var CustomErrors = {
  //Main funciton to be called when performing tests
  test: function( code ){
    tokens = esprima.tokenize( code, {range: true, loc: true} );

    // Find all tokens for which we have a custom error checking function
    for (var i = 0; i < tokens.length; i++) {
      // Each custom function should handle errors on its own.
      if( tokens[i].type == "Identifier" && Object.keys(CustomErrors).indexOf( tokens[i].value ) > -1 ){
        console.log(tokens[i].value);
        var err = CustomErrors[tokens[i].value](tokens, i);
        if( err ){
           //Break as soon as we find an error to provide errors one at a time
          return err;    
        }
      }
    };
  },

  displayError: function(err){
    markJsErrorAtLine( err.token.loc.start.line );

    $('#errorModal p.error-text').text( err.errMsg );
    $('#errorModal').foundation('reveal', 'open');
  },

  errorMsgs: {
    color: "You need a valid color name. Make sure you're spelling the name of your color correctly, and that it's surrounded with quotation marks.",
    comma: "Every value or ARGUMENT inside parentheses must be separated by a comma",
    semicolon: "Every line of code or STATEMENT must end with a semicolon ';'",
    parentheses: "You need an opening '(' and a closing ')' parentheses.",
    number: "You need to write a number between the opening '(' and closing ')' parentheses.",
  },

  // Custom functions to handle tailored feedback.
  createPlatform: function(tokens, index){
    // Handle multilpe signatures of createPlatform (4 and 5 arguments)
    var tests = {
        fourArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Numeric'],               value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric'],               value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ],
         fiveArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Numeric'],               value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric'],               value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: ''  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['String', 'Identifier'],  value: null ,  errorMsg: CustomErrors.errorMsgs.color },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ]
    }

    // Use current level to determine what function signature we need to compare against
    var test = ( currentLevel < 4 ) ? tests.fourArgs : tests.fiveArgs;

  
    for (var j = 0; j < test.length; j++) {
      // Need to add 1 to the passed index to begin checks after the triggering identifier
      var tokenIndex = index + 1 + j;

      var tokenType = tokens[tokenIndex].type;
      var tokenValue = tokens[tokenIndex].value;

      if( test[j].type.indexOf( tokenType ) == -1 ){
        console.log("Err A");
        console.log(tokenType);
        console.log(test[j]);
        console.log(test);
        console.log(tokens[tokenIndex]);
        // Error found. Display to the user and exit
        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: test[j].errorMsg
        };
        return err;
      }

      // If we need a specific value, check it
      if( test[j].value && test[j].value.indexOf( tokenValue ) == -1 ){
        console.log("Err B");
        // Error found. Display to the user and exit
        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: test[j].errorMsg
        };
        return err;
      }
    };           
    
    return false;
  },
  makePlayerJump: function(tokens, index){
    // Handle multilpe signatures of createPlatform (4 and 5 arguments)
    var tests = {
        oneArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ],
    }

    // Determine what function signature we need to compare against
    var test = tests.oneArgs;
  
    for (var j = 0; j < test.length; j++) {
      // Need to add 1 to the passed index to begin checks after the triggering identifier
      var tokenIndex = index + 1 + j;

      var tokenType = tokens[tokenIndex].type;
      var tokenValue = tokens[tokenIndex].value;

      if( test[j].type.indexOf( tokenType ) == -1 ){
        console.log("Err A");
        console.log(tokenType);
        console.log(test[j]);
        console.log(test);
        console.log(tokens[tokenIndex]);
        // Error found. Display to the user and exit
        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: test[j].errorMsg
        };
        return err;
      }

      // If we need a specific value, check it
      if( test[j].value && test[j].value.indexOf( tokenValue ) == -1 ){
        console.log("Err B");
        // Error found. Display to the user and exit
        var err = {
          // Use original index to highlight the correct line
          token: tokens[index], 
          errMsg: test[j].errorMsg
        };
        return err;
      }
    };           
    
    return false;
  },
}


