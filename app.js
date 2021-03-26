// import functions and grab DOM elements
import {
    throwSelector,
    doesUserWin
} from './utils.js'

// buttons
const throwButton = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');

// outputs
const resultsEl = document.querySelector('#results');
const winsEl = document.querySelector('#total-wins');
const lossEl = document.querySelector('#total-losses');
const drawEl = document.querySelector('#total-draws');
const totalsEl = document.querySelector('#total-throws');

// initialize state
let wins = 0;
let losses = 0;
let ties = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
    const robotThrow = throwSelector();
    const userRadioSelection = document.querySelector('input:checked');
    const userThrow = userRadioSelection.value;
    console.log('robot chose ', robotThrow);
    const result = doesUserWin(robotThrow, userThrow);
    console.log('user chose', userThrow);
    console.log('result is...', result);

    // increment results
    if (result === 'tie') {
        ties++;
    } else if (result === 'lose') {
        losses++;
    } else {
        wins++;
    };

    resultsEl.textContent = `Your ${userThrow} vs my ${robotThrow} means you ${result}!`;
    winsEl.textContent = `Wins = ${wins}`;
    lossEl.textContent = `Losses = ${losses}`;
    drawEl.textContent = `Ties = ${ties}`;
    totalsEl.textContent = `Total Games = ${wins + losses + ties}`;

})