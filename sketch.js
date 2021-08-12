var iss , spacecraft, hasDocked = false ;


function preload (){
  backgroundImg = loadImage("Imgs/spacebg.jpg");
  issImg = loadImage("Imgs/iss.png");
  spacecraft1Img = loadImage("Imgs/spacecraft1.png")
  spacecraft2Img = loadImage("Imgs/spacecraft2.png")
  spacecraft3Img = loadImage("Imgs/spacecraft3.png")
  spacecraft4Img = loadImage("Imgs/spacecraft4.png")
}
function setup() {
  createCanvas(800,700);
  //createSprite(400, 200, 50, 50);
  spacecraft = createSprite(200,600,50,50);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.2
  iss = createSprite(300,100,20,20);
  iss.addImage(issImg);
  iss.scale = 0.5;
}
function draw() {
  background(backgroundImg);  
if(hasDocked===false){
  

if(keyDown (UP_ARROW)){
  spacecraft.y-=10
}
if(keyDown(DOWN_ARROW)){
  spacecraft.y += 10
  spacecraft.addImage(spacecraft2Img);
}
if(keyDown(LEFT_ARROW)){
  spacecraft.x-= 10
  spacecraft.addImage(spacecraft4Img)
}
if(keyDown(RIGHT_ARROW)){
  spacecraft.x += 10
  spacecraft.addImage(spacecraft3Img)
}
}
if(spacecraft.y < (iss.y+50)&& spacecraft.x === iss.x){
  hasDocked = true;
  textSize(20);
  fill("white")
text("DOCKING SUCCESSFUL", 400,350);
}

  drawSprites();
}