PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡El reloj misterioso cambia de apariencia!";
CURRENT_LEVEL_TEXT = "10. Programa tus propias plataformas";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nEl reloj brilla con mayor intensidad. Ahora puedes escribir el código para crear plataformas tú solo. Puedes estudiar el código de la plataforma sobre la cual estás parado para crear plataformas adicionales.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nPrograma al menos dos plataformas nuevas para alcanzar el portal."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl3_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
