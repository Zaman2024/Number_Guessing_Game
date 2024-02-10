const randomNum = Math.round(Math.random()*100 + 1);
console.log(randomNum)

const form = document.querySelector('.form');
const userInput = document.getElementById('guessNo');
    userInput.style.fontWeight = 'bolder';
    userInput.style.fontSize = '1.2rem';

const submit = document.querySelector('#submit');
const displayRslt = document.querySelector('#result');
const prev_guess = document.querySelector('#pre-gssNo');
const GuessesUsed = document.querySelector('#used Guesses');
const remainGuess = document.querySelector('#totalGuessNos');
    remainGuess.style.backgroundColor = '#fff';
    remainGuess.style.fontWeight = 'bolder';

const button = document.querySelector('button');

let prevGuesses = [];
let newGuesses = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guessNum = parseInt(userInput.value);
        validation(guessNum);
    });
}

function validation(guessNum){
    if(isNaN(guessNum)){
        displayRslt.innerHTML = 'Enter a valid Number';
    } else if(guessNum < 1) {
        displayRslt.innerHTML = 'Number is too low';
    } else if (guessNum > 100 ) {
        displayRslt.innerHTML = 'Number is too big';
    } else {
        prevGuesses.push();
        if (newGuesses === 11){
            endGame();
            gameOver();
            displayMassage(`Game Over! Random Number was : ${randomNum}`);
            displayRslt.style.textAlign = 'center';
            myFunction();
        }else {
            displayGuesses(guessNum);
            checkGuesses(guessNum);
        }
    }
}

function checkGuesses(guessNum){
    if (guessNum === randomNum){
        gameWin();
        displayMassage(' Congrs, You own');
        displayRslt.style.textAlign = 'center';
        congras();
        endGame();
    } else if (guessNum < randomNum){
        displayMassage(' Number is very low');
        displayRslt.style.textAlign = 'center';
    } else if (guessNum > randomNum) {
        displayMassage(' Number is very High');
        displayRslt.style.textAlign = 'center';
    }
}

function displayGuesses(guessNum){
    userInput.value = '';
    prev_guess.innerHTML += `${guessNum},`;
    newGuesses ++ ;
    remainGuess.innerHTML = `${11 - newGuesses}`;
    prev_guess.style.color = 'red';
    prev_guess.style.backgroundColor = '#fff';
    prev_guess.style.borderRadius = '10px';
    prev_guess.style.padding = '2px';
}

//----------- display Results -----------

function displayMassage(massage){
    displayRslt.innerHTML = `${massage}`
}
//-------- End Game-----------------------

function endGame(){
    userInput.value = '';
    prev_guess.innerHTML = '';
    userInput.setAttribute('disabled', ''); 
    submit.setAttribute('disabled', '')

}

//--------- Reset Game-------------------
function newGame(){
    button.addEventListener('click',(e)=>{
        if(e.target.id === btn){
            userInput.value = '';
            prev_guess.innerHTML += `${guessNum},`;
            newGuesses++;
            remainGuess.innerHTML = `${11 - newGuesses}`;
            prevGuesses = [];
            newGuesses = 1;
            playGame = true;
        }
    })
}

//------------- sound Effects ---------------
function gameOver(){
    let mySound = new Audio('gameOver.wav');
    mySound.play();
}

function gameWin(){
    let mySound = new Audio('gameWin.wav');
    mySound.play();
}

//-------- changing css style---------
//---------- @keyframe use by JavaScript-------------
function myFunction() {
    document.getElementById("result").animate([
        // keyframes
        { fontSize:'0.85rem',
        backgroundColor: 'rgba(225, 225, 225, 0.1)'
            
    },
        { fontSize: '1.1rem',
            backgroundColor: 'rgba(225, 225, 225, 0.8)'
    }
    ], {
        // timing options
        duration: 1000,
        iterations: 1,
        animationFillMode: 'forwards',
        animationTimingFunction:'ease'
    });

    displayRslt.style.color = 'red';
}

//-------------- Animation of Congratulation------------

function congras() {
    document.getElementById("result").animate([
        // keyframes
        { fontSize:'0.85rem',
        backgroundColor: 'rgba(225, 225, 225, 0.1)'
            
    },
        { fontSize: '1.1rem',
            backgroundColor: 'rgba(225, 225, 225, 0.8)'
    }
    ], {
        // timing options
        duration: 1000,
        iterations: 1,
        animationFillMode: 'forwards',
        animationTimingFunction:'ease'
    });

    displayRslt.style.color = 'green';
}