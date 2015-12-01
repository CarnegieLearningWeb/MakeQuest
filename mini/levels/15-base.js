PLAYER_START_X = 120;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "OH EM GEE!!! You did it! You are truly among the Globalorians!";
CURRENT_LEVEL_TEXT = "Save the World of Code";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Here it is, the doorstep of doom, the threshold of terror, the spinning color wheel of… what that’s something else.  We are at the 404’s dungeon entrance, let’s reach the vault and release coding back into the world!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Use the Codo Stick to reach the final goal.  This will give you full control over the code, and allow you to reshape the world in any way.\n\nYou are but one mighty jump away!"
    }
  ];
}


function base_setupLevel() {
  goal.position.x = 550;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(140, 450, platformWidth, platformHeight, platformColor);
  
}