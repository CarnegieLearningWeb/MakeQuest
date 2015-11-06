PLAYER_START_X = 120;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Goal reached. Images unlocked!";
CURRENT_LEVEL_TEXT = "Level 8 Silver";

function base_setupLevel() {
  goal.position.x = 550;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(140, 450, platformWidth, platformHeight, platformColor);
  
}