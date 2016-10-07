PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "!Haz adquirido el V.E.S.T!";
CURRENT_LEVEL_TEXT = "5. Colorea las plataformas";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Cuidado! Las plataformas rojas son una trampa.  Utiliza tu Decodificador de Colores para cambiar las plataformas de color; sólo tienes que cambiar la palabra ‘red’ (rojo) por el nombre de otro color en inglés.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nLos códigos hexadecimales son números que la computadora interpreta como colores. Pero el Decodificador te permite ver el nombre en inglés (‘red’) en lugar del código hexadecimal (#FF0000). ¡Hora de recolorear esas plataformas!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/VEST_Lvl1_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
