PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "Congratulations, Codo Stick at maximum power!";
CURRENT_LEVEL_TEXT = "Level 8 Bronze";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Yes!  The For-oh-For must be scared!  We have only two more access points to reach before we attempt to breach his vault and recover ALL of the lost code!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "There is only one last thing to master.  The user of the Codo stick can use it to bounce on platforms.  This was used in ancient times before there was code to create and move platforms.  Such ancient code will surely best For-oh-For!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "The bouncing Codo Stick is just the boost you need to finish your training and go for the Final assault to defeat The For-oh-For.  Reach the access point, and the final power up!",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
  createPlatform(220, 450, platformWidth, platformHeight, platformColor);
  createPlatform(400, 450, platformWidth, platformHeight, platformColor);
}