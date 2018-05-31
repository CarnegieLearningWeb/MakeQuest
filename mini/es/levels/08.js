// ***** 9. Programa 2 plataformas *****

// EDITOR: beginReadOnly();
function setupLevel() {
// EDITOR: endReadOnly();
  // ***** INSTRUCCIONES *****
  //
  // Corrige el problema en las últimas dos plataformas.
  //
  // Usa el código de la primera plataforma como referencia.
  //
  // EDITOR: markHint('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',', {type: 'String', highlight: true});
  // EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 20, 'orange');
  // EDITOR: endReadOnly();
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
  // El código siguiente construye dos plataformas.
  // Pero las plataformas tienen una altura y una anchura de cero unidades.
  // Cambia el tamaño, posición y color de las plataformas para llegar
  // al portal.
  createPlatform(100, 100, 0, 0, 'red');
  createPlatform(200, 200, 0, 0, 'red');

  // EDITOR: beginCodeFold('Haz clic aquí para ver un ejemplo.');
  // ******Ejemplo******:
  //
  //   createPlatform(40, 100, 100, 30, 'magenta');
  //                  ^   ^    ^    ^    ^                     
  //                  |   |    |    |    color                     
  //                  |   |    |    altura                                      
  //                  |   |    anchura
  //                  |   posición y
  //                  posición x
  // EDITOR: endCodeFold();
}