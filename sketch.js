var engine
var world
var a 
var g1,g2,g3
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,player
var hexagon_img,
Chain

function preload()
{
  hexagon_img=loadImage("hexagon.png")
}
function setup() {
  engine = Matter.Engine.create()
  world = engine.world
  createCanvas(900,1000);
  //createSprite(400, 200, 50, 50);
  g1=new base(500,300,350,10)
  b1=new box(350+20,190)
  b2=new box(410+20,190)
  b3=new box(470+20,200)
  b4=new box(470+20,100)
  b5=new box(470+20,0)
  b6=new box(410+20,90)
  
  b8=new box (530+20,190)
  b9=new box(530+20,90)
  b10 =new box(590+20,190)
  player=new hexa(100,100)
  Chain=new chain(player.body,{x:100,y:50})


}


function draw() {
  background(0); 
  Matter.Engine.update(engine)
  g1.display()
  b1.display("blue")
  b2.display(a)
  b3.display("green")
  b4.display("white")
  b5.display("orange")
  b6.display("purple")
  
  b8.display("magenta")
  b9.display("yellow")
  b10.display("crimson")
  hexagon_img.resize(100,100)
  player.display(hexagon_img)
  Chain.display()
  
  drawSprites();
}
function mouseDragged()
{

    Matter.Body.setPosition(player.body, {x:mouseX,y:mouseY})
    
    
}
function mouseReleased()
{
    
    Chain.escape()

}