PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Congratulations, Speedometer Acquired!";
CURRENT_LEVEL_TEXT = "Level 6 Gold";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "I think the tattoo is recognizing the V.E.S.T.!  It has changed to allow you to create platforms using existing variables!  This means you can make copies of platforms that already exist, and put them where ever you want, as many as you want!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "For-oh-For has got to be running scared now.  You’re like the people who studied at the ancient Globaloria site!  They built the greatest cities in the World of Code, and would use the access points to share knowledge with others."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Create as many platforms as you need to reach the next point, I bet you could even make a staircase if you wanted!"
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
