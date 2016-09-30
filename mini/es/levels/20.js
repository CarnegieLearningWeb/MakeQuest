//*** THINKING THIS LEVEL IS ABOUT CUSTOMIZING, NO REAL CHALLENGE, JUST CHANGE THE LOOKS IF YOU WANT***//
//**** NEED TO CREATE A FUNCTION SIMILAR TO createPlatform ?****//
//We are almost there, and our hero feels like her true self is starting to show.
function setupLevel(){
    
    //Time to give your game some personality	
	//To customize your player you have to load an image into the game and then use it as the image for the player.
	//First, lets load the image (take a look at the available images inside the images folder)
  	playerImage = loadImage("images/hero.png");
    player.addImage(playerImage);
	

	platformWidth = 80;
	platformHeight = 20;

	platformColor = "orange";
	platform1 = createPlatform(40, 450, platformWidth, platformHeight, platformColor);
	platform2 = createPlatform(220, 450, platformWidth, platformHeight, platformColor);
	platform3 = createPlatform(400, 450, platformWidth, platformHeight, platformColor);

	//Now try adding an image to some of your platforms. Remember you can reuse anything you've stored inside a variable, including images.
	platformImage = loadImage("images/walls-floors.png");
	
	
}





