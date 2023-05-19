# CURSO JAVASCRIPT FREECODECAMP

Para abrir un archivo js con node, ir desde la terminal hasta la carpeta donde está el archivo y escribir "node index.js"
Sino "node index" sirve
## Variables
Tipos de datos: undefined, null, boolean, string, symbol, number y object
```js
let numero = 5;
let miVar = 5.2;
let nombre = "Bienvenidos";
let bool = true;
console.log(numero)
```

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
### Operador typeOf
```js
typeof 5; //number
typeof false; //boolean
typeof "Carlos"; //string
typeof undefined; // undefined
```
### Operadores post y pre incremento y decremento que añaden uno o restan uno a la variable numerica en la que se aplican.
```js
var x = 1; // x = 1
var y = ++x // x = 2, y = 2  pre-incremento, incrementa x en uno y luego devuelve y
var z = y++ + x // x = 2, y = 3, z = 4   devuelve z y luego incrementa y en uno
```
- *La tercera variable "z" se inicializa con el resultado de sumar "y" y "x", pero usando el operador ++ para "y". Como "y" ya tiene un valor de 2, se suma 2 con el valor actual de "x", que es 2 (ya que "x" fue incrementado previamente por la asignación a "y"). Por lo tanto, "z" obtiene el valor de 4.*
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
a += 5; // 28 ("añade 5 al valor actual de 'a' y asígnalo a esa variable")
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
var miMeta;
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
También se usan los backtips
```js
let miEdad = 31;
console.log("Mi edad es " + miEdad)
console.log(`Mi edad es ${miEdad}`)
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
console.log(estaciones) // [ "Otoño", "Primavera", "Verano" ]
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
console.log(miMeta) // Mi meta es aprender Javascript
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

console.log(proximoEnLaFila([1,2,3], 4))
```
```
[1, 2, 3, 4]
[2, 3, 4]
1
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
```js
!true // false -> indica lo contrario
!false // true
!!true // true -> vuelve a su estado original
```

### Operador de igualdad
Se pueden comparar valores para ver si son o no iguales. Se puede hacer con el operador de igualdad
```js
console.log(5 == 5) // true
console.log(6 == 5) // false
console.log("Hola" == "Hola") // true
console.log("Hola" == "JavaScript") // false
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
Este operador compara dos valores y retorna `true` si sus valores son distintos y `false` si son iguales. Es lo opuesto al operador de igualdad.
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
console.log("ABC" < "ABC") // false

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

console.log((a < 5) || (a > 15)) // false

a = 2; 

console.log((a < 5) || (a > 15)) // true

a = 20;

console.log((a < 5) || (a > 15)) // true
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

