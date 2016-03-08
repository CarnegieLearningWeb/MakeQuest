PLAYER_START_X = 100;
PLAYER_START_Y = 320;

GOAL_REACHED_TEXT = "Oh...no… Supernova!";
CURRENT_LEVEL_TEXT = "1. The Galaxy of Code";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nWelcome to MakeQuest Science\n\nEnter the Galaxy of Code, where everyone has codeVision and can use the power of code to effect the world around them. Start exploring! Click on the scene and use the arrow keys to move.",
    }
  ];
}

function base_setupLevel() {
  levelCompleteImage = loadImage("images/MakeQuestAssets/Characters60PX/Alien_F_60.png");
}

function base_drawLevel() {
	
}
