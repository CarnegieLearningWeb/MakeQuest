PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Goal reached. Images unlocked!";

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel(){
	if ( isPlayerOnPlatform() ) {
    	makePlayerJump();
  	}
}

function makePlayerJump(){
  // Change the force of the jump to reach the goal.
    force = 5;
    player.setSpeed(force, 270);
}