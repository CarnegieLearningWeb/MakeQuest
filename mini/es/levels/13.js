// ***** 14. Lluvia de bloques *****

// EDITOR: beginReadOnly();
function setupLevel (){

  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;

  platformHeight = 100;

  platform1 = createPlatform(320, 460, 640, 20, 'orange');
  platform2 = createPlatform(180, 200, 100, platformHeight, 'blue');
  platform3 = createPlatform(320, 200, 100, platformHeight, 'red');
  platform4 = createPlatform(500, 200, 100, platformHeight, 'green');
  // EDITOR: endReadOnly();
  
  // ***** INSTRUCCIONES *****
  //
  // Actualiza las plataformas para que se muevan más lento y poder   
  // alcanzar el portal.    
  // 
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  
  platform2.setSpeed( 4, FACE_DOWN );
  platform3.setSpeed( 3, FACE_DOWN );
  platform4.setSpeed( 4, FACE_DOWN );

  // EDITOR: beginCodeFold('Haz clic aquí para un ejemplo.');
  // Example:
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        dirección
  //                      velocidad
  // EDITOR: endCodeFold();
  
  // EDITOR: beginCodeFold('Haz clic aquí para un RETO.');
  // Cambia la velocidad de sólo dos plataformas
  // EDITOR: endCodeFold();
}