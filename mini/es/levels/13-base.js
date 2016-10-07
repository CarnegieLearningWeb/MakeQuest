PLAYER_START_X = 20;
PLAYER_START_Y = 280;

GOAL_REACHED_TEXT = "¡Haz adquirido el Resorte Codificado!";
CURRENT_LEVEL_TEXT = "14. Lluvia de bloques";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¿Ésta cosa tiene opciones avanzadas? Esto será divertido. ¡Parece que el Villano 404 nos dejó una trampa!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUtiliza el control remoto para hacer que los bloques caigan más lento... ¿o quizá exista otra forma?"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 420;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/CodoStick_Lvl1_60.png");
}

function base_drawLevel() {
  isPlayerOnPlatform();
  keepPlatformsInScene();
}