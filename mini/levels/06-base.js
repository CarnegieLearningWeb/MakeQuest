PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = " Congratulations, V.E.S.T. has reached full power!";
CURRENT_LEVEL_TEXT = "7. Change Two Variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wow, your V.E.S.T. gained even more storage capacity.  Now you can change two variables at once, like color and length. Recolor and Resize the platforms by changing the platformWidth and platformColor variables and reach the goal!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Your are one step closer to stopping the 404...",
    },
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/VEST_Lvl3_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
