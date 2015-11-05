function setupLevel(){
  // ***** LEVEL FIVE (GOLD) INSTRUCTIONS *****
  //
  // Update the number in the platformWidth VARIABLE to change
  // the width of many platforms.
  //
  // Update the number in the platformHeight VARIABLE to change
  // the height of many platforms.
  //
  // Update the color of the platformColor VARIABLE below to
  // change all of the platform colors.
  //
  // ***** ENTER YOUR CODE BELOW *****
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  // EDITOR: markHint('platformWidth', '=', {type: 'Numeric', highlight: true});
  // EDITOR: markHint('platformHeight', '=', {type: 'Numeric', highlight: true});
  platformColor = 'red';
  platformWidth = 40;
  platformHeight = 10;

  // EDITOR: beginReadOnly();
  createPlatform(30, 100, platformWidth, platformHeight, 'green');
  // EDITOR: endReadOnly();
  createPlatform(190, 200, platformWidth, platformHeight, platformColor);
  createPlatform(290, 300, platformWidth, platformHeight, platformColor);
  createPlatform(390, 400, platformWidth, platformHeight, platformColor);
}
