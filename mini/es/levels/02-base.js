PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Haz adquirido el Modificador Dimensional!";
CURRENT_LEVEL_TEXT = "3. Domina el plano de coordenadas";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Bienvenido al plano de coordenadas! Gracias a tu Visión Programadora, ahora puedes ver los ejes x e y. El plano de coordenadas es similar al que ya conoces, pero las coordenadas (0,0) se encuentran en la esquina superior izquierda.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "Mueve las plataformas para alcanzar el portal. Para construir una plataforma, la computadora necesitar 4 números: (posicionx, posiciony, anchura, altura). \n\nUtilice el código para editar la posición x e y de cada plataforma. (Tip: ¡Son los primeros dos números!)",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Gloves_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}