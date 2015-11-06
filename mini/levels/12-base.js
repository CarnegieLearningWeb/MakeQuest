PLAYER_START_X = 20;
PLAYER_START_Y = 80;

GOAL_REACHED_TEXT = "Goal reached.";
CURRENT_LEVEL_TEXT = "Level 7 Silver";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 120;
  platformHeight = 20;
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}