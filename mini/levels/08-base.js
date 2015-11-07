PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, the Mysterious Tattoo glows brighter!";
CURRENT_LEVEL_TEXT = "Level 6 Bronze";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "After that last energy surge a tattoo appeared on your arm. Oh my! I never thought we would make it this far, victory always seemed like a dream, but you keep getting stronger!  The tattoo seems to be code.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "It says:\n"
            +"createPlatform(x,y,width,height,color);\n"
            +"example:\n"
            +"createPlatform(0, 0, 0, 0, ‘red’);"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Do you know what this is?!? This is the ancient lost code of platform creation! You can now create your own platforms.  Look for parts of the code where platforms may have once existed.  You can bring them back!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Quickly rebuild the bridge and reach the access point, give the world back its builders!",
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
