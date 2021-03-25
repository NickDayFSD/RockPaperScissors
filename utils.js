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

export function throwCompare(randomThrow, userThrow) {

}