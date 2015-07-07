'use strict';

var userInput = []
var gameSequence = [];

//initiate game
$('#square').click(function(e){
    alert("Hi! I'm Simon!")
    if (confirm('Want to play a game?')){
            alert("Okay!");
         } else{
            alert('Please?')
            alert('Yay!!')
         }
    alert("Get Ready!");
    getRandomTriangle();
    playGame();
});
//animation function
function animateTriangle(id) {
    $('#' + id).addClass('active');
    setTimeout(function(){
        $('#' + id).removeClass('active');
    },250);
};
//grab triangle and input to game array
function getRandomTriangle() {
    var triangle = $('.triangle');
    var rand = Math.floor(Math.random()*4);
    var buttonToAnimate = triangle[rand];
    var id = buttonToAnimate.getAttribute('id');
    gameSequence.push(id);
}
//run game turn
function playGame(){
    var i=0;
    var intervalId = setInterval(function(){
        if(i>=gameSequence.length){
            clearInterval(intervalId);
        }
        animateTriangle(gameSequence[i]);
        i+=1;
    },500);
}
//allow user input to have value
$('.triangle').click(function(e){
    var triangleClicked = $(this).attr('id');
    animateTriangle(triangleClicked);
    userInput.push(triangleClicked);
    compareArrays();


});
//compare input in each
function compareArrays() {
    var sequenceMistake = false;
    // check if simon and user arrays are the same
    for (var i = 0; i < userInput.length; i++) {
        // if they are not the same change sequenceMistake var to true and call game over funtion, else if they are the same call copy function and go another round 
      if (gameSequence[i] != userInput[i]) {
        sequenceMistake = true;
        break;
      }
    }
    if (sequenceMistake) {
      alert("Game Over");
      location.reload(true)
    } else if (userInput.length == gameSequence.length) {
      copy();
    }
}
function copy() {
    userInput = [];
    getRandomTriangle();
    playback();
}
function playback() {
    $('#round').text('Round: '+ gameSequence.length);
    var i = 0;
    playGame();

}














