PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Goal reached. Box (variable) unlocked!";
CURRENT_LEVEL_TEXT = "Level 4";

function base_getLevelDialogue() {
  return [
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "Oh No!  The For-oh-For has detected some tampering in the code."
            +" We are going to have to be even smarter now to reach the remaining"
            +" access points.  Since you figured out how to change platform size"
            +" and teleport them around,",
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "The For-oh-For has changed almost all of the platforms in the world"
            +" to “red” holograms that you will fall through if you try and stand"
            +" on them. We must use our latest power to change the colors of the"
            +" platforms back into solid “green” holograms so we can reach our "
            +" access point!  You can do it!",
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
