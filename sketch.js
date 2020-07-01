var gameState = 0, playerCount = 0
var player, game, form 
var database   
function setup(){
    createCanvas(1000,1000)
    database = firebase.database();
    game = new Game()
    game.getGS();
    game.start();
    //player = new Player

}
function draw(){



}