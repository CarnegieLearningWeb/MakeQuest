function setupLevel() {
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);

}

function drawLevel() {
  //isPlayerOnPlatform is a truth teller function. But it only knows two words, TRUE or FALSE.function
  //Although they don't sound like much, TRUE and FALSE, together with CONDITIONALS,  hold the key to opening new possibilities
  
  //The following code has been saving your hero all this time. When our hero is on a platform, we stop him from falling down by setting
  //her y-speed to 0
  //But the time to reach for the sky has come. Instead of coming to a halt, we would like our hero to jump using the makePlayerJump

  if ( isPlayerOnPlatform() ) {

    //Call the makePlayerJump function instead of changing stopping the player
    player.velocity.y = 0;

  }

}


