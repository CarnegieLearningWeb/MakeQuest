function setupLevel() {
  PLAYER_START_X = 100;
  PLAYER_START_Y = 400;
  GOAL_REACHED_TEXT = "Change this text, this is YOUR world!";

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
