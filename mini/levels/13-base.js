PLAYER_START_X = 20;
PLAYER_START_Y = 280;

GOAL_REACHED_TEXT = "Congratulations, a Codo Stick Acquired!";
CURRENT_LEVEL_TEXT = "Level 7 Gold";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Oh Boy, this thing has advanced settings?!?  You are going to enjoy reaching this next one.  It looks like The For-oh-For set a trap for you, the ceiling is crashing down upon you! How will you ever reach the next point?",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Wait, I know, try using the Speedometer to make the blocks fall slower. Maybe you can rush past them if you have just a little more time.  Maybe there is another way…"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  isPlayerOnPlatform();
  keepPlatformsInScene();
}