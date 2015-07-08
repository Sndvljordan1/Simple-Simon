'use strict';

var userIndex = 0;
var gameSequence = [];


//allow sound to be played 
function playSound(sound){
    document.getElementById('' + sound).play();
}


//allow user input to have value
$('.triangle').click(function(e){
    var triangleClicked = $(this).attr('id');
    animateTriangle(triangleClicked);
    if (triangleClicked == gameSequence[userIndex]){
        userIndex += 1;
        if (userIndex == gameSequence.length){
            copy();
            userIndex = 0;
        }
    } else {
        playSound('fail');
        alert("Game Over");
        location.reload(true);
    }
});
//initiate game
$('#square').click(function(e){
    alert("Hi! I'm Simon! Let's play a game! Get Ready!")
    playSound('start');
    gameSequence = [];
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
        if(i >= gameSequence.length){
            clearInterval(intervalId);
        }
        animateTriangle(gameSequence[i]);
        i+=1;
    },500);
}

//tells game to take new turn
function copy() {
    playSound('moveOn');
    getRandomTriangle();
    playGame();
    $('#round').text('Round: '+ gameSequence.length);
}

//page audio
(function(){
    var konamiCode = "38,38,40,40,37,39,37,39,66,65,13";
    var code = [];
    $(document).keyup(function(event){
        console.log(event.keyCode);
        code.push(event.keyCode);
        if (code.toString().indexOf(konamiCode) >= 0){
            playSound('woot');
        }
    })
})();