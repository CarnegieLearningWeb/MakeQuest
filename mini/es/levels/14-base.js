PLAYER_START_X = 20;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "¡Resorte Codificado al máximo poder!";
CURRENT_LEVEL_TEXT = "15. Aprende a saltar";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n!Si! El 404 debe tener miedo.  Estás a punto de deshacer su plan malvado. Sólo tienes una última cosa que dominar.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nEl Resorte Codificado te permite saltar sobre las plataformas. ¡Cambia el código y salta más alto para alcanzar tu meta!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(40, 450, platformWidth, platformHeight, platformColor);
  createPlatform(220, 450, platformWidth, platformHeight, platformColor);
  createPlatform(400, 450, platformWidth, platformHeight, platformColor);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/CodoStick_Lvl2_60.png");
}