// business logic
var newPlayer1 ;
var newPlayer1 ;

function Player(name) {
   this.name = name,
   this.roll = 0,
   this.tempScore = 0,
   this.score = 0;
}

function Game(player1, player2){
   this.player1 = player1
   this.player2 = player2
   this.currentPlayer 
   this.winner
}

Player.prototype.toss = function(){
   var randomDice = Math.floor((Math.random() *6))+1;
   // return randomDice ;
   this.roll = randomDice;
   this.scoreCheck();
   // return this.scoreCheck(randomDice);
   
}
Player.prototype.scoreCheck = function() {
   // var scoreChange = this.tempScore = 0;
   console.log(this.roll + "---")

   if(this.roll === 1) {
   //  return this.hold(scoreChange);
      this.tempScore = 0 ; 
     alert(this.playerName + ", your turn is over, pass the mouse!");
   } else {
     this.tempScore += this.roll;
   }
   console.log(this)
}

Player.prototype.hold = function(){
   this.tempScore +=0;
}



// user interface logic

$(document).ready(function(){
   $("#player-input").submit(function(event){
      event.preventDefault();
      var name1 = $("#player1").val();
      var name2 = $("#player2").val();
      newPlayer1 = new Player(name1,true);
      newPlayer2 = new Player(name2);
      newGame = new Game(newPlayer1, newPlayer2);
      // console.log(newPlayer1);
      // console.log(newPlayer2);
      console.log(newGame);
   });   
   $("#play").click(function() {
      console.log(newPlayer1);
      newPlayer1.toss();
       
     
      var inputNumber = newPlayer1.scoreCheck();
      console.log("inputNumber " + inputNumber)
      var result1 = newPlayer1.hold(inputNumber);
      console.log("result1 " + result1)
      $(".score1").html(result1);
     // $(".score2").html(newPlayer2.score);
   })
});


