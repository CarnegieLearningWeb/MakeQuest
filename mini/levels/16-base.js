function base_setupLevel() {
}

function base_drawLevel() {
	
}

// Sandbox needs to introduce dialogue text in a simpler format.
// Using a simple array of strings to simplify things for students.
// Transform that string array to an object array to keep current dialogue implementation intact
function getLevelDialogue() {
  var dialogue = [];

  for (var i = 0; i < STORY_TEXT.length; i++) {
    dialogue[i] = {
        textColor: "white",
        text: STORY_TEXT[i]
      };
  };

  return dialogue;

}