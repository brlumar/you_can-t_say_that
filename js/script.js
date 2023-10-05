const incorrectBTN = document.getElementById('xmark'); //variable that gives access to x mark 
const correctBTN = document.getElementById('checkmark'); //varible that give access to checkmark
const guessWordEl = document.querySelector('.guess-this');
const buzzWord1El = document.querySelector('.buzzword1');
const buzzWord2El = document.querySelector('.buzzword2');
const buzzWord3El = document.querySelector('.buzzword3');
const buzzWord4El = document.querySelector('.buzzword4');
const timeElement = document.getElementById('time'); //variable that gives access to the clock in the DOM 
const startOne = document.getElementById('team-one-button'); //points to team one start button
const startTwo = document.getElementById('team-two-button'); //points to team two start button


let scoreOneDisplay = document.querySelector('.team-one-score'); //points to team one display in the DOM
let scoreTwoDisplay = document.querySelector('.team-two-score'); //points to team two display in the DOM



let currentCardIndex = 0; //index that indicates which card is currently being displayed
let time = 60; //seconds allowed per turn
let timerInterval;
let teamScoreOne = 0;
let teamScoreTwo = 0;
let whoseTurn = 0;

let cardModal = document.getElementById('card-modal');





function startTurnOne() {

    clearCard();
    updateCard();
    startTimer();
    whoseTurn = 1;
    console.log("It's team ", whoseTurn, " turn.");
    print();

}

function startTurnTwo() {

    clearCard();
    updateCard();
    startTimer();
    whoseTurn = 2;
    console.log("It's team ", whoseTurn, " turn.");
    print();

}

function print() { //used just to make sure the whoseTurn varible is changing outside of the function. TO BE DELETED
    console.log("It's team ", whoseTurn, " turn outside of the function.");
}

//fuction that updates the time and subtract and extra second afer wrong answer
function updateTimer() {
    timeElement.innerText = time;
    if (time <= 0) {
        clearInterval(timerInterval);
        //endQuiz();
    } else {
        time--;
    }
}

function startTimer() {

}





function addToScore() {
    writeScore();
    console.log('score one is: ', teamScoreOne, 'score two is: ', teamScoreTwo);
    clearCard();
    updateCard();
}

function pass() {
    clearCard();
    updateCard();
}

function writeScore() {
    if (whoseTurn == 1) {
        teamScoreOne++;
        scoreOneDisplay.innerText = teamScoreOne;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
    } else {
        teamScoreTwo++;
        scoreTwoDisplay.innerText = teamScoreTwo;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
    }
}





function showCard() {

    cardModal.style.display = 'flex';

}

function hideCard() {
    cardModal.style.display = 'none'
}

showCard();

function clearCard() {
    guessWordEl.innerText = '';
    buzzWord1El.innerHTML = '';
    buzzWord2El.innerHTML = '';
    buzzWord3El.innerHTML = '';
    buzzWord4El.innerHTML = '';
}

function updateCard() { //Function that updates the card information
    clearCard(); //function that clears previous question from the contatiner if it exist
    const word = cardData[currentCardIndex]; //stores the current questions into a const for easier, cleaner use in function
    guessWordEl.innerText = word.guessWord; //moves question to the display text
    buzzWord1El.innerText = word.tabooWords[0].buzzword;
    buzzWord2El.innerText = word.tabooWords[1].buzzword;
    buzzWord3El.innerText = word.tabooWords[2].buzzword;
    buzzWord4El.innerText = word.tabooWords[3].buzzword;
    currentCardIndex++;


}

startOne.addEventListener('click', startTurnOne); //starts team one when Go button is pressed
startTwo.addEventListener('click', startTurnTwo); //starts team two when Go button is pressed


correctBTN.addEventListener('click', addToScore);

incorrectBTN.addEventListener('click', pass);