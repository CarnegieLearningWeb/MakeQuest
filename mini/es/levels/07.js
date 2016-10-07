// ***** 8. Cambia tres variables *****

// EDITOR: beginReadOnly();
function setupLevel(){
// EDITOR: endReadOnly();
  // ***** INSTRUCCIONES *****
  //
  // Cambia el valor de la VARIABLE platformWidth para cambiar
  // la anchura de varias plataformas a la vez.
  //
  // Cambia el valor de la VARIABLE platformHeight para cambiar
  // la altura de varias plataformas a la vez.
  //
  // Cambia el valor de la VARIABLE platformColor para cambiar
  // el color de las plataformas.
  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  // EDITOR: markHint('platformColor', '=', {type: 'String', highlight: true});
  // EDITOR: markHint('platformWidth', '=', {type: 'Numeric', highlight: true});
  // EDITOR: markHint('platformHeight', '=', {type: 'Numeric', highlight: true});
  platformColor = 'red';
  platformWidth = 40;
  platformHeight = 10;

  // EDITOR: beginReadOnly();
  createPlatform(30, 100, platformWidth, platformHeight, 'green');
  // EDITOR: endReadOnly();
  createPlatform(190, 200, platformWidth, platformHeight, platformColor);
  createPlatform(290, 300, platformWidth, platformHeight, platformColor);
  createPlatform(390, 400, platformWidth, platformHeight, platformColor);
}
