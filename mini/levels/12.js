function setupLevel (){
  MOVE_RIGHT = 0;
  MOVE_LEFT = 180;
  MOVE_DOWN = 90;
  MOVE_UP = 270;

  platformWidth = 200;
  platformHeight = 20;

  platform1 = createPlatform(600, 150, platformWidth, platformHeight, 'orange');
  platform2 = createPlatform(600, 250, platformWidth, platformHeight, 'blue');
  platform3 = createPlatform(600, 350, platformWidth, platformHeight, 'green');

  // ***** LEVEL SEVEN (SILVER) INSTRUCTIONS *****
  //
  // // Example:
  //
  //   platform1.setSpeed(0.5, MOVE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        direction
  //                      speed
  //
  //
  // Update the platforms to move to the left. 
  // Make platform1 move at a speed of 1 unit, platform2 at a speed of 0.6 units
  // and platform3 at a speed of 0.3 units. 
  // We already updated the code for platform1 for you
  //
  // ***** ENTER YOUR CODE BELOW *****
  
  platform1.setSpeed( 1, MOVE_LEFT );
}