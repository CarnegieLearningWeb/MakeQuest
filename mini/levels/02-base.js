PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Dimensional Manipulation Unlocked!";
CURRENT_LEVEL_TEXT = "Level 2";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Yes!  You did it!  By reaching the access point, you were able to power up your visual sensors and now you can see not only javaScript, but also the coordinate plane!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "With this floating grid, we will be able to make more changes in the world and reach more distant access points.  The For-oh-For should be scared… but we need you to gain more powers if you are going to win for good!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Every platform in the world of code looks like this (40, 100, 80, 10)   The first 2 numbers control where the platforms are located.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "The first number uses the top numbers (x-axis), and the second number uses the left numbers (y-axis).  Let’s move the platforms closer to the access point!"
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