PLAYER_START_X = 120;
PLAYER_START_Y = 420;

GOAL_REACHED_TEXT = "Congratulations, Remote Control Instruction Manual Unlocked!";
CURRENT_LEVEL_TEXT = "Change Direction";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nWhat is that thing, a remote control? Whoa, the platform is moving, but the wrong way!",
    },
        {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nLook closer, it seems to have something written on it.  You need to face the RIGHT direction to make this platform move towards the next goal.  Maybe that will uncover more about it.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nMake the platform FACE the correct direction to reach the goal."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 120;
  platformHeight = 20;

  platform1 = createPlatform(120, 460, platformWidth, platformHeight, "orange");

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Remote_Lvl2_60.png");
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}