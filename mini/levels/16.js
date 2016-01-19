// *********** WELCOME TO THE GLOBALORIA SANDBOX **********
// All the code you see here helps create the game you see 
// on the right. We have included comments throughout the 
// code to help you play around and make a game you can 
// call your own.
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
  GOAL_REACHED_TEXT = "\n\nThank you for playing MakeQuest! \nChange this text, this is YOUR world!";
  CURRENT_LEVEL_TEXT = "My world of code";
  STORY_TEXT = [
"\nThe world is restored! \n\nThe power of code is yours to shape the world. Explore the full game code and make it your own!",
"\nAfter creating a world you like, click 'Share your game' to share your creation with your friends! \n\nThanks for coding!"
];

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
  platform5 = createPlatform(450, 460, 20, platformHeight, 'magenta');
  platform6 = createPlatform(500, 390, 40, platformHeight, 'pink');
  platform7 = createPlatform(600, 320, 40, platformHeight, 'pink');
  platform8 = createPlatform(350, 260, 80, platformHeight, 'orange');
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

  // This code loads the image for the background.
  // You can uncomment (remove the '//') from any line to choose a different image
  backgroundImage = loadImage("images/MakeQuestAssets/Background_1.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_2.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_3.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_4.png");
  
  
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