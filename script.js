'use strict';

let score = 20;
let highscore = 0;

// Shuffle Number function
function shuffleNumber() {
    let secretNumber = Math.trunc(Math.random()*20) + 1;
    return secretNumber;
};

// Function to display message according to the guesses
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
};

// Function to display score
function displayScore(score) {
    document.querySelector('.score').textContent = score;
};

let secretNumber = shuffleNumber();

// Callback Function for the algorithm of check btn
function algorithm() {
    let guess = document.querySelector('.guess').value;
    if(!guess) {
        displayMessage('⛔Not a number!!')
    }
    else if(guess == secretNumber) {
        displayMessage('🥳Correct Number!');
        // Manipulating CSS
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > secretNumber) {
        if(score > 1) {
            displayMessage('📈Too High!');
            score--;
            displayScore(score);
        }
        else {
            displayMessage('🥲You Lost');
            score = 0;
            displayScore(score);
        }

    }
    else if(guess < secretNumber) {
        if(score > 1) {
            displayMessage('📉Too Low!')
            score--;
            displayScore(score);
        }
        else {
            document.querySelector('.message').textContent = 'You lost';
            score = 0;
            displayScore(score);
        }

    }
};
// Callback function for action button
function again() {
    score = 20;
    displayScore(score);
    displayMessage('Start Guessing...');
    secretNumber = shuffleNumber();
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
};

// Press Enter key to click the check button
let input = document.querySelector('.guess');
input.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector('.check').click();
}
});


document.querySelector('.check').addEventListener('click', algorithm);
document.querySelector('.again').addEventListener('click', again);
