function setupLevel (){
  
  // EDITOR: beginReadOnly();
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;
  // EDITOR: endReadOnly();



  // ***** LEVEL SEVEN (BRONZE) INSTRUCTIONS *****
  // 
  // Use platform1’s setSpeed function to move towards the
  // goal
  // Use the variable MOVE_RIGHT instead of FACE_LEFT
  // ***** ENTER YOUR CODE BELOW *****
  // EDITOR: markHint('platform1', '.', 'setSpeed', '(', null, ',', {type: 'Identifier', highlight: true});
  platform1.setSpeed( 0.3, FACE_LEFT );

  // EDITOR: beginCodeFold('Click here for an EXAMPLE.');
  // // Example:
  //
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        direction
  //                      speed
  // EDITOR: endCodeFold('Click here for an EXAMPLE.');
   
  // EDITOR: beginCodeFold('Click here for a CHALLENGE.');
  // ***** CHALLENGE *****
  // Instead of FACE_LEFT, use a number between 0 and 360. 
  // The platform moves in the direction of the angle you give it.
  // Which way is right?
  // EDITOR: endCodeFold('Click here for a CHALLENGE.');
  
}





