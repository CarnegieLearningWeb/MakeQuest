PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Haz adquirido el Decodificador de Colores!";
CURRENT_LEVEL_TEXT = "4. Cambia las dimensiones de las plataformas";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡No puede ser, estas plataformas son demasiado pequeñas! Pero el Modificador Dimensional te permite cambiar los últimos dos números de cada platforma. El tercer número controla el ancho de la plataforma, y el cuarto número controla su altura.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Haz clic en el editor de código y cambia el tamaño de las plataformas para alcanzar el portal! \n¡No hay tiempo que perder, el Villano 404 no puede estar lejos!"
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/HexUnscrambler_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
