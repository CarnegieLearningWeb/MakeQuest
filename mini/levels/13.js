function setupLevel (){
  // EDITOR: beginReadOnly();
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  platformHeight = 100;

  platform1 = createPlatform(320, 460, 640, 20, 'orange');
  platform2 = createPlatform(180, 200, 100, platformHeight, 'blue');
  platform3 = createPlatform(320, 200, 100, platformHeight, 'red');
  platform4 = createPlatform(500, 200, 100, platformHeight, 'green');
  // EDITOR: endReadOnly();
  
  // ***** LEVEL SEVEN (SILVER) INSTRUCTIONS *****
  //
  // Update the platforms to move slower so you can reach the goal. 
  //
  // ***** ENTER YOUR CODE BELOW *****
  
  platform2.setSpeed( 4, FACE_DOWN );
  platform3.setSpeed( 3, FACE_DOWN );
  platform4.setSpeed( 4, FACE_DOWN );

  // EDITOR: beginCodeFold('Click here for an EXAMPLE.');
  // Example:
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        direction
  //                      speed
  // EDITOR: endCodeFold();
  
  // EDITOR: beginCodeFold('Click here for a CHALLENGE.');
  // Change the speed of just two platforms
  // EDITOR: endCodeFold();
}