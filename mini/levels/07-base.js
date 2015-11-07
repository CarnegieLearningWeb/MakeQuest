PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, a Mysterious Tattoo has appeared!";
CURRENT_LEVEL_TEXT = "Level 5 Gold";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "With your V.E.S.T. at full power, you can now store as many different variables as you will ever need.  What a wondrous piece of equipment, I bet the possibilities with variables are endless.  But for now, let’s focus on reaching the access point.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "This time I wonder if by changing height and width, you could form proper stairs to reach the access point.  Don’t forget you can’t walk stand on red platforms!",
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
