const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,box1,box2,box3,box4,box5,log1,bird1,pig1,pig2,log2,logs1,logs2,bg;

function preload(){

bg=loadImage("sprites/bg.png");



}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   /* var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);*/

    ground1 = new Ground(600,590,1200,20);
    box1 =new Box(835,550,70,70);
    box2 = new Box(1010,550,70,70);
    box3 = new Box(1010,500,70,70);
    box4= new Box(835,500,70,70);
    box5 = new Box(925,420,70,70);
    //console.log(ground1);
    log1 = new Logs(925,540,260,20);
    log2 = new Logs(925,460,260,20);
    pig1 = new Pig(925,550,55);
    pig2 = new Pig(925,500,55);
    bird1= new Bird(400,200,60);
    logs1 = new Log( 990,314,150,20,PI/4);
    logs2 = new Log( 850,305,150,20,-PI/4);
    rope = new Rope(bird1.body,{x: 200 ,y: 80});
}

function draw(){
    background(bg);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

   text(mouseX,200,200); 
text(mouseY,200,150);

    ground1.display();
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    log1.display();
    bird1.display();
    pig1.display();
    pig2.display();
log2.display();
logs2.display();
logs1.display();
rope.asbv();
}