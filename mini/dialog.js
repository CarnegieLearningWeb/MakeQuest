//Insert these into p5's setup and draw respectively
function setupDialogue(){
	pixelFont = loadFont('c64-pixelized.otf');

	dialogueOn = true;
	dialogueIndex = 0;

	dialogueGutter = 10;

	dialoguePicWidth = 64;
	dialoguePicX = WIDTH - dialoguePicWidth - dialogueGutter;
	heroAPic = loadImage("images/heroA.png");	
	heroBPic = loadImage("images/heroB.png");	


	dialogueBox = loadImage("images/DialogueBox.png");
	dialogueTextHeight = 90;	//If we include the preload function, we can use dialogueBox.height
								//We could also set this inside draw, but it doesn't feel right
	dialogueTextWidth = WIDTH - dialoguePicWidth - dialogueGutter;

	
	dialogueLevel1 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "red",
			text: "Quod rem, libero quam ab nam et inventore nulla blanditiis repellat consequuntur! Libero tenetur a, voluptates sunt sapiente qui autem neque facilis.",
		},
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Goodbye",
		}
	];

	dialogueLevel2 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 2 instructions",
		},
	];

	dialogueLevel3 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 3 instructions",
		},
	];

	dialogueLevel4 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 4 instructions",
		},
	];

	dialogueLevel5 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 5 instructions",
		},
	];

	dialogueLevel6 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 6 instructions",
		},
	];

	dialogueLevel7 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 7 instructions",
		},
	];

	dialogueLevel8 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 8 instructions",
		},
	];

	dialogueLevel9 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Level 9 instructions",
		},
	];

	dialogues = [dialogueLevel1, dialogueLevel2, dialogueLevel3, dialogueLevel4, dialogueLevel5, dialogueLevel6, dialogueLevel7, dialogueLevel8, dialogueLevel9];
}

function drawDialogue(){
	currentDialogue = window.sessionStorage['currentLevel'] - 1;

	if(dialogueOn){
		image( dialogueBox, 0, 0, WIDTH );
		image( dialogues[currentDialogue][dialogueIndex].image, dialoguePicX, dialogueGutter, dialoguePicWidth );

		fill( dialogues[currentDialogue][dialogueIndex].textColor );
	    textSize(12);
	    textFont(pixelFont);

	    text( dialogues[currentDialogue][dialogueIndex].text, dialogueGutter, dialogueGutter, dialogueTextWidth, dialogueTextHeight - dialogueGutter );
	}
}

function mouseClickedDialogue() {
	currentDialogue = window.sessionStorage['currentLevel'] - 1;

	if(dialogueOn && mouseY < dialogueTextHeight){
		dialogueIndex++;
		if( dialogueIndex >= dialogues[currentDialogue].length ){
			dialogueIndex = 0;			
			dialogueOn = false;
		}
	}
}