function setupLevel(){
  // ***** LEVEL FIVE (SILVER) INSTRUCTIONS *****
  //
  // Update the number in the platformWidth VARIABLE to change
  // the width of many platforms.
  //
  // Update the color of the platformColor VARIABLE below to
  // change all of the platform colors.
  //
  // ***** ENTER YOUR CODE BELOW *****

  platformWidth = 40;
  platformColor = 'red';

  // EDITOR: beginReadOnly();
  // Leave this code alone
  createPlatform(30, 100, platformWidth, 10, 'green');
  createPlatform(190, 200, platformWidth, 10, platformColor);
  createPlatform(290, 300, platformWidth, 10, platformColor);
  createPlatform(390, 400, platformWidth, 10, platformColor);
  // EDITOR: endReadOnly();
}
