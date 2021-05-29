var PLAY = 1;
var END = 0;
var gameState = "play"

//Hulk 
var hulk;
var hulkStanding, hulkStandingLeft;
var hulkWalking, hulkWalkingLeft;
var hulkSmash, hulkSmashLeft;
var hulkPunch, hulkPunchLeft;
var hulkJump, hulkJumpLeft;

var evilCraig, evilCraigIdle, evilCraigRunning;

//IronMan
var ironMan, ironManImg;
var ironManFireBeam, ironManFireBeamImg;
var ironManMissile, ironManMissileImg;
var ironManShooting;

//Aquaman
var aquaman, aquamanImg,  aquamanImgLeft;
var aquamanJumpAttackAni, aquamanJumpAttackLeftAni;
var tridentSpinBlockAni, tridentSpinBlockLeftAni;
var trident, tridentAni, tridentLeftAni;
var tridentStrikeAni, tridentStrikeLeftAni;
var whaleAttack, whaleAttackAni,  whaleAttackLeftAni;
var aquamanSwimmingAni, aquamanSwimmingLeftAni;

//Ground
var ground;

//Buttons
var hulkButton;
var hulkBg;

var ironManButton;
var ironManBg;

var aquamanButton;
var aquamanBg;

//HPs of every hero
var hulkHp = 100;
var IronManHp = 100;
var aquamanHp = 100;
function preload(){

  //HULK
  hulkSmash = loadAnimation("landPollution/hulkSmash1.png","landPollution/hulkSmash2.png","landPollution/hulkSmash3.png",
  "landPollution/hulkSmash4.png","landPollution/hulkSmash5.png");
  hulkSmashLeft = loadAnimation("landPollution/hulkSmashLeft1.png","landPollution/hulkSmashLeft2.png","landPollution/hulkSmashLeft3.png",
  "landPollution/hulkSmashLeft4.png","landPollution/hulkSmashLeft5.png");


  hulkStanding = loadAnimation("landPollution/hulkWalking5.png");
  hulkStandingLeft = loadAnimation("landPollution/hulkWalkingLeft5.png");


  hulkWalking = loadAnimation("landPollution/hulkWalking1.png", "landPollution/hulkWalking2.png", "landPollution/hulkWalking3.png",
  "landPollution/hulkWalking4.png", "landPollution/hulkWalking5.png", "landPollution/hulkWalking6.png","landPollution/hulkWalking7.png");
  hulkWalkingLeft = loadAnimation("landPollution/hulkWalkingLeft1.png", "landPollution/hulkWalkingLeft2.png","landPollution/hulkWalkingLeft3.png",
  "landPollution/hulkWalkingLeft4.png", "landPollution/hulkWalkingLeft5.png", "landPollution/hulkWalkingLeft6.png",
  "landPollution/hulkWalkingLeft7.png");


  hulkPunch = loadAnimation("landPollution/hulkPunch1.png", "landPollution/hulkPunch2.png", 
  "landPollution/hulkPunch3.png", "landPollution/hulkPunch4.png");
  hulkPunchLeft = loadAnimation("landPollution/hulkPunchLeft1.png", "landPollution/hulkPunchLeft2.png", 
  "landPollution/hulkPunchLeft3.png", "landPollution/hulkPunchLeft4.png");

  hulkBg = loadImage("bg/hulkBg_2.jpg");

  //HULK EVIL
  evilCraigIdle = loadImage('landPollution/Evil/craigMullins-idle.png');

  evilCraigRunning = loadAnimation("landPollution/Evil/craigMullins-running0.png", "landPollution/Evil/craigMullins-running1.png", "landPollution/Evil/craigMullins-running2.png",
   "landPollution/Evil/craigMullins-running4.png", "landPollution/Evil/craigMullins-running5.png", "landPollution/Evil/craigMullins-running6.png", "landPollution/Evil/craigMullins-running7.png");

   //IronMan
  ironManImg = loadAnimation("airPollution/IronManFlying.png");
  ironManShooting = loadAnimation("airPollution/IronManShooting.png");
  ironManFireBeamImg = loadImage("airPollution/FIRE BEAM.png");
  ironManMissileImg = loadImage("airPollution/IRONMAN MISSILE.png");

  ironManBg = loadImage("bg/ironManBg_1.jpg");

  //Aquaman
  aquamanAni = loadAnimation("waterPollution/aquamanStanding.png");
  aquamanLeftAni = loadAnimation("waterPollution/aquamanStanding (2).png");


  aquamanJumpAttackAni = loadAnimation("waterPollution/aquamanJumpAttack_1.png", "waterPollution/aquamanJumpAttack_2.png",
  "waterPollution/aquamanJumpAttack_3.png", "waterPollution/aquamanJumpAttack_4.png", "waterPollution/aquamanJumpAttack_5.png");
  aquamanJumpAttackLeftAni = loadAnimation("waterPollution/aquamanJumpAttack_1 (2).png", "waterPollution/aquamanJumpAttack_2 (2).png",
  "waterPollution/aquamanJumpAttack_3 (2).png", "waterPollution/aquamanJumpAttack_4 (2).png", "waterPollution/aquamanJumpAttack_5 (2).png");


  tridentAni = loadAnimation("waterPollution/tridentStrikeTrident-3.png");
  tridentLeftAni = loadAnimation("waterPollution/tridentStrikeTrident-3 (2).png");


  tridentStrikeAni = loadAnimation("waterPollution/tridentStrike_1.png", "waterPollution/tridentStrike_2.png",
   "waterPollution/tridentStrike_4.png");
   tridentStrikeLeftAni = loadAnimation("waterPollution/tridentStrike_1 (2).png", "waterPollution/tridentStrike_2 (2).png",
   "waterPollution/tridentStrike_4 (2).png");


   whaleAttackAni = loadAnimation("waterPollution/whaleAttack_1.png", "waterPollution/whaleAttack_2.png", 
   "waterPollution/whaleAttack_3.png", "waterPollution/whaleAttack_4.png", "waterPollution/whaleAttack_5.png"
   , "waterPollution/whaleAttack_6.png");
   whaleAttackLeftAni = loadAnimation("waterPollution/whaleAttack_1 (2).png", "waterPollution/whaleAttack_2 (2).png", 
   "waterPollution/whaleAttack_3 (2).png", "waterPollution/whaleAttack_4 (2).png", "waterPollution/whaleAttack_5 (2).png"
   , "waterPollution/whaleAttack_6 (2).png");


   aquamanSwimmingAni = loadAnimation("waterPollution/Swimming_1.png", "waterPollution/Swimming_2.png", "waterPollution/Swimming_3.png", "waterPollution/Swimming_4.png",
   "waterPollution/Swimming_5.png", "waterPollution/Swimming_6.png", "waterPollution/Swimming_7.png", "waterPollution/Swimming_8.png");
   aquamanSwimmingLeftAni = loadAnimation("waterPollution/swimming_1 (2).png", "waterPollution/swimming_2 (2).png", "waterPollution/swimming_3 (2).png", "waterPollution/swimming_4 (2).png"
   , "waterPollution/swimming_5 (2).png", "waterPollution/swimming_6 (2).png", "waterPollution/swimming_7 (2).png", "waterPollution/swimming_8 (2).png",)


   tridentSpinBlockAni = loadAnimation("waterPollution/tridentSpin_1.png", "waterPollution/tridentSpin_2.png", "waterPollution/tridentSpin_3.png"
   , "waterPollution/tridentSpin_4.png", "waterPollution/tridentSpin_5.png", "waterPollution/tridentSpin_6.png"
   , "waterPollution/tridentSpin_7.png", "waterPollution/tridentSpin_8.png", "waterPollution/tridentSpin_9.png");
   tridentSpinBlockLeftAni = loadAnimation("waterPollution/tridentSpin_1 (2).png", "waterPollution/tridentSpin_2 (2).png", "waterPollution/tridentSpin_3 (2).png"
   , "waterPollution/tridentSpin_4 (2).png","waterPollution/tridentSpin_5 (2).png", "waterPollution/tridentSpin_6 (2).png",
    "waterPollution/tridentSpin_7 (2).png", "waterPollution/tridentSpin_8 (2).png", "waterPollution/tridentSpin_9 (2).png");


  aquamanBg = loadImage("bg/aquamanBg_1.jpg");
}
function setup() {
  createCanvas(1536,720);

  hulkButton = createImg('landPollution/hulkButton.png');
  ironManButton = createImg('airPollution/ironManButton1.jpg');
  aquamanButton = createImg('waterPollution/aquamanButton.jpg');


  // Ground
  ground = createSprite(400, 610, 2000, 20);
  ground.visible = false;

  //Hulk
  hulk = createSprite(400, 200, 50, 50);
  hulk.scale = 0.4;
  hulk.visible = false;

  hulk.addAnimation("hulk", hulkStanding);
  hulk.addAnimation("hulkLeft", hulkStandingLeft);

  hulk.addAnimation("hulkWalk", hulkWalking);
  hulk.addAnimation("hulkWalkLeft", hulkWalkingLeft);

  hulk.addAnimation("hulkPunching", hulkPunch);
  hulk.addAnimation("hulkPunchingLeft", hulkPunchLeft);

  hulk.addAnimation("hulkSmash", hulkSmash);
  hulk.addAnimation("hulkSmashLeft", hulkSmashLeft);

  //hulkEvil
  evilCraig = createSprite(700, 100, 20, 20);
  evilCraig.scale = 0.5;
  evilCraig.visible = false;

  evilCraig.addAnimation("evilCraigIdle", evilCraigIdle);

  
  //IronMan
  ironMan = createSprite(displayWidth/2, 300, 30, 50);
  ironMan.visible = false;
  ironMan.scale = 0.8;
  ironMan.addAnimation("ironman",ironManImg);
  ironMan.addAnimation("ironmanShoot",ironManShooting);

  //Aquaman
  aquaman = createSprite(300, 200, 50, 50);
  aquaman.visible = false;

  aquaman.addAnimation("aquamanStanding", aquamanAni);
  aquaman.addAnimation("aquamanStandingLeft", aquamanLeftAni);

  aquaman.addAnimation("aquamanSwimming", aquamanSwimmingAni);
  aquaman.addAnimation("aquamanSwimmingLeft", aquamanSwimmingLeftAni);

  aquaman.addAnimation("aquamanJumpAttacking", aquamanJumpAttackAni);
  aquaman.addAnimation("aquamanJumpAttackingLeft", aquamanJumpAttackLeftAni);

  aquaman.addAnimation("tridentStriking", tridentStrikeAni);
  aquaman.addAnimation("tridentStrikingLeft", tridentStrikeLeftAni);

  aquaman.addAnimation("tridentSpinning", tridentSpinBlockAni);
  aquaman.addAnimation("tridentSpinningLeft", tridentSpinBlockLeftAni);

  aquaman.addAnimation("whaleAttacking", whaleAttackAni);
  aquaman.addAnimation("whaleAttackingLeft", whaleAttackLeftAni);

  }



