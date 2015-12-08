function setup(){var e=createCanvas(WIDTH,HEIGHT);e.parent("p5_canvas"),setupDialogue(),backgroundImage=loadImage("images/MakeQuestAssets/Background_1.png"),goalReached=!1,goal=createSprite(600,40,30,30),goal.shapeColor="yellow",particles=new ParticleSystem(createVector(width/2,50)),platforms=new Group,player=createSprite(PLAYER_START_X,PLAYER_START_Y,20,20),player.shapeColor="Aqua",playerImage=loadImage("images/MakeQuestAssets/Characters60PX/Hero_F_60.png"),player.addImage(playerImage),autoAdvanceToNextLevel=0,base_setupLevel(),setupLevel(),document.getElementById("current-level-text").innerHTML=CURRENT_LEVEL_TEXT}function draw(){clear(),image(backgroundImage,0,0),currentLevel>UNLOCK_GRID_LEVEL&&drawGrid(),playerInput(),gravity(player),player.shapeColor="Aqua",player.display(),drawSprites(),resetOnGameOver(),base_drawLevel(),drawLevel(),fill("yellow"),noStroke(),textSize(18),textFont(pixelFont),goalReached&&levelComplete(),player.overlap(goal)&&!goalReached&&(showNextLevelButton(),goalReached=!0,autoAdvanceToNextLevel=frameCount+8*frameRate()),autoAdvanceToNextLevel&&frameCount>=autoAdvanceToNextLevel&&(autoAdvanceToNextLevel=0,nextLevel()),drawDialogue()}function destroyScene(){if(frameCount%20==0){var e=floor(random(0,CURRENT_LEVEL_TEXT.length)),o=CURRENT_LEVEL_TEXT.split("");o.splice(e,1),CURRENT_LEVEL_TEXT=o.join("")}allSprites.forEach(function(e){e.position.y++,e.rotation=e.rotation+random(0,15),e.position.y>HEIGHT+20&&e.remove()})}function keepPlatformsInScene(){for(var e=0;e<platforms.length;e++)platforms[e].velocity.x<0&&platforms[e].position.x-platforms[e].width/2<0&&(platforms[e].velocity.x=0,platforms[e].position.x=0+platforms[e].width/2),platforms[e].velocity.x>0&&platforms[e].position.x+platforms[e].width/2>WIDTH&&(platforms[e].velocity.x=0,platforms[e].position.x=WIDTH-platforms[e].width/2),platforms[e].velocity.y<0&&platforms[e].position.y-platforms[e].height/2-player.height<0&&(platforms[e].velocity.x=0,platforms[e].position.y=0+platforms[e].height/2+player.height),platforms[e].velocity.y>0&&platforms[e].position.y+platforms[e].height/2>HEIGHT&&(platforms[e].velocity.x=0,platforms[e].position.y=HEIGHT-platforms[e].height/2)}function isPlayerOnPlatform(){for(var e,o=0;o<platforms.length;o++)if(e=color(platforms[o].shapeColor),(255!=red(e)||0!=green(e)||0!=blue(e))&&(player.collide(platforms[o]),player.touching.bottom))return player.velocity.y=platforms[o].velocity.y,player.position.y=platforms[o].position.y-platforms[o].height/2-player.height/2,!0;return!1}function levelComplete(){player.position.x=goal.position.x,player.position.y=goal.position.y,player.velocity.x=0,player.velocity.y=0,0!=currentLevel&&(particles.addParticle(),particles.run()),rectMode(CENTER),strokeWeight(GOAL_REACHED_BOX_GUTTER),stroke(36,164,205),fill("#0B6481"),0==currentLevel&&(noStroke(),fill("red"),destroyScene()),rect(WIDTH/2,HEIGHT/2,GOAL_REACHED_BOX_WIDTH,GOAL_REACHED_BOX_HEIGHT),noStroke(),fill("white"),textAlign(CENTER),text(GOAL_REACHED_TEXT,WIDTH/2,HEIGHT/2+GOAL_REACHED_BOX_GUTTER,GOAL_REACHED_BOX_WIDTH,GOAL_REACHED_BOX_HEIGHT),levelCompleteImage?image(levelCompleteImage,300,HEIGHT/2-20):console.log("ERROR: Set unlocked item image"),currentLevel<maxLevel&&(fill("orange"),text("Click for next level...",WIDTH/2,HEIGHT/2+GOAL_REACHED_BOX_HEIGHT/2-GOAL_REACHED_BOX_GUTTER)),rectMode(CORNER)}function mouseClickedLevelComplete(){goalReached&&mouseY<=HEIGHT/2+GOAL_REACHED_BOX_HEIGHT&&mouseY>=HEIGHT/2-GOAL_REACHED_BOX_HEIGHT&&nextLevel()}function makePlayerJump(e){player.setSpeed(e,270)}function createPlatform(e,o,t,l,a){var r=createSprite(e,o,t,l),i=color(a||"green");if(255==red(i)&&255==green(i)&&255==blue(i))throw new Error("Invalid color: "+a);return r.shapeColor=i,r.initX=e,r.initY=o,platforms.add(r),r}function resetOnGameOver(){player.position.y>HEIGHT+20&&(player.position.x=PLAYER_START_X,player.position.y=PLAYER_START_Y,platforms.forEach(function(e){e.position.x=e.initX,e.position.y=e.initY}))}function gravity(e){e.addSpeed(GRAVITY,270)}function playerInput(){keyIsDown(LEFT_ARROW)&&(player.position.x=player.position.x-5),keyIsDown(RIGHT_ARROW)&&(player.position.x=player.position.x+5)}function mouseClicked(){mouseClickedDialogue(),mouseClickedLevelComplete()}var WIDTH=640,HEIGHT=480,GRAVITY=-.4,PLAYER_START_X=20,PLAYER_START_Y=300,GOAL_REACHED_TEXT="Goal reached!",GOAL_REACHED_BOX_WIDTH=400,GOAL_REACHED_BOX_HEIGHT=160,GOAL_REACHED_BOX_GUTTER=7,CURRENT_LEVEL_TEXT="TODO: Set CURRENT_LEVEL_TEXT for this level!",UNLOCK_GRID_LEVEL=1,player,particles,platforms,goalReached,platformImage,levelCompleteImage,autoAdvanceToNextLevel;