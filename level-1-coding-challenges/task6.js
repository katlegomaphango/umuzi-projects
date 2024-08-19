function longest(stringArr) {
    if(Array.isArray(stringArr)) {
        stringArr = stringArr
    } else if(arguments.length > 1) {
        stringArr = Array.from(arguments)
    } else {
        stringArr = [stringArr]
    }

    let max = stringArr[0].length;
    let longestStrsArr = [stringArr[0]];

    for (let i = 1; i < stringArr.length; i++) {
        const current = stringArr[i].length

        if(current > max) {
            max = current
            longestStrsArr.length = 0
            longestStrsArr = [stringArr[i]]
        } else if (current === max) {
            longestStrsArr.push(stringArr[i])
        }
    }

    for(let k = 0; k < longestStrsArr.length; k++) {
        console.log(longestStrsArr[k])
    }

}

module.exports = { longest };