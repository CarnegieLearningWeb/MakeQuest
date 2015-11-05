// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** LEVEL THREE INSTRUCTIONS *****
  //
  // The first two numbers control the position, the last
  // two numbers control the size.
  //
  // TIP: The level has a WIDTH of 640 and a HEIGHT of 480
  //
  // Change the size of the platforms below so you can reach the goal.
  //
  // ***** ENTER YOUR CODE BELOW *****
// EDITOR: endReadOnly();

// EDITOR: markHint('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true});
// EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 10);
// EDITOR: endReadOnly();

  createPlatform(260, 180, 80, 10);
  createPlatform(460, 280, 80, 10);

// EDITOR: beginReadOnly();
// EDITOR: beginCodeFold('Click here for an example.');
  // ******See Example Below******:
  //
  //   createPlatform(40, 100, 80, 10);
  //                  ^   ^    ^   ^
  //                  |   |    |   |
  //                  |   |    |   height
  //                  |   |    width
  //                  |   y-position
  //                  x-position
  // EDITOR: endCodeFold();
}
// EDITOR: endReadOnly();


