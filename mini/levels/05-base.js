PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Goal reached. Create your own platforms!";
CURRENT_LEVEL_TEXT = "Level 5 Bronze";

function base_getLevelDialogue() {
  return [
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "Amazing.  You found a Variable Entering Storage Tank or VEST!  This VEST can store enough information that it will allow you to change multiple platforms at the same time!  No longer do you need to manipulate just one object at a time, now you can cause all the platforms to grow with one move!  Oh, if I could only see the frustration on The For-oh-For’s face.  I mean he deserves it for all the frustrations he causes right?  You know what I’m talking about!",
    },
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "Ok, back to understanding your new power!  The VEST allows you to store a number that controls all of your platforms at the same time!  To store a value it must be written like this: \n\nplatformWidth = 80;",
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "Now when you use your javaScript vision, you will see code slightly differently! (see below)  By changing the value “80” in the above code, it will change how long all of your platforms are at the same time!"
          +"\n\nplatform1 = createSprite(40, 100, platformWidth, 10);"
          +"\nplatform2 = createSprite(40, 100, platformWidth, 10);"
          +"\nplatform3 = createSprite(40, 100, platformWidth, 10);",
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
