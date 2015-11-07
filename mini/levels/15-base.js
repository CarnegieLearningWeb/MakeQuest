PLAYER_START_X = 120;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "OH EM GEE!!! You did it!, You did it! now Go kick bad guy butt!";
CURRENT_LEVEL_TEXT = "Level 8 Silver";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "With the Codo Stick at maximum power you can jump into infinity! Haha, ok well maybe that isn’t super useful, but really, you can jump as much as you want, all over any platform, or even one super jump can skip all the platforms.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Use the Codo Stick to reach the final access point!  This final point will give you full control over the code, and allow you to reshape the world in any way, to defeat the Evil For-oh-For.  You are but one mighty jump away!"
    }
  ];
}


function base_setupLevel() {
  goal.position.x = 550;
  goal.position.y = 440;

  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(140, 450, platformWidth, platformHeight, platformColor);
  
}