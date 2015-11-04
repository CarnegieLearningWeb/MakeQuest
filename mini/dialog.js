//Insert these into p5's setup and draw respectively
function setupDialogue(){
	pixelFont = loadFont('c64-pixelized.otf');

	console.log("DIALOGUE SEEN: ");
	console.log(window.sessionStorage['dialogueOn'+currentLevel]);
	console.log(dialogueOn);

	dialogueIndex = 0;

	dialogueGutter = 10;

	dialoguePicWidth = 64;
	dialoguePicX = WIDTH - dialoguePicWidth - dialogueGutter;

	heroAPic = loadImage("images/hero.png");
	heroBPic = loadImage("images/bird.png");	

	platformImg = loadImage('images/walls-floors.png');

	dialogueBox = loadImage("images/dialogue-box.png");


	//Need a text height + "next" text to fit inside the BoxHeight
	dialogueBoxHeight = 128;	
	dialogueTextHeight = 110;	//If we include the preload function, we can use dialogueBox.height
								//We could also set this inside draw, but it doesn't feel right
	dialogueTextWidth = WIDTH - dialoguePicWidth - dialogueGutter;

	currentDialogue = base_getLevelDialogue();
}

function drawDialogue(){
	if(dialogueOn && currentDialogue){
		image( dialogueBox, 0, 0, WIDTH, 128 );
		image( currentDialogue[dialogueIndex].image, 
				dialoguePicX, 
				dialogueGutter, 
				dialoguePicWidth,
				dialogueBoxHeight );

		fill( currentDialogue[dialogueIndex].textColor );
	    textSize(14);
	    textFont(pixelFont);

	    text( currentDialogue[dialogueIndex].text, dialogueGutter, dialogueGutter, dialogueTextWidth, dialogueTextHeight - dialogueGutter );
	    //Simulate a next "button" so the user clicks on the dialogueBox
	    fill("orange");
	    text( "Click to continue...", dialogueGutter, dialogueTextHeight, dialogueTextWidth );
	}
}

function mouseClickedDialogue() {
	if(dialogueOn && mouseY < dialogueBoxHeight){
		dialogueIndex++;
		if( dialogueIndex >= currentDialogue.length ){
			dialogueIndex = 0;			
			dialogueOn = false;
			window.sessionStorage['dialogueOn'+currentLevel] = 0;
		}
	}
}