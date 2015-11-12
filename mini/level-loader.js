var currentLevel = parseInt(window.sessionStorage['currentLevel']);
var maxLevelUnlocked = parseInt(window.sessionStorage['maxLevelUnlocked']);
var maxLevel = window.sessionStorage['maxLevel'];
var dialogueOn = parseInt(window.sessionStorage['dialogueOn'+currentLevel]);
var skipToSandbox = window.sessionStorage['skipToSandbox'] == "true" ? true : false;
if( skipToSandbox ){
  currentLevel = maxLevel;
  document.getElementById('skipToSandbox').style.display = 'none';
  document.getElementById('backToGame').style.display = 'inline-block';
}

console.log("INITIAL VALUES");
console.log(currentLevel, maxLevelUnlocked);

var currentLevelFilename;

if (isNaN(currentLevel)) currentLevel = 0;
if (isNaN(maxLevelUnlocked)) maxLevelUnlocked = window.sessionStorage['maxLevelUnlocked'] = 0;
if (isNaN(dialogueOn)) dialogueOn = window.sessionStorage['dialogueOn'+currentLevel] = 1;

currentLevelFilename = (currentLevel<10) ? 'levels/0' + currentLevel : 'levels/' + currentLevel;

if (currentLevel > 1 && !skipToSandbox) {
  document.getElementById('previous').style.display = 'inline-block';
}

if(currentLevel < maxLevelUnlocked && !skipToSandbox){
	showNextLevelButton();
}

function goToSandbox(){
    console.log("LOAD SANDBOX");
    window.sessionStorage['skipToSandbox'] = true;

    //Don't use nextLevel, we need to preserve currentLevel.
    window.location.reload();

    parent.loadCurrentUserProject();
}

function backToGame(){
  console.log("BACK TO GAME");
  window.sessionStorage['skipToSandbox'] = false;
  
  window.location.reload();

  parent.loadCurrentUserProject();
}

function showNextLevelButton() {
  document.getElementById('next').style.display = 'inline-block';
}

function previousLevel() {
  window.sessionStorage['currentLevel'] = currentLevel - 1;
  window.location.reload();

  parent.prevLevel();
}

function nextLevel() {
  window.sessionStorage['currentLevel'] = (currentLevel == maxLevel) ? maxLevel : currentLevel+1;
  if(window.sessionStorage['maxLevelUnlocked'] < currentLevel+1){
  	window.sessionStorage['maxLevelUnlocked'] = currentLevel+1;	
  }

  window.location.reload();

  parent.nextLevel();
}

function showDialogue(){
  dialogueOn = true;
  window.sessionStorage['dialogueOn'+currentLevel] = 1;
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
