PLAYER_START_X = 120;
PLAYER_START_Y = 380;

GOAL_REACHED_TEXT = "¡Felicidades, haz derrotado al Villano 404 y restaurado el orden en el Mundo de Código!\n\nHaz clic aquí para crear tu propia versión de MakeQuest en el Sandbox.";
CURRENT_LEVEL_TEXT = "16. Rescata el Mundo de Código";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nHemos llegado, las puertas del infierno, un abismo infinito, la rueda de colores... momento, esa es otra historia. Ahora estamos frente al Villano 404. ¡Un salto como ningún otro será suficiente para restaurar el código del mundo!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUtiliza tu Resorte Codificado para aplastar al Villano 404. Esto te dará control absoluto sobre el código y podrás modificar el mundo a tu gusto.\n\n¡Ha llegado el momento del salto decisivo!"
    }
  ];
}


function base_setupLevel() {
  goal.position.x = 550;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 80;
  platformHeight = 20;
  
  platformColor = "orange";
  createPlatform(140, 450, platformWidth, platformHeight, platformColor);
  
}