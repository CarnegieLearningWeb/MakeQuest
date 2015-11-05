PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Goal reached. Pixel grid unlocked!";
CURRENT_LEVEL_TEXT = "Level 2";

function base_getLevelDialogue() {
  return [
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "OMG… you did it! You really did it!"
            +" It isn’t that I didn’t think you could,"
            +" but so many others tried and failed before you,"
            +" but that doesn’t matter now."
            +" I can feel something special in you."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "The Vile For-oh-For’s code corruption powers have forced"
            +" all platforms and walkways to diminish.  If the people"
            +" can’t go anywhere, they can never rebel against his rule!"
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "With your new “javaScript vision” you can see platforms as"
            +" they are meant to be seen, through numbers."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "The one we are standing on for instance, looks like"
            +" (40, 100, 80, 10)"
            +" The first two numbers are it’s origin, but without more"
            +" powers it is very risky to try and teleport a platform"
            +" to another location."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "Instead let us make the platform longer"
            +" by changing the 80 to a larger number, and see if it can help"
            +" us reach the access point!  Each time you reach an access"
            +" point you return the use of that code to Humanity."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "With everyone understanding how to code,"
            +" The For-oh-For doesn’t stand a chance!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
