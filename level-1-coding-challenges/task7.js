function combine(numArr1, numArr2) {

    const combinedArr = [];
    const maxLength = Math.max(numArr1.length, numArr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < numArr1.length) {
            combinedArr.push(numArr1[i]);
        }
        if (i < numArr2.length) {
            combinedArr.push(numArr2[i]);
        }
    }

    return combinedArr;
}

module.exports = { combine };