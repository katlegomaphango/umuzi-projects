function triangle(num, mode = "left") {

    if(mode !== "left" && mode !== "right" && mode !== "isosceles") {
        throw new Error("Please enter a correct mode")
    }

    if(mode === "right") printRightTriangle(num)
    if(mode === "isosceles") printIsoscelesTriangle(num)
    if(mode === "left") printLeftTriangle(num)
}

function printLeftTriangle(num) {
    if(num > 0) {
        for (let row = 1; row <= num; row++) {
            let line = '';
            for (let hashCount = 1; hashCount <= row; hashCount++) {
                line += '#';
            }
        
            console.log(line);
        }
    } else {
        for (let row = Math.abs(num); row >= 1; row--) {
            let line = ''
            for (let hashCount = 1; hashCount <= row; hashCount++) {
                line += '#'
            }
    
            console.log(line)
        }
    }
}

function printRightTriangle(num) {
    if(num > 0) {
        for (let row = 1; row <= num; row++) {
            let line = '';
            for (let spaceCount = 0; spaceCount < num - row; spaceCount++) {
                line += ' ';
            }
            for (let hashCount = 0; hashCount < row; hashCount++) {
                line += '#';
            }
        
            console.log(line);
        }
    } else {
        num = Math.abs(num)
        for (let row = num; row >= 1; row--) {
            let line = ''
            for (let spaceCount = 0; spaceCount < num - row; spaceCount++) {
                line += ' '
            }
            for (let hashCount = 0; hashCount < row; hashCount++){
                line += '#'
            }

            console.log(line)
        }
    }
}

function printIsoscelesTriangle(num) {
    if(num > 0) {
        for (let row = 1; row <= num; row++) {
            let line = '';
            for (let spaceCount = 0; spaceCount < num - row; spaceCount++) {
                line += ' ';
            }
            for (let hashCount = 0; hashCount < 2 * row - 1; hashCount++) {
                line += '#';
            }
        
            console.log(line);
        }
    } else {
        num = Math.abs(num)
        for (let row = num; row >= 1; row--) {
            let line = ''
            for (let spaceCount = 0; spaceCount < num - row; spaceCount++) {
                line += ' '
            }
            for (let hashCount = 0; hashCount < 2 * row - 1; hashCount++){
                line += '#'
            }

            console.log(line)
        }
    }
}

module.exports = { triangle };