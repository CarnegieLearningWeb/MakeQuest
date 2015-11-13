PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, V.E.S.T Discovered!";
CURRENT_LEVEL_TEXT = "Recolor the Platforms";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Careful! You will fall right through red platforms.  Be sure to change them to a different color! With your Hex Code Unscrambler it’s  easy - just change the word ‘red’ to a different color in the platform code.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Hex codes are numbers that computers read as colors. Thankfully we unscrambled it, so we can see the color name (‘red’) and not the hex code (#FF0000). Get these platforms re-colored so you can reach the goal!"
    },
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "",
    // }
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
