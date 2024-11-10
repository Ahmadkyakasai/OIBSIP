function convertTemperature() {
    // Get the input value and the selected unit
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    // Validate if the input is a number
    if (isNaN(temperature) || temperature === "") {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    // Convert the input to a number
    const tempValue = parseFloat(temperature);
    let convertedTemp = 0;
    let outputUnit = "";

    // Conversion logic based on the selected unit
    if (unit === "celsius") {
        convertedTemp = {
            fahrenheit: (tempValue * 9/5) + 32,
            kelvin: tempValue + 273.15
        };
        outputUnit = `${tempValue}°C is ${convertedTemp.fahrenheit.toFixed(2)}°F and ${convertedTemp.kelvin.toFixed(2)}K.`;
    } else if (unit === "fahrenheit") {
        convertedTemp = {
            celsius: (tempValue - 32) * 5/9,
            kelvin: (tempValue - 32) * 5/9 + 273.15
        };
        outputUnit = `${tempValue}°F is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.kelvin.toFixed(2)}K.`;
    } else if (unit === "kelvin") {
        convertedTemp = {
            celsius: tempValue - 273.15,
            fahrenheit: (tempValue - 273.15) * 9/5 + 32
        };
        outputUnit = `${tempValue}K is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.fahrenheit.toFixed(2)}°F.`;
    }

    // Display the result
    result.innerHTML = outputUnit;
}
