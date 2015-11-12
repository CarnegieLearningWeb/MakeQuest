//Insert these into p5's setup and draw respectively
function setupDialogue(){
	pixelFont = loadFont('c64-pixelized.otf');

	console.log("DIALOGUE SEEN: ");
	console.log(storage.get('dialogueOn'+currentLevel));
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

	if (currentDialogue) {
		document.getElementById('showDialogue').style.display = 'inline-block';
	}
}

function drawDialogue(){
	if(dialogueOn && currentDialogue){
		rectMode(CENTER);
		image( dialogueBox, 
				0, 
				HEIGHT/3, 
				WIDTH, 
				128 );
		image( currentDialogue[dialogueIndex].image, 
				dialoguePicX, 
				dialogueGutter + HEIGHT/3, 
				dialoguePicWidth,
				dialogueBoxHeight );

		fill( currentDialogue[dialogueIndex].textColor );
	    textSize(14);
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
	console.log(HEIGHT/3);
	console.log(dialogueBoxHeight);
	console.log(mouseY);

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