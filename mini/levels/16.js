function setupLevel(){
    
    // ***** LEVEL NINE (BRONZE) INSTRUCTIONS *****
    // 
    //Change the image for your hero to be superhero instead of hero.
    // 
    // ***** ENTER YOUR CODE BELOW *****
    // 
    playerImage = loadImage("images/hero.png");
    player.addImage(playerImage);
	
}

function drawLevel() {
    if ( isPlayerOnPlatform() ) {
    
      makePlayerJump( 5 );

    }

}