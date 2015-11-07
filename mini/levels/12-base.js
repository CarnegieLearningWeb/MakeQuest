PLAYER_START_X = 20;
PLAYER_START_Y = 80;

GOAL_REACHED_TEXT = "Congratulations, Speedometer Advanced Settings Unlocked!";
CURRENT_LEVEL_TEXT = "Level 7 Silver";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Ok, it seems you can use that to move other platforms, not just the one you are standing on.  Good to know.  It says here you can also change how fast the platform is moving.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "This is amazing! With the lost powers of code you are doing all sorts of amazing things, but the best part is that with each access point, everyone else in the world can also learn to code!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Why would the For-oh-For not want people to code? Oh well, a question for another time.  See if you can slow down the platforms and reach the next access point!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  platformWidth = 120;
  platformHeight = 20;
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}