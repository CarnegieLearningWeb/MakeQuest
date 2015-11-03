PLAYER_START_X = 100;
PLAYER_START_Y = 400;

GOAL_REACHED_TEXT = "";
CURRENT_LEVEL_TEXT = "The world of code";

function base_setupLevel() {
  platform1 = createPlatform(100, 160, 80, 10, 'blue');
  platform1 = createPlatform(100, 260, 80, 10, 'blue');
  platform2 = createPlatform(150, 460, 130, 10, 'magenta');
  platform3 = createPlatform(350, 460, 20, 10, 'magenta');
  platform4 = createPlatform(450, 460, 20, 10, 'magenta');
  platform5 = createPlatform(500, 360, 40, 10, 'pink');
  platform6 = createPlatform(600, 260, 40, 10, 'pink');
  platform7 = createPlatform(250, 230, 80, 10, 'orange');
  platform8 = createPlatform(350, 130, 80, 10, 'orange');
  platform9 = createPlatform(0, 350, 80, 10, 'brown');
  platform10 = createPlatform(350, 300, 80, 10, 'brown');
  
  
  goal.position.x = 500;
  goal.position.y = 150;
  goal.shapeColor = 'yellow';
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    makePlayerJump(5);
  }
}
