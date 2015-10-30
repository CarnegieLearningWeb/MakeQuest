//***PREV LEVEL SHOULD UNLOCK DRAW FUNCTION****///

//Our platform creation ability has been restricted. The air is too thick in this area (or maybe our computer memory is just running low)
//Fortunately we now have access to drawLevel
 
//We've been able to manipulate the shape and color of objects behind the scenes.
//But once the game starts, we're on our own.
//The setupLevel function that you've been seeing all this time gets called right before the game starts, but only once
//The code below create the platform and tries to move it, but the platform only move once.

//***IS FRAME TOO COMPLICATED A TERM? I LIKED THE FLIPBOOK ANALOGY, BUT I SEEM TO HAVE FAILED WHEN CONVEYING IT LAST TIME****///
//We need to move the platform on every frame of our game.

//If you move too fast, your hero won't have time to react and will fall off

//***WE NEED TO UPDATE base.js TO RESET PLATFORM POSITION AS WELL WHEN THE PLAYER FALLS OFF, ALSO NEW PLATFORMS SHOULD BE DISABLED OR IGNORED****//
//***IS IT WRONG TO LIMIT THEIR POWERS THIS WAY?****//

function setupLevel (){
  platformWidth = 80;
  platformHeight = 20;
  platformColor = "orange";
  platform1 = createPlatform(20, 450, platformWidth, platformHeight, platformColor);
  
  //This code is run only once. This means the platform moves from x=40 to x=50 and stays there.
  platform1.position.x = platform1.position.x + 30;
}

function drawLevel (){
  //This code happens every frame. Make the platform move every frame so you can reach the goal
}