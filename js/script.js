const incorrectBTN = document.getElementById('xmark'); //variable that gives access to x mark 
const correctBTN = document.getElementById('checkmark'); //varible that give access to checkmark
const guessWordEl = document.querySelector('.guess-this');
const buzzWord1El = document.querySelector('.buzzword1');
const buzzWord2El = document.querySelector('.buzzword2');
const buzzWord3El = document.querySelector('.buzzword3');
const buzzWord4El = document.querySelector('.buzzword4');


let scoreOneDisplay = document.querySelector('.team-one-score');


let currentCardIndex = 0; //index that indicates which card is currently being displayed
let time = 60; //seconds allowed per turn
let timerInterval;
let teamScoreOne = 0;
let teamScoreTwo = 0;

let cardModal = document.getElementById('card-modal');

function addToScore() {
    teamScoreOne++;
    writeScore();
    console.log('score one is: ', teamScoreOne);
    clearCard();
    updateCard();
}

function writeScore() {
    scoreOneDisplay.innerText = teamScoreOne;

}

correctBTN.addEventListener('click', addToScore);



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

    // question.answers.forEach(answer => {
    //     const button = document.createElement('button'); //creates a button
    //     button.innerText = buzzword.text; //changes the inner text of the button
    //     button.classList.add('btn');
    //     // button.addEventListener('click', () => selectAnswer(answer.correct));
    //     // answerButtons.appendChild(button);
    // });
}


