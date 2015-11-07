PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = " Congratulations, V.E.S.T. has reached full power!";
CURRENT_LEVEL_TEXT = "Level 5 Silver";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: " Wow, your V.E.S.T. gained even more storage capacity.  I bet you could use it to change two things at once, like color and length.  Let’s try it out while we try and reach the next access point!",
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
