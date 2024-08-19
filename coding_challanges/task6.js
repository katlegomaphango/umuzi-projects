function task6(...numbers) {
    let max = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];   
        }
    }
    return max;
}

module.exports = { task6 };