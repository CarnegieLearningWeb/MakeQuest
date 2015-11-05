PLAYER_START_X = 120;
PLAYER_START_Y = 420;

GOAL_REACHED_TEXT = "Goal reached. Conditionals unlocked!";
CURRENT_LEVEL_TEXT = "Level 7 Bronze";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 120;
  platformHeight = 20;

  platform1 = createPlatform(120, 460, platformWidth, platformHeight, "orange");
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}