// business logic
var newPlayer1 ;
var newPlayer1 ;
function Player(name) {
   this.name = name,
   this.score = 0;
}

function Game(player1, player2){
   this.player1 = player1
   this.player2 = player2
   this.currentPlayer 
   this.winner
}
Player.prototype.roll1 = function(){
   var randomDice = Math.floor((Math.random() *6))+1;
   console.log(randomDice);
   this.score += randomDice;
}


// user interface logic

$(document).ready(function(){
   $("#player-input").submit(function(event){
      event.preventDefault();
      var name1 = $("#player1").val();
      var name2 = $("#player2").val();
      console.log(player1 + " " + player2);
      newPlayer1 = new Player(name1);
       newPlayer2 = new Player(name2);
       newGame = new Game(newPlayer1, newPlayer2);
      console.log(newPlayer1);
      console.log(newPlayer2);
      console.log(newGame);
    });   
   $("#play").click(function() {
      
      newPlayer1.roll();
   })
});

