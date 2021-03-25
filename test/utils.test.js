// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { doesUserWin } from '../utils.js';

const test = QUnit.test;

test('if this takes in rock and rock, return tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tie';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if this takes in rock and paper, return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if this takes in rock and scissors, return lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
