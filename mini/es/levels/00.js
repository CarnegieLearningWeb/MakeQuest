// ***** 1. El Mundo del Código *****

// ***** INSTRUCCIONES *****
// Haz clic en el juego del lado derecho de la pantalla
// para comenzar a jugar y descubrir el poder del código
// 
// A continuación se encuentra el código que da vida
// al juego en el lado derecho de la pantalla.  
// Escribir código, o programar, es la manera de dar
// instrucciones a la computadora para que haga algo.
// Las líneas de código que comienzan con dos diagonales ( // )
// se conocen como “comentarios
// Únicamente los humanos pueden leer comentarios;
// para la computadora son invisibles.
// EDITOR: beginReadOnly();

function setupLevel() {
  platformHeight = 10;

  createPlatform(180, 240, 80, platformHeight, 'blue');
  createPlatform(150, 380, 130, platformHeight, 'magenta');
  createPlatform(350, 460, 20, platformHeight, 'magenta');
  createPlatform(450, 460, 20, platformHeight, 'magenta');
  createPlatform(500, 390, 40, platformHeight, 'pink');
  createPlatform(600, 320, 40, platformHeight, 'pink');
  createPlatform(350, 260, 80, platformHeight, 'orange');
  createPlatform(15, 320, 80, platformHeight, 'yellow');
  
  goal.position.x = 500;
  goal.position.y = 150;
  goalImage = loadImage("images/star.png");
  goal.addImage(goalImage);
}

function drawLevel() {
  if (isPlayerOnPlatform()) {
    makePlayerJump(8);
  }
// EDITOR: endReadOnly();
}
