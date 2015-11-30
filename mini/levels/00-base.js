PLAYER_START_X = 100;
PLAYER_START_Y = 400;

GOAL_REACHED_TEXT = "Oh...no… 4...0...4…";
CURRENT_LEVEL_TEXT = "The world of code";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Welcome to MakeQuest\nEnter the World of Code, where everyone has codeVision and can use the power of code to effect the world around them. Start exploring! Click on the scene and use the arrow keys to move.",
    }
  ];
}

function base_setupLevel() {
  levelCompleteImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
}

function base_drawLevel() {
	
}