if (x > 2 && x < 10) { // se pueden omitir los paréntesis en cada par
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
```
La condición es falsa
```

Otro ejemplo
```js
var estacion = "Invierno";

if (estacion === "Verano") { // triple igualdad
    console.log("Comenzó el verano. Ya podemos ir a la playa")
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
### Condicionales: orden lógico
Otro ejemplo de condicional y cada una de sus cláusulas
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

clasificarValor(2) // Menor que 5
```
### Encadenar sentencias "if...else"
Ejemplo de condicional con dos cláusulas `if else`
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

indiceDeMasaCorporal(32.2) // Obeso
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

console.log(clasificarValor(3)) // gamma
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
```
Las hamburguesas cuestan $6.78
```
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
```js
var conteo = 0;

function contarCartas(carta) {
  var decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case 'K':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      conteo--;
  }
  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }
  return `${conteo} ${decision}`
}
console.log(contarCartas(2)); // 1 Apostar
console.log(contarCartas(3)); // 2 Apostar
console.log(contarCartas(7)); // 2 Apostar
console.log(contarCartas("K")); // 1 Apostar
console.log(contarCartas("A")); // 0 Esperar
```
## Crear Objetos
Los objetos nos permiten guardar la secuencia de un conjunto de propiedades que están relacionadas con sus correspondientes valores
```js
var miPerro = {
    c
}
```
> Se pueden omitir las comillas de los nombres de las propiedades si tienen una sola palabra.

Se pueden usar números como propiedades
```js
var miObjeto = {
    5: "cinco",
}
```
Si el objeto tiene una propiedad que no es una cadena, Js automáticamente las convierte a cadena en la representación interna del programa.

### Acceder a propiedades: Notación de punto
```js
var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};

// No hace falta las comillas para acceder a la propiedad
console.log(miPerro.nombre) // Gino
console.log(miPerro.edad) // 5
```
### Acceder a propiedades: Notación de corchetes
Opción alternativa para acceder a las propiedades de un objeto.

Para propiedades con nombres compuestos, solo se pueden usar `[]` porque con el punto daría _error_
```js
var miCuaderno = {
  color: "verde",
  categoria: 3,
  "numero de paginas": 200,
// numeroDePaginas: 200,  (se usa más así)
  "numero de hojas": 100
}

console.log(miCuaderno.color) // verde

console.log(miCuaderno["color"]) // verde (hay que rodear con comillas cuando se usan corchetes)

console.log(miCuaderno["numero de paginas"]) // 200

console.log(miCuaderno[numero de paginas]) // error (sin comillas)

console.log(miCuaderno.numero de paginas) // error (sin comillas)
```
> Rodear con comillas cuando se usan corchetes

### Acceder a propiedades: variables
Ahora veremos cómo podemos acceder a las propiedades del objeto usando una variable. En lugar de un valor escribimos que escribimos directamente entre corchetes, vamos a usar una variable.
```js
var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
}

var posicion = 4; // kiara566

console.log(resultados[posicion])

posicion = 2;

console.log(resultados[posicion]) //gino577
```
Para este caso solo se puede usar la notación de corchetes.

### Actualizar propiedades
Se pueden actualizar el valor de las propiedades para permitir que el objeto cambie durante la ejecución del programa.
```js
var mochila = {
  color: "azul",
  tamanho: "mediano",
  contenido: ["botella de agua", "cuaderno"]
};

console.log(mochila.color) // azul

// cambiando el valor de la propiedad color
mochila.color = "verde";

console.log(mochila.color) // verde

// Agregando un valor
console.log(mochila.contenido) // ["botella de agua", "cuaderno"]
mochila.contenido.push("lápiz");
console.log(mochila.contenido) // [ "botella de agua", "cuaderno", "lápiz" ]

// Reasignando una propiedad
mochila.contenido = [];
console.log(mochila.contenido) // []
```
### Agregar propiedades
También se pueden agregar nuevas propiedades a un objeto.
```js
var curso = {
    titulo: "Aprende JavaScript desde cero",
    idioma: "Español",
    duracion: 30,
};

// Intentando acceder a la propiedad antes de crearla. No se pùede
console.log(curso.vistas); // undefined

// Añadiendo una propiedad
curso.vistas = 34500;
console.log(curso.vistas) // 34500
```
Añadiendo con corchetes
```js
curso["vistas"] = 34500
console.log(curso.vistas) // 34500
```
### Eliminar propiedades
La palabra clave es `delete`
```js
var curso = {
  titulo: "Aprende JavaScript desde cero",
  idioma: "Español",
  duracion: 30,
};

console.log(curso.duracion) // 30

delete curso.duracion;

console.log(curso.duracion) // undefined (ya eliminado)

console.log(curso) // { titulo: "Aprende JavaScript desde cero", idioma: "Español" } (ya sin la propiedad duracion)
```
### Objetos para búsquedas
Veremos cómo podemos usar un objeto para reemplazar una sentencia switch con la estructura del siguiente código
```js
function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";

  switch (simbolo) {
      case "Al":
        elementoQuimico = "Aluminio";
        break;
      case "S":
        elementoQuimico = "Azufre";
        break;
      case "Cl":
        elementoQuimico = "Cloro";
        break;
      case "He":
        elementoQuimico = "Helio";
        break;
      case "B":
        elementoQuimico = "Boro";
        break;
      case "Li":
        elementoQuimico = "Litio";
        break;
  }
  return elementoQuimico;
}
```
Lo de arriba funciona pero es muy largo. Hacemos lo de abajo cuando necesitamos asociar propiedades a valores específicos
```js
function buscarElementoQuimico(simbolo) {
  var simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio"
}
return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al")) // Aluminio
console.log(buscarElementoQuimico("Cl")) // Cloro 
```
### Verificar propiedades
Podemos verificar si la propiedad existe o no antes de usarla.

`hasOwnProperty` es un método en JavaScript que se utiliza para determinar si un objeto tiene una propiedad especificada como propiedad propia del objeto, y no heredada del prototipo. Si es del objeto devuelve `true`, si es del prototipo devuelve `false`
```js
var miCuaderno = {
	color: "verde",
	categoria: 3,
	precio: 4.56
};

console.log(miCuaderno.hasOwnProperty("color")) // true
console.log(miCuaderno.hasOwnProperty("origen")) // false
```
Es muy útil para trabajar con condicionales. Si la última condición es verdadera devolverá `true`
```js
function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad]
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

var miCuaderno = {
	color: "verde",
	categoria: 3,
	precio: 4.56
};

console.log(verificarPropiedad(miCuaderno, "color")) // Propiedad: verde
console.log(verificarPropiedad(miCuaderno, "toString")) // El objeto no tiene esta propiedad
```
### Objetos complejos
Un arreglo con dos objetos que a la vez tienen propiedades
```js
var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: [
      "extra queso", 
      "champiñones",
      "piña"
    ],
    paraLlevar: true
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: [
      "estra queso",
      "pimenton"
    ],
    paraLlevar: false
  }
];

// Accediendo a sus propiedades
console.log(ordenesDePizzas[0].tipo) // margarita
console.log(ordenesDePizzas[0]["tipo"]) // margarita

console.log(ordenesDePizzas[0].toppings[1]) // champiñones
```
### Objetos anidados
Objetos dentro de otros objetos.
> Objetos anidados son útiles para aprender el formato `Json` (Javascript Object Notation)
```js
var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
      masa: {
        harina: "100 grs",
        sal: "1 cucharadita",
        agua: "1 taza"
      },
      cobertura: {
        azucar: "120 grs",
        chocolate: "4 cucharadas",
        mantequilla: "200 grs"
      }
  }
};

console.log(miReceta.descripcion); // mi postre favorito
console.log(miReceta.costo); // 15.6
console.log(miReceta.ingredientes) // { masa: {…}, cobertura: {…} }

console.log(miReceta.ingredientes.masa) // { harina: "100 grs", sal: "1 cucharadita", agua: "1 taza" }

console.log(miReceta.ingredientes.masa.harina) // 100 grs 
console.log(miReceta.ingredientes.masa.sal) // 1 cucharadita
console.log(miReceta["ingredientes"].masa.agua) // 1 taza
```
La notación de corchete es útil cuando necesitamos personalizar una variable por ejemplo, ya que la propiedad va entre comillas.

### Arreglos anidados
Son arreglos que se encuentran dentro de estructuras más complejas, por ejemplo dentro de un objeto que es parte de un arreglo
```js
var misPlantas = [
  {
    tipo: "flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de león"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedul"
    ]
  }
];

/* Accede a: primer elemento del arreglo central que es un objeto,
luego a la segunda propiedad del objeto, 
y luego al primer elemento del arreglo interno */
var primeraFLor = misPlantas[0].lista[0];
console.log(primeraFLor) // rosas

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol) // pino
```
### Colección de discos - mini proyecto
Tenemos un objeto que representa parte de una colección de álbumes musicales.

Cada álbum tiene un número de identificación único (id) asociado a otras propiedades.

No todos los álbumes tienen la información completa.
```js
var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
}
```

Define una función `actualizarDiscos` que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos)
- id
- propiedad ("artista" o "canciones")
- valor

Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor.
```js
function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || []; // acá si no se cumple lo primero (si no es undefined ) se cumple lo 2do. Se cubren las dos primeras condiciones
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor; // estamos agregando el valor a la propiedad del album especifico. Si la propiedad no existe se va a agregar y si ya existe se va a actualizar. Porque solamente puede llevar un solo valor
  }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum) // Bee Gees Greatest
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "") 
console.log(coleccionDeDiscos[7853].tituloDelAlbum) // undefined (se eliminó la propiedad)



console.log(coleccionDeDiscos[5439].canciones) // undefined
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma mia") 
console.log(coleccionDeDiscos[5439].canciones) // Mamma mia (creó la propiedad "canciones", creó un array vacío y agregó la canción)



console.log(coleccionDeDiscos[5439].artista); // undefined
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA")
console.log(coleccionDeDiscos[5439].artista); // ABBA
```
### Ciclo "while"
Los ciclo o bucles nos permiten repetir una secuencia de instrucciones un número específico de veces. Hay dos tipos de ciclos: `while` y `for`.

