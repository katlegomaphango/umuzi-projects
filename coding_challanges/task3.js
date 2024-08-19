function task3(num) {
    result = num % 2

    if (result === 0) {
        return "even"
    } else {
        return "odd"
    }
}

module.exports = { task3 };