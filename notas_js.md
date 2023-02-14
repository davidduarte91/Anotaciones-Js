# CURSO JAVASCRIPT FREECODECAMP

## Variables
Tipos de datos: undefined, null, boolean, string, symbol, number y object

En las variables podemos guardar valores. Los nombres de las variables deben ser descriptivos respecto de su valor

### Asignar el valor de una variable a otra variable
```javascript
var a = 5;
var b = a; // estamos asignando el valor
console.log(a); //5
console.log(b); //5

var a  = 5;
var b; //no le asigna el valor directamente
b = a; //le asigna después y es lo mismo
console.log(a); //5
console.log(b); //5

```
### Inicializar variables
```javascript
var x = 9; // Inicializando la variable x con valor 9
var miIdioma = "Español"; //camelCase para creación de variables
```
### Variables no inicializadas
Una variable que aún no tiene un valor asignado
```javascript
var a;
var b;
console.log(a); //undefined
a = 56;
console.log(a) //56
```
### Mayúsculas y minúsculas
Js es sensible a las mayúsculas y minúsculas
```javascript
var miVariable = 5;
console.log(MIVARIABLE); //ReferenceError: MIVARIABLE no está definida
console.log(MiVariable); //Error
```
> Tiene que ser la combinación especifica de letras (Case sensitive)

## Operaciones aritméticas

### Suma
```javascript
var suma = 7 + 12;
console.log(suma); //19
```
### Resta
```javascript
var resta = 15 - 5; // 10 (positivo)
resta = 5 - 15; // -10 (negativo)
resta = 15 - 15; // 0
```
### Multiplicación
```javascript
var producto = 5 * 3;
console.log(producto) // 15

producto = 9 * 0; // 0 -> actualizando el valor
producto = -5 * -6; // 30
```
### División
```javascript
var cociente = 20 / 2; //10
cociente = 17 / 31; // 0.5483870967741935
cociente = 3 / 0; // Infinity
```
### Números decimales
Se utiliza el punto.
```javascript
var miNumeroDecimal = 23.4;

var peso = 78.34;
```
### Multiplicar Numeros decimales
```javascript
var producto = 3.4 * 10.4; // 35.36
producto = 2.4 * 4; // 9.6
producto = 6 * 8.9; // 53.4000000000006
producto = 3.6 * 0.0; // 0
producto = -5.7 * 3.4 // -19.38
```
### Dividir números decimales
```javascript
var cociente = 5.0 / 2.0 // 2.5
cociente = 5 / 2 // 2,5 (da lo mismo)

cociente = 2.3 / 6.7 // 0.34328258297834
cociente = 4.2 / 0 // Infinity
```
### Resto de una división
Esta operación sirve para verificar si un número es par o impar
```javascript
var resto = 15 % 5; // 0 (el resto de la división es 0)
resto = 5 / 2 // 1
```
### Incrementar el valor de una variable
```javascript
var librosComprados = 105; // valor inicial
// Opción 1
librosComprados = librosComprados + 1; // 106

// Opción 2
librosComprados++; //107 (incrementa en 1);

```
### Reducir el valor de una variable
Usando el operador de decremento "--"
```javascript
var numeroDeEstudiantes = 256;
numeroDeEstudiantes = numeroDeEstudiantes - 1; //255
numeroDeEstudiantes--; //254 
```
### Asignación de Suma
Si necesitamos incrementar en otro valor que no sea 1
```javascript
var a = 23;
a = a + 5; // 28

//Otra manera. Es equivalente al ejemplo anterior
a += 5; // 28 ("añade 5 al valor actual de 'a' y asígnalo a esa variable)
```
* Se puede sumar cualquier cantidad. No solamente 5 o un número entero
```javascript
var totalVentas = 13567.34; //13567.34
totalVentas += 345.67; //13913.01
```
### Asignación de resta
Así como podemos aumentar el valor de una variable, también lo podemos reducir
```javascript
var b = 23;
b = b - 3; // 20

b -= 3; // 20 ("restamos el valor 3 y luego asignamos ese resultado a la variable)

var totalDeuda = 2446;
totalDeuda -= 345; // 2101
```
### Asignación de multiplicación
```javascript
var c = 23;
c = c * 2; //46

c *= 2; // 46 (con asignación)

// Otro ejemplo
var salario = 45000;
salario *= 5 // 225000
```
### Asignación de división
```javascript
var d = 39;
d = d / 3; //13

d /= 3; // 13

// Ejemplo
var salario = 45000;
salario /= 2; // 22500
```

