function square(num, stringChar = '#') {
    for (let i = 1; i <= num; i++) {
        let line = ''
        for (let k = 1; k <= num; k++) {
            line += stringChar
        }

        console.log(line)
    }
}

module.exports = { square };