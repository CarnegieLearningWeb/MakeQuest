PLAYER_START_X = 100;
PLAYER_START_Y = 320;

GOAL_REACHED_TEXT = "Oh...no… 4...0...4…";
CURRENT_LEVEL_TEXT = "1. El Mundo del Código";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nBienvenido a MakeQuest\n\nEste es el Mundo del Código, donde todos cuentan con Visión Programadora para programar el mundo a su alrededor. ¡Hora de empezar a explorar! Utiliza las flechas izquierda y derecha en tu teclado para llegar hasta las estrellas.",
    }
  ];
}

function base_setupLevel() {
  levelCompleteImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
}

function base_drawLevel() {
	
}
