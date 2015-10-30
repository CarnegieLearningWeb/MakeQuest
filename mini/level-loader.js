var currentLevel = parseInt(window.sessionStorage['currentLevel']);
var currentLevelFilename;

if (isNaN(currentLevel)) currentLevel = 1;

currentLevelFilename = 'levels/0' + currentLevel + '.js';

if (currentLevel > 1) {
  document.getElementById('previous').style.display = 'block';
}

function showNextLevelButton() {
  document.getElementById('next').style.display = 'block';
}

function previousLevel() {
  window.sessionStorage['currentLevel'] = currentLevel - 1;
  window.location.reload();

  parent.prevLevel();
}

function nextLevel() {
  window.sessionStorage['currentLevel'] = currentLevel + 1;
  window.location.reload();

  parent.nextLevel();
}

// These functions can be overridden by the BASE level file, which
// hackers will not see by default.
function base_setupLevel() {}
function base_drawLevel() {}

// These functions can be overridden by the normal level file, which
// hackers will see by default.
function setupLevel() {}
function drawLevel() {}

// Load the BASE level file for the current level.
document.write('<script src="levels/0' + currentLevel + '-base.js"></script>');

// Load the normal level file for the current level.
document.write('<script src="' + currentLevelFilename + '"></script>');
