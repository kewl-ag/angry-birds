const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bg;
var platform;
var log6;
var chain;
function preload(){

bg = loadImage("sprites/bg.png");


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,70,70);
    box2 = new Box(920,380,70,70);
    pig1 = new Pig(810,380,50,50);
    log1 = new Log(810,310,300,PI/2);
    ground = new Ground(600,height,1200,50);
    platform = new Ground(150,300,300,150);
    box3 = new Box(700,280,70,70);
    box4 = new Box(920,280,70,70);
    box5 = new Box(810,180,70,70);
    pig2 = new Pig(810,280,50,50);
    log2 = new Log(810,210,300,PI/2);
    log3 = new Log(755,110,150,PI/7);
    log4 = new Log(860,110,150,-PI/7);

    bird = new Bird(200,60,50,50); 


chain = new Slingshot(bird.body,{x : 200,y : 60});

}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    ground.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    platform.display();
    chain.display();
}


function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){

if(keyCode === 32){

chain.attach(bird.body);

}

}