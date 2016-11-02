PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "A mysterious watch has appeared!";
CURRENT_LEVEL_TEXT = "8. Change Three Variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nWith your V.E.S.T. at full power you can now store as many different variables as you will ever need.  What a wondrous piece of equipment, I bet the possibilities with variables are endless.  But for now, let’s focus on reaching the goal.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nHead to the code and change all 3 variables to make some stairs to reach the goal.  Don’t forget you can’t stand on red platforms!",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl1_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
