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
const audioElBuzzer = document.getElementById('buzzer');
const audioEltimer = document.getElementById('end-turn');
const audioElCorrect = document.getElementById('correct');
const audioElTimerEnd = document.getElementById('timer-running');
const audioElAww = document.getElementById('aww');


let scoreOneDisplay = document.querySelector('.team-one-score'); //points to team one display in the DOM
let scoreTwoDisplay = document.querySelector('.team-two-score'); //points to team two display in the DOM



let currentCardIndex = 0; //index that indicates which card is currently being displayed
let time = 0; //seconds allowed per turn
let timerInterval; //variable for the clock interval
let teamScoreOne = 0; //holds the score for team one
let teamScoreTwo = 0; //holds the score for team two
let whoseTurn = 0;

let cardModal = document.getElementById('card-modal');



function startTurnOne() {
if(time == 0){
    clearCard();
    updateCard();
    startTimer();
    time = 60; //resets the timer to 60 seconds
    clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly

    timerInterval = setInterval(updateTimer, 1000);

    whoseTurn = 1;
    console.log("It's team ", whoseTurn, " turn.");
    print();
}else{
    playTimerRunning();
}
}

function startTurnTwo() {
    if(time == 0){
    clearCard();
    updateCard();
    startTimer();
    time = 60; //resets the time to 60 seconds 
    clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly

    timerInterval = setInterval(updateTimer, 1000);
    whoseTurn = 2;
    console.log("It's team ", whoseTurn, " turn.");
    print();
    }else{
        playTimerRunning();
    }
}

function print() { //used just to make sure the whoseTurn varible is changing outside of the function. TO BE DELETED
    console.log("It's team ", whoseTurn, " turn outside of the function.");
}

//fuction that updates the time and subtract and extra second afer wrong answer
function updateTimer() {
    timeElement.innerText = time;
    if (time <= 0) {
        clearInterval(timerInterval);
        playBuzzer();
        playEndTurn();
    
    } else {
        time--;
    }
}

function startTimer() {

}





function addToScore() {
    if(time>=0){
    writeScore();
    console.log('score one is: ', teamScoreOne, 'score two is: ', teamScoreTwo);
    clearCard();
    updateCard();
    }
}

function pass() {
    clearCard();
    updateCard();
    playAww();
}

function writeScore() {
    if (whoseTurn == 1) {
        teamScoreOne++;
        scoreOneDisplay.innerText = teamScoreOne;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
        playCorrect();
    } else {
        teamScoreTwo++;
        scoreTwoDisplay.innerText = teamScoreTwo;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
        playCorrect();
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

function playBuzzer(){
    audioElBuzzer.play();
}

function playEndTurn (){
    audioEltimer.play();
}
function playCorrect(){
    audioElCorrect.play();
}

function playTimerRunning(){
    audioElTimerEnd.play();
}
function playAww(){
    audioElAww.play();
}

startOne.addEventListener('click', startTurnOne); //starts team one when Go button is pressed
startTwo.addEventListener('click', startTurnTwo); //starts team two when Go button is pressed


correctBTN.addEventListener('click', addToScore);

incorrectBTN.addEventListener('click', pass);