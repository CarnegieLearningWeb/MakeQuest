PLAYER_START_X = 20;
PLAYER_START_Y = 80;

GOAL_REACHED_TEXT = "¡Haz adquirido el control remoto con opciones avanzadas!";
CURRENT_LEVEL_TEXT = "13. Plataformas a baja velocidad";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡El manual de instrucciones ha sido muy útil! Contiene información sobre como cambiar la velocidad de las plataformas. \nUtiliza una número más pequeño para llegar hasta el portal antes de que sea demasiado tarde.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Haz llegado muy lejos y restaurado gran parte del daño causado por el Villano 404, la victoria está cerca!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 120;
  platformHeight = 20;

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Remote_Lvl3_60.png");
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}