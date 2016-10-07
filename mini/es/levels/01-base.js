GOAL_REACHED_TEXT = "¡Haz adquirido Visión Programadora!";
CURRENT_LEVEL_TEXT = "2. Comunicación Secreta con Comentarios";

function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\n¡Ay no, nuestro código ya no funciona!\n\n¡El Villano 404 alteró el código del mundo para obtener poderes ilimitados y controlar nuestra realidad!",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nEres la única persona capaz de reprogramar el mundo. ¡Yo te ayudare durante tu recorrido!"
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "\nUtiliza las flechas para mover a tu avatar hasta el portal. Esto amplificará tu sentido de la vista para que puedas ver el código JavaScript y el plano de coordenadas.",
    },
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "¡Lee las instructions del lado izquierdo de la pantalla y sigue las instrucciones “secretas”!"
    }
    // {
    //   character: "heroA",
    //   image: heroAPic,
    //   textColor: "white",
    //   text: "Reach the yellow access point using clicking on the world and using the arrow guidance system to move left or right.  Access points complete the level and upgrade your hero abilities!",
    // }
  ];
}

function base_setupLevel() {
  var platform1 = createPlatform(WIDTH/2, 460, 640, 10);
  platform1.shapeColor = 'green';
  goal.position.x = 600;
  goal.position.y = 420;
  goal.shapeColor = 'yellow';

  goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");
  goal.addImage(goalImage);

  levelCompleteImage = loadImage("images/MakeQuestAssets/Items60PX/GriddedGlasses_60.png");
}

function base_drawLevel() {
  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}