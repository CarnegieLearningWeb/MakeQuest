PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Hex Code Unscrambler Unlocked!";
CURRENT_LEVEL_TEXT = "Resize the Platforms";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Oh no these platforms are too small! Luckily, the Size Modification power lets you access the third and fourth numbers for each platform. The third number controls how wide a platform is, and the fourth controls how tall it is.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Click on the code and resize the platforms to reach the goal! (Don’t forget you need to click in the code area to change it, and click Run to see the changes in the world of code.)"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Better hurry, the 404 won’t avoid you forever...",
    },
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "Did you know each time you reach an access point you return the use of that code to the world?  With everyone understanding how to code, The For-oh-For doesn’t stand a chance!"
    // }
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