function draw() {
  background(0); 
  
  ironManButton.position(500, 300);
  ironManButton.style('width', '150px');
  ironManButton.style('height', '100px');
  
  hulkButton.position(700, 300);
  hulkButton.style('width', '150px');
  hulkButton.style('height', '100px');

  aquamanButton.position(900, 300);
  aquamanButton.style('width', '150px');
  aquamanButton.style('height', '100px');

  //HULK ANIMATION

  hulkButton.mousePressed(function(){
    gameState = "hulkPlay";
    //aquaman.destroy();
    //ironMan.destroy();

    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.hide();
})

if(gameState==='hulkPlay'){
  background(hulkBg);
  hulk.visible = true;
  evilCraig.visible = true;

  hulk.velocityY = hulk.velocityY + 0.6;
  hulk.collide(ground);

  evilCraig.velocityY = evilCraig.velocityY + 0.6;
  evilCraig.collide(ground);
  
  hulk.collide(evilCraig);
  //HULK [
//Going Right
 if(keyDown(RIGHT_ARROW)){
    hulk.velocityX = 3;
    hulk.changeAnimation("hulkWalk", hulkWalking);

  }else{
    hulk.velocityX = 0;
    hulk.changeAnimation("hulk", hulkStanding);
    hulk.scale = 0.4;
  }

  //Going Left
  if(keyDown(LEFT_ARROW)){
    hulk.velocityX = - 3;
    hulk.changeAnimation("hulkWalkLeft", hulkWalkingLeft);
  }

  //Punching Right
  if(keyDown("w")){
    hulk.changeAnimation("hulkPunching", hulkPunch);
    hulk.scale = 0.7;
  }

  //Punching Left
  if(keyDown("q")){
    hulk.changeAnimation("hulkPunchingLeft", hulkPunchLeft);
    hulk.scale = 0.7;
  }

  //Smashing Right
  if(keyDown("d")){
    hulk.changeAnimation("hulkSmash", hulkSmash);
    hulk.scale = 0.5;
  }

  //Smashing Left
  if(keyDown("a")){
    hulk.changeAnimation("hulkSmashLeft", hulkSmashLeft);
    hulk.scale = 0.5;
  }

  //Jumping
  if(keyDown("space") && hulk.y >= 470){
    hulk.velocityY = -15;
  }
}

//IRONMAN ANIMATION

ironManButton.mousePressed(function(){
  gameState = 'ironManPlay';
  
  hulkButton.hide();
  ironManButton.hide();
  aquamanButton.hide();
})

  if(gameState === "ironManPlay"){
    background(ironManBg);
    ironMan.visible =true;

  //Going Left
  if(keyDown(LEFT_ARROW)){
    ironMan.velocityX = -5;
  }else{
    ironMan.velocityX = 0;
    ironMan.velocityY = 0;
    ironMan.changeAnimation("ironMan",ironManImg);
  }

  //Going Right
  if(keyDown(RIGHT_ARROW)){
    ironMan.velocityX = 5;
  }

  //Going Up
  if(keyDown(UP_ARROW)){
    ironMan.velocityY = -4;
  }

  //Going Down
  if(keyDown(DOWN_ARROW)){
    ironMan.velocityY = 4;
  }

  //For Shooting Beam
  if(keyWentDown("w")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManFireBeam = createSprite(ironMan.x + 160, ironMan.y - 8);
    ironManFireBeam.scale = 0.3;
    ironManFireBeam.addImage(ironManFireBeamImg);
    ironManFireBeam.velocityX = ironManFireBeam.velocityX + 10;
  }

  //For Shooting Missile
  if(keyWentDown("q")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManMissile = createSprite(ironMan.x + 150, ironMan.y);
    ironManMissile.scale = 0.3;
    ironManMissile.addImage(ironManMissileImg);
    ironManMissile.velocityX = ironManMissile.velocityX + 10;
  }
  }

// AQUAMAN ANIMATION

  aquamanButton.mousePressed(function(){
    gameState = "aquamanPlay"

  hulkButton.hide();
  ironManButton.hide();
  aquamanButton.hide();

})
if(gameState === "aquamanPlay"){
  background(aquamanBg);
  aquaman.visible =true;

  //Going Right
if(keyDown(RIGHT_ARROW)){
  aquaman.changeAnimation("aquamanSwimming",aquamanSwimmingAni);
  aquaman.velocityX = 7;
}else{
  aquaman.velocityX = 0;
  aquaman.velocityY = 0;
  aquaman.changeAnimation("aquaman",aquamanAni);
  aquaman.scale = 0.6;
}

//Going Left
if(keyDown(LEFT_ARROW)){
  aquaman.changeAnimation("aquamanSwimmingLeft",aquamanSwimmingLeftAni);
  aquaman.velocityX = -7;
}


//Going Up
if(keyDown(UP_ARROW)){
  aquaman.velocityY = -7;
 }

//Going Down
if(keyDown(DOWN_ARROW)){
  aquaman.velocityY = 7;
}

//For Shooting Beam
if(keyWentDown("space")){
  aquaman.changeAnimation("tridentStriking", tridentStrikeAni);

  trident = createSprite(aquaman.x + 160, aquaman.y - 8);
  trident.scale = 1;
  trident.addAnimation("trident", tridentAni);
  trident.velocityX = trident.velocityX + 10;
}

//For Shooting Missile
if(keyWentDown("q")){
  aquaman.changeAnimation("tridentStrikingLeft", tridentStrikeLeftAni);

  tridentLeft = createSprite(aquaman.x - 150, aquaman.y);
  trident.scale = 1;
  trident.addAnimation("tridentLeft", tridentLeftAni);
  trident.velocityX = trident.velocityX - 10;
  }
  }
drawSprites();
}
