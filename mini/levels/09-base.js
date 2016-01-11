PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "The mysterious watch alters appearance!";
CURRENT_LEVEL_TEXT = "10. Write Your Own Platform Code";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wow, is the watch brighter than before?  It’s going to let you create your own platforms! If you look at the code for the platform you are standing on, it will guide you to creating additional platforms.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Type in the platform code and edit it. Make at least two new platforms so you can reach the goal!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl3_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
