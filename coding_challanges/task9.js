function task9(strText) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsOutput = []

    let removedSpaces = strText.toLowerCase().replaceAll(' ', "")
    let strArr = [...removedSpaces]

    for (const charElement of strArr) {
        if(vowels.includes(charElement)) {
            vowelsOutput.push(charElement)
        }
    }

    return vowelsOutput.sort()
}

module.exports = { task9 };