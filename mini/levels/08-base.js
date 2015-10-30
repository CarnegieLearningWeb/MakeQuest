PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Goal reached. Images unlocked!";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
	
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
  createPlatform(220, 450, platformWidth, platformHeight, platformColor);
  createPlatform(400, 450, platformWidth, platformHeight, platformColor);

}

function makePlayerJump(){
  // Change the force of the jump to reach the goal.
    force = 5;
    player.setSpeed(force, 270);
}