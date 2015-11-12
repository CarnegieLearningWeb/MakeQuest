var currentLevel = parseInt(storage.get('currentLevel'));
var maxLevelUnlocked = parseInt(storage.get('maxLevelUnlocked'));
var dialogueOn = parseInt(storage.get('dialogueOn'+currentLevel));

var maxLevel = window.sessionStorage['maxLevel'];
var dialogueOn = parseInt(window.sessionStorage['dialogueOn'+currentLevel]);
var skipToSandbox = window.sessionStorage['skipToSandbox'] == "true" ? true : false;

var isPublishedGame = false;

if( skipToSandbox ){
  currentLevel = maxLevel;
  document.getElementById('skipToSandbox').style.display = 'none';
  document.getElementById('backToGame').style.display = 'inline-block';
  document.getElementById('publish').style.display = 'inline-block';
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




if (currentLevel > 1 && !isPublishedGame && !skipToSandbox) {
  document.getElementById('previous').style.display = 'inline-block';
}

if(currentLevel < maxLevelUnlocked && !skipToSandbox){
	showNextLevelButton();
}

function publish(){
  alert("Still need to implement publish functionality");
  // $("#generate-html").click(function() {
  //   generatedHTML = null;
  //   MinicoursePublisher.generateHTML({
  //     baseURL: './mini/',
  //     baseLevel: parseInt($("#base-level").val()),
  //     js: $("#js").val()
  //   }, function(err, html) {
  //     if (err) {
  //       alert("Error generating published HTML: " + err.message);
  //       return;
  //     }

  //     generatedHTML = html;

  //     $("#html").val(html);
  //     $("#data-url").attr("href", "data:text/html;base64," +
  //                         window.btoa(html));

  //     var iframe = document.createElement("iframe");
  //     $("#iframe-holder").empty().append(iframe);
  //     iframe.contentDocument.open();
  //     iframe.contentDocument.write(html);
  //     iframe.contentDocument.close();
  //   });
  // }).click();

  // $("#publish").click(function() {
  //   if (!generatedHTML) {
  //     alert("Generate HTML first!");
  //     return;
  //   }

  //   $("#published").hide();
  //   $("#publishing").fadeIn();

  //   // https://github.com/hackasaurus/hackpub#sample-code
  //   $.ajax({
  //     type: 'POST',
  //     url: "https://hackpub.herokuapp.com/buckets/globaloria/publish",
  //     data: {
  //       'html': generatedHTML
  //     },
  //     crossDomain: true,
  //     dataType: 'json',
  //     error: function() {
  //       alert("Error publishing HTML!");
  //       console.log(arguments);
  //     },
  //     success: function(data) {
  //       $("#published").fadeIn()
  //         .find('a')
  //         .attr('href', data['published-url'])
  //         .text(data['published-url']);
  //     },
  //     complete: function() {
  //       $("#publishing").hide();
  //     }
  //   });
  // });
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
  if (isPublishedGame) return;
  document.getElementById('next').style.display = 'inline-block';
}

function previousLevel() {
  storage.set('currentLevel', currentLevel - 1);
  window.location.reload();

  if (parent !== window) parent.prevLevel();
}

function nextLevel() {
  storage.set('currentLevel', (currentLevel == maxLevel) ? maxLevel : currentLevel+1 );

  if(storage.get('maxLevelUnlocked') < currentLevel+1){
  	window.sessionStorage['maxLevelUnlocked'] = currentLevel+1;	
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
