//Henter informasjonen som skrives inn.
const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

//runder nummeret, slik at du ikke får dust mange desimaler
function roundNum(num) {
    return Math.round(num*100)/100;
}
//Matten for celcius til kelvin og fahrenheit
function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}
//Matten for fahrenheit til kelvin og celcius
function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.68) * 5/9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}
//Matten for kelvin til celcius og fahrenheit
function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}
//kjører funksjonen når du taster inn tall
function main() {
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin)
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}
//Main man.
main();