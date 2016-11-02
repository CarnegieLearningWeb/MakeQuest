// ***** 5. Colorea las plataformas *****

// EDITOR: beginReadOnly();
function setupLevel(){ 
  // ***** INSTRUCCIONES *****
  //
  // Cambia la palabra 'red' (rojo) por
  // el nombre de otro color en inglés como 'magenta' (magenta) o 'blue' (azul).
  // ¡Tendrás que cambiar el color cada que veas la palabra
  // 'red', pero vale la pena con tal de derrotar al Villano 404!

  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****

  createPlatform(40, 100, 80, 10, 'green');
  // EDITOR: markHint('createPlatform', '(', null, ',', null, ',', null, ',', null, ',', {type: 'String', highlight: true});
  // EDITOR: endReadOnly();
  createPlatform(160, 200, 80, 10, 'red');
  createPlatform(250, 300, 80, 10, 'red');
  createPlatform(400, 370, 80, 10, 'green');
  createPlatform(510, 400, 80, 10, 'red');

  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Haz clic aquí para un RETO.');
  // ***** RETO ********
  // Reto 1 (nivel bronce) 
  // -- Utiliza un color distinto para cada plataforma.
  // Reto 2 (nivel plata) 
  // -- Haz que tus plataformas sean cuadradas en lugar de rectangulares.
  // EDITOR: endCodeFold('Click here for a CHALLENGE.');
  // EDITOR: endReadOnly();

}


