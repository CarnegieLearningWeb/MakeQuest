function setupLevel (){
  platformWidth = 200;
  platformHeight = 20;

  platform1 = createPlatform(600, 250, platformWidth, platformHeight, “orange”);
  platform2 = createPlatform(600, 350, platformWidth, platformHeight, “blue”);
  platform3 = createPlatform(600, 450, platformWidth, platformHeight, “green”);
  
}

function drawLevel (){
  //Update the platforms to move to the left on every frame. Make platform1 move at a speed of 1 unit, platform2 at a speed of 2 units and platform3 at a speed of 3 units. We already updated the code for platform1
  platform1.position.x = platform1.position.x - 1;
  
}



