const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
}
function setup(){
    var canvas = createCanvas(1200,660);
    engine = Engine.create();
    world = engine.world;
    Ball =new Bob(200,200)
    rope = new Rope(Ball.body,{x:200,y:50})
    ground = new Ground(600,640,1200,20)
    box = new Box(500,560,60,60)
    box2 = new Box(570,560,60,60)
    box3 = new Box(640,560,60,60)
    box4 = new Box(710,560,60,60)
    box11 = new Box(500,500,60,60)
   // box22 = new Box(570,600)
   // box33 = new Box(640,600)
   // box44 = new Box(710,600)
}

function draw(){
    background(0);
    Engine.update(engine);
    Ball.display()
    rope.display()
    ground.display()
    box.display()
    box2.display()
    box3.display()
    box4.display()
    box11.display()
}
function mouseDragged(){
    Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}
