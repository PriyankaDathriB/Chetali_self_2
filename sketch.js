var gamestate;
var edges;
var bunnyImg;
var snakeImg,fireImg,wildPlantImg, carrotImg;



function preload() {
  bunnyImg = loadImage("images/bunny.png");
  snakeImg = loadImage("images/snake.png");
  fireImg = loadImage("images/fire.png");
  wildPlantImg = loadImage("images/wildPlant.png")
  carrotImg = loadImage("images/carrot1.png");
}

function setup() {

  createCanvas(displayWidth, displayHeight);
  //creating objects and giving them size and animation

  
  createComponents();
    
  //gamestate to form different stages of game
  gamestate = "serve";
  edges = createEdgeSprites();
  
}

function draw(){

  //to clear the screen 
  background("green");
     
   
        //(special poin to remember and to understand){
      // 1::IF GAME STATE IS SERVE THEN TEXT ....
      // 2::WHEN GAME STATE IS SERVE AND SPACE IS PRESSED THN MOVE THE snake,movingdisk and wildplant BY THE GIVEN VILOCITY
      // 3::IF ONCE SPACE IS PRESSED THAN GAMESTATE WILL CHANGED INTO GAMESTATE PLAY.}
     
// place information in the centre
  if (gamestate === "serve"){
    text("press space to serve",200,150);
   
    if (keyDown("space")){
      //gamestate serve will convert into gamestate play
      serve();
      gamestate = "play";
    }
   
  }
  

  else if(gamestate === "play"){
    
    //making bunny move with the arrow keys
    if (keyDown(LEFT_ARROW)){
      bunny.x = bunny.x-2;
    }
  
    if (keyDown(RIGHT_ARROW)){
      bunny.x = bunny.x+2;
    }
  
    if (keyDown(DOWN_ARROW)){
      bunny.y = bunny.y+2;
    }
    //making bunny jump
    if (keyDown("UP_ARROW")){
      bunny.y = bunny.y-2;
    } 
    
    //game end state change
    if (bunny.isTouching(wildplant) || bunny.isTouching(fire1) || bunny.isTouching(snake)
        || bunny.isTouching(fire2) || bunny.isTouching(fire3)){
      text("game over",200,150);
      gamestate = "end";
     // playSound("assets/wildplant.mp3", false);
    }

    //game win state change

  }
  
  else if(gamestate === "win") {
      stroke=0;
      fill=0;
      textsize=(200);
      text("congratulations bunny reached the carrot",50,150);
      snake.velocityX=0;
      wildplant.velocityX=0;
      movingdisk.velocityX=0;
      bunny.velocityX=0;
      bunny.velocityY=0; 
  }
 
  else {
    stroke=0;
      fill=0;
      textsize=(200);
      text("Sorry better luck next time",50,150);
      snake.velocityX=0;
      wildplant.velocityX=0;
      movingdisk.velocityX=0;
      bunny.velocityX=0;
      bunny.velocityY=0; 
  }
       
      
  
  //giving function to all the objects to bounce off from somthing
  snake.bounceOff(edges[0]);
  snake.bounceOff(edges[1]);
  
  wildplant.bounceOff(edges[0]);
  wildplant.bounceOff(edges[1]);
  
  movingdisk.bounceOff(edges[0]);
  movingdisk.bounceOff(edges[1]);
  
  
 
//making the bunny colide with all the bridges and disks
  bunny.collide(bridge1);
  bunny.collide(bridge2);
  bunny.collide(bridge3);
  bunny.collide(bridge4);
  bunny.collide(bridge5);
  bunny.collide(movingdisk);
  wildplant.collide(bridge1);
  wildplant.collide(bridge2);
  bunny.collide(edges);
      

  //to display all the sprites
  drawSprites();

  }

function serve(){
   //giving movement to snake
   snake.velocityX=3;
   //giving movement to wildplant
   wildplant.velocityX=4;
   //giving movement to disk
   movingdisk.velocityX=3;
}

function reset(){
  snake.x=130;
  snake.y=385;
  snake.velocityX=0;
  snake.velocityY=0;
  wildplant.x=180;
  wildplant.y=320;
  wildplant.velocityX=0;
  wildplant.velocityY=0;
  movingdisk.x=200;
  movingdisk.y=120;
  movingdisk.velocityX=0;
  movingdisk.velocityY=0;
  bunny.x=30;
  bunny.y=370;
}









