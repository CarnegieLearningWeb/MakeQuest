PLAYER_START_X = 100;
PLAYER_START_Y = 400;

GOAL_REACHED_TEXT = "";
CURRENT_LEVEL_TEXT = "The world of code";

var img;

function base_getLevelDialogue() {
  return null;
}

function base_setupLevel() {
  playerImage = loadImage("images/heroD.png");
  player.addImage(playerImage);

  platformImage1 = loadImage("images/fence.png");
  
  platform1 = createPlatform(100, 160, 80, 10, 'blue');
  platform2 = createPlatform(100, 260, 80, 10, 'blue');
  platform3 = createPlatform(150, 460, 130, 10, 'magenta');
  platform4 = createPlatform(350, 460, 20, 10, 'magenta');
  platform5 = createPlatform(450, 460, 20, 10, 'magenta');
  platform6 = createPlatform(500, 360, 40, 10, 'pink');
  platform7 = createPlatform(600, 260, 40, 10, 'pink');
  platform8 = createPlatform(250, 230, 80, 10, 'orange');
  platform9 = createPlatform(350, 130, 80, 10, 'orange');
  platform10 = createPlatform(0, 350, 80, 10, 'brown');
  platform11 = createPlatform(350, 300, 80, 10, 'brown');

  platform1.addImage(platformImage1);
  platform2.addImage(platformImage1);
  platform3.addImage(platformImage1);
  platform4.addImage(platformImage1);
  platform5.addImage(platformImage1);
  platform6.addImage(platformImage1);
  platform7.addImage(platformImage1);
  platform8.addImage(platformImage1);
  platform9.addImage(platformImage1);
  platform10.addImage(platformImage1);
  platform11.addImage(platformImage1);
  
  
  goal.position.x = 500;
  goal.position.y = 150;
  goalImage = loadImage("images/star.png");
  goal.addImage(goalImage);
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    makePlayerJump(3);
  }
}
