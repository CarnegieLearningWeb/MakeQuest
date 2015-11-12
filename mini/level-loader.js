var currentLevel = parseInt(storage.get('currentLevel'));
var maxLevelUnlocked = parseInt(storage.get('maxLevelUnlocked'));
var dialogueOn = parseInt(storage.get('dialogueOn'+currentLevel));
var isPublishedGame = false;

if (document.body.hasAttribute('data-published-game-base-level')) {
  // We're a standalone, published game!
  isPublishedGame = true;
  currentLevel = maxLevelUnlocked =parseInt(
    document.body.getAttribute('data-published-game-base-level')
  );
}

console.log("INITIAL VALUES");
console.log(currentLevel, maxLevelUnlocked);

var currentLevelFilename;

if (isNaN(currentLevel)) currentLevel = 0;
if (isNaN(maxLevelUnlocked)) maxLevelUnlocked = storage.set('maxLevelUnlocked', 0);
if (isNaN(dialogueOn)) dialogueOn = storage.set('dialogueOn'+currentLevel, 1);

currentLevelFilename = (currentLevel<10) ? 'levels/0' + currentLevel : 'levels/' + currentLevel;

if (currentLevel > 1 && !isPublishedGame) {
  document.getElementById('previous').style.display = 'inline-block';
}

if( currentLevel < maxLevelUnlocked ){
	showNextLevelButton();
}

function showNextLevelButton() {
  if (isPublishedGame) return;
  document.getElementById('next').style.display = 'inline-block';
}

function previousLevel() {
  storage.set('currentLevel', currentLevel - 1);
  window.location.reload();

  if (parent !== window) parent.prevLevel();
}

function nextLevel() {
  storage.set('currentLevel', currentLevel + 1);

  if(storage.get('maxLevelUnlocked') < currentLevel+1){
  	storage.set('maxLevelUnlocked', currentLevel+1);
  }
  

  window.location.reload();

  if (parent !== window) parent.nextLevel();
}

function showDialogue(){
  dialogueOn = true;
  storage.set('dialogueOn'+currentLevel, 1);
}

// These functions can be overridden by the BASE level file, which
// hackers will not see by default.
function base_getLevelDialogue() {
  return [
    {
      character: "heroA",
      image: heroAPic,
      textColor: "white",
      text: "TODO: Add level " + currentLevel + " instructions",
    },
  ];
}
function base_setupLevel() {}
function base_drawLevel() {}

// These functions can be overridden by the normal level file, which
// hackers will see by default.
function setupLevel() {}
function drawLevel() {}

// Load the BASE level file for the current level.
document.write('<script src="' + currentLevelFilename + '-base.js"></script>');

// Load the normal level file for the current level.
document.write('<script src="' + currentLevelFilename + '.js"></script>');