Los ciclos while se usan cuando no tenemos un número específico de iteraciones. Una iteración es una repetición de un bloque de código que queremos repetir. CUando no sabemos la cantidad que hay que repetir pero sí lo quede ser cierto para continuar usamos `while`
```js
var i = 0;

while (i <= 3) {
  console.log("Hola Mundo");
  i++;
}

// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo
```
```js
var miArreglo = [];
var i = 0;

console.log(miArreglo); // []

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```js
var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 34];

console.log(numeros.length)

while (numeros.length > 4) {
  numeros.pop();
}

console.log(numeros) // [ 2, 3, 4, 5 ]
```
### Ciclo "for"
Usamos el ciclo `for` cuando sabemos cuántas iteraciones van a ser necesarias, y el ciclo for nos actualiza esa variable que antes teníamos que actualizar nosotros mismos con el ciclo while, la actualiza automáticamente
```js
var miArreglo = [];

for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
```js
var miArreglo = [];

for (var i = 0; i < 10; i = i + 2) { // i += 2
  miArreglo.push(i);
}

console.log(miArreglo) // [ 0, 2, 4, 6, 8 ]
```
```js
var miArreglo = [];

for (var i = 0; i < 10; i = i + 2) { // i += 2
  miArreglo.push("A");
}

console.log(miArreglo) // [ 'A', 'A', 'A', 'A', 'A' ]
```
### Ciclos "for": Números impares
Obteniendo los números impares. Se suma de dos en dos y se agrega al array.
```js
var miArreglo = [];

for (var i = 1; i < 20; i +=2) {
  miArreglo.push();
}

console.log(miArreglo) // [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
```
### Ciclos "for": Contar hacia atrás
```js
for (i = 15; i >= 10; i--) {
  console.log(i)
}
/*
15
14
13
12
11
10
/*
```
```js
for (i = 15; i >= 10; i -= 2) {
  console.log(i)
}
/*
15
13
11
/*
```
Ejemplo con un arreglo
```js
var miArreglo = [];

for (var i = 10; i > 0; i -= 2) {
  miArreglo.push(i)
}

console.log(miArreglo) // [ 10, 8, 6, 4, 2 ]
```
### Iterar sobre un arreglo con un ciclo "for"
Iterar sobre un arreglo para usar cada elemento en algo
```js
var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
  console.log("Iteración " + i);
  console.log(miArreglo[i])
  total += miArreglo[i]; // en cada iteración se acumula la suma
}

console.log(total)
}
```
```
Iteración 0 
4 
Iteración 
6
Iteración 2 
8
Iteración 3 
2 
20
```
Convertir la cadena de caracteres a mayúscula
```js
var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
}

console.log(lenguajes)
```
```
JAVASCRIPT
PYTHON
JAVA
C++
```
Contar la cantidad de números pares en un arreglo
```js
function contarNumerosPares(arreglo) {
  var total = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
console.log(contarNumerosPares([2, 3, 4, 5, 6, 7, 8, 9])) // 4
console.log([5, 3, 1]) // 0
```
### Ciclo "for" anidados
Es útil escribir dentro de otros ciclos. Son muy útiles para procesar tipos de datos multidimensionales
```js
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++) {
	console.log("> Nueva iteración")
  var arregloAnidado = miArreglo[i]; // Arreglo
	console.log("Arreglo: " + arregloAnidado);

	for (var j = 0; j < arregloAnidado.length; j++) {
		console.log(">>> Ciclo anidado")
		console.log("Elemento: " + arregloAnidado[j]);
		console.log(arregloAnidado[j]); // Elemento
	}
}
```
```
> Nueva iteración
Arreglo: 1,2,3
>>> Ciclo anidado
Elemento: 1
1
>>> Ciclo anidado
Elemento: 2
2
>>> Ciclo anidado
Elemento: 3
3
> Nueva iteración
Arreglo: 4,5,6
>>> Ciclo anidado
Elemento: 4
4
>>> Ciclo anidado
Elemento: 5
5
>>> Ciclo anidado
Elemento: 6
6

> Nueva iteración
Arreglo: 7,8,9
>>> Ciclo anidado
Elemento: 7
7
>>> Ciclo anidado
Elemento: 8
8
>>> Ciclo anidado
Elemento: 9
9
```
### Ciclo "do... while"
Tercer tipo de ciclo que es básicamente como el `while` pero con un pequeño cambio. "Hacer tal cosa mientras".

Usando el `while`. Primero evalúa si la condición es verdadera o falsa
```js
var x;
x = 5;
while (x < 10) {
  console.log(x);
	x++;
}
```
Usando el `do while`. No evalúa si la condición es true o false
```js
var x;
x = 5;
do {
  console.log(x);
	x++;
} while (x < 10)
```
La diferencia es que con el `do while` siempre se va a ejecutar aunque sea una vez la secuencia de instrucciones que aparece primero después del `do`
```js
var x = 16;

do {
  console.log(x);
	x++;
} while (x < 10) //16 y luego sale 
```
El `do while` se puede usar cuando se necesita que el usuario ingrese un valor y hay que verificar si es valor es válido o no. Pero hay que pedirselo al usuario al menos una vez. Si es válido continúa el programa y sino sigue pidiendo el valor hasta que ingrese uno válido para el programa.
### Búsqueda de perfil
Vamos a definir una función que nos permitirá buscar un contacto en una lista de contactos. Tenemos 3 contactos y estan representados como un objeto, son elementos de un arreglo. Cada uno de los objetos ocupa un índice en ese arreglo
```js
var contactos = [
	{
		nombre: "Nora",
		apellido: "Nav",
		numero: "0544545265",
		gustos: ["Pizza", "Programación"]
	},
	{
		nombre: "Harry",
		apellido: "Potter",
		numero: "0953893553",
		gustos: ["Hogwartz", "Magia"]
	},
	{
		nombre: "Sherlock",
		apellido: "Holmes",
		numero: "05730573093",
		gustos: ["Casos interesantes", "Violín"]
	}
];

function buscarPerfil(nombre, propiedad) {
	for (let i = 0; i < contactos.length; i++) { // para recorrer el array
		if(contactos[i].nombre === nombre) { // ingresa al primer elemento y con el punto a la propiedad
			return contactos[i][propiedad] || "La propiedad no existe" // No se puede usar notación de punto porque es una variable. Si uso el punto buscaría una propiedad cuyo nombre sea "propiedad"
		}	// || es por "si la propiedad no existe". En vez de usar else
	}
	return "El contacto no existe en la lista de contactos."
}

console.log(buscarPerfil("Harry", "gustos")) // [ "Hogwartz", "Magia" ]
console.log(buscarPerfil("Nora", "apellido")) // Nav
console.log(buscarPerfil("David", "gustos")) // El contacto no existe en la lista de contactos.
```
### Números aleatorios
Cómo generar un número aleatorio en js. Se usa `Math` con mayúscula
```js
function generarFraccionAleatorior() {
	return Math.random(); // random retorna un valor aleatorio entre [0, 1), el 1 no está incluido
}

console.log(generarFraccionAleatorior()) // 0.1430902766442953
console.log(generarFraccionAleatorior()) // 0.16250322454674304
console.log(generarFraccionAleatorior()) // 0.09801872874301154

console.log(Math.random()) // se lo puede llamar así

var numeroAleatorio = Math.random(); // guardando en una variable
console.log(numeroAleatorio); // 0.7291129581885237
```
### Números enteros aleatorios
Se pueden convertir los decimales a enteros dentro de un rango específico.

