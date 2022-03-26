var snowImg;
var Boy, Boy1;


let snow = [];
let gravity;

let spritesheet;
let textures = [];

function preload(){
  snowImg = loadImage("snow2.jpg");
  Boy1 = loadImage("boy.png");

snowsong = loadSound("evel.mp3");
}


function setup() {
  createCanvas(800,400);
gravity = createVector(0,0.03);
let img = spritesheet;
for(let i =0; i < 300; i++) {
let x = random(width);
let y = random(height);
let design = spritesheet
snow.push(new Snowflake(x,y));
}

//boy
Boy=createSprite(400,300);
Boy.addImage(Boy1);
Boy.scale=0.3;

snowsong.play();

}

function draw() {
  background(snowImg);   
  drawSprites();
  
  

  snow.push(new Snowflake());
  for (flake of snow){
   flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

 // boy moving
 Boy.velocityX=0;
 Boy.velocityY=0;

 if(keyDown(LEFT_ARROW)){
  Boy.velocityX=-5;
  Boy.velocityY=0;
  }
  
  if(keyDown(RIGHT_ARROW)){
    Boy.velocityX=5;
    Boy.velocityY=0;
    }
  
  edges = createEdgeSprites();
  Boy.collide(edges);
  }
  
