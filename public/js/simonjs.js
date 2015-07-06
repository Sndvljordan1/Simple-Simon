'use strict';
// var detonationTimer = 5;
// var intervalId = setInterval(function (){
//     if (detonationTimer == 0) {
//         alert('Game Over!');
        
//     // } else if (detonationTimer > 0) {
//     //     document.getElementById('timer').innerHTML = detonationTimer;
//     // }
//     // detonationTimer--;
//     }, 1000);
// });


// var board = ['1','2','3','4'];
// var game = [];
// var random = Math.floor((Math.random()*5)+1);

$('.triangle').click(function(e){
    var triangleClicked = $(this);
    triangleClicked.addClass('active');
    setTimeout(function(e){
        triangleClicked.removeClass('active');
    },250);
});

// function getReady() {
            
//             alert('Get Ready!')
//         };
//         var invader = document.getElementById('defuser');
//         defuser.addEventListener('click', defuseTheBOM, false);

$('#square').click(function(e){
    alert("Get Ready!");
    
});