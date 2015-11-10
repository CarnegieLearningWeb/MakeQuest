var WIDTH = 640;
var HEIGHT = 480;

var GRAVITY = -0.2;

var PLAYER_START_X = 20;
var PLAYER_START_Y = 300;

var GOAL_REACHED_TEXT = "Goal reached!";
var CURRENT_LEVEL_TEXT = "TODO: Set CURRENT_LEVEL_TEXT for this level!";

var UNLOCK_GRID_LEVEL = 1;

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
    fill("red");
    textSize(24);
    textFont("Georgia");
    text(CURRENT_LEVEL_TEXT, 50, 50);

    if (goalReached) {
        player.position.x = goal.position.x;
        player.position.y = goal.position.y;
        player.velocity.x = 0;
        player.velocity.y = 0;

        //First level triggers a modal on completion
        if (currentLevel == 0) {
            player.position.x = PLAYER_START_X;
            player.position.y = PLAYER_START_Y;
            goalReached = false;
            alert("Evil thing has happened");
            nextLevel();
            return;
        }

        particles.addParticle();
        particles.run();

        fill('black');
        textAlign(CENTER);
        text(GOAL_REACHED_TEXT, WIDTH / 2 - 200, HEIGHT / 2 - 50, 400, 100);
    }

    if (player.overlap(goal)) {
        showNextLevelButton();
        goalReached = true;
    }

    drawDialogue();
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
