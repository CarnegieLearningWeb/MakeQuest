PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Hex Unscrambler and Converter Unlocked!";
CURRENT_LEVEL_TEXT = "Level 3";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "OMG… you did it! You really did it!  It isn’t that I didn’t think you could, but so many others tried and failed before you, but that doesn’t matter now.  I can feel something special in you.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "The Vile For-oh-For’s code corruption powers have forced all platforms and walkways to diminish.  If the people can’t go anywhere, they can never rebel against his rule!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Dimensional Manipulation has given you access to a platforms third and fourth numbers!  The third number controls how long a platform is, and the fourth controls how tall it is.  Make the platforms large enough to reach the goal!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Did you know each time you reach an access point you return the use of that code to the world?  With everyone understanding how to code, The For-oh-For doesn’t stand a chance!"
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
