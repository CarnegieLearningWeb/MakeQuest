GOAL_REACHED_TEXT = "Congratulations, coordinateVision unlocked!!!";
CURRENT_LEVEL_TEXT = "Secret Communication with Comments";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Oh no, our code is broken! The Vile 404 has corrupted all the world’s code, giving him infinite power and control over reality!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Use the arrows to move your avatar to the goal.  This will power up your visual sensors so you can see JavaScript and the coordinate plane. Then you can start fixing code!"
    },
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "Psst, psst are you there? Can you hear me? Can you read this?  Oh please let my search be over for someone who can finally understand our secret brownComment Language.  ",
    // },
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "If you are getting this, we need you to fight back against the Vile For-oh-For, who has corrupted all the world’s code, giving him infinite power and control over reality."
    // },
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
  goal.position.y = 440;
  goal.shapeColor = 'yellow';
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
