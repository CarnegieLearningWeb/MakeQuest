// ***** 12. Cambia de dirección *****

// EDITOR: beginReadOnly();
function setupLevel (){
  //Éstas variables definen la dirección de movimiento de la plataforma
  //Por ejemplo, FACE_LEFT hace que la plataforma se mueva hacia la izquierda.
  FACE_RIGHT = 0;
  FACE_LEFT = 180;
  FACE_DOWN = 90;
  FACE_UP = 270;
  // EDITOR: endReadOnly();



  // ***** INSTRUCCIONES *****
  // 
  // La función setSpeed hace que una plataforma,
  // en este caso platform1, se mueva en la dirección deseada
  // Utiliza la variable correcta para que la plataforma
  // se mueva hacia la derecha
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  // EDITOR: markHint('platform1', '.', 'setSpeed', '(', null, ',', {type: 'Identifier', highlight: true});
  platform1.setSpeed( 0.3, FACE_LEFT );

  // EDITOR: beginCodeFold('Haz clic aquí para un EJEMPLO.');
  // // Ejemplo:
  //
  //   platform1.setSpeed(0.5, FACE_DOWN);
  //                      ^        ^   
  //                      |        |   
  //                      |        |   
  //                      |        dirección
  //                      velocidad
  // EDITOR: endCodeFold('Haz clic aquí para un EJEMPLO.');
   
  // EDITOR: beginCodeFold('Haz clic aquí para un RETO.');
  // ***** RETO *****
  // En lugar de usar una variable, utiliza un número entre 0 y 360. 
  // El número representa el ángulo de movimiento de la plataforma
  // ¿Qué número representa un movimiento hacia la derecha?
  // EDITOR: endCodeFold('Haz clic aquí para un RETO.');
  
}





