PLAYER_START_X = 20;
PLAYER_START_Y = 420;

GOAL_REACHED_TEXT = "Goal reached. Conditionals unlocked!";
CURRENT_LEVEL_TEXT = "Level 7 Bronze";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;

  platform1 = createPlatform(20, 460, platformWidth, platformHeight, "orange");
}

function base_drawLevel() {
  isPlayerOnPlatform();
}