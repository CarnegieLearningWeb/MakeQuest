PLAYER_START_X = 120;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Congratulations, you've defeated 404 and restored the World of Code!\n\nClick continue to create your own version of MakeQuest in the Sandbox.";
CURRENT_LEVEL_TEXT = "16. Save the World of Code";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nHere it is, the doorstep of doom, the threshold of terror, the spinning color wheel of… wait, that’s something else.  We are face to face with 404, defeat him with one mighty jump and release coding back into the world!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUse the Codo Stick to reach the final goal.  This will give you full control over the code, and allow you to reshape the world in any way.\n\nYou are but one mighty jump away!"
    }
  ];
}


function base_setupLevel() {
  goal.position.x = 550;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(140, 450, platformWidth, platformHeight, platformColor);
  
}