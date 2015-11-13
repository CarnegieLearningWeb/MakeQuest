function setupLevel() {
  PLAYER_START_X = 100;
  PLAYER_START_Y = 400;
  GOAL_REACHED_TEXT = "Change this text, this is YOUR world!";
  CURRENT_LEVEL_TEXT = "My world of code";

  platformHeight = 10;

  playerImage = loadImage("images/heroD.png");
  player.addImage(playerImage);

  createPlatform(180, 320, 80, platformHeight, 'blue');
  createPlatform(150, 460, 130, platformHeight, 'magenta');
  createPlatform(350, 460, 20, platformHeight, 'magenta');
  createPlatform(450, 460, 20, platformHeight, 'magenta');
  createPlatform(500, 390, 40, platformHeight, 'pink');
  createPlatform(600, 320, 40, platformHeight, 'pink');
  createPlatform(350, 260, 80, platformHeight, 'orange');
  createPlatform(30, 400, 80, platformHeight, 'brown');
  
  goal.position.x = 500;
  goal.position.y = 150;
  goalImage = loadImage("images/star.png");
  goal.addImage(goalImage);
// EDITOR: beginReadOnly();
}
// EDITOR: endReadOnly();

// EDITOR: beginReadOnly();
function drawLevel() {
// EDITOR: endReadOnly();
  if (isPlayerOnPlatform()) {
    makePlayerJump(8);
  }
}

function getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nThe world is restored! \n\nThe power of code is yours to shape the world. Explore the full game code and make it your own!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nThanks for coding!",
    }
  ];
}
