PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Mysterious Tattoo alters appearance!";
CURRENT_LEVEL_TEXT = "Level 6 Silver";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wow, is the tattoo brighter than before?  Maybe you are getting stronger.  Let’s find out.  See if you can build a platform by pure force of code!  It took strong coders to do this before, and that nasty For-oh-For stole their abilities!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "If you look at the code for the platform you are standing on, it will guide you to creating the necessary platforms to reach the access point!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
