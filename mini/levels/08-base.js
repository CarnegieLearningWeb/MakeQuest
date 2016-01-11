PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "The mysterious watch glows brighter!";
CURRENT_LEVEL_TEXT = "9. Make 2 platforms";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "After that last energy surge a watch appeared on your arm. It has platform creation code!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "It says:\n\n"
            +"createPlatform(x,y,width,height,color);\n"
            +"example:\n"
            +"createPlatform(100, 200, 80, 20, ‘blue);"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Do you know what this is?!? This is the ancient lost code of platform creation! You can now create your own platforms.  Look for parts of the code where platforms may have once existed. You can bring them back!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Quickly rebuild the path with your own platforms to reach the goal. (Hint: change the zeros and give those platforms some value.)",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl2_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
