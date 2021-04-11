var chalizard;
var venusaur;
var pikachu;
var blastois;
var snorlax;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var pokemon; 
var ani;
var sujal;

var form, player, game;

var cars, car1, car2;

var ash,ashi;
var gary,garyi;

function preload(){


   charlizard = loadImage("./Images/Charlizard.png");
   pikachu = loadImage("./Images/Pikachu.png");
   snorlax = loadImage("./Images/snorlax.png");
   venusaur = loadImage("./Images/Venusaur.png");
   blastois = loadImage("./Images/Blastoise.png");
   backgroundImage = loadImage("./Images/Pokemon Stadium.jpg");
   ashi = loadImage("./Images/Ash.png");
   garyi = loadImage("./Images/Gary.png");

 }
function setup(){
    createCanvas(displayWidth,displayHeight);
 
    // options = createSprite(displayWidth/2,displayHeight/2,200,600);
     //options.shapeColor("White");

     canvas = createCanvas(displayWidth - 20, displayHeight-30);
     database = firebase.database();
     game = new Game();
     game.getState();
     game.start();
      
     

}
function draw(){

 background(backgroundImage);

 if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  // changing gamestate to end
  if(gameState === 2){
     game.end(); 
     this.result.html("Hello " + player.name + "!!! Your rank is "+ player.rank);
     this.result.position(displayWidth/2 - 70, displayHeight/4); 
  }
}