PLAYER_START_X = 20;
PLAYER_START_Y = 130;

GOAL_REACHED_TEXT = "Goal reached.";
CURRENT_LEVEL_TEXT = "Level 7 Gold";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {

  for (var i = 0; i < platforms.length; i++) {
    
    pCol = color(platforms[i].shapeColor);
    if (!(red(pCol) == 255.0 && green(pCol) == 0 && blue(pCol) == 0)) {
    	player.collide(platforms[i]);
    }
  }
  


  isPlayerOnPlatform();
  keepPlatformsInScene();
}