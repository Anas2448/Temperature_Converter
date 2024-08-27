function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const tempUnit = document.getElementById('tempUnit').value;

    let celsius, fahrenheit, kelvin;

    if (tempUnit === 'celsius') {
        celsius = parseFloat(tempInput);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (tempUnit === 'fahrenheit') {
        fahrenheit = parseFloat(tempInput);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (tempUnit === 'kelvin') {
        kelvin = parseFloat(tempInput);
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}
