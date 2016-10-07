// ***** 7. Cambia dos variables *****

// EDITOR: beginReadOnly();
function setupLevel(){
  // ***** INSTRUCCIONES *****
  //
  // Cambia el valor de la VARIABLE platformWidth para cambiar
  // la anchura de múltiples plataformas a la vez.
  //
  // Cambia el valor de la VARIABLE platformColor para cambiar
  // el color de todas las plataformas a la vez.
  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  // EDITOR: endReadOnly();
  // EDITOR: markHint('platformWidth', '=', {type: 'Numeric', highlight: true});
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  platformWidth = 40;
  platformColor = 'red';

  // EDITOR: beginReadOnly();
  createPlatform(30, 100, platformWidth, 10, 'green');
  // EDITOR: endReadOnly();
  createPlatform(190, 200, platformWidth, 10, platformColor);
  createPlatform(290, 300, platformWidth, 10, platformColor);
  createPlatform(390, 400, platformWidth, 10, platformColor);
}
