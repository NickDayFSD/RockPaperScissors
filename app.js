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

// inputs
const userThrow = document.querySelector('input: checked');

// initialize state
let wins = 0;
let losses = 0;
let ties = 0;
let total = wins + ties + losses;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () {
    const robotThrow = throwSelector();
    console.log(robotThrow);

})