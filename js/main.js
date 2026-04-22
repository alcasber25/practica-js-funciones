//Ejercicio 1: Saludo personalizado
//Crea una función llamada saludar que acepte un nombre como argumento y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".

const nombreUsuario = prompt("ingresa tu nombre");

const saludar = (nombreUsuario) => "¡Hola, " + nombreUsuario + "!";

const resultado = saludar(nombreUsuario);

console.log(resultado);


//Ejercicio 2: Suma de dos números
//Crea una función llamada suma que acepte dos números y devuelva la suma de estos.

function sumaNumero (a, b) {
    return a + b;
}

console.log (sumaNumero (6, 9))


//Ejercicio 3: Números pares Escribe una función llamada esPar que reciba un número y devuelva true si el número es par o false si es impar.

function esPar (number) {
    if (number%2 === 0){
   return true;
    } else {
        return false;
    }
}

console.log (esPar(4))
console.log (esPar(9))


//Ejercicio 4: Mayor de tres números
// Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.



function numeroMayor (num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        return num1 + " es el mayor"
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2 + " es el mayor"
    }
    else {
        return num3 + " es el mayor"
    }
}

console.log (numeroMayor(3,5,10))
console.log (numeroMayor(5,5,10))


//Ejercicio 5: Conversión de grados Celsius a Fahrenheit
//Crea una función llamada celsiusAFahrenheit que convierta una temperatura de grados Celsius a Fahrenheit usando la fórmula: F = (C * 9/5) + 32.

const temperaturaCelsius = Number (prompt("ingresa temperatura en celsius"));

const celsiusAFahrenheit = (c) => (c * 9 / 5) + 32;

const resultadoFinal = celsiusAFahrenheit(temperaturaCelsius);

console.log(resultadoFinal);

console.log(`Para ${temperaturaCelsius} Celsius, la temperatura es ${resultadoFinal} Fahrenheit`);

