var WIDTH = 640;
var HEIGHT = 480;

var GRAVITY = -0.4;

var PLAYER_START_X = 20;
var PLAYER_START_Y = 300;

var GOAL_REACHED_TEXT = "Goal reached!";
var GOAL_REACHED_BOX_WIDTH = 400;
var GOAL_REACHED_BOX_HEIGHT = 100;

var CURRENT_LEVEL_TEXT = "TODO: Set CURRENT_LEVEL_TEXT for this level!";

var UNLOCK_GRID_LEVEL = 1;

var player, particles, platforms, goalReached, autoAdvanceToNextLevel;

function setup() {
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('p5_canvas');

    setupDialogue();

    goalReached = false;
    goal = createSprite(600, 40, 30, 30);
    goal.shapeColor = 'yellow';

    particles = new ParticleSystem(createVector(width / 2, 50));
    platforms = new Group();

    player = createSprite(PLAYER_START_X, PLAYER_START_Y, 20, 20);
    player.shapeColor = 'Aqua';

    autoAdvanceToNextLevel = 0;

    base_setupLevel();
    setupLevel();
}

function draw() {
    clear();
    
    if (currentLevel > UNLOCK_GRID_LEVEL) drawGrid();

    playerInput();

    gravity(player);

    // Draw player
    player.shapeColor = 'Aqua';
    player.display();

    drawSprites();

    resetOnGameOver();

    base_drawLevel();
    drawLevel();

    // Move text to the bottom so it doesn't get hidden by objects
    fill("#0b6481");
    noStroke();
    textSize(18);
    textFont(pixelFont);
    text(CURRENT_LEVEL_TEXT, 50, 50);

    if (goalReached) {
        levelComplete();
    }

    if (player.overlap(goal) && !goalReached) {
        showNextLevelButton();
        goalReached = true;
        autoAdvanceToNextLevel = frameCount + (frameRate() * 8);
    }

    if (autoAdvanceToNextLevel && frameCount >= autoAdvanceToNextLevel) {
        autoAdvanceToNextLevel = 0;
        nextLevel();
    }

    drawDialogue();
}

function destroyScene(){
    //Remove a letter from the level title everytime we remove a sprite
    if(frameCount % 20 == 0){
        var removeIndex = floor( random(0, CURRENT_LEVEL_TEXT.length) );
        var newText = CURRENT_LEVEL_TEXT.split("");
        newText.splice(removeIndex, 1);
        CURRENT_LEVEL_TEXT = newText.join("");
    }

    allSprites.forEach(function(sprite){
        sprite.position.y++;
        sprite.rotation = sprite.rotation + random(0, 15);

        if( sprite.position.y > HEIGHT + 20 ){
            sprite.remove();
        }
    });
}

function keepPlatformsInScene() {
    //Stop platforms when colliding with walls.
    //Pivot point is at the center of the platform.
    //Consider refactoring to use method collides and place colliding boxes on the borders

    for (var i = 0; i < platforms.length; i++) {


        if (platforms[i].velocity.x < 0 && (platforms[i].position.x - platforms[i].width / 2) < 0) {
            platforms[i].velocity.x = 0;
            platforms[i].position.x = 0 + platforms[i].width / 2;
        }
        if (platforms[i].velocity.x > 0 && (platforms[i].position.x + platforms[i].width / 2) > WIDTH) {
            platforms[i].velocity.x = 0;
            platforms[i].position.x = WIDTH - platforms[i].width / 2;
        }
        if (platforms[i].velocity.y < 0 && (platforms[i].position.y - platforms[i].height / 2 - player.height) < 0) {
            platforms[i].velocity.x = 0;
            platforms[i].position.y = 0 + platforms[i].height / 2 + player.height;
        }
        if (platforms[i].velocity.y > 0 && (platforms[i].position.y + platforms[i].height / 2) > HEIGHT) {
            platforms[i].velocity.x = 0;
            platforms[i].position.y = HEIGHT - platforms[i].height / 2;
        }
    }
}

function isPlayerOnPlatform() {
    var pCol;

    for (var i = 0; i < platforms.length; i++) {

        pCol = color(platforms[i].shapeColor);
        if (!(red(pCol) == 255.0 && green(pCol) == 0 && blue(pCol) == 0)) {

            player.collide(platforms[i]);

            if(player.touching.bottom){
              player.velocity.y = platforms[i].velocity.y;
              player.position.y = platforms[i].position.y - platforms[i].height / 2 - player.height / 2;

              return true;
            }


        }
    }
    return false;
}

function levelComplete(){
    player.position.x = goal.position.x;
    player.position.y = goal.position.y;
    player.velocity.x = 0;
    player.velocity.y = 0;


    if (currentLevel != 0) {
        particles.addParticle();
        particles.run();
    }

    rectMode(CENTER);
    strokeWeight(7);
    stroke(36,164,205);
    fill('#0B6481');

    //Level 0 only
    if (currentLevel == 0) {
        // player.position.x = PLAYER_START_X;
        // player.position.y = PLAYER_START_Y;
        // goalReached = false;
        noStroke();
        fill('red');
        // alert("Evil thing has happened");
        // nextLevel();
        // return;
        destroyScene();

    }

    rect( WIDTH/2, HEIGHT/2, 420, 120 );
    noStroke();
    fill('white');
    textAlign(CENTER);
    text(GOAL_REACHED_TEXT, WIDTH / 2, HEIGHT / 2, GOAL_REACHED_BOX_WIDTH, GOAL_REACHED_BOX_HEIGHT);
    
    if( currentLevel < maxLevel ){
        fill('orange');
        text("Click for next level...", WIDTH/2, HEIGHT/2+GOAL_REACHED_BOX_HEIGHT/2);
    }

    //Reset rectMode back to default
    rectMode(CORNER);
}

function mouseClickedLevelComplete() {
    if(goalReached &&
        ( mouseY <= ( HEIGHT / 2 + GOAL_REACHED_BOX_HEIGHT ) && mouseY >= ( HEIGHT/2 - GOAL_REACHED_BOX_HEIGHT ) )
        )
    {
      nextLevel();
    }
}

function makePlayerJump(force) {
    player.setSpeed(force, 270);
}

function createPlatform(x, y, width, height, col) {
    var platform = createSprite(x, y, width, height);
    var colorObj = color(col || 'green');

    // Invalid/unrecognized color names seem to show up as
    // white, which isn't awesome because our background is
    // white by default, so just disallow it for now.
    if (red(colorObj) == 255 && green(colorObj) == 255 &&
        blue(colorObj) == 255)
        throw new Error('Invalid color: ' + col);

    platform.shapeColor = colorObj;

    platformImage = loadImage("images/star.png");
    // platformImage.resize(30,30);
    
    platform.addImage(platformImage);
    console.log(platform);
    platform.resize(120, 20);
    // platform.scale = 0.5;
    // platform.animation.images[0].resize(30, 30);
    

    platforms.add(platform);
    return platform;
}

function resetOnGameOver() {
    if (player.position.y > HEIGHT + 20) {
        player.position.x = PLAYER_START_X;
        player.position.y = PLAYER_START_Y;
    }
}

function gravity(sprite) {
    sprite.addSpeed(GRAVITY, 270);
}

function playerInput() {
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x = player.position.x + 5;
    }
}

function mouseClicked() {
    mouseClickedDialogue();
    mouseClickedLevelComplete();
}
