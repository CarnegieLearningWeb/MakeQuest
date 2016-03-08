PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Codo Stick at maximum power!";
CURRENT_LEVEL_TEXT = "15. Learn to Jump";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nYes!  Supernova must be scared.  You are so close to undoing his evil plan. There is just one last thing to master.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nThe Codo Stick unlocked code that lets you bounce on platforms. Edit the code and make yourself jump higher to reach the goal!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
  createPlatform(220, 450, platformWidth, platformHeight, platformColor);
  createPlatform(400, 450, platformWidth, platformHeight, platformColor);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/CodoStick_Lvl2_60.png");
}