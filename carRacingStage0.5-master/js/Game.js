class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Player();
      var con = await database.ref('playerCount').once("value")
      if(con.exists()){
        playerCount=con.val()
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)

    cars = [car1,car2,car3,car4];


  }

  play(){
   
  form.hide();
  textSize(38)
  fill("BLACK")
  text("GAME STARTED",50,100)
  Player.getinfo()
  if(allplayers!==undefined){
    
  var place = 100
  var index = 0
  var x = 0
  var y 
  for(var ply in allplayers){
     index = index +1
     x = x+200
     y = displayHeight-allplayers[ply].distance
     cars[index-1].x=x
     cars[index-1].y=y
    if(index===player.index){
      cars[index - 1].shapeColor ="red"
      camera.position.x = displayWidth/2  
      camera.position.y = cars[index-1].y
    }

  //place = place + 20
  //textSize(15)
  //text(allplayers[ply].name+":"+allplayers[ply].distance,150,place)
  }
}
   if(keyDown("UP") && player.index!==null){
     player.distance+=10
     player.update();
   }
    drawSprites();
  }

}