## Variables con cadenas de caracteres
Los strings o cadenas se crean rodeando las palabras en comillas simples o dobles. 
Todos los caracteres (espacios, símbolos, numero) que estén dentro de esas comillas son considerados parte de la cadena
```javascript
var nombre = "Alan";
var apellido =  'Turing';
```
### Escapar comillas en cadenas de caracteres
Hay un solo caso donde  conviene escoger comillas simples o dobles
```javascript
var miCadena = "Soy una cadena de caracteres "con comillas""; // error, "con comillas" queda fuera de la cadena

// Para este caso se usa el "escape" que es la diagonal invertida (AltGr + ?). Ahora ya no habrá error e incluirá la palabra con comillas
var miCadena = "Soy una cadena de caracteres \"con comillas\"";
```
### Cadenas de caracteres con comillas simples
Para usar  menos caracteres intercalar comillas simples y dobles dentro de la cadena
```javascript
var miMeta;2
miMeta = 'Aprender a programar con "freeCodeCamp"'
```
### Secuencias de escape
- \'    Comilla simple
- \"    Comilla doble
- \\    Barra invertida (se usan dos para que se muestre la barra invertida)
- \n    Línea nueva
- \r    Retorno de carro
- \t    Tabulación
- \b    Retroceso
- \f    Salto de página
```javascript
console.log("Estoy aprendiendo \\ JavaScript") // Estoy aprendiendo \ JavaScript
```
### Concatenar cadenas de caracteres
Podemos unir cadenas de caracteres
```javascript
var nombreCompleto = "Alan" + "Turing" // AlanTuring
var nombreCompleto = "Alan" + " Turing" // Alan Turing (con espacio)
var nombreCompleto = "Alan" + " " + "Turing" // Alan Turing (concatenando un espacio)
```
### Construir cadenas con variables
Se puede utilizar la variable en cualquier parte
```javascript
var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo; // Estoy aprendiendo a programar
var mensaje = "Estoy aprendiendo a " + verbo + " con freeCodeCamp"; // Estoy aprendiendo a programar con freeCodeCamp
```
### Agregar variables a cadenas de caracteres
Para concatenar cadenas que están guardadas en variables
```javascript
var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freeCodeCamp";

// Esto de abajo se guardará en la variable "mensajeCompleto"
mensajeCompleto += parteFinal; // Estoy aprendiendo a programar con freeCodeCamp 
```
### Longitud de una cadena de caracteres
Encontrar longitud de una cadena con *length*. Los espacios y símbolos también se suman
```javascript
var miCadena;
miCadena = "A";
console.log(miCadena.length) // 1

miCadena = "JavaScript";
console.log(miCadena.length) // 10

miCadena = "¡Estoy aprendiendo a programar!";
console.log(miCadena.length) // 31
```
### Notación de corchetes: Primer caracter
Notación que nos permite acceder a los caraceteres individuales de una cadena. Comienza en cero

Cadena:  J a v a S c r i p t

