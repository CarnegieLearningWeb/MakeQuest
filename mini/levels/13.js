function setupLevel (){

  platformWidth = 80;
  platformHeight = 10;

  platform1 = createPlatform(20, 150, platformWidth, platformHeight, 'orange');
  
  speedPlatform1 = 0;

  speedPlatform1 = speedPlatform1 + 0.05;
}

function drawLevel (){

  // ***** LEVEL SEVEN (GOLD) INSTRUCTIONS *****
  // 
  // Code inside drawLevel runs and runs and runs (runs eveyr frame?)
  //
  // Update the speed of platform1 here,
  // inside drawLevel to reach the goal faster
  // Update the value of speedPlatform1 to be 0.05 units
  // 
  // ***** ENTER YOUR CODE BELOW *****
  speedPlatform1 = speedPlatform1;

  platform1.setSpeed( speedPlatform1, 0 );
  
  
  // **** CHALLENGE ****
  // Why is updating speedPlatform1 on line 13 not working?
}




