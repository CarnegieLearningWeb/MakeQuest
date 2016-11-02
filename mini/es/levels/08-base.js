PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡El reloj misterioso brilla con mayor intensidad!";
CURRENT_LEVEL_TEXT = "9. Programa 2 plataformas";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nDespués del último destello de luz, un reloj apareció en tu brazo. ¡El reloj te permite escribir código para crear más plataformas!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "El reloj tiene escrito:\n\n"
            +"createPlatform(x,y,width,height,color);\n"
            +"ejemplo:\n"
            +"createPlatform(100, 200, 80, 20, ‘blue);"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¿Sabes lo que esto significa? ¡Es el antiguo código de construcción! Ahora puedes construir tus propias plataformas.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUtiliza tu nuevo poder para reconstruir el camino hasta el portal con tus propias plataformas. (TIP: cambia esos ceros)",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Watch_Lvl2_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
