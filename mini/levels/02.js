function setupLevel() {
  // EDITOR: beginReadOnly();
  // ***** LEVEL TWO INSTRUCTIONS *****
  //
  // The first two numbers control the position, the last
  // two numbers control the size.
  //
  // TIP: The level has a WIDTH of 640 and a HEIGHT of 480
  //
  // Change the position of the platforms below so you can reach the goal.
  //
  // ***** ENTER YOUR CODE BELOW *****

  createPlatform(60, 100, 120, 10);
  // EDITOR: endReadOnly();
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', null);
  // EDITOR: readOnlyToken('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true} );
  createPlatform(90, 130, 120, 10);
  createPlatform(120, 160, 120, 10);

  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Click here for an example.');
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
