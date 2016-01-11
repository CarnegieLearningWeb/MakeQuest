PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, V.E.S.T. has reached Level 2!";
CURRENT_LEVEL_TEXT = "6. Use Variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "You found a VEST (Variable-Entering Storage Tank)!  With the VEST you can see variables, or parts of the code that control many things at once.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "This Level 1 VEST unlocked a variable called platformColor -- it holds color information for all the platforms you can edit.  Change the word ‘red’ to something else and watch how all the platforms change at one time."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Talk about a time saver!  Change these platforms now and reach the goal.",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/VEST_Lvl2_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
