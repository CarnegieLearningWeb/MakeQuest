// ***** 3. Domina el plano de coordenadas *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCCIONES *****
  
  // Modifica la posición x e y de las dos últimas
  // plataformas para moverlas.
  //
  // Utiliza el botón “Deshacer" para revertir el último cambio
  // Utiliza el botón “Ejecutar" para ver tus cambios
  // Utiliza el botón “Ayuda” para recibir pistas
  //
  // Las coordenadas x,y en createPlatform() hacen referencia al centro de la plataforma.
  //
  // TIP: El nivel mide 640 de ANCHO (WIDTH) y 480 de ALTO (HEIGHT)
  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****

  createPlatform(60, 100, 120, 10);
  // EDITOR: endReadOnly();
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', null);
  // EDITOR: readOnlyToken('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true} );
  createPlatform(90, 130, 120, 10);
  createPlatform(120, 160, 120, 10);

  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Click here for an EXAMPLE.');
  // ******Ejemplo******:
  //
  //   createPlatform(40, 100, 80, 10);
  //                  ^   ^    ^   ^
  //                  |   |    |   |
  //                  |   |    |   altura
  //                  |   |    anchura
  //                  |   posición y
  //                  posición x
  // EDITOR: endCodeFold();
  // EDITOR: endReadOnly();
}
