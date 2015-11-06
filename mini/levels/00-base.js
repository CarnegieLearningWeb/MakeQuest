PLAYER_START_X = 100;
PLAYER_START_Y = 400;

GOAL_REACHED_TEXT = "";
CURRENT_LEVEL_TEXT = "The world of code";

function base_getLevelDialogue() {
  return null;
}

function base_setupLevel() {
  playerImage = loadImage("images/heroD.png");
  player.addImage(playerImage);

  platformImage1 = loadImage("images/fence.png");
  
  createPlatform(180, 320, 80, 10, 'blue');
  createPlatform(150, 460, 130, 10, 'magenta');
  createPlatform(350, 460, 20, 10, 'magenta');
  createPlatform(450, 460, 20, 10, 'magenta');
  createPlatform(500, 390, 40, 10, 'pink');
  createPlatform(600, 320, 40, 10, 'pink');
  // createPlatform(500, 320, 40, 10, 'pink');
  createPlatform(350, 260, 80, 10, 'orange');
  createPlatform(30, 400, 80, 10, 'brown');
  
  
  goal.position.x = 500;
  goal.position.y = 150;
  goalImage = loadImage("images/star.png");
  goal.addImage(goalImage);
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    makePlayerJump(4);
  }
}
