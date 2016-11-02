PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Haz descubierto un reloj misterioso!";
CURRENT_LEVEL_TEXT = "8. Cambia tres variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nAhora que tu V.E.S.T. ha alcanzado su máximo poder puedes usar todas las variables que necesites. Esto es genial, las posibilidades son infinitas con todas estas variables a tu disposición. Pero por el momento, hay que concentrarse en llegar al portal.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nCambia las tres variables para construir unas escaleras que te lleven hasta el portal. ¡No olvides que las plataformas rojas son una trampa!",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl1_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
