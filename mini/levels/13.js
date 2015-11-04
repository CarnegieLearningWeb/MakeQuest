function setupLevel (){

  platformWidth = 80;
  platformHeight = 10;

  createPlatform(20, 150, platformWidth, platformHeight, 'orange');
  
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
  // Update the value of speedPlatform1 to increase by 0.05 units instead of 0.01
  // 
  // ***** ENTER YOUR CODE BELOW *****
  speedPlatform1 = speedPlatform1;

  platform1.setSpeed( speedPlatform1, 0.01 );
  
  


  // **** CHALLENGE ADVANCED ****
  // The setupLevel function runs at the beginning of the game, but only once.
  // The drawLevel function runs every frame.
  // What happens if you move line 27 to line 11? 
}