**Math.floor()**: es una función en JavaScript que devuelve el mayor número entero menor o igual que un número determinado. Es decir, redondea hacia abajo el número al entero más cercano.
```js
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20); // nunca llegará a ser 20. Con el floor redondeará a 19

console.log(numeroAleatorioEntre0y19)
```
Una función que genere un número entero aleatorio. Esa función va a tener un solo parámetro, el límite superior del rango de números que queremos generar
```js
function generarEnteroAleatorio(limiteSuperior) {
	// Generar un entero aleatorio entre 0 y el limite superior sin incluirlo
	return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5)) // 0
console.log(generarEnteroAleatorio(5)) // 4
console.log(generarEnteroAleatorio(5)) // 3
console.log(generarEnteroAleatorio(5)) // 3
console.log(generarEnteroAleatorio(5)) // 2
// el 5 es el límite superior y el maximo numero a mostrar será 4
```
Generando varios números automáticamente
```js
for (var i = 0; i < 9; i++) {
	console.log(generarEnteroAleatorio(5))
}
```
### Números enteros aleatorios en un rango
Podemos generar numeros enteros aleatorios en un rango específico, con un limite inferior y uno superior
```js
function rangoAleatorio(limiteInferior, limiteSuperior) {
	var random = Math.random() * (limiteSuperior - limiteInferior + 1);
	console.log(random);
	return Math.floor(random) + limiteInferior;
} 
// limiteSuperior - limiteInferior: nos da el tamaño del intervalo
// + 1: porque queremos incluir el limiteInferior
// Al Math.floor que se genere le sumamos el limiteInferior

for(var i = 0; i < 5; i++) {
	console.log(rangoAleatorio(3, 8))
}
/*
4.076260843693342 
7 
4.539739581198661 
7 
5.146730831463727 
8 
5.567205335649872 
8 
5.803085571312646 
8
*/
```
### Función parseInt()
La función `parseInt()` es una función predefinida en Javascript que se utiliza para convertir una cadena de caracteres en un número entero. La sintaxis de la función es la siguiente:
```js
parseInt(string, radix)
```
La función `parseInt()` toma la cadena de caracteres especificada en el primer parámetro y la convierte en un número entero. Si la cadena comienza con un número, parseInt() devuelve ese número. Si la cadena no comienza con un número, parseInt() devuelve `NaN` (Not a Number).

Es importante tener en cuenta que `parseInt()` no funciona correctamente con números en coma flotante o números en notación científica. Para convertir una cadena que contiene un número con decimales a un número de punto flotante, se debe usar la función `parseFloat()`.
```js
console.log(parseInt("5")) // 5
console.log(parseInt("-47")) // -47
console.log(parseInt("6.7")) // 6 (se trunca con decimales)
console.log(parseInt(6.7)) // 6 (se puede usar para redondear)
console.log(parseInt("abc")) // NaN (no representa un número)
```
Ejemplo sin parseInt()
```js
var a = "5";
var b = "7";

console.log(a + b) // 57 (concatena en vez de sumar)
```
Con parseInt()
```js
var a = parseInt("5");
var b = parseInt("7");

console.log(a + b) // 12
```
### Función parseInt() con una base
Se puede convertir una cadena de caracteres de otro sistema numérico al sistema decimal.

El segundo parámetro `radix` se utiliza para especificar la base numérica en la que se encuentra la cadena. Por ejemplo, si la cadena está en binario, el valor de radix sería 2. Si no se especifica un valor de radix, se asume que la base numérica es 10.
```js
parseInt("123");      // devuelve 123
parseInt("100", 2);   // devuelve 4 (el valor binario de "100" es 4 en base 10)
parseInt("10", 8);    // devuelve 8 (el valor octal de "10" es 8 en base 10)
parseInt("0xF", 16);  // devuelve 15 (el valor hexadecimal de "0xF" es 15 en base 10)
parseInt("hello");    // devuelve NaN
```
### Operador condicional (ternario)
Este operador nos permite compactar lo que sería un condicional en una sola línea
```
condición ? expresión1 : expresión2
```
* **condición**: La expresión que se evalúa como verdadera o falsa.
* **expresión1**: El valor que se devuelve si la condición es verdadera.
* **expresión2**: El valor que se devuelve si la condición es falsa.

```js
function retornarMinimo(x, y) {
	if (x < y) {
		return x;
	} else {
		return y;
	}
}
```
Con el ternario
```js
function retornarMinimo(x, y) {
	return (x < y) ? x : y;
}

console.log(retornarMinimo(2, 3))
```
```js
var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3) // 27
```
Es importante tener en cuenta que el operador condicional se utiliza mejor para decisiones simples y no debe ser anidado en exceso para evitar una mala legibilidad del código.
### Múltiples operadores condicionales
Se pueden combinar múltiples operadores condicionales o ternarios uno dentro del otro
```js
function compararNumeros(a, b) {
	if (a == b) {
		return "a y b son iguales";
	} else if (a > b) {
		return "a es mayor que b";
	} else {
		return "b es mayor que a";
	}
}
```
Simplificando la expresión
```js
function compararNumeros(a, b) {
	return a == b ? "a y b son iguales" 
		:  a > b ? "a es mayor que b"
		: "b es mayor que a";
}

console.log(compararNumeros(4, 6)) // b es mayor que a
```
### var vs. let
En JavaScript, tanto var como let son palabras clave utilizadas para declarar variables. Sin embargo, hay algunas diferencias importantes entre ellas:

  **Alcance (scope)**:

var tiene un alcance de función, lo que significa que la variable declarada con var está disponible en todo el ámbito de la función en la que se declaró. En cambio, let tiene un alcance de bloque, lo que significa que la variable declarada con let solo está disponible dentro del bloque donde se declaró.

  **Hoisting**:

