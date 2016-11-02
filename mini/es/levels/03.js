// ***** 4. Cambia las dimensiones de las plataformas *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCCIONES *****
  
  // Modifica los valores de anchura y altura para 
  // cambiar las dimensiones de las plataformas
  //
  // El tercer número controla la anchura,
  // el último número controla la altura.
  //
  // TIP: El valor x e y definen la ubicación
  // del punto central de la plataforma. 
  //
  // ***** ESCRIBE TU CÓDIGO A CONTINUACIÓN *****
// EDITOR: endReadOnly();

// EDITOR: markHint('createPlatform', '(', null, ',', null, ',', {type: 'Numeric', highlight: true});
// EDITOR: readOnlyToken('createPlatform', '(', {type: 'Numeric', highlight: true}, ',', {type: 'Numeric', highlight: true}, ',');
// EDITOR: beginReadOnly();
  createPlatform(40, 100, 80, 10);
// EDITOR: endReadOnly();

  createPlatform(160, 180, 40, 10);
  createPlatform(460, 280, 40, 10);

// EDITOR: beginReadOnly();
// EDITOR: beginCodeFold('Click here for an example.');
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
}
// EDITOR: endReadOnly();


