function setupLevel(){
    
    playerImage = loadImage("images/hero.png");
    player.addImage(playerImage);
	
	platformWidth = 80;
    platformHeight = 20;
    platformColor = "orange";
     
    platform1 = createPlatform(40, 450, platformWidth, platformHeight, platformColor);
    platform2 = createPlatform(220, 450, platformWidth, platformHeight, platformColor);
    platform3 = createPlatform(400, 450, platformWidth, platformHeight, platformColor);

    // ***** LEVEL NINE (BRONZE) INSTRUCTIONS *****
    // 
    // Now add an image to some of your platforms. 
	// We loaded images/platform1.png for you, feel free to use images/platform2.png or images/platform3.png
    // 
    // ***** ENTER YOUR CODE BELOW *****
    // 
    platformImage1 = loadImage("images/platform1.png");
    platform1.addImage(platformImage1);
	
}

function drawLevel() {
    if ( isPlayerOnPlatform() ) {
    
      makePlayerJump( 5 );

    }

}