Las variables declaradas con var son "elevadas" (hoisted) al principio del ámbito de la función o del archivo en el que se declararon. Esto significa que se pueden utilizar antes de ser declaradas, aunque su valor será undefined. En cambio, las variables declaradas con let no se pueden utilizar antes de su declaración en el código.

  **Reasignación**:

Tanto var como let permiten la reasignación de valores. Es decir, se puede cambiar el valor de una variable después de declararla. Sin embargo, si se utiliza let para declarar una variable y se intenta declararla nuevamente en el mismo ámbito, se producirá un error. En cambio, si se utiliza var para declarar una variable y se intenta declararla nuevamente en el mismo ámbito, la variable simplemente se sobrescribirá.

  **Uso en ciclos (loops)**:

Cuando se utiliza var dentro de un ciclo for, la variable se comparte entre todas las iteraciones del ciclo, lo que puede generar errores de lógica en algunas situaciones. En cambio, si se utiliza let dentro de un ciclo for, se crea una nueva variable en cada iteración del ciclo, lo que evita errores de este tipo.

En resumen, let es una opción más segura y robusta para la declaración de variables en JavaScript, ya que evita errores comunes que pueden ocurrir con var. Se recomienda utilizar let en lugar de var siempre que sea posible.

Usando `var`
```js
var miVariableGlobal = 4;

console.log(miVariableGlobal) // se accede por fuera

function miFuncion() {
    console.log(miVariableGlobal) // se accede por dentro

    var miVariableLocal = 8; // solo puede ser usada dentro de la función
    console.log(miVariableLocal) 
}

miFuncion() // 4

console.log(miVariableGlobal) // 4
console.log(miVariableLocal) // no está definida por fuera
```
```js
for (var i = 0; i < 3; i++) {
    console.log(i)
}
// Con var se puede usar fuera del ciclo
// Con let no se puede
console.log("Variable: " + i)
/*
0
1
2
Variable: 3
*/
```
Usando let. Sirve por ejemplo si queremos que se use en un ámbito local
```js
for (let i = 0; i < 3; i++) {
    console.log(i)
}
// Con var se puede usar fuera del ciclo
// Con let no se puede
console.log("Variable: " + i)
/*
0
1
2
Uncaught ReferenceError: i is not defined
*/
```
```js
var mostrarColor = true;

if (mostrarColor) {
    let color = "verde"; // solo se puede acceder acá. Con var se podría acceder por fuera
    console.log(`Mi color favorito es: ${color}`)
}

console.log(color)
// Mi color favorito es: verde
// Uncaught ReferenceError: color is not defined
```
### const
`const` es una constante y no se puede modificar
```js
const miConstante = 35;

console.log(miConstante); // 35

miConstante = 15 //Uncaught TypeError: invalid assignment to const 'miConstante'
```
```js
const miConstante; // no se puede hacer esto

miConstante = 15;

console.log(miConstante) // error, las declaraciones const deben inicializarse
```
Por convención los nombres de las constante se escriben con mayúsculas
```js
const MI_CONSTANTE = 15;
console.log(MI_CONSTANTE) // 15
```
Calcular area de círculo
```js
function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined;
    }

    return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(10))
```
### Mutar arreglo declarado con const
Cuando se declare una variable con `const` en js, eso no significa que el valor no pueda cambiar. Significa que no podemos asignar un valor nuevo a esa variable
```js
const MI_ARREGLO = [1, 2, 3, 4]

MI_ARREGLO = [5, 6, 7, 8] //Error, no se puede reasignar
```
Pero sí se puede cambiar los elementos del arreglo
```js
MI_ARREGLO[0] = 5; //Reasignamos el índice cero
MI_ARREGLO[1] = 6; // y así con cada índice
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO) // [5, 6, 7, 8]
```
### Crear un objeto inmutable
```js
let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};
//No queremos cambiar el objeto en ninguna circunstancia

Object.freeze(colores); // con esto lo 'frizamos'

colores.amarillo = "#fff200";
console.log(colores) // error de tipo, no se puede agregar la propiedad, el objeto no es extensible

delete colores.verde; // error, no se puede borrar
```
### Funciones flecha
Son un tipo más compacto de funciones, que generalmente se usan cuando queremos definir funciones anónimas
```js
const fecha = function() { // función normal
    return new Date();
}

//función flecha
let fecha = () => new Date();
```
Las funciones flecha son muy útiles cuando necesitamos pasar una función como argumento a otra función y lo que hacemos es escribirla directamente como el argumento

### Funciones flecha con parámetros
Definir funciones flecha que tomen uno o más parámetros
```js
const sumarTres = function(x) {
    return x + 3;
}

// a flecha
const sumarTres1 = (x) => x + 3;

console.log(sumarTres1(4)) // 7
```
```js
const concatenarArreglos = function(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concatenarArreglos([1, 2], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]

// transformando a función flecha. Funciona
const concatenarArreglos1 = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos1([1, 2], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
```
Si la función tiene más de una línea, **se usan las llaves**
```js
const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
}

console.log(sumar(1, 1)) // 8
```
### Valores por defecto para parámetros
Esto es útil cuando queremos permitir que el usuario omita algún argumento para usar el valor por defecto
```js
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5)) // sumó 5 + 1. El 1 es valor por defecto
console.log(incrementar(5, 3)) // 8 (sumó los valores que le pasé, sin usar el 1)
```
### Operador rest
Operador que va a permitir escribir funciones muy versátiles. Te permite pasar cualquier número de argumentos a una función y que esos argumentos se agrupen como un arreglo
```js
function miFuncion(...args) { // 'args' se usa en este ejemplo, pero puede ser cualquier nombre
    console.log(args);
}

miFuncion(1); // [ 1 ]
miFuncion(1, 2) // [1, 2]
miFuncion(1, 2, 3, 4) // [1, 2, 3, 4]

miFuncion([1, 2, 3], [4, 5, 6]) // [[1, 2, 3], [4, 5, 6]] arreglos anidados del arreglo principal
```
Convierte todos los argumentos en elementos de un solo arreglo. Podemos agregarle cualquier cantidad de argumentos
```js
function miFuncion(...args) { // podemos trabajar con el argumento
    console.log(args.length);
}

miFuncion(1, 2) // 2 (Hay dos elementos)
```
Ahora vamos a modificar una función