Índices: 0 1 2 3 4 5 6 7 8 9
```javascript
var lenguajeDeProgramacion = "JavaScript";
console.log(lenguajeDeProgramacion[0]); // J

```
### Inmutabilidad de cadenas de caracteres
Una vez que definimos una cadena, no podemos cambiar sus elementos individuales, sus caracteres
```javascript
var miCadena = "Jola, Mundo"; // Jola, Mundo
miCadena[0] = "H" // Error. No se puede cambiar un solo caracter

// Lo que se hace es reasignar la cadena completa
miCadena = "Hola, Mundo"; // Hola, Mundo
```
### Notación de corchetes: enésimo caracter
Cómo usar los corchetes para acceder a cada elemento de la cadena
```javascript
var miCadena = "JavaScript";
console.log(miCadena[1]) // a
console.log(miCadena[2]) // v
...
console.log(miCadena[10]) // undefined (fuera del rango)
```
### Notación de corchetes: último caracter
Para acceder al último caracter sin saber cuál es el último índice. El último índice siempre es la longitud de la cadena -1
```javascript
var miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]) // t (dentro de los corchetes ejecuta 10 - 1 = 9)
```
### Notación de corchetes:  De derecha a izquierda
Para acceder al caracter último, penúltimo, antepenúltimo.
El penúltimo índice es longitud  - 2
```javascript
var miCadena = "JavaScript"
console.log(miCadena[miCadena.length - 2]) // p (el segundo caracter de derecha a izquierda)
console.log(miCadena[miCadena.length - 3]) // i

// también puedo guardar en una variable el número
var n = 3;
console.log(miCadena[miCadena.length - n]) // i
```
### Palabras en blanco (primer miniproyecto)
```javascript
let miSustantivo = "perro";
let miAdjetivo = "negro";
let miVerbo = "corrió";
let miAdverbio = "rápidamente";

/* Concatena las cadenas para crear una cadena que muestre un mensaje. Puedes cambiar los valores de las variables.

Por ejemplo: El perro negro corrió rápidamente a la tienda.
La bicicleta pequeña voló a la tienda lentamente.
*/

let palabrasEnBlanco = `El ${miSustantivo} ${miAdjetivo} ${miVerbo} a la tienda`
console.log(palabrasEnBlanco) // El perro negro corrió rápidamente a la tienda.
```
## Arreglos (Arrays)
Son estructuras de datos que nos permite almacenar valores en una misma estructura. Son muy parecidos a lo que consideraríamos una lista. Podemos acceder a cada elemento con su índice correspondiente
```javascript
var miArreglo = ["John", 24];
console.log(miArreglo) // ["John", 24]

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];

var notas = [95, 67, 89, 56]
```
### Arreglos anidados
Los arreglos pueden contener cualquier tipo de datos, incluyendo otros arreglos
```javascript
var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]] // arreglos anidados

var listaDePrecios = [["Camisa", 5.67, "S134"], ["Celular", 250, S356], ["Zapatos", 36.7, "S678"]]

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]]
```
### Acceder a los elementos de un arreglo
Los arreglos comienzan desde el índice cero
```javascript
var miArreglo = [10, 20, 30];
console.log(miArreglo[0]) // 10
console.log(miArreglo[1]) // 20

// ejemplo de cómo usarlo
var suma = miArreglo[0] + miArreglo[1] + miArreglo[2]
console.log(suma) // 60
```
### Modificar elementos de un arreglo
A diferencia de las cadenas, en los arreglos sí se pueden modificar los elementos individuales
```javascript
var miArreglo = [10, 20, 30] 

// cómo cambiar el primer valor
miArreglo[0] = 40;
console.log(miArreglo) // [40, 20, 30]

miArreglo[1] = "Hola";
console.log(miArreglo) // [40, 'Hola', 30]

miArreglo[1] = [1, 2, 3]
console.log(miArreglo) // [40, [1, 2, 3], 30]
```
### Acceder a arreglos multidimensionales
También se pueden acceder a elementos que sean arreglos o arreglos anidados
> Los arreglos que contienen arreglos anidados se consideran multidimensionales
```javascript
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Acceder al tercer elemento del segundo arreglo
console.log(miArreglo[1][2]) // 6

console.log(miArreglo[2][0]) // 7
```
### .push
Para agregar elementos al arreglo usamos el método push. Método es como una función que podemos llamar 
```js
var estaciones = ["Invierno", "Otoño", "Primavera"]
estaciones.push("Verano")
console.log(estaciones) // [ "Invierno", "Otoño", "Primavera", "Verano" ]
```
### .pop()
Método para remover el último elemento de un arreglo. **Pop** además de remover el elemento, lo retorna y se puede guardar en una variable
```js
var estaciones;
var estacion;
estaciones = [ "Invierno", "Otoño", "Primavera", "Verano" ]
var estacion = estaciones.pop()
console.log(estaciones) // [ "Invierno", "Otoño", "Primavera" ]
console.log(estacion) // Verano
```
### .shift()
Método de arreglo que nos permite remover el primer elemento del arreglo. También devuelve el valor eliminado
```js
var estaciones = [ "Invierno", "Otoño", "Primavera", "Verano" ]
estaciones.shift();
console.log(estaciones)
```
### .unshift()
Agregar un elemento al principio del arreglo. Hay que especificar qué elemento quiero agregar
```js
var estaciones = ["Invierno", "Otoño", "Primavera"]
estaciones.unshift("Verano"); // agregar al principio
console.log(estaciones) // ["Verano", "Invierno", "Otoño", "Primavera"]
```
### Lista de compras - Segundo mini proyecto
```js
var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]];

// Cereal
console.log(`Voy a comprar ${miListaDeCompras[0][1]} unidades de ${miListaDeCompras[0][0]}.`) // Voy a comprar 3 unidades de cereal.

// Leche
console.log(`Voy a comprar ${miListaDeCompras[1][1]} unidades de ${miListaDeCompras[1][0]}.`) // Voy a comprar 3 unidades de cereal.

// Galletas
console.log(`Voy a comprar ${miListaDeCompras[2][1]} unidades de ${miListaDeCompras[2][0]}.`) // Voy a comprar 4 unidades de galletas.

// Pan
console.log(`Voy a comprar ${miListaDeCompras[3][1]} unidades de ${miListaDeCompras[3][0]}.`) // Voy a comprar 4 unidades de galletas.

// Refresco
console.log(`Voy a comprar ${miListaDeCompras[4][1]} unidades de ${miListaDeCompras[4][0]}.`) // Voy a comprar 7 unidades de refresco.

// Pollo
console.log(`Voy a comprar ${miListaDeCompras[5][1]} unidades de ${miListaDeCompras[5][0]}.`) // Voy a comprar 7 unidades de pollo.
```
***
## Funciones
Con las funciones podemos escribir código que podemos reutilizar en nuestro programa
```js
function mostrarMensaje() {
    console.log("Hola mundo")
}
// Podemos llamar a la función las veces que queramos
mostrarMensaje(); // Hola mundo
mostrarMensaje(); // Hola mundo
mostrarMensaje(); // Hola mundo
```
### Argumentos
Vamos a dar a la función la capacidad de recibir valores. Lo que va dentro del paréntesis son los *parámetros*. Lo que va dentro de las llaves es el *cuerpo* de la función
```js
function sumar(a, b) {
    var suma = a + b; // asignamos la variable suma
    console.log(`El resultado de ${a} + ${b} es: ${suma} `)
}
sumar(3, 5) // El resultado de 3 + 5 es: 8 
sumar(13, 56) // El resultado de 13 + 56 es: 69 
```
> Los valores que pasamos a los parámetros se llaman *argumentos*

