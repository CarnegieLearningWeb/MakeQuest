PLAYER_START_X = 20;
PLAYER_START_Y = 130;

GOAL_REACHED_TEXT = "Goal reached.";
CURRENT_LEVEL_TEXT = "Level 7 Gold";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  isPlayerOnPlatform();
}