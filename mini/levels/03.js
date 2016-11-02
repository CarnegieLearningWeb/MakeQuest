// ***** 4. Resize the Platforms *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCTIONS *****
  
  // Make the platforms bigger by changing their width
  // and height in the code.
  //
  // The third number controls width, the last number 
  // controls height.
  //
  // TIP: Your x and y position will be at the center 
  // of the platform. 
  //
  // ***** ENTER YOUR CODE BELOW *****
// EDITOR: endReadOnly();

// EDITOR: markHint('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true});
// EDITOR: readOnlyToken('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',');
// EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 10);
// EDITOR: endReadOnly();

  createPlatform(160, 180, 40, 10);
  createPlatform(460, 280, 40, 10);

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


