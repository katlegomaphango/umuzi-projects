function task10(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '');
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '');

    const lowerStr1 = cleanStr1.toLowerCase();
    const lowerStr2 = cleanStr2.toLowerCase();

    const commonLetters = [];

    for (let i = 0; i < lowerStr1.length; i++) {
        const currentChar = lowerStr1[i];

        if (lowerStr2.includes(currentChar) && !commonLetters.includes(currentChar)) {
            commonLetters.push(currentChar);
        }
    }

    commonLetters.sort();

    let commonLettersString = "";
    if (commonLetters.length > 0) {
        for (let i = 0; i < commonLetters.length; i++) {
            commonLettersString += commonLetters[i];
            if (i === commonLetters.length - 2) {
                commonLettersString += " and ";
            } else if (i !== commonLetters.length - 1) {
                commonLettersString += ", ";
            }
        }
    } else {
        commonLettersString += "no common letters";
    }

    console.log(commonLettersString)

}

module.exports = { task10 };