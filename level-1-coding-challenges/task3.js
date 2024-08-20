function isSixtyFive(num1, num2) {
    const sum = num1+num2

    if (num1 === 65 || num2 === 65 || sum === 65) {
        return true;
    }

    return false
}


module.exports = { isSixtyFive };
