function setupLevel(){ 
  // EDITOR: beginReadOnly();
  // ***** INSTRUCTIONS *****
  //
  // Change the word 'red' to something else
  // like 'magenta' or 'blue'.
  // You'll have to change it every time you see
  // the word 'red' below, but it's worth the extra work to
  // beat the evil For-Oh-For!

  //
  // ***** ENTER YOUR CODE BELOW *****

  createPlatform(40, 100, 80, 10, 'green');
  // EDITOR: markHint('createPlatform', '(', null, ',', null, ',', null, ',', null, ',', {type: 'String', highlight: true});
  // EDITOR: endReadOnly();
  createPlatform(160, 200, 80, 10, 'red');
  createPlatform(250, 300, 80, 10, 'red');
  createPlatform(400, 370, 80, 10, 'green');
  createPlatform(510, 400, 80, 10, 'red');

  // EDITOR: beginReadOnly();
  // EDITOR: beginCodeFold('Click here for a CHALLENGE.');
  // ***** CHALLENGE ********
  //Challenge1 (bronze level) -- Change each platform to a  *different* color.
  //Challenge 2 (silver level) -- Change each platform to a *square* instead of a rectangle.
  // EDITOR: endCodeFold('Click here for a CHALLENGE.');
  // EDITOR: endReadOnly();

}


