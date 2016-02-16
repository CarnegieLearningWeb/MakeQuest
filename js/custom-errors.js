var CustomErrors = {
  //Main funciton to be called when performing tests
  test: function( code ){
    try{
      tokens = esprima.tokenize( code, {range: true, loc: true} );
    }catch(e){
      // If tokenize files we won't have tokens to loop through. Throw back whatever error we got
      console.log("ERROR TOKENIZING");
      console.log(e);

      var msg = e.description == "Unexpected token ILLEGAL" ? "It looks like you have a typo. Make sure your STRINGS have an opening ' and a closing ' " : e.description;
      this.displayError( e.lineNumber, msg );
      //Break as soon as we find an error to provide errors one at a time
      return true;
    }

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

    return false;
  },

  displayError: function(location, message){
    console.log("Error found");
    markJsErrorAtLine( location );

    $('#errorModal p.error-text').text( message );
    $('#errorModal').foundation('reveal', 'open');
  },

  errorMsgs: {
    color: "You need a valid color name. Make sure you're spelling the name of your color correctly, and that it's surrounded with quotation marks.",
    comma: "Every value or ARGUMENT inside parentheses must be separated by a comma",
    semicolon: "Every line of code or STATEMENT must end with a semicolon ';'",
    parentheses: "You need an opening '(' and a closing ')' parentheses.",
    number: "It looks like you're missing a number between the opening '(' and closing ')' parentheses."
  },

  // Custom functions to handle tailored feedback.
  createPlatform: function(tokens, index){
    // Handle multilpe signatures of createPlatform (4 and 5 arguments)
    var tests = {
        fourArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Numeric', 'Identifier'],               value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'],               value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ],
         fiveArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Numeric', 'Identifier'],               value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'],               value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['String', 'Identifier'],  value: null ,  errorMsg: CustomErrors.errorMsgs.color },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ]
    }

    // Only two levels require the test with 4 arguments
    var test = ( currentLevel > 1 && currentLevel < 4 ) ? tests.fourArgs : tests.fiveArgs;
  
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

        console.log("Output error");
        console.log(err);

        this.displayError( err.token.loc.start.line, err.errMsg );
        
        return true;
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

        
        this.displayError( err.token.loc.start.line, err.errMsg );
        
        return true;
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

        this.displayError( err.token.loc.start.line, err.errMsg );
        
        return true;
      }
    };           
    
    return false;
  },
  setSpeed: function(tokens, index){

    // Handle multilpe signatures of createPlatform (4 and 5 arguments)
    var tests = {
        twoArgs: [
           // We might allow multiple options, such as Identifier or Numeric. Use arrays to account for that
           {type: ['Punctuator'],            value: ['('],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: ['-'],  optional: true, errorMsg: 'Optional value'  },
           {type: ['Numeric', 'Identifier'], value: null,   errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [','],  errorMsg: CustomErrors.errorMsgs.comma  },
           {type: ['Punctuator'],            value: ['-'],  optional: true, errorMsg: 'Optional value'  },
           {type: ['Numeric', 'Identifier'], value: null ,  errorMsg: CustomErrors.errorMsgs.number  },
           {type: ['Punctuator'],            value: [')'],  errorMsg: CustomErrors.errorMsgs.parentheses  },
           {type: ['Punctuator'],            value: [';'],  errorMsg: CustomErrors.errorMsgs.semicolon  },
         ],
    }

    // Determine what function signature we need to compare against
    var test = tests.twoArgs;
  
    for (var j = 0; j < test.length; j++) {
      // Need to add 1 to the passed index to begin checks after the triggering identifier
      var tokenIndex = index + 1 + j;

      var tokenType = tokens[tokenIndex].type;
      var tokenValue = tokens[tokenIndex].value;

      //If the current test value is optional, don't error out
      if(test[j].optional){
        //If the optional test passes, continue to next iteration
        if(test[j].type.indexOf( tokenType ) !== -1){
          continue;
        }

        //Otherwise remove the optional test
        test.splice(j, 1);
      }



      if( test[j].type.indexOf( tokenType ) == -1){
        deb = tokens[tokenIndex];
        console.log("setSpeed error found");
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

        this.displayError( err.token.loc.start.line, err.errMsg );
        
        return true;
      }
    };           
    
    return false;
  },
}


