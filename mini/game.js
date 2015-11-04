var WIDTH = 640;
var HEIGHT = 480;

var GRAVITY = -0.2;

var PLAYER_START_X = 20;
var PLAYER_START_Y = 300;

var GOAL_REACHED_TEXT = "Goal reached!";
var CURRENT_LEVEL_TEXT = "TODO: Set CURRENT_LEVEL_TEXT for this level!";

var UNLOCK_GRID_LEVEL = 2;

var player, particles, platforms, goalReached;

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

    base_setupLevel();
    setupLevel();
}

function draw() {
    clear();

    if (currentLevel > UNLOCK_GRID_LEVEL) drawGrid();

    fill("red");
    textSize(24);
    textFont("Georgia");
    text(CURRENT_LEVEL_TEXT, 50, 50);

    playerInput();

    if (goalReached) {

        //First level triggers a modal on completion
        if(currentLevel == 0){
            player.position.x = PLAYER_START_X;
            player.position.y = PLAYER_START_Y;
            goalReached = false;
            alert("Evil thing has happened");
            nextLevel();
            return;
        }

        fill('red');
        textAlign(CENTER);
        text(GOAL_REACHED_TEXT, WIDTH/2, HEIGHT/2);
        particles.addParticle();
        particles.run();
    }

    if (player.overlap(goal)) {
        showNextLevelButton();
        goalReached = true;
    }

    gravity(player);

    // Draw player
    player.shapeColor = 'Aqua';
    player.display();

    drawSprites();

    resetOnGameOver();

    drawDialogue();

    base_drawLevel();
    drawLevel();
}

function keepPlatformsInScene(){
    //Stop platforms when colliding with walls. 
    //Pivot point is at the center of the platform.

    for (var i = 0; i < platforms.length; i++) {    
        

        if( platforms[i].velocity.x < 0 && (platforms[i].position.x - platforms[i].width/2) < 0 ){
            platforms[i].velocity.x = 0;
            platforms[i].position.x = 0 + platforms[i].width/2;
        }
        if( platforms[i].velocity.x > 0 && (platforms[i].position.x + platforms[i].width/2) > WIDTH ){
            platforms[i].velocity.x = 0;
            platforms[i].position.x = WIDTH - platforms[i].width/2;
        }
        if( platforms[i].velocity.y < 0 && (platforms[i].position.y - platforms[i].height/2 - player.height) < 0 ){
            platforms[i].velocity.x = 0;
            platforms[i].position.y = 0 + platforms[i].height/2 + player.height;
        }
        if( platforms[i].velocity.y > 0 && (platforms[i].position.y + platforms[i].height/2) > HEIGHT ){
            platforms[i].velocity.x = 0;
            platforms[i].position.y = HEIGHT - platforms[i].height/2;
        }
    }
}

function isPlayerOnPlatform() {
    for (var i = 0; i < platforms.length; i++) {
        if (player.overlap(platforms[i]) & (player.velocity.y > 0 || platforms[i].velocity.y < 0 ) ) {
            if (platforms[i].shapeColor.toLowerCase() !== 'red') {
                player.velocity.y = platforms[i].velocity.y;
                player.position.y = platforms[i].position.y - platforms[i].height;
                return true;
            }
        }
    }
    return false;
}

function makePlayerJump(force){
    player.setSpeed(force, 270);
}

function createPlatform(x, y, width, height, color) {
    var platform = createSprite(x, y, width, height);
    platform.shapeColor = color || 'green';
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
}
