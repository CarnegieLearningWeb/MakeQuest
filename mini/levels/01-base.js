GOAL_REACHED_TEXT = "CoordinateVision unlocked!!!";
CURRENT_LEVEL_TEXT = "2. Secret Communication with Comments";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nOh no, our code is broken! \n\nThe Vile 404 has corrupted all the world’s code, giving him infinite power and control over reality!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nYou’re the only one with access to the code now, so we need you to fix it. I’ll coach you through it!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUse the arrows to move your avatar to the goal.  This will power up your visual sensors so you can see JavaScript and the coordinate plane.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Read the left side of the screen and follow the “secret” instructions there!"
    }
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "Reach the yellow access point using clicking on the world and using the arrow guidance system to move left or right.  Access points complete the level and upgrade your hero abilities!",
    // }
  ];
}

function base_setupLevel() {
  var platform1 = createPlatform(WIDTH/2, 460, 640, 10);
  platform1.shapeColor = 'green';
  goal.position.x = 600;
  goal.position.y = 420;
  goal.shapeColor = 'yellow';

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/GriddedGlasses_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}