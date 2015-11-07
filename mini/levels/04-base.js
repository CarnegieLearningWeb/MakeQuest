PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, V.E.S.T Discovered!";
CURRENT_LEVEL_TEXT = "Level 4";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Oh No!  The For-oh-For has detected some tampering in the code.  We are going to have to be even smarter now to reach the remaining access points.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "The For-oh-For has changed the path to the access point into red! Blast! Everyone knows that you will fall through if you try and stand on them."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wait, I almost forgot… the Hex Unscrambler and Converter or H.U.E. code we discovered! While we can not walk on red platforms, we can change them into other colors that will allow us to reach the next access point. Get to it!",
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
