export function throwSelector() {
    const throwValue = Math.ceil(Math.random() * 3);
    if (throwValue === 1) {
        return 'rock';
    } else if (throwValue === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

export function doesUserWin(randomThrow, userThrow) {
    if (randomThrow === userThrow) {
        return 'tie';
    } else if ((randomThrow === 'rock' && userThrow === 'paper') || (randomThrow === 'paper' && userThrow === 'scissors') || (randomThrow === 'scissors' && userThrow === 'rock')) {
        //win++
        return 'win';
    } else {
        return 'lose';
    }
};