`.reduce()` con estos argumentos suma los elementos del arreglo y retorna el resultado. El método .reduce() es una función de orden superior que se utiliza en los arreglos de JavaScript para reducir los valores de un arreglo a un solo valor. Este método toma una función de devolución de llamada y un valor inicial, y utiliza la función para reducir el arreglo a un valor único.
```js
const sumar = (x, y, z) => { //recibe solo 3 argumentos
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

// para que reciba cualquier cantidad de argumentos
const sumar1 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sumar1(1, 2)) // 3
```
Explicación del último código: ¡Claro! Este es una función en JavaScript llamada "sumar1" que utiliza la sintaxis de parámetros rest para aceptar cualquier cantidad de argumentos y devolver su suma. La función logra esto usando el método reduce() para acumular los valores del array de argumentos y devolver su suma.

Aquí tienes una explicación más detallada de cómo funciona la función:

El "..." antes del parámetro "args" indica que este es un parámetro rest, lo que significa que puede aceptar cualquier cantidad de argumentos.
La función utiliza el método reduce() en el array de argumentos para acumular sus valores y devolver su suma.
El primer argumento pasado a reduce() es una función de devolución de llamada que toma dos parámetros, "a" y "b", y devuelve su suma.
El segundo argumento pasado a reduce() es el valor inicial de "a", que en este caso es 0.

### Operador spread
Hace exactamente lo contrario al operador `spread`. Este operador toma un arreglo  y lo descompone en sus elementos individuales para que la función pueda recibirlos y asignarlos a sus parámetros correspondientes
```js
const numeros = [1, 2, 3];

function sumar(x, y, z) {
  return x + y + z;
}

sumar(numeros) // no podemos pasar este argumento a la función porque necesita 3 valores
sumar(numeros[0], numeros[1], numeros[1]) // NO se hará esto. En vez de extraer los datos individualmente, usaremos spread
```
Ahora usando el operador spread

```js
const numeros = [1, 2, 3];

function sumar(x, y, z) {
  return x + y + z;
}

console.log(sumar(...numeros)); // 6 (que es la suma de 1, 2 y 3)

//mostrando los valores en la consola
const numeros = [1, 2, 3];

function sumar(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
  return x + y + z;
}

console.log(sumar(...numeros));
```
### Sintaxis de desestructuración
Esta sintaxis nos permite asignar las propiedades de un objeto a variables, que podemos usar en nuestro programa
```js
const usuario = {
  nombre: "Gino Smith",
  edad: 34
}
```
Anteriormente si queríamos asignar las propiedades (nombre y edad) a variables, tomábamos el objeto y asignabamos el valor de esa propiedad a la variable
```js
const nombre = usuario.nombre;
const edad = usuario.edad;
```
Pero en el nuevo estandar podemos hacer lo mismo en una sola línea para cualquier número de propiedades que quisiéramos asignar
```js
const {nombre, edad} = usuario;
```
Explicación: 
- Dentro de las llaves escribimos los nombres de las variables que queremos crear (la que hubiéramos creado una por línea)
- Al otro lado de la asignación, escribimos el nombre del objeto (usuario)
- Esto básicamente va a buscar dentro del objeto usuario y le va a decir: "ey, existe una propiedad llamada nombre", asi que asigna el valor "Gino Smith" a la variable __nombre__
- Y hace lo mismo con la propiedad **edad**. Asigna 34 a la variable **edad**

Esta es la sintaxis de desestructuración más simple que podemos usar. Veamos otro ejemplo:
```js
var coordenadas = {
  x: 4,
  y: 6,
  z: 12
}
```
Antes en Es5, teníamos que hacer lo que está acá debajo.
```js
const x = coordenadas.x;
const y = coordenadas.y;
const z = coordenadas.z;
```
Pero ahora con la sintaxis de desestructuración, podemos hacer esto: Asignamos cada valor a su variable correspondiente
```js
const {x, y, z} = coordenadas;

console.log(x;) // 4
console.log(y;) // 6
console.log(z;) // 12
```

### Sintaxis de desestructuración: Objetos Anidados
Cómo usar sintaxis de desestructuración para objetos que están dentro de otros objetos
```js
const usuario = {
  johnDoe: {
    edad: 27,
    correo: "johnDoe@freecodecamp.com"
  }
}
```
Digamos que queremos asignar la edad y el correo a variables individuales en nuestro programa para trabajar con ellas
```js
const {johnDoe: {edad, correo}} = usuario;
```
Cómo extraemos la edad y el correo de johnDoe:
- Escribimos el nombre de la propiedad que queremos acceder
- Luego entre llaves, escribimos los nombres de las propiedades que queremos asignar a las variables

Ahora ya tenemos disponibles las variables disponibles para trabajar
```js
console.log(edad); // 27
console.log(correo); // johnDoe@freecodecamp.com
```

Otra alternativa que podemos usar y es útil, es que podemos asignarles a las propiedades (edad, nombre) nombres distintos. Es como si asignaramos a variables con nombres distintos
```js
const {johnDoe: edad: edadDelUsuario, correo: correoDelUsuario} = usuario;

console.log(edadDeUsuario); // 27
console.log(correoDelUsuario); // johnDoe@freecodecamp.com
```
Y si ahora usamos los nombres de las propiedades, veremos que no están definidos como variables en nuestro programa
```js
console.log(edad); // edad is not defined
console.log(correo); // correo is not defined
```

**Otro ejemplo de las sintaxis de desestructuración aplicado a objetos anidados**
---
> Las propiedades de objetos a los que no se les pone comillas, js detrás de escena los coloca.
```js
const PRONOSTICO_LOCAL = {
  "ayer": {
    minima: 61,
    maxima: 75
  },
  "hoy": {
    minima: 64,
    maxima: 77
  },
  "mañana": {
    minima: 68,
    maxima: 80
  }
}
```
Veamos cómo podemos usar la desestructuración para acceder a la minima y máxima de hoy.

Antes cómo accederíamos a esos valores para asignarlos a una variable...
```js
const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

console.log(minimoHoy, maximaHoy) // 64 77
```
Ahora con la sintaxis de desestructuración

```js
const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;
const {hoy: {maxima: maximaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy, maximaHoy) // 64 77
```
Escribiendo lo mismo en una sola linea
```js
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy, maximaHoy) // 64 77
```
### Sintaxis de desestructuración: Arreglos
Nos permite asignar valores a variables usando arreglos.

De esta manera se pueden asignar valores a un arreglo de variables. Se asignan en el orden que aparecen
```js
var a;
var b;

[a, b] = [1, 2]

console.log(a) // 1
console.log(b) // 2
```
Si el arreglo es más largo, igualmente se asignaran solamente los dos primeros valores
```js
var a;
var b;

[a, b] = [1, 2, 3, 4, 5, 6]

console.log(a); // 1
console.log(b); // 2
```
Y si agregamos una tercera variable y queremos que se asigne el **quinto** valor, agregamos **dos comas** que serían los valores tres y cuatro, y luego el nombre de la variable
```js
var a;
var b;

[a, b,,, c] = [1, 2, 3, 4, 5, 6]

console.log(a) // 1
console.log(b) // 2
console.log(c) // 5
```
- La sintaxis de desestructuración puede usarse para cambiar o intercambiar los valores de dos variables

