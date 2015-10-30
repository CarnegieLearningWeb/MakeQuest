//*** THINKING THIS LEVEL IS ABOUT CUSTOMIZING, NO REAL CHALLENGE, JUST CHANGE THE LOOKS IF YOU WANT***//
//**** NEED TO CREATE A FUNCTION SIMILAR TO createPlatform ?****//
//We are almost there, and our hero feels like her true self is starting to show.
function setupLevel(){
    
    //Time to give your game some personality	
	//To customize your player you have to load an image into the game and then use it as the image for the player.
	//First, lets load the image (take a look at the available images inside the images folder)
  	playerImage = loadImage("images/hero.png");
    player.addImage(playerImage);
	
	//Now try adding an image to some of your platforms. Remember you can reuse anything you've stored inside a variable, including images.
	platformImage = loadImage("images/walls-floors.png");
	
}





