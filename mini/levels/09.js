//*** THINKING THIS LEVEL IS ABOUT CUSTOMIZING, NO REAL CHALLENGE, JUST CHANGE THE LOOKS IF YOU WANT***//
//**** NEED TO CREATE A FUNCTION SIMILAR TO createPlatform ?****//
​
//We are almost there, and our hero feels like her true self is starting to show.
function levelSetup(){
    
    //Time to give your game some personality	
	//To customize your player you have to load an image into the game and then use it as the image for the player.
	//First, lets load the image (take a look at the available images inside the images folder)
  	playerImage = loadImage("images/art/pxl_enemy_B2.png");
  	player = createPlayer(20, 20, playerImage);
	
	
	//Now try adding an image to some of your platforms. Remember you can reuse anything you've stored inside a variable, including images.
	platformImage = loadImage("images/art/pxl_enemy_B2.png");
	
}
​
//*** createPlayer WOULD BE SOMETHING ALONG THESE LINES. WE WOULD PROB HIDE IT IN base.js ***//
function createPlayer(x,y,width,height,color){
	if( typeof args[2] === 'object'){
		player = createSprite(player_start_x, player_start_y);
	 	player.addImage(args[2]); 
	}
}




