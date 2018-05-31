PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Felicidades, tu V.E.S.T. ha alcanzado su máximo poder!";
CURRENT_LEVEL_TEXT = "7. Cambia dos variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nIncreíble, tu V.E.S.T. tiene más espacio para variables. Ahora puedes modificar dos variables al mismo tiempo, por ejemplo las variables de color y anchura. Utiliza las variables platformWidth y platformColor para cambiar las plataformas de tamaño y color.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nEstás cada vez más cerca de detener al Villano 404",
    },
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/VEST_Lvl3_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
