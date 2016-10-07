// ***** 13. Plataformas a baja velocidad *****

// EDITOR: beginReadOnly();
function setupLevel (){

  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  platformWidth = 200;
  platformHeight = 20;

  platform1 = createPlatform(0, 150, platformWidth, platformHeight, 'orange');
  platform2 = createPlatform(0, 250, platformWidth, platformHeight, 'blue');
  platform3 = createPlatform(0, 350, platformWidth, platformHeight, 'green');
  // EDITOR: endReadOnly();
  
  // ***** INSTRUCCIONES *****
  //
  // Cambia la velocidade de las plataformas 2 y 3 para que se muevan más lento y así alcanzar el portal. 
  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  
  platform2.setSpeed( 7, FACE_RIGHT );
  platform3.setSpeed( 10, FACE_RIGHT );

  // EDITOR: beginCodeFold('Haz clic aquí para un ejemplo.');
  // Example:
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        dirección
  //                      velocidad
  // EDITOR: endCodeFold();
}