Queremos que **a** tenga el valor de **b** y viceversa. Lo que está a la derecha se asignará a la izquierda4
```js
var a = 8;
var b = 6;

[b, a] = [a, b]

console.log("a: " + a) // 6
console.log("b: " + b) // 8
```
### Sintaxis de desestructuración con el operador rest
El operador `rest` agrupa los elementos y forma un arreglo cuando lo usábamos con funciones, agrupaba los argumentos.

En este caso vamos a usar ese operador para reasignar un arreglo en varias variables
```js
var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7]

console.log(a) // 1
console.log(b) // 2
console.log(arr) // [3, 4, 5, 6, 7]
```
Ahora vamos a remover los tres primeros elementos de un arreglo
```js
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
  const [ , , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal) // // [4, 5, 6, 7, 8]
```
__Explicación del código__: *El código define un arreglo llamado arregloInicial que contiene 8 números del 1 al 8. Luego, se define una función llamada removerTresPrimerosElementos que toma como argumento un arreglo y devuelve un nuevo arreglo que contiene todos los elementos del arreglo original excepto los primeros tres. Para hacer esto, se utiliza una destructuración de arreglos en la que se crea un nuevo arreglo llamado nuevoArreglo que contiene todos los elementos restantes después de los primeros tres.*

*Después de definir la función, se llama a la función removerTresPrimerosElementos con arregloInicial como argumento, y el resultado se almacena en una nueva variable llamada arregloFinal. Finalmente, se imprime arregloFinal en la consola, que contiene los elementos del arregloInicial excepto los primeros tres elementos, que son [4, 5, 6, 7, 8].*

### Sintaxis de desestructuración: pasar objeto como argumento
```js
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicación: "España"
};

// ¿Cómo podemos actualizar su perfil?

const actualizarPerfil = (informacionDePerfil) => {
  const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente)
// Jane Doe
// 24
// Española
// España
```
- Este código crea un objeto llamado "nuevoPerfilCliente" que contiene información personal de un cliente, como su nombre, edad, nacionalidad y ubicación.

  Luego, se define una función llamada "actualizarPerfil" que toma un objeto como argumento. Dentro de la función, se utiliza la sintaxis de desestructuración para asignar los valores de las propiedades del objeto a variables independientes.

  Finalmente, se llama a la función "actualizarPerfil" y se le pasa como argumento el objeto "nuevoPerfilCliente". La función imprime el valor de cada variable independiente (nombre, edad, nacionalidad, ubicación) en la consola.

  En resumen, este código muestra cómo se puede utilizar la sintaxis de desestructuración para acceder a los valores de las propiedades de un objeto y asignarlos a variables independientes, y cómo se puede utilizar una función para imprimir esos valores en la consola.

Otra manera:
```js
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicación: "España"
};

// ¿Cómo podemos actualizar su perfil?

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente)
// Jane Doe
// 24
// Española
// España
```
- Este código es similar al código anterior, pero utiliza la sintaxis de desestructuración directamente en los parámetros de la función "actualizarPerfil" en lugar de asignar las variables dentro de la función.

  El objeto "nuevoPerfilCliente" sigue siendo el mismo, con la información personal de un cliente.

  La función "actualizarPerfil" utiliza la sintaxis de desestructuración en sus parámetros para asignar los valores de las propiedades del objeto a variables independientes. Luego, la función imprime el valor de cada variable independiente en la consola.

  Finalmente, la función "actualizarPerfil" se llama y se le pasa el objeto "nuevoPerfilCliente" como argumento. La función imprime el valor de cada variable independiente (nombre, edad, nacionalidad, ubicación) en la consola.

  En resumen, este código muestra una forma alternativa de utilizar la sintaxis de desestructuración directamente en los parámetros de una función para acceder a los valores de las propiedades de un objeto y asignarlos a variables independientes.

No necesariamente hay que tomar todos los valores como argumentos
```js
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicacion: "España"
};

// ¿Cómo podemos actualizar su perfil?

const actualizarPerfil = ({nombre, edad}) => {
  console.log(nombre);
  console.log(edad);
}

actualizarPerfil(nuevoPerfilCliente)
// Jane Doe
// 24
```
- Este código muestra cómo se puede utilizar la sintaxis de desestructuración para acceder solo a ciertas propiedades de un objeto y asignarlas a variables independientes en una función. En este caso, la función solo necesita el nombre y la edad del objeto "nuevoPerfilCliente".

**Otro ejemplo**  
```js
const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
}

const puntoMedio = ({max, min}) => (max + min) / 2.0;

console.log(puntoMedio(estadisticas)) // 28.015
```
- *El código define un objeto llamado "estadisticas" que tiene varias propiedades numéricas, incluyendo la máxima, la mínima, la mediana, la moda, la desviación estándar y el promedio. Luego define una función llamada "puntoMedio" que toma el valor máximo y mínimo del objeto "estadisticas" como argumentos y devuelve su punto medio.*

  *Finalmente, se llama a la función "puntoMedio" con el objeto "estadisticas" como argumento y se imprime el resultado en la consola, que es el punto medio de la máxima y mínima del objeto "estadisticas", que en este caso es 28.015.*

  *En resumen, el código calcula y muestra el punto medio entre el valor máximo y mínimo de un conjunto de datos estadísticos que se han definido previamente.*

### Plantillas literales o plantillas de cadenas
Ahora vamos a ver sobre un tipo especial de cadena de caracteres que nos permite crear cadenas con varias lineas y reemplazar los valores de las variables que necesitemos, fácilmente en una cadena.

**Características**
- Se usa el acento invertido (backtick) en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe `${variable}`
- Dentro de `${}` también puedes escribir expresiones.

```js
var a = 6;
console.log(`El valor de a es ${a}`) // El valor de a es 6
```
```js
var nombre =  "Nora";
var edad = 6;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)
// Mi nombre es Nora y tengo 6 años.
```
```js
var miArreglo = [1, 2, 3, 4];

console.log(`El arreglo es ${JSON.stringify(miArreglo)}`)
// El arreglo es [1, 2, 3, 4]
```
- *En este caso, se utiliza la función `JSON.stringify()` para convertir el arreglo miArreglo en una cadena de texto JSON antes de insertarlo en la plantilla literal del string.*

