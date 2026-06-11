let fahrenheit = parseFloat(prompt(`Digite a temperatura em °F:`));

let celsius = (fahrenheit - 32) / (9/5);

alert(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);