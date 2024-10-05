document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;

    if (isNaN(inputTemp)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let targetUnit;

    switch (unit) {
        case 'Celsius':
            convertedTemp = (inputTemp * 9/5) + 32; // Celsius to Fahrenheit
            targetUnit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemp = (inputTemp - 32) * 5/9; // Fahrenheit to Celsius
            targetUnit = 'Celsius';
            break;
        case 'Kelvin':
            convertedTemp = inputTemp - 273.15; // Kelvin to Celsius
            targetUnit = 'Celsius';
            break;
        default:
            break;
    }

    if (targetUnit !== 'Celsius') {
        if (unit === 'Celsius') {
            convertedTemp = (convertedTemp - 32) * 5/9 + 273.15; // to Kelvin
            targetUnit = 'Kelvin';
        } else if (unit === 'Fahrenheit') {
            convertedTemp = (inputTemp + 459.67) * 5/9; // Fahrenheit to Kelvin
            targetUnit = 'Kelvin';
        } else {
            convertedTemp = (inputTemp * 9/5) + 491.67; // Kelvin to Fahrenheit
            targetUnit = 'Fahrenheit';
        }
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${targetUnit}`;
});
