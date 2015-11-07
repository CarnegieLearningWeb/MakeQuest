PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, V.E.S.T. has reached Level 2!";
CURRENT_LEVEL_TEXT = "Level 5 Bronze";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Amazing.  You found a Variable Entering Storage Tank or V.E.S.T.!  This V.E.S.T. can store enough information that it will allow you to change multiple platforms at the same time!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "We are in luck, it would be exhausting to change the color of every platform in the world one at a time right? With the V.E.S.T. we can see Variables, or parts of code that can control many things at once."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "For example, we have 4 red platforms, by changing ‘red’ in platformColor = ‘red’; to another color, it will take effect for all platforms using platformColor!  Talk about useful!  Let’s change these platforms and reach the access point!",
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
