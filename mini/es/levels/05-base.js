PLAYER_START_X = 20;
PLAYER_START_Y = 50;

GOAL_REACHED_TEXT = "¡Felicidades, tu V.E.S.T. es ahora nivel 2!";
CURRENT_LEVEL_TEXT = "6. Utiliza Variables";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Encontraste VEST (Tanque de Variables)!  El VEST te permite ver variables y partes del código que controlan varias cosas a la vez.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nEste VEST nivel 1 te da acceso a una variable llamada platformColor, la cual contiene información sobre el color que se usa en todas las plataformas. Cambia la palabra ‘red’ por otro color y ve como todas las plataformas cambian a la vez."
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Vaya manera de ahorrar tiempo! Cambia el color de las plataformas para alcanzar el portal.",
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/VEST_Lvl2_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
