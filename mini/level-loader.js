var currentLevel = parseInt(storage.get('currentLevel'));
var maxLevelUnlocked = parseInt(storage.get('maxLevelUnlocked'));
var dialogueOn = parseInt(storage.get('dialogueOn'+currentLevel));

var maxLevel = gameConstants.MAX_LEVEL;
var skipToSandbox = storage.get('skipToSandbox') == "true" ? true : false;

var isPublishedGame = false;

if( skipToSandbox ){
  currentLevel = maxLevel;
  // parent.document.getElementById('skipToSandbox').style.display = 'none';
  parent.document.getElementById('backToGame').style.display = 'inline-block';
  parent.document.getElementById('publish').style.display = 'inline-block';
}else{
  // parent.document.getElementById('skipToSandbox').style.display = 'inline-block';
  parent.document.getElementById('backToGame').style.display = 'none';
  parent.document.getElementById('publish').style.display = 'none';
}

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

// Append language path
var languagePath = storage.get('languagePath');
currentLevelFilename = languagePath+currentLevelFilename;




// if (currentLevel > 1 && !isPublishedGame && !skipToSandbox) {
//   parent.document.getElementById('previous').style.display = 'inline-block';
// }else{
//   parent.document.getElementById('previous').style.display = 'none';
// }

// if(currentLevel < maxLevelUnlocked){
// 	showNextLevelButton();
// }else{
//   parent.document.getElementById('next').style.display = 'none'; 
// }

function publish(){
  parent.publishPrompt();
}

function goToSandbox(){
    console.log("LOAD SANDBOX");
    storage.set('skipToSandbox', 'true');

    //Don't use nextLevel, we need to preserve currentLevel.
    window.location.reload();

    parent.loadMiniCourse();
}

function backToGame(){
  console.log("BACK TO GAME");
  storage.del('skipToSandbox');
  
  window.location.reload();

  parent.loadMiniCourse();
}

function showNextLevelButton() {
  if (isPublishedGame || currentLevel == maxLevel || skipToSandbox) return;
  // parent.document.getElementById('next').style.display = 'inline-block';
}

function previousLevel() {
  storage.set('currentLevel', currentLevel - 1);
  window.location.reload();

  if (parent !== window) parent.prevLevel();
}

function nextLevel() {
  if (isPublishedGame || currentLevel == maxLevel) return;

  if( currentLevel+1 == maxLevel ){
    goToSandbox();
    return;
  }

  storage.set('currentLevel', (currentLevel == maxLevel) ? maxLevel : currentLevel+1 );

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
function getLevelDialogue() {}

// Load the BASE level file for the current level.
document.write('<script src="' + currentLevelFilename + '-base.js"></script>');

// Load the normal level file for the current level.
document.write('<script src="' + currentLevelFilename + '.js"></script>');
