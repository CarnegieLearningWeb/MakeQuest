PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Hex Code Unscrambler Unlocked!";
CURRENT_LEVEL_TEXT = "4. Resize the Platforms";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nOh no these platforms are too small! Luckily, the Size Modification power lets you access the third and fourth numbers for each platform. The third number controls how wide a platform is, and the fourth controls how tall it is.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nClick on the code and resize the platforms to reach the goal! \n\nBetter hurry, Supernova won’t avoid you forever..."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/HexUnscrambler_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