También podemos asignar los valores a variables y éstas agregarlas como argumentos
```js
var x = 3;
var y = 5;

sumar(x, y) // El resultado de 3 + 5 es: 8
```
NO solo podemos pasar números 
```js
function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(${cadena1} ${cadena2} ${cadena3})
}
concatenarTresCadenas("Estoy", "aprendiendo", "a programar") // Estoy aprendiendo a programar
```
### Ámbito global
No todas las variables pueden usarse en todas las distintas partes del programa.
Hay dos tipo de variables: **Globales** y **Locales**

- **Global**: Se puede usar en cualquier parte del programa porque está definida en el programa principal y no dentro de una función
```js
var miVariableGlobal = 5;
console.log(miVariableGlobal); // 5

// También podemos acceder a su valor dentro de una función
function miFuncion() {
    console.log(miVariableGlobal);
}
miFuncion() // 5
```
### Ámbito local
Las variables locales son locales para una función. Se definen dentro de la función y solo se pueden usar ahi
```js
function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal)
}
miFuncion(); // 4 (se comprueba que dentro de la función está definida)

// Intentando ingresar a la variable fuera de la función
console.log(miVariableLocal); // ReferenceError: miVariableLocal no está definida
```
### Ámbito global vs. ámbito local
Veremos qué sucede cuando se utiliza una varible local y otra global con el mismo nombre
```js
var miNombre = "Nora";

function mostrarMiNombre() {
    var miNombre = "Gino";
    console.log(miNombre)
}

// llamando a la función
mostrarMiNombre(); // Gino (la variable local tiene mayor prioridad dentro de la función)

// llamando a la variable global
console.log(miNombre) // Nora (usamos el valor de la variable global)
```
### Retornar un valor
Las funciones pueden retornar un valor además de recibir valores. También tienen propiedades especiales para poder interactuar con el programa principal
```js
function sumar(a, b) {
    return a + b; // con return se devuelve un valor
}
sumar(5, 3); // como se usa return no se mostrará el valor en la consola.
console.log(sumar(5, 3)) // 8
```
### undefined
Así como podemos retornar un valor específico de una función escribiéndolo esplícitamente con _return_, también podemos omitir esa sentencia. Podemos no retornar ningún valor de la función.

