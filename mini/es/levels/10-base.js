PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Haz adquirido el control remoto!";
CURRENT_LEVEL_TEXT = "11. Escribe código con variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¿El reloj cambia de nuevo? ¡Debe pensar que estás listo! Ahora las plataformas se comportan según las variables. Tendrás que usar el plano de coordenadas para dominar el arte de crear plataformas.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nConstruye todas las plataformas que sean necesarias para alcanzar el portal. Supongo que podrías construir una escalera si quisieras..."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Remote_Lvl1_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
