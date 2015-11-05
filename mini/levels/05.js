function setupLevel() {
  // ***** LEVEL FIVE INSTRUCTIONS *****
  //
  // Update the color of the VARIABLE below to change all of the
  // platform colors.
  //
  // ***** ENTER YOUR CODE BELOW *****

  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  platformColor = 'red';

  // EDITOR: beginReadOnly();
  // Leave this code alone
  createPlatform(40, 100, 80, 10, 'green');
  createPlatform(160, 200, 80, 10, platformColor);
  createPlatform(250, 300, 80, 10, platformColor);
  createPlatform(400, 370, 80, 10, platformColor);
  createPlatform(510, 400, 80, 10, platformColor);
  // EDITOR: endReadOnly();
}
