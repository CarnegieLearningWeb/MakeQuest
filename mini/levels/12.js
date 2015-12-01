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
  
  // ***** INSTRUCTIONS *****
  //
  // Update the speed of platforms 2 and 3 to move slower so you can reach the goal. 
  //
  // ***** ENTER YOUR CODE BELOW *****
  
  platform2.setSpeed( 7, FACE_RIGHT );
  platform3.setSpeed( 10, FACE_RIGHT );

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