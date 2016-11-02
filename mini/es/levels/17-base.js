PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Goal reached. Images unlocked!";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "What is that thing?  It says Speedometer on the side, I have never seen one before…*rumble* *rumble* Oh, Hey! Whatever it’s doing, make it stop.  Make it stop.  Whew, that was close. Do you suppose that Speedometer made the ground move?",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Look Closer, it seems to have a something written on it.  You need to face it in RIGHT direction to make this platform move towards the next access point.  Maybe that will uncover more about it."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
}

function base_drawLevel(){
  if ( isPlayerOnPlatform() ) {
    
      makePlayerJump( 0 );

    }
}

function makePlayerJump(force){
    player.setSpeed(force, 270);
}