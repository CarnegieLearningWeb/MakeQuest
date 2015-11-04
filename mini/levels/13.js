function setupLevel (){

  MOVE_RIGHT = 0;
  MOVE_LEFT = 180;
  MOVE_DOWN = 90;
  MOVE_UP = 270;

  platformWidth = 80;
  platformHeight = 10;

  createPlatform(20, 150, platformWidth, platformHeight, 'green');
  
  platform1 = createPlatform(20, 150, platformWidth, platformHeight, 'orange');
  speedPlatform1 = 0;



}

function drawLevel (){

  // ***** LEVEL SEVEN (GOLD) INSTRUCTIONS *****
  // 
  // Just as you've been calling FUNCTIONS such as createPlatform and makePlayerJump,
  // the game autormatically calls setupLevel and drawLevel, which is where you've been writing your code.
  // 
  // Code inside drawLevel runs and runs and runs (runs eveyr frame?)
  // By updating the speed in here, you increase the speed so you can go faster and faster
  // 
  // Update the value of speedPlatform1 to increase by 0.005 units instead of 0.001
  // 
  // ***** ENTER YOUR CODE BELOW *****
  speedPlatform1 = speedPlatform1 + 0.001;

  platform1.setSpeed( speedPlatform1, MOVE_RIGHT );
  
  


  // **** CHALLENGE ADVANCED ****
  // The setupLevel function runs at the beginning of the game, but only once.
  // The drawLevel function runs every frame.
  // What happens if you move line 27 to line 11? 
}




