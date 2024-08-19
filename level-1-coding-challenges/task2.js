function hasThree(num1, num2) {
    if(num1 < 0 || num2 < 0) throw "Error: Negative inputs not allowed"

    const sum = num1+num2

    if(num1 === 3 || num2 === 3) {
        if(String(sum).includes('3')) {
            return true
        }
    }
    return false
}


module.exports = { hasThree };