Pero aún en ese caso la función va a retornar un valor por defecto
```js
function sumar(a, b) {
    console.log(a + b); // no se está usando return, pero aún así mostrará en consola el valor de la suma
}
console.log(sumar(5, 3)) 
// 8 (cuando llamamos a la función)
// undefined (luego el valor retornado por esa función se muestra en la consola, pero como no dice "return" no retorna nada)
```
Para que sí retorne
```js
function sumar(a, b) {
    console.log(a + b);
    return a + b;
}

console.log(sumar(5, 3))
// 8
// 8
```
### Asignar un valor retornado
Cuando una función retorna un valor, podemos asignar ese valor a una variable y poder luego usar esa variable
```js
function sumar(a, b) {
    return a + b;
}

sumar(5, 3) // en la consola no muestra nada y tampoco lo estamos asignando a ninguna variable

// Ahora guardando en una variable
var resultado = sumar(5, 3);
console.lof(resultado) // 8
```
Otro ejemplo
```js 
function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("Javascript") // asignando a variable
console.log(miMeta)
```
### Permanece en Fila - Ejercicio
**Próximo en la fila**
En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función _proximoEnLaFila_ que tome un array (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función proximoEnLaFila debe retornar el elemento que fue removido.

Mi resolución:
```js
function proximoEnLaFila (array, numero) {
    array.push(numero); // agregar al final del arreglo
    console.log(array) // [ 1, 2, 3, 4 ]
    var removido;
    removido = array.shift();
    console.log(array) // [ 2, 3, 4 ]
    return removido;
}

console.log(proximoEnLaFila([1,2,3], 4)) // 1
```
Resolución de freecodecamp
```js
function proximoEnLaFila(arr, elem) {
    arr.push(elem); // agrega al final del arreglo
    return arr.shift() // remueve el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

console.log(`Antes: ${JSON.stringify(miArreglo)}`) // Antes: [1,2,3,4,5]
// Para ver el status del arreglo antes y después de llamar a la función

console.log(proximoEnLaFila(miArreglo, 6)) // 1

console.log(`Después: ${JSON.stringify(miArreglo)}`) // Después: [2,3,4,5,6]
```
> JSON.stringify: es útil para mostrar arreglos en la consola

### Valores booleanos
Son los valores `true` y `false`. Estos son muy útiles para condicionales, comparaciones de valores y cuando trabajemos con operadores lógicos

### Operador de igualdad
Se pueden comparar valores para ver si son o no iguales. Se puede hacer con el operador de igualdad
```js
console.log(5 == 5) // true
console.log(6 == 5) // false
console.log("Hola" == "Hola") // true
console.log("Hola" == "JavaScript) // false
console.log("Hola" == "hola") // false
console.log([1, 2, 3] == [1, 2, 3]) // false (no comparar arreglos con este operador porque no compara los elementos del arreglo, sino que compara si los arreglos en la memoria representan el mismo objeto)
console.log([1, 2, 3] == [4, 5, 6]) // false
```
### Operador de igualdad estricta
Operador que nos permite comparar si ambos tipos de datos son los mismos. 

Ver diferencia entre igualdad e igualdad estricta
```js
console.log(9 == 9) // true
console.log(9 == "9") // true (antes de realizar la operación, los operadores se convierten a un tipo de dato común y por eso el resultado dice true)

console.log(9 === 9) // true
console.log(9 === "9") // false (solamente se comparan en base a su valor y tipo. No hace la conversión como en el otro caso)
```
### Practica cómo comparar valores
Predecir cuál va a ser el valor de la comparación
```js
var a;
var b;

a = 5;
b = 5;

console.log(a == b); // true
console.log(a === b) // true

b = 8; // cambiando el valor

console.log(a == b) // false
console.log(a === b) // false

b = "5";

console.log(a == b) // true
console.log(a === b) // false

a =  "JavaScript";
b = "JavaScript";

console.log(a == b) // true
console.log(a === b) // true
```
### Operador de desigualdad
Este operador compara dos valores y retorna `true` si sus valores son distintos yn`false` si son iguales. Es lo opuesto al operador de igualdad.
```js
console.log(9 != 6) // true
console.log(9 != 9) // false
console.log("JavaScript" != "JavaScript") // false
console.log([1, 2, 3] != [1, 2, 3]) // true (no compara en base a sus elementos sino a cómo están represantos como objetos en la memoria del dispositivo)
```
### Operador de desigualdad estricta
Diferencia entre desigualdad y desigualdad estricta
```js
console.log(1 != "1") // false (por la conversión inicial, ambos son iguales)

console.log(1 !== "1") // true (porque también compara el tipo)
```
### Operador "mayor que"
Se utiliza el símbolo `>`
```js
console.log(6 > 5) // true
console.log(3 > 10) // false

// Js compara las cadenas según el orden alfabético
console.log("B" > "A") // true (la letra B viene después de la A en el orden alfabético)
console.log("ACB" > "ABC") // true (compara cada par y en la primera diferencia decide cual es mayor)

console.log("AB" > "A") // true (xq tiene más caracteres)

console.log("Mundo" > "Hola") // true (M viene después de H)
console.log("M" > "H") // true

var a = 15;
var b = 7;
console.log(a > b) // true
console.log(b > a) // false
```
### Operador "mayor igual que"
`>=` nos permite incluir el caso en que ambos operadores sean iguales
```js
console.log(5 > 5) // false (pregunta si 5 es estrictamente mayor que 5. No incluye el caso que 5 pueda ser igual a 5)
console.log(5 >= 5) // true
```

### Operador "menor que"
`<` 
```js
console.log(5 < 6) // true
console.log(10 < 3) // false
console.log("A" < "B") // true
console.log("ABC" < "ABC") // true

var a = 15;
var b = 7;

console.log(a < b) //false
console.log(b < a) // true
```
### Operador "menor igual que"
`<=` incluye el caso en que ambos valores sean iguales
```js
console.log(5 < 5) // false
console.log(5 <= 5) // true
```
### Operador lógico "and"
`&&`  
Los operadores lógicos nos permiten combinar distintas expresiones para formar condiciones un poco más elaboradas.

Tabla de verdad del operador AND  
Para: X && Y
| X | Y | X && Y |
| -- | -- | -- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

La expresión es verdadera solo cuando ambos operandos son verdaderos  
```js
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
```
```js
var a = 8;

console.log((a > 5) && (a < 10)) // true
// true && true --> true
```
```js
var a = 3;

console.log((a > 5) && (a < 10)) // false
// false && true --> false
```
```js
var a = 1;

console.log((a > 5) && (a == 10)) // false
// false && false --> false
```
### Operador lógico "or"
`||`  
Tabla de verdad del operador OR  
Para: X || Y

| X | Y | X o Y |
| -- | -- | -- |
| true | true | true |
| true | false | true|
| false | true | true |
| false | false | false |

La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos
```js
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
```
```js
var a = 8;

console.log((a < 5) && (a > 15)) // false

a = 2; 

console.log((a < 5) && (a > 15)) // true

a = 20;

console.log((a < 5) && (a > 15)) // true
```
### Operador lógico "not"
Operador que usamos para negar el valor de verdad de otra expresión

Tabla de verdad del operador NOT  
Para: !X  
| X | !X |
| -- | -- |
| true | false |
| false | true |

```js
console.log(!true) // false
console.log(!false) // true

var a = 8;

console.log(!(a > 5)) // !true --> false

console.log(!(a < 5)) // !false --> true
```
## Sentencias condicionales
Los condicionales nos permiten decidir si un bloque de código se ejecuta o no, dependiendo de una condición.
```js
var x = 5;

if (x > 2) { // tiene que ser verdadera para que se ejecute
    console.log("La condición es verdadera")
}

if (x < 2) { // falso
    console.log("Este código no se ejecutará")
}

if (x > 2 && x < 10) { // ee pueden omitir los paréntesis en cada par
    console.log("La condición es verdadera")
}
```
Otro ejemplo  
```js
var estacion = "Invierno";
if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno")
} // ¡Sí! Me encanta el invierno

estacion = "Verano";
if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno")
} // false, no se muestra nada
```
```js
var estacion = "Invierno";

if (estacion == "Invierno") {
    console.log("¡Sí! Me encanta el invierno")
}

console.log("Después del condicional...")
```
Se ejecutan en orden
```
¡Sí! Me encanta el invierno
Después del condicional...
```
### Clásula "else"
Podemos expandir las condicionales, por si el `if` es falso
```js
var x = 5;

if (x < 2) {
    console.log("La condición es verdadera")
} else {
    console.log("La condición es falsa")
}
```
`La condición es falsa`

Otro ejemplo
```js
var estacion = "Invierno";

if (estacion === "Verano") { // triple igualdad
    console.log("Comenzó el verano. Ya podemos ir a la playa)
} else {
    console.log("Ya quiero que llegue el verano para poder ir a la playa")
}
```
```
Ya quiero que llegue el verano para poder ir a la playa
```
### Clásula "if else"
Para manejar condiciones alternativas. Se ejecutará la primera condición que sea verdadera, aunque haya muchas verdaderas después
```js
function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisible entre 2")
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3")
    } else {
        console.log("No es divisible entre las opciones")
    }
}

clasificarValor(2) // Divisible entre 2
clasificarValor(15) // Divisible entre 3
clasificarValor(7) // No es divisible entre las opciones
```
### Condionales: orden lógico
Otro ejemplo de condicional y cada una de sus clásulas
```js
function clasificarValor(valor) {
    if (valor < 5) {
        console.log("Menor que 5");
    } else if (valor < 10) {
        console.log("Menor que 10");
    } else {
        console.log("Mayor o igual a 10")
    }
}

clasificarValor(2) // Menor que 10
```
### Encadenar sentencias "if...else"
Ejemplo de condicional con dos clásular `if else`
```js
function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5) {
        console.log("Bajo Peso");
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log("Normal");
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log("Soprepeso")
    } else {
        console.log("Obeso")
    }
}

indiceDeMasaCorporal(32.2)
```
### Código de golf - Mini proyecto
Aplicaremos operadores de comparación y condicionales, también definiremos una función.

En el juego de golf, cada hoyo tiene un par que representa el número promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.  
Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes. Par es el número promedio de golpes esperados

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad:

| Golpes | Retornar |
| -- | -- |
| 1 | "Hole-in-one!"|
| <= par - 2 | "Eagle"|
| par - 1 | "Birdie"|
| par | "Par"|
| par + 1 | "Bogey"|
| par + 2 | "Double Bogey"|
| >= par + 3 | "Go Home!"|

par y golpes siempre serán numéricos y positivos

```js
function puntajeDeGolf(par, golpes) { // 
    if (golpes == 1) {
        return "Hole-in-one!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return  "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home!"
    }
}

puntajeDeGolf(4, 1) // Hole-in-one
puntajeDeGolf(4, 4) // Par
```

### Sentencias Switch
En cierta manera una forma de reemplazar las condicionales. En base a un valor ejecutamos un bloque de código específico
```js
function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha"
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
        default:
            respuesta = "Elegi solo del 1 al 4";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(3))
```
Otro ejemplo
```js
var producto = "hamburguesa";

switch (producto) {
    case "pizza":
        console.log("La pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "Helado":
        console.log("El helado cuesta $2.78");
        break;
}
```
`Las hamburguesas cuestan $6.78`
### Sentencias Switch: Opción predeterminada
Se ejecuta si ninguna de las opciones anteriores corresponde
```js
function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default: // no necesariamente es la última opción
            idioma = "Inglés";
            break; // el break acá es opcional
    }
    return idioma;
}
console.log(seleccionarIdioma(1)) // Español
console.log(seleccionarIdioma(5)) // Inglés
```
### Sentencias switch: Múltiples casos
Con `switch` también podemos escoger ejecutar un código específico para varios valores
```js
function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        caso 1:
            volumen = "bajo";
            break;
        caso 2: // desde acá será "intermedio"
        caso 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen: "alto";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(5)) // alto
```
### Reemplazar "if...else" por "switch"
En ciertos casos podemos reemplazar condicionales por sentencias switch
```js
function seleccionarIdioma(valor) {
    var idioma;

    if (valor == 1) {
        idioma = "Español";
    } else if (valor == 2) {
        idioma = "Francés";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Inglés";
    }

    return idioma;
}
```
Reemplazando por `switch`
```js
function seleccionarIdioma(valor) {
    var idioma;

    switch (valor) {
      case 1:
          idioma = "Español";
          break;
      case 2:
          idioma = "Francés";
          break;
      case 3:
          idioma = "Italiano";
          break;
      default:
          idioma = "Inglés";
          break;
    }
    return idioma;
}
```
### Retornar valores booleanos
Ver cómo se puede retornar de manera muy concisa valores booleanos desde una función
```js
function esMenorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
```
Se puede reemplazar lo de arriba por una sola linea. Devuelve solamente `true` o `false` y cumple el mismo propòsito
```js
function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(4, 3)) // false
console.log(esMenorQue(3, 4)) // true
```
### Patrón de retorno anticipado
Cuando retornamos el valor de una función, en ese momento la función se detiene completamente. Cualquier linea que esté luego no se va a ejecutar
```js
function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós"); // en vscode se ve apagado y dice "se ha detectado código inaccesible". 

  // No se ejecutará xq está luego de return
}
```
Es útil cuando necesitamos detener la función por alguna condición específica
```js
function calcularRaizCuadrada(num) {
  if (num < 0) { // no existe raiz cuadrada para numeros negativos
    return undefined; // solo retornará si el if se cumple
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(4)) // 2
console.log(calcularRaizCuadrada(-4)) // undefined
```
Si no ponemos ese `if` retornará `NaN` que significa "Not a number". Pero queremos evitar eso y lo escribimos como el código anterior
```js
function calcularRaizCuadrada(num) {
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-4)) // NaN
```
### Mini proyecto - Conteo de cartas
En el juego de casino Blakjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de cartas altas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas"

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador debería apostar alto.
- Cuando el conteo es 0, el jugador debería apostar bajo,

| Cambio del conteo | Cartas |
| -- | -- |
| +1 | 2, 3, 4, 5, 6 |
| 0 | 7, 8, 9 |
| -1 | 10, 'J', 'Q', 'K', 'A' |

Nuestra meta es definir una función para contar cartas.

La función debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (observar la tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo.

El conteo actual y la decisión del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.