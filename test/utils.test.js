// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { throwCompare } from '../utils.js';

const test = QUnit.test;

test('if this takes in 1, return rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = throwCompare(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if this takes in 2, return paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = throwCompare(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if this takes in 3, return scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = throwCompare(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
