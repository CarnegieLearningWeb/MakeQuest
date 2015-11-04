PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "Goal reached. drawLevel function unlocked!";
CURRENT_LEVEL_TEXT = "Level 6 Bronze";

function base_getLevelDialogue() {
  return [
    {
      character: "heroB",
      image: heroAPic,
      textColor: "white",
      text: "After that last energy surge a tattoo appeared on your arm. Oh my! I never thought we would make it this far, victory always seemed like a dream, but you keep getting stronger!  The tattoo says"
        +"\nplatform1 = createSprite(40, 100, width, height);"
        +"\nplatform1.shapeColor = color;",
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "white",
      text: "This is the ancient lost code of platform creation! You can now create your own platforms.  If you repeat this code but change the number from a 1, to another number such as platform2 or platform3 you can create as many platforms as you need! HAHA, how will The For-oh-For ever stop you now, rebuild the bridge and reach the access point, give the world back its builders!",
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
