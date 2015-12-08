//Insert these into p5's setup and draw respectively
function setupDialogue(){
	dialogueIndex = 0;
	dialogueGutter = 20;
	dialoguePicWidth = 64;
	dialoguePicX = WIDTH - dialoguePicWidth - dialogueGutter;
	pixelFont = loadFont('c64-pixelized.otf');
	//Need a text height + "next" text to fit inside the BoxHeight
	dialogueFontSize = 18;
	dialogueBoxHeight = 218;
	dialogueTextHeight = 200;  //If we include the preload function, we can use dialogueBox.height
							  //We could also set this inside draw, but it doesn't feel right
	dialogueTextWidth = WIDTH - dialoguePicWidth - dialogueGutter;
	dialogueBox = loadImage("images/dialogue-box.png");

	heroAPic = loadImage("images/hero.png");
	heroBPic = loadImage("images/bird.png");

	platformImg = loadImage('images/walls-floors.png');

	//Try to get dialogue override
	currentDialogue = getLevelDialogue();
	if( !currentDialogue ){
		currentDialogue = base_getLevelDialogue();
	}

	if (currentDialogue) {
		parent.document.getElementById('showDialogue').style.display = 'inline-block';
	}
}

function drawDialogue(){
	if(dialogueOn && currentDialogue){
		
		var overlayColor = color(0, 0, 0, 102);
		fill(overlayColor);
		rect(0, 0, WIDTH, HEIGHT);
    
		rectMode(CENTER);

		// Build 'Story' Dialogue box for text
		fill("#0B6481");
		stroke(36,164,205);
		strokeWeight(12);
		rect(320, 270, 630, 204);

		noStroke();
		fill( currentDialogue[dialogueIndex].textColor );
	    textSize( dialogueFontSize );
	    textFont(pixelFont);

	    rectMode(CORNER);
	    text( currentDialogue[dialogueIndex].text,
				dialogueGutter,
				dialogueGutter + HEIGHT/3,
				dialogueTextWidth,
				dialogueTextHeight - dialogueGutter );
	    //Simulate a next "button" so the user clicks on the dialogueBox
	    fill("orange");
	    text( "Click to continue...",
	    		dialogueGutter,
	    		dialogueTextHeight + HEIGHT/3,
	    		dialogueTextWidth );
	}
}

function mouseClickedDialogue() {
	if(dialogueOn &&
		( mouseY <= ( HEIGHT/3 + dialogueBoxHeight ) && mouseY >= ( HEIGHT/3 ) )
		)
	{
		dialogueIndex++;
		if( dialogueIndex >= currentDialogue.length ){
			dialogueIndex = 0;
			dialogueOn = false;
			storage.set('dialogueOn'+currentLevel, 0);
		}
	}
}