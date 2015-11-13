function setupLevel() {
  // EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 20, "orange");
  // EDITOR: endReadOnly();
  
  // ***** INSTRUCTIONS *****
  //
  // Add as many platforms as you need to reach the goal.
  //
  // Use the VARIABLES to control the size and color of
  // all your platforms. 
  // 
  // ***** ENTER YOUR CODE BELOW *****
  
  platformWidth = 80;
  platformHeight = 20;
  platformColor = "orange";

  // EDITOR: beginCodeFold('Click here for an example.');
  // ******See Example Below******:
  //
  //   createPlatform(40, 100, platformWidth, platformHeight, platformColor);
  //                  ^   ^    ^              ^               ^                     
  //                  |   |    |              |               color                     
  //                  |   |    |              height                                      
  //                  |   |    width
  //                  |   y-position
  //                  x-position
  // EDITOR: endCodeFold();
  
}
