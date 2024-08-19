function columns(strings) {
    let maxLength = Math.max(...strings.map(word => word.length))

    for(let i = 0; i < maxLength; i++) {
        let line =''

        for(let k = 0; k < strings.length; k++) {
            line += (strings[k][i] ? strings[k][i] : ' ') + ' '
        }
        console.log(line)
    }
}

module.exports = { columns }