También podemos reemplazar el valor de las propiedades de un objeto
```js
var persona = {
  nombre: "Gino Cass",
  edad: 10
}

const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`

console.log(SALUDO) // ¡Hola! Mi nombre es Gino Cass y tengo $10 años.
```
- *Escribe la constante con mayúsculas porque es una plantilla*

### Crear objetos de forma concisa
Esta es una forma de crear un objeto
```js
const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  }
}

console.log(crearPersona("Gino Smith", 28, "Español"))
// { nombre: 'Gino Smith', edad: 28, idioma: 'Español' }
```
Pero hay una forma aún más concisa de escribir esta función flecha en una sola línea

```js
const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"))
// { nombre: 'Gino Smith', edad: 28, idioma: 'Español' }
```
- *El código define una función llamada crearPersona que toma tres argumentos: nombre, edad e idioma. La función crea y devuelve un objeto con tres propiedades: nombre, edad e idioma.*

  *En lugar de utilizar la sintaxis tradicional de objeto clave: valor, la función utiliza la sintaxis abreviada de objeto introducida en ES6 para crear un objeto con las mismas propiedades y valores. En esta sintaxis, se omite la especificación explícita de la clave y se utiliza el nombre de la variable como clave.*

  *Luego, se utiliza la función console.log() para imprimir el objeto devuelto por la función crearPersona, pasando como argumentos los valores "Gino Smith", 28 y "Español".*

  Al ejecutar el código, la salida en la consola será:

      { nombre: 'Gino Smith', edad: 28, idioma: 'Español' }

  *La función crearPersona devuelve un objeto con las tres propiedades especificadas, donde el valor de cada propiedad corresponde al argumento pasado en la llamada de la función. Esta sintaxis abreviada de objeto es más legible y fácil de escribir para crear objetos simples con propiedades y valores correspondientes a las variables.*

### Métodos
También se pueden declarar funciones dentro de los objetos 
```js
const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}`
  }
}

console.log(persona.presentarse()) // ¡Hola! Mi nombre es Isabel
```
- *Si el valor de una propiedad es una función, se denomina "método"*
- El this se usa para referirse al objeto donde está

Hay una forma más concisa con ES6
```js
const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}`
  }
}

console.log(persona.presentarse()) // ¡Hola! Mi nombre es Isabel
```
 - *Quitamos los dos puntos y la palabra function a la propiedad presentarse*

## Definir una clase
Una clase es algo parecido a un plano de un edificio o de un objeto, que nos permite crear muchos objetos con la misma estructura, las mismas propiedades y la misma funcionalidad.

Es una plano general que nos permite escribir código una sola vez y reutilizarlo para crear tantos objetos como necesitemos 
```js
class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta
  }
}

var zeus = new TransbordadorEspacial("Júpiter");
console.log(zeus.planeta); // Júpiter

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta); // Marte
```
- *El código utiliza la sintaxis de las clases en JavaScript. Una clase es como una plantilla que te ayuda a crear objetos con propiedades y métodos similares.*

  *En este caso, la clase se llama TransbordadorEspacial. Tiene un constructor, que es una función especial que se llama cuando se crea una nueva instancia de la clase. El constructor toma un parámetro llamado planeta, que se usa para asignar un valor a la propiedad planeta de la instancia.*

  *La palabra clave this se utiliza para hacer referencia a la instancia del objeto actual. En este caso, se utiliza para asignar el valor del parámetro planeta a la propiedad planeta de la instancia.*

  *La palabra clave new se utiliza para crear una nueva instancia de la clase. Cuando se llama a new TransbordadorEspacial("Júpiter"), se crea una nueva instancia de la clase TransbordadorEspacial con el parámetro planeta establecido en "Júpiter". Esto se guarda en la variable zeus.*

  *De manera similar, cuando se llama a new TransbordadorEspacial("Marte"), se crea otra nueva instancia de la clase TransbordadorEspacial con el parámetro planeta establecido en "Marte". Esto se guarda en la variable apolo.*

  *Luego, cuando se utiliza console.log(zeus.planeta) o console.log(apolo.planeta), se accede a la propiedad planeta de cada instancia del objeto y se imprime en la consola el valor de esta propiedad para cada instancia.*

  *En resumen, la clase TransbordadorEspacial es una plantilla que te ayuda a crear objetos con propiedades y métodos similares. El constructor es una función especial que se utiliza para asignar valores a las propiedades de una nueva instancia de la clase. La palabra clave this se utiliza para hacer referencia a la instancia actual del objeto. La palabra clave new se utiliza para crear una nueva instancia de la clase.*

**Otro ejemplo**
```js
class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
  }
}

var miMascota = new Mascota("Nora", 5)

console.log(miMascota.nombre) // Nora
console.log(miMascota.edad) // 5
```
Podemos reutilizar el código para crear cuantos objetos necesitemos
```js
var tuMascota = new Mascota("Gino", 2)

console.log(tuMascota.nombre) // Gino
console.log(tuMascota.edad) // 2
```
### Getters y Setters
Los getters y setters son métodos especiales que se utilizan para acceder y modificar las propiedades de un objeto de una manera controlada. Los getters se utilizan para obtener el valor de una propiedad, mientras que los setters se utilizan para establecer el valor de una propiedad. Los getters y setters se definen utilizando las palabras clave get y set, respectivamente.

Por convención se coloca un guión bajo `_` para decir que es una propiedad privada y que no se debe cambiar. Solo se debe usar internamente dentro de la clase. Esto es para otros desarrolladores
```js
class Libro {
  constructor(autor) {
    this._autor = autor;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("anónimo");
console.log(libro.autor) // anónimo

// Luego cambiamos el valor
libro.autor = "Gino Smith";
console.log(libro.autor);
```
- *El código define una clase llamada "Libro". La clase tiene un constructor que toma un parámetro llamado "autor". El constructor inicializa una propiedad privada llamada "_autor" con el valor del parámetro "autor".*

  *Luego, la clase tiene un getter y un setter para la propiedad "autor". El getter devuelve el valor de la propiedad privada "_autor", mientras que el setter establece el valor de "_autor" en el valor proporcionado como argumento.*

  *Después, se crea una instancia de la clase "Libro" con el valor "anónimo" para el autor, y se muestra en la consola el valor del autor, que es "anónimo".*

  *Luego, se establece un nuevo valor para el autor usando el setter, y se muestra en la consola el nuevo valor del autor, que es "Gino Smith".*