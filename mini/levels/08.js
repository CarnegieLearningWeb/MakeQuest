function setupLevel() {
  // ***** INSTRUCTIONS *****
  //
  // Fix the values for the last two platforms.
  //
  // Refer to the first platform code for help.
  //
  // ***** ENTER YOUR CODE BELOW *****
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'String', highlight: true});
  // EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 20, 'orange');
  // EDITOR: endReadOnly();
  createPlatform(400, 60, 40, 40, 'red');
  createPlatform(60, 400, 40, 40, 'red');

  // EDITOR: beginCodeFold('Click here for an example.');
  // ******See Example Below******:
  //
  //   createPlatform(40, 100, 100, 30, 'magenta');
  //                  ^   ^    ^    ^    ^                     
  //                  |   |    |    |    color                     
  //                  |   |    |    height                                      
  //                  |   |    width
  //                  |   y-position
  //                  x-position
  // EDITOR: endCodeFold();
}