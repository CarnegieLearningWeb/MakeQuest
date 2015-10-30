function setupLevel() {
  //Variables. Store your values. You can reuse these value.
  platformWidth = 30;
  platformColor = "green";
  
  //Create a platform
  createPlatform(20, 440, platformWidth, 10, platformColor);
}

function drawLevel() {
  if (isPlayerOnPlatform()) {
    // Change the force of the jump to reach the goal.
    force = 5;
    player.setSpeed(force, 270);
  }
}
