GOAL_REACHED_TEXT = "JavaScript unlocked!";
CURRENT_LEVEL_TEXT = "Level 1";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      character: "heroB",
      image: heroBPic,
      textColor: "red",
      text: "Quod rem, libero quam ab nam et inventore nulla blanditiis"
            +" repellat consequuntur!"
            +" Libero tenetur a, voluptates sunt sapiente qui autem"
            +" neque facilis."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Goodbye",
    }
  ];
}

function base_setupLevel() {
  var platform1 = createPlatform(WIDTH/2, 460, 640, 10);
  platform1.shapeColor = 'green';
  goal.position.x = 600;
  goal.position.y = 440;
  goal.shapeColor = 'yellow';
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
