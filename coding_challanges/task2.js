function task2(name) {
    if (name === undefined || name.length === 0 || name.trim().length === 0) {
        console.log("Hello Friend!")
    } else {
        console.log("Hello " + name + "!")
    }
}

module.exports = { task2 };