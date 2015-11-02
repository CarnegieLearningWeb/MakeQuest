PLAYER_START_X = 580;
PLAYER_START_Y = 80;

GOAL_REACHED_TEXT = "Goal reached. Conditionals unlocked!";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}