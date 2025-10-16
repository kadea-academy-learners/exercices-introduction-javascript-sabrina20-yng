// Exercice 5
// Écrivez votre code ici
function celsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

let celsius = 45;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "C equivaut a " + celsiusToFahrenheit(celsius) + "F");

module.exports = {celsiusToFahrenheit};