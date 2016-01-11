PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Remote Control Acquired!";
CURRENT_LEVEL_TEXT = "11. Write Code with Variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "The watch changed again? It must think you are ready! Now the platforms will behave according to the variables. You will have to use the coordinate planes if you want to become a platform creation master.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Create as many platforms as you need to reach the goal. I bet you could even make a staircase if you wanted..."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Remote_Lvl1_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
