function task8(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60)
    let remainder = totalMinutes % 60
    let minutes = remainder //remainder / 60

    let hourStr = ""
    let minStr = ""

    if(hours === 1) {
        hourStr = " hour, "
    } else {
        hourStr = " hours, "
    }

    if(minutes === 1) {
        minStr = " minute"
    } else {
        minStr = " minutes"
    }

    return hours + hourStr + minutes + minStr
}

module.exports = { task8 };