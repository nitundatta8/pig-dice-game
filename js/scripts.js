// business logic
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



// user interface logic

$(document).ready(function(){
   $("#player-input").submit(function(event){
      event.preventDefault();
      var name1 = $("#player1").val();
      var name2 = $("#player2").val();
      console.log(player1 + " " + player2);
      var newPlayer1 = new Player(name1);
      var newPlayer2 = new Player(name2);
      var newGame = new Game(newPlayer1, newPlayer2);
      console.log(newPlayer1);
      console.log(newPlayer2);
      console.log(newGame);
    });   
   
});

