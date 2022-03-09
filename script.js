'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);


    //There is no input

    if(!guess) {
        //document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

    //The number is correct
    }else if (guess === secretNumber){
        //document.querySelector('.message').textContent = '🎉 Correct Number!'
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

    //When number is not correct

    }else if (guess !== secretNumber){
        if(score > 1){ 
            //document.querySelector('.message').textContent = 
            //guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            //score--;
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('💥 You lost the game !')
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Again button restoring the game

document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing... ')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
});



