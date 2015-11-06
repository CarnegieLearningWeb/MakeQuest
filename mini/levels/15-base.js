PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Goal reached. Images unlocked!";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
  
}