// *********** WELCOME TO THE GLOBALORIA SANDBOX **********
// All the code you see here helps create the game you see 
// on the right. We have included comments throughout the 
// code to help you play around and make a game you can 
// call your own.
// 
// Should you get stuck at any point, you can always use 
// the Reset button to get back to the game's original state.
// 
// Don't worry if you don't understand everything you see.
// Try to find lines of code you understand and feel
// comfortable with and play around with those.
// 
// NOTE: We have made some lines of code uneditable so that your
// game doesn't accidentally break. This lines of code
// are required for the game engine to work properly.
// ********************************************************

// Inside the setupLevel function is where we create platforms
// and other things we will use in our game.

// EDITOR: beginReadOnly();
function setupLevel() {
// EDITOR: endReadOnly();

  // Change the text between quotation marks "" 
  // to make it your own.
  GOAL_REACHED_TEXT = "Change this text, this is YOUR world!";
  CURRENT_LEVEL_TEXT = "My world of code";

  // These variables are used to tell the platforms which 
  // way to move.
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  // These two numbers control where the hero appears on the 
  // screen when the game starts. It us also the place where
  // she will reappear if she falls off a platform.
  PLAYER_START_X = 20;
  PLAYER_START_Y = 100;

  // This code loads the image for your player.
  // You can uncomment (remove the '//') from any line to choose a different image
  playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Hero_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Hero_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/PolarBear_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/PolarBear_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Astronaut_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Astronaut_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/GraceHopper_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/GraceHopper_P_60.png");

  player.addImage(playerImage);

  // This VARIABLE controls the height of all platforms on screen.
  // You can add more variables and use them to modify the
  // existing platforms, or create new platforms.
  platformHeight = 10;

  // These code creates all the platforms in the game
  // Some platforms are stored in VARIABLES like 'platform1'
  // so that we can modify them later by name
  // 
  // You can change the numbers and the color to update your platforms
  // Red platforms are broken and the hero 
  platform1 = createPlatform(30, 400, 80, platformHeight, 'brown');
  platform2 = createPlatform(180, 320, 80, platformHeight, 'blue');
  platform3 = createPlatform(150, 460, 130, platformHeight, 'magenta');
  platform4 = createPlatform(350, 460, 20, platformHeight, 'magenta');
  createPlatform(450, 460, 20, platformHeight, 'magenta');
  createPlatform(500, 390, 40, platformHeight, 'pink');
  createPlatform(600, 320, 40, platformHeight, 'pink');
  createPlatform(350, 260, 80, platformHeight, 'orange');
  // Add more platforms here or change the ones above
  

  // When the game starts, platform1 will start moving down
  platform1.setSpeed( 2, FACE_DOWN );

  // When the game starts, platforms 2 to 4 will start moving right
  platform2.setSpeed( 0.5, FACE_RIGHT );
  platform3.setSpeed( 0.5, FACE_RIGHT );
  platform4.setSpeed( 0.5, FACE_RIGHT );

  // These two numbers control the position of your goal
  goal.position.x = 500;
  goal.position.y = 150;

  // This code loads the image for your goal.
  // You can uncomment (remove the '//') from any line to choose a different image
  goalImage = loadImage("images/star.png");
  // goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");

  // Choose an enemy to defeat as your goal
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Alien_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Alien_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Moth_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Moth_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/OilBarrel_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/OilBarrel_P_60.png");

  goal.addImage(goalImage);
// EDITOR: beginReadOnly();
}
// EDITOR: endReadOnly();

// The drawLevel function is where we DRAW our game.
// Everything inside drawLevel happens dozens of times
// per second, or every frame. This is how we create animations
// like the moving platforms and the jumping
// EDITOR: beginReadOnly();
function drawLevel() {
// EDITOR: endReadOnly();
// This code tells the hero to jump when she lands on a platform
  if (isPlayerOnPlatform()) {

    // The number inside this function tells your character how 
    // high to jump
    makePlayerJump(8);
  }

  // This code makes platform1 move up and down between the
  // y-coordinates of 200 and 420
  // 
  // Inside setupLevel() above, we tell the platform to move
  // down when the game starts. Here we update the movement
  // direction after platform1 goes past 420 in the y direction.
  if( platform1.position.y > 420 ){
    platform1.setSpeed( 2, FACE_UP );
  }
  if( platform1.position.y < 200 ){

    // FACE_UP and FACE_DOWN are angles in degrees that
    // tell the platform which way to move. You can use
    // any number between 0 and 360 instead
    platform1.setSpeed( 2, FACE_DOWN );
  }

  // Move platforms 2-4 sideways
  // PLATFORM2
  if( platform2.position.x > 230 ){
    platform2.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform2.position.x < 130 ){
    platform2.setSpeed( 0.5, FACE_RIGHT );
  }
  // PLATFORM3
  if( platform3.position.x > 200 ){
    platform3.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform3.position.x < 100 ){
    platform3.setSpeed( 0.5, FACE_RIGHT );
  }
  // PLATFORM4
  if( platform4.position.x > 400 ){
    platform4.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform4.position.x < 300 ){
    platform4.setSpeed( 0.5, FACE_RIGHT );
  }
  

// EDITOR: beginReadOnly();
}
// EDITOR: endReadOnly();

// The getLevelDialogue function draws the game's story
// when the game starts and every time a player clicks
// on the Story button
// EDITOR: beginReadOnly();
function getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
// EDITOR: endReadOnly();
      // You can change the color for the text as well as
      // the message your players will see.
      textColor: "white",
      // To have text start in a new line use \n
      // Notice how we skip one line at the beginning (\n),
      // and two lines later on (\n\n)
      text: "\nThe world is restored! \n\nThe power of code is yours to shape the world. Explore the full game code and make it your own!"
// EDITOR: beginReadOnly();
    },
    {
      character: "heroA",
      image: heroAPic,
// EDITOR: endReadOnly();
      textColor: "white",
      text: "\nAfter creating a world you like, click 'Share your game' to share your creation with your friends! \n\nThanks for coding!"
// EDITOR: beginReadOnly();
    }
  ];
// EDITOR: endReadOnly();
}
