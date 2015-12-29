function setupLevel() {
  // ***** INSTRUCTIONS *****
  //
  // Fix the values for the last two platforms.
  //
  // Refer to the first platform code for help.
  //
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'String', highlight: true});
  // EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 20, 'orange');
  // EDITOR: endReadOnly();
  // ***** ENTER YOUR CODE BELOW *****
  // The code below creates two new platforms.
  // But the platforms have a height and width of 0,
  // so you can't see them.
  // Update the size, position and color of the 
  // platforms to reach your goal.
  createPlatform(100, 100, 0, 0, 'red');
  createPlatform(200, 200, 0, 0, 'red');

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