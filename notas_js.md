# CURSO JAVASCRIPT FREECODECAMP
## Asignar el valor de una varibale a otra variable
```javascript
var a = 5;
var b = a;
console.log(a); //5
console.log(b); //5

var a  = 5;
var b; //no le asigna el valor directamente
b = a; //le asigna después y es lo mismo
console.log(a); //5
console.log(b); //5

```
## Inicializar variables
```javascript
var x = 9; // Inicializando la variable
var mi Idioma = "Español"; //camelCase para creación de variables
```
## Variables no inicializadas
```javascript
var a;
var b;
console.log(a); //undefined
a = 56;
console.log(a) //56
```
## Mayúsculas y minúsculas
Js es sensible a las mayúsculas y minúsculas
```javascript
var miVariable = 5;
console.log(MIVARIABLE); //ReferenceError: MIVARIABLE no está definida
console.log(MiVariable); //Error
```
> Tiene que ser la combinación especifica de letras (Case sensitive)
## Suma
```javascript
var suma = 7 + 12;
console.log(suma); //19
```
## Resta
```javascript
var resta = 15 - 5; // 10 (positivo)
resta = 5 - 15; // -10 (negativo)
resta = 15 - 15; // 0
```
## Multiplicación
```javascript
var producto = 5 * 3;
console.log(producto) // 15

producto = 9 * 0; // 0
producto = -5 * 6; -// 30
```
## División
```javascript
var cociente = 20 / 2; //10
cociente = 17 / 31; // 0.5483870967741935
cociente = 3 / 0; // Infinity
```
## Número decimales
```javascript
var miNumeroDecimal = 23.4;

var peso = 78.34;
```
## Multiplicar Numeros decimales
```javascript
var producto = 3.4 * 10.4; // 35.36
producto = 2.4 * 4; // 9.6
producto = 6 * 8.9; // 53.4000000000006
producto = 3.6 * 0.0; //0
producto = -5.7 * 3.4 // -19.38
```
## Resto de una división
```javascript
var resto = 15 % 5; //0 (el resto de la división es 0)
```
## Incrementar el valor de una variable
```javascript
var librosComprados = 105; // valor inicial
// Opción 1
librosComprados = librosComprados + 1; // 106

// Opción 2
librosComprados++; //107 (incrementa en 1);

```
## Reducir el valor de una variable
```javascript
var numeroDeEstudiantes = 256;
numeroDeEstudiantes = numeroDeEstudiantes - 1; //255
numeroDeEstudiantes--; //254 
```
## Asignación de Suma
Si necesitamos incrementar en otro valor que no sea 1
```javascript
var a = 23;
a = a + 5; //28

//Otra manera
a += 5; //28 ("añade 5 al valor actual de 'a' y asígnalo a esa variable)
```
* Se puede sumar cualquier cantidad. No solamente 5 o un número entero
```javascript
var totalVentas = 13567.34; //13567.34
totalVentas += 345.67; //13913.01

```