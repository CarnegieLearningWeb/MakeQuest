// ***** 11. Escribe código con variables *****

// EDITOR: beginReadOnly();
function setupLevel() {  
// EDITOR: endReadOnly();
  // ***** INSTRUCCIONES *****
  //
  // Construye todas las plataformas que sean necesarias para alcanzar el portal.
  //
  // Utiliza VARIABLES para controlar el tamaño y color de tus plataformas. 
  // 
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  platformWidth = 80;
  platformHeight = 20;
  platformColor = "orange";

  // EDITOR: beginReadOnly();
  // La siguiente línea de código construye la plataforma sobre la cual estás parado
  createPlatform(40, 100, platformWidth, platformHeight, platformColor);
  // EDITOR: endReadOnly();


  // EDITOR: beginCodeFold('Haz clic aquí para ver un ejemplo.');
  // ******EJEMPLO******:
  //
  // createPlatform(40, 100, platformWidth, platformHeight, platformColor);
  //                  ^   ^    ^              ^               ^                     
  //                  |   |    |              |               color                     
  //                  |   |    |              altura                                      
  //                  |   |    anchura
  //                  |   posición y
  //                  posición x
  // EDITOR: endCodeFold();
  
}
