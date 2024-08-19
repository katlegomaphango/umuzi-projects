function task7(celsiusTemp) {
    // (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
    let fahrenheit = (celsiusTemp * (9/5)) + 32

    return fahrenheit
}

module.exports = { task7 };