PLAYER_START_X = 120;
PLAYER_START_Y = 420;

GOAL_REACHED_TEXT = "Remote Control Instruction Manual Unlocked!";
CURRENT_LEVEL_TEXT = "12. Cambia de dirección";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¿Qué es eso, un control remoto? ¡La plataforma se mueve, pero va en dirección opuesta!",
    },
        {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nMira más de cerca, parece que hay algo escrito. La plataforma debe mirar en la dirección correcta para llegar a la meta.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nHaz que la plataforma se mueva en la dirección correcta para alcanzar el portal."
    }
  ];
}

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);
  
  platformWidth = 120;
  platformHeight = 20;

  platform1 = createPlatform(120, 460, platformWidth, platformHeight, "orange");

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/Remote_Lvl2_60.png");
}

function base_drawLevel() {

  isPlayerOnPlatform();
  keepPlatformsInScene();
}