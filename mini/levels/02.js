// ***** 3. Master the coordinate plane *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCTIONS *****
  
  // Move the two lower platforms by changing their 
  // x and y position in the code.
  //
  // Use “Reset” to start each level over
  // Use “Run” to see your changes
  // Use “Show Hints” to get extra help if you need it
  //
  //The x,y coordinates in CreatePlatform() refer to the center of the platform.
  //
  // TIP: The level has a WIDTH of 640 and a HEIGHT of 480
  //
  // ***** ENTER YOUR CODE BELOW *****

  createPlatform(60, 100, 120, 10);
  // EDITOR: endReadOnly();
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', null);
  // EDITOR: readOnlyToken('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true} );
  createPlatform(90, 130, 120, 10);
  createPlatform(120, 160, 120, 10);

  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Click here for an EXAMPLE.');
  // Example:
  //
  //   createPlatform(40, 100, 80, 10);
  //                  ^   ^    ^   ^
  //                  |   |    |   |
  //                  |   |    |   height
  //                  |   |    width
  //                  |   y-position
  //                  x-position
  // EDITOR: endCodeFold();
  // EDITOR: endReadOnly();
}
