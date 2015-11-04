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

	
	dialogueLevel1 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "white",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "red",
			text: "Quod rem, libero quam ab nam et inventore nulla blanditiis"
						+" repellat consequuntur!"
			      +" Libero tenetur a, voluptates sunt sapiente qui autem"
			      +" neque facilis."
		},
		{
			character: "heroA",
			image: heroAPic,
			textColor: "white",
			text: "Goodbye",
		}
	];

	dialogueLevel2 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "OMG… you did it! You really did it!"
						+" It isn’t that I didn’t think you could,"
			      +" but so many others tried and failed before you,"
			      +" but that doesn’t matter now."
			      +" I can feel something special in you."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "The Vile For-oh-For’s code corruption powers have forced"
						+" all platforms and walkways to diminish.  If the people"
						+" can’t go anywhere, they can never rebel against his rule!"
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "With your new “javaScript vision” you can see platforms as"
						+" they are meant to be seen, through numbers."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "The one we are standing on for instance, looks like"
						+" (40, 100, 80, 10)"
						+" The first two numbers are it’s origin, but without more"
						+" powers it is very risky to try and teleport a platform"
						+" to another location."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "Instead let us make the platform longer"
						+" by changing the 80 to a larger number, and see if it can help"
						+" us reach the access point!  Each time you reach an access"
						+" point you return the use of that code to Humanity."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "With everyone understanding how to code,"
						+" The For-oh-For doesn’t stand a chance!"
		}
	];

	dialogueLevel3 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "Yes!  You did it!  By making the platforms larger you were"
						+" able to power up your visual sensors and now you can see not"
						+" only javaScript, but also the coordinate plane!"
						+" With this floating grid, we will be able to make more changes"
						+" in the world and reach more distant access points."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "The For-oh-For should be scared… but lets not go after him just yet,"
						+" there is more training to do!"
						+" Remember the platform numbers? (40, 100, 80, 10) "
						+" We know that we can make platforms larger, but now with the grid we"
						+" can begin to change the Origin, or the first two numbers in our code."
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "The first number tells the platform where to start according to the"
						+" numbers going left to right, (or the x-axis), and the second number"
						+" controls location based on the numbers going from top to bottom"
						+" (or an upside-down y-axis).  Rearrange the platforms to reach the"
						+" next access point!"
		}
		
	];

	dialogueLevel4 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "Oh No!  The For-oh-For has detected some tampering in the code."
						+" We are going to have to be even smarter now to reach the remaining"
						+" access points.  Since you figured out how to change platform size"
						+" and teleport them around,",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "The For-oh-For has changed almost all of the platforms in the world"
						+" to “red” holograms that you will fall through if you try and stand"
						+" on them. We must use our latest power to change the colors of the"
						+" platforms back into solid “green” holograms so we can reach our "
						+" access point!  You can do it!",
		}

	];

	dialogueLevel5 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "Amazing.  You found a Variable Entering Storage Tank or VEST!  This VEST can store enough information that it will allow you to change multiple platforms at the same time!  No longer do you need to manipulate just one object at a time, now you can cause all the platforms to grow with one move!  Oh, if I could only see the frustration on The For-oh-For’s face.  I mean he deserves it for all the frustrations he causes right?  You know what I’m talking about!",
		},
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "Ok, back to understanding your new power!  The VEST allows you to store a number that controls all of your platforms at the same time!  To store a value it must be written like this: \n\nplatformWidth = 80;",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "Now when you use your javaScript vision, you will see code slightly differently! (see below)  By changing the value “80” in the above code, it will change how long all of your platforms are at the same time!"
					+"\n\nplatform1 = createSprite(40, 100, platformWidth, 10);"
					+"\nplatform2 = createSprite(40, 100, platformWidth, 10);"
					+"\nplatform3 = createSprite(40, 100, platformWidth, 10);",
		}
	];

	dialogueLevel6 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "",
		}
	];

	dialogueLevel7 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "",
		}
	];

	dialogueLevel8 = [
		{
			character: "heroB",
			image: heroAPic,
			textColor: "white",
			text: "After that last energy surge a tattoo appeared on your arm. Oh my! I never thought we would make it this far, victory always seemed like a dream, but you keep getting stronger!  The tattoo says"
				+"\nplatform1 = createSprite(40, 100, width, height);"
				+"\nplatform1.shapeColor = color;",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "white",
			text: "This is the ancient lost code of platform creation! You can now create your own platforms.  If you repeat this code but change the number from a 1, to another number such as platform2 or platform3 you can create as many platforms as you need! HAHA, how will The For-oh-For ever stop you now, rebuild the bridge and reach the access point, give the world back its builders!",
		}
	];

	dialogueLevel9 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "white",
			text: "Level 9 instructions",
		},
	];

	dialogueLevel10 = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "white",
			text: "Level 10 instructions",
		},
	];

	dialogues = [dialogueLevel1, dialogueLevel2, dialogueLevel3, 
					dialogueLevel4, dialogueLevel5, dialogueLevel6, 
					dialogueLevel7, dialogueLevel8, dialogueLevel9,
					dialogueLevel10];
}

function drawDialogue(){
	currentDialogue = window.sessionStorage['currentLevel'] - 1;

	if(dialogueOn){
		image( dialogueBox, 0, 0, WIDTH, 128 );
		image( dialogues[currentDialogue][dialogueIndex].image, 
				dialoguePicX, 
				dialogueGutter, 
				dialoguePicWidth,
				dialogueBoxHeight );

		fill( dialogues[currentDialogue][dialogueIndex].textColor );
	    textSize(14);
	    textFont(pixelFont);

	    text( dialogues[currentDialogue][dialogueIndex].text, dialogueGutter, dialogueGutter, dialogueTextWidth, dialogueTextHeight - dialogueGutter );
	    //Simulate a next "button" so the user clicks on the dialogueBox
	    fill("orange");
	    text( "Click to continue...", dialogueGutter, dialogueTextHeight, dialogueTextWidth );
	}
}

function mouseClickedDialogue() {
	currentDialogue = window.sessionStorage['currentLevel'] - 1;

	if(dialogueOn && mouseY < dialogueBoxHeight){
		dialogueIndex++;
		if( dialogueIndex >= dialogues[currentDialogue].length ){
			dialogueIndex = 0;			
			dialogueOn = false;
			window.sessionStorage['dialogueOn'+currentLevel] = 0;
		}
	}
}