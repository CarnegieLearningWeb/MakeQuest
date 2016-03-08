// ***** 6. Use Variables *****

// EDITOR: beginReadOnly();
function setupLevel() {
  // ***** INSTRUCTIONS *****
  //
  // Update the color of the VARIABLE below to change all of the
  // platform colors. By changing the platformColor variable
  //instead of each color one by one, you can save loads
  //of time… time you will need later to defeat Supernova!
  // ***** ENTER YOUR CODE BELOW *****
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
  // EDITOR: beginCodeFold('Click here for a CHALLENGE.');
  // ***** CHALLENGE ********
  // Challenge (answer in your head): if using a variable called
  // platformColor can change *all* of the colors in this level… 
  // how do you think you could change all of the platform *sizes*
  // (length or width) without having to change each individual 
  // platform?  
  // Think you’ve got it? Stay tuned!
  // EDITOR: endCodeFold();
  // EDITOR: endReadOnly();

}