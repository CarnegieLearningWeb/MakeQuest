// ***** 11. Write Code with Variables *****

// EDITOR: beginReadOnly();
function setupLevel() {  
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

  // EDITOR: beginReadOnly();
  // The line of code below creates the platform you are standing on
  createPlatform(40, 100, platformWidth, platformHeight, platformColor);
  // EDITOR: endReadOnly();
  // Use the previous line of code as reference to create your own


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
