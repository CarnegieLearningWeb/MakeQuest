function setupLevel(){
  // EDITOR: beginReadOnly();
  // ***** INSTRUCTIONS *****
  //
  // Update the number in the platformWidth VARIABLE to change
  // the width of many platforms.
  //
  // Update the color of the platformColor VARIABLE below to
  // change all of the platform colors.
  //
  // ***** ENTER YOUR CODE BELOW *****
  // EDITOR: endReadOnly();
  // EDITOR: markHint('platformWidth', '=', {type: 'Numeric', highlight: true});
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  platformWidth = 40;
  platformColor = 'red';

  // EDITOR: beginReadOnly();
  createPlatform(30, 100, platformWidth, 10, 'green');
  // EDITOR: endReadOnly();
  createPlatform(190, 200, platformWidth, 10, platformColor);
  createPlatform(290, 300, platformWidth, 10, platformColor);
  createPlatform(390, 400, platformWidth, 10, platformColor);
}
