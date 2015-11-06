function setupLevel (){
  // EDITOR: beginReadOnly();
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  platformWidth = 200;
  platformHeight = 20;

  platform1 = createPlatform(0, 150, platformWidth, platformHeight, 'orange');
  platform2 = createPlatform(0, 250, platformWidth, platformHeight, 'blue');
  platform3 = createPlatform(0, 350, platformWidth, platformHeight, 'green');
  // EDITOR: endReadOnly();
  
  // ***** LEVEL SEVEN (SILVER) INSTRUCTIONS *****
  //
  // Update the platforms to move slower so you can reach the goal. 
  // Make platform2 move at a speed of 0.6 units or less
  // and platform3 at a speed of 0.3 units or less. 
  // We already updated the code for platform1 for you
  //
  // ***** ENTER YOUR CODE BELOW *****
  
  platform2.setSpeed( 3.5, FACE_RIGHT );
  platform3.setSpeed( 5, FACE_RIGHT );

  // EDITOR: beginCodeFold('Click here for an example.');
  // Example:
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        direction
  //                      speed
  // EDITOR: endCodeFold();
}