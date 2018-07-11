// *********** BIENVENIDO AL SANDBOX DE Carnegie Learning **********
// Todo el código que vez aquí sirve para crear el juego que vez
// a tu derecha. Hemos incluido una serie de comentarios
// para que juegues con código y programes tu propio juego.
// 
// No te preocupes por entender absolutamente todo.
// Busca la líneas de código que mejor entiendas y empieza
// por jugar con ellas.
// 
// TIP: Algunas líneas de código aparecen en itálicas 
// y no las puedes cambiar. Estas líneas son esenciales
// para que tu juego funcione.
// ********************************************************

// La función setupLevel es donde se construyen las plataformas
// y otros objetos para el juego.

// EDITOR: beginReadOnly();
function setupLevel() {
// EDITOR: endReadOnly();

  // Cambia el texto entre comillas "" 
  // La computadora imprime todo el texto en una sola línea
  // escribe '\n' para continuar tu texto en la siguiente línea.
  GOAL_REACHED_TEXT = "\n\n¡Gracias por jugar MakeQuest! \nCambia este texto, este es TU mundo.";
  CURRENT_LEVEL_TEXT = "Mi mundo de código";
  STORY_TEXT = [
"\n¡El mundo ha sido restaurado! \n\nEl poder del código es tuyo para cambiar el mundo. Explora el código y hazlo tuyo.",
"\n¡Después de crear tu mundo, haz clic en 'Guardar tu juego' para compartir tu creación con tus amigos! \n\n¡Gracias por programar!"
];

  // Estas variables se usan para mover
  // las plataformas en la dirección correspondiente
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  // Estas variables controlan el punto de partida de 
  // tu heroe.
  PLAYER_START_X = 20;
  PLAYER_START_Y = 100;

  // Este código representa la imagen de tu heroe.
  // Puedes quitar las diagonales de cualquier línea
  // para habilitar el código y cambiar la imagen
  // *Recuerda que la computadora ignora los comentarios
  playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Hero_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Hero_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/PolarBear_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/PolarBear_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Astronaut_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/Astronaut_P_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/GraceHopper_F_60.png");
  // playerImage = loadImage("images/MakeQuestAssets/Characters60PX/GraceHopper_P_60.png");

  player.addImage(playerImage);

  // Esta variable controla la altura de todas las plataformas 
  // en la pantalla.
  // Puedes crear más variables y usarlas para modificar
  // las plataformas existentes, o crear nuevas.
  platformHeight = 10;

  // Este código construye todas las plataformas en el juego code creates all the platforms in the game
  // Las variables platform1, platform2, etc, guardan una referencia a las plataformas
  // Más adelante puedes usar esas variables para modificar las plataformas
  // 
  // Puedes cambiar los números y el color de tus plataformas
  // Recuerda que las plataformas rojas ('red'), son una trampa 
  platform1 = createPlatform(30, 400, 80, platformHeight, 'brown');
  platform2 = createPlatform(180, 320, 80, platformHeight, 'blue');
  platform3 = createPlatform(150, 460, 130, platformHeight, 'magenta');
  platform4 = createPlatform(350, 460, 20, platformHeight, 'magenta');
  platform5 = createPlatform(450, 460, 20, platformHeight, 'magenta');
  platform6 = createPlatform(500, 390, 40, platformHeight, 'pink');
  platform7 = createPlatform(600, 320, 40, platformHeight, 'pink');
  platform8 = createPlatform(350, 260, 80, platformHeight, 'orange');
  // Agrega más plataformas a continuación o edita las anteriores
  

  // Cuando el juego empiece, la platform1 se moverá hacia abajo
  platform1.setSpeed( 2, FACE_DOWN );

  // Cuando el juego empiece, las plataformas 2-4 se moverán hacia la derecha
  platform2.setSpeed( 0.5, FACE_RIGHT );
  platform3.setSpeed( 0.5, FACE_RIGHT );
  platform4.setSpeed( 0.5, FACE_RIGHT );

  // Estos dos números controlan la posición de la meta (goal)
  goal.position.x = 500;
  goal.position.y = 150;

  // Este código define la imagen de tu meta
  // Puedes quitar las diagonales ('//') de cualquier línea para cambiar de imagen
  goalImage = loadImage("images/star.png");
  // goalImage = loadImage("images/MakeQuestAssets/Portal_60.png");

  // Tu objetivo puede ser un enemigo
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/404_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Alien_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Alien_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Moth_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/Moth_P_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/OilBarrel_F_60.png");
  // goalImage = loadImage("images/MakeQuestAssets/Characters60PX/OilBarrel_P_60.png");

  goal.addImage(goalImage);

  // Este código define la imagen de fondo
  // Puedes quitar las diagonales ('//') de cualquier línea para cambiar de imagen
  backgroundImage = loadImage("images/MakeQuestAssets/Background_1.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_2.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_3.png");
  // backgroundImage = loadImage("images/MakeQuestAssets/Background_4.png");
  
  // Esta variable define el color de los fuegos artificiales cuando el jugador llega a la meta
  fireworksColor = 'blue';
  
// EDITOR: beginReadOnly();
}
// EDITOR: endReadOnly();

// La función drawLevel se ejecuta muchas veces por segundo
// Aquí es donde se produce el movimeitno del juego. Acciones como
// saltar o mover las plataformas ocurren aquí
// EDITOR: beginReadOnly();
function drawLevel() {
// EDITOR: endReadOnly();
// Este código hace que el jugador salte sobre las plataformas
  if (isPlayerOnPlatform()) {

    // El número en esta función define que tan alto saltar
    makePlayerJump(8);
  }

  // Este código hace que la plataforma se mueva hacia arriba y hacia abajo
  // entre las posiciones 200 y 420 en el eje y
  // 
  // Dentro de la función setupLevel(), decidimos que la plataforma
  // se movería hacia abajo cuando el juego comienza. Aquí cambiamos
  // la dirección de movimiento cuando la plataforma 1 llega a la posición 420
  // sobre el eje y
  if( platform1.position.y > 420 ){
    platform1.setSpeed( 2, FACE_UP );
  }
  if( platform1.position.y < 200 ){

    // El valor de las variables FACE_UP y FACE_DOWN
    // es el ángulo sobre el cual se mueve la plataforma.
    // También puedes usar cualquier número entre 0 y 360
    platform1.setSpeed( 2, FACE_DOWN );
  }

  // Este código mueve las plataformas 2-4 de manera horizontal
  // PLATFORMA 2
  if( platform2.position.x > 230 ){
    platform2.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform2.position.x < 130 ){
    platform2.setSpeed( 0.5, FACE_RIGHT );
  }
  // PLATFORMA 3
  if( platform3.position.x > 200 ){
    platform3.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform3.position.x < 100 ){
    platform3.setSpeed( 0.5, FACE_RIGHT );
  }
  // PLATFORMA 4
  if( platform4.position.x > 400 ){
    platform4.setSpeed( 0.5, FACE_LEFT );
  }
  if( platform4.position.x < 300 ){
    platform4.setSpeed( 0.5, FACE_RIGHT );
  }
  

// EDITOR: beginReadOnly();
}
// EDITOR: endReadOnly();