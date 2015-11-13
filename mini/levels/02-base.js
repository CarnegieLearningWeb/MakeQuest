PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Size Modification Unlocked!";
CURRENT_LEVEL_TEXT = "Master the coordinate plane";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Welcome to the coordinate plane! With your coordinateVision, you can now see an x and y axis. It’s like the coordinate plane you know from math class, but the starting point (0,0) is in the top left, instead of the bottom left corner. Weird, right?",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Move the platforms so you can reach the goal. To create the platform, the computer needs 4 numbers: (x position, y position, width, height)Go into the code and edit the x and y position for each platform. (Hint: that’s the first 2 numbers!)",
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