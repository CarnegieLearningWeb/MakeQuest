PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Goal reached. Color code unlocked!";
CURRENT_LEVEL_TEXT = "Level 2";

function base_getLevelDialogue() {
  return [
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "Yes!  You did it!  By making the platforms larger you were"
            +" able to power up your visual sensors and now you can see not"
            +" only javaScript, but also the coordinate plane!"
            +" With this floating grid, we will be able to make more changes"
            +" in the world and reach more distant access points."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "The For-oh-For should be scared… but lets not go after him just yet,"
            +" there is more training to do!"
            +" Remember the platform numbers? (40, 100, 80, 10) "
            +" We know that we can make platforms larger, but now with the grid we"
            +" can begin to change the Origin, or the first two numbers in our code."
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "The first number tells the platform where to start according to the"
            +" numbers going left to right, (or the x-axis), and the second number"
            +" controls location based on the numbers going from top to bottom"
            +" (or an upside-down y-axis).  Rearrange the platforms to reach the"
            +" next access point!"
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

  drawGrid();
}
