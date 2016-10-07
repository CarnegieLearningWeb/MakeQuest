// ***** 6. Utiliza Variables *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCCIONES *****
  //
  // Actualiza el color de la siguiente VARIABLE para cambiar
  // el color de todas las plataformas. Usar una variable es
  // una forma más sencilla de editar múltiples plataformas
  // al mismo tiempo y ahorrar tiempo. ¡Tiempo esencial para
  // derrotar al Villano 404!
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  // EDITOR: endReadOnly();
  
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  platformColor = 'red';

  // EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 10, 'green');
  // EDITOR: endReadOnly();
  createPlatform(160, 200, 80, 10, platformColor);
  createPlatform(250, 300, 80, 10, platformColor);
  createPlatform(400, 370, 80, 10, platformColor);
  createPlatform(510, 400, 80, 10, platformColor);
  
  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Haz clic aquí para un RETO.');
  // ***** RETO ********
  // Si la variable platformColor sirve para cambiar 
  // *todas* las plataformas de color en este nivel, ¿qué 
  // puedes hacer para cambiar todas las plataformas de 
  // tamaño?
  // ¡Pronto tendrás la respuesta!
  // EDITOR: endCodeFold();
  // EDITOR: endReadOnly();

}