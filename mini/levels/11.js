function setupLevel (){
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  // EDITOR: beginReadOnly();
  MOVE_RIGHT = 0;
  MOVE_LEFT = 180;
  MOVE_DOWN = 90;
  MOVE_UP = 270;
  // EDITOR: endReadOnly();



  // ***** LEVEL SEVEN (BRONZE) INSTRUCTIONS *****
  // 
  // Use platform1’s setSpeed function to move towards the
  // goal
  
  // ***** ENTER YOUR CODE BELOW *****
  
  platform1.setSpeed( 0.3, MOVE_LEFT );

  // EDITOR: beginCodeFold('Click here for an EXAMPLE.');
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
  // Use the variable MOVE_RIGHT instead of MOVE_LEFT
  // EDITOR: endCodeFold('Click here for an EXAMPLE.');
   
  // EDITOR: beginCodeFold('Click here for a CHALLENGE.');
  // ***** CHALLENGE *****
  // Instead of MOVE_LEFT, use a number between 0 and 360. 
  // The platform moves in the direction of the angle you give it.
  // Which way is right?
  // EDITOR: endCodeFold('Click here for a CHALLENGE.');
  
}





