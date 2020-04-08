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
   return randomDice;
   //return this.scoreCheck(randomDice);
  
}
Player.prototype.scoreCheck = function(num1) {
   // var scoreChange = this.tempScore = 0;
   
   if(num1 === 1) {
   //  return this.hold(scoreChange);
      this.tempScore = 0 ; 
     alert(this.playerName + ", your turn is over, pass the mouse!");
   }else{
       this.tempScore += num1;
       
    }
}
Player.prototype.hold = function(num){
  this.score += this.tempScore;
  this.tempScore = 0;
}



// user interface logic

$(document).ready(function(){
   $("#player-input").submit(function(event){
      event.preventDefault();
      var name1 = $("#player1").val();
      var name2 = $("#player2").val();
      newPlayer1 = new Player(name1);
      newPlayer2 = new Player(name2);
      newGame = new Game(newPlayer1, newPlayer2);
      // console.log(newPlayer1);
      // console.log(newPlayer2);
      // console.log(newGame);
   });   
   $("#play").click(function() {
      console.log(newPlayer1);
      player1.roll = newPlayer1.toss();
       
      console.log(num + " num");
      var inputNumber = newPlayer1.scoreCheck();
      console.log("inputNumber " + inputNumber)
      var result1 = newPlayer1.hold(inputNumber);
      console.log("result1 " + result1)
      $(".score1").html(result1);
     // $(".score2").html(newPlayer2.score);
   })
});


