function createComponents() {

  
    bunny = createSprite(30,370,30,40);
    bunny.addImage(bunnyImg);
    bunny.scale = 0.3;

    
    snake = createSprite(130,385,115,20);
    snake.addImage(snakeImg);
    snake.scale = 0.3;
  
    fire1 = createSprite(281,210,20,25);
    fire1.addImage(fireImg);
    fire1.scale = 0.2;
    
    fire2 = createSprite(240,210,20,25);
    fire2.addImage(fireImg);
    fire2.scale = 0.2;
    
    fire3 = createSprite(200,210,20,25);
    fire3.addImage(fireImg);
    fire3.scale = 0.2;
   
    carrot = createSprite(374,29,20,20);
    carrot.addImage(carrotImg);
    carrot.scale = 0.1;

    wildplant = createSprite(180,320,20,20);
    wildplant.addImage(wildPlantImg);
    wildplant.scale = 0.1;
     
    bridge1 = createSprite(130,340,130,20);
    bridge1.shapeColor = ("brown");
   
    bridge2 = createSprite(225,340,110,20);
    bridge2.shapeColor = ("brown");
  
    bridge3 = createSprite(240,240,120,20);
    bridge3.shapeColor = ("brown");
    
    bridge4 = createSprite(30,220,100,20);
    bridge4.shapeColor = ("brown");
    
    bridge5 = createSprite(370,70,150,20);
    bridge5.shapeColor = ("brown");
    
    
    
    movingdisk = createSprite(200,120,100,20);
    movingdisk.shapeColor = ("BLACK");
   
  
    
    tree1 = createSprite(342,356,20,20);
    //tree1.setAnimation("fantasytree_05_1");
    //tree1.scale = 0.3;
    
    tree2 = createSprite(55,58,20,20);
   // tree2.setAnimation("fantasytree_05_1");
   // tree2.scale = 0.3;*/
  }