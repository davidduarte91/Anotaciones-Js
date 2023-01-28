console.log("Hola mundo")
// Para abrir este archivo con node, ir desde la terminal hasta la carpeta donde está este archivo y escribir "node index.js"
// Sino "node index" sirve

// Variables
let numero = 5;
let miVar = 5.2;
let nombre = "Bienvenidos";
let bool = true;
console.log(numero)

// concatenación. También se usan los backtips
let miEdad = 31;
console.log("Mi edad es " + miEdad)
console.log(`Mi edad es ${miEdad}`)

// Se pueden modificar las variables. NO así las constantes
miEdad = 22;
console.log("mi edad ahora es " + miEdad) // "mi edad ahora es 22"

/*---------------------------------------------------------------------------------------------- */
// OPERADORES

// Operaciones aritméticos
// Suma, resta, multiplicación, división y potencia
let potencia = 3 ** 3 // 3 elevado a la tres
console.log(potencia)

let op1 = 3;
let op2 = 2
let resultado = op1 + op2;
console.log("resultado es: " + resultado)

//Operadores post y pre incremento y decremento que añaden uno o restan uno a la variable numerica en la que se aplican.
// x--  --x decremento
var x = 1; // x = 1
var y = ++x // x = 2, y = 2  pre-incremento, incrementa x en uno y luego devuelve y
var z = y++ + x // x = 2, y = 3, z = 4   devuelve z y luego incrementa y en uno

// Operador typeOf: Sirve para conocer el tipo de variable sobre la que operamos
typeof 5; //number
typeof false; //boolean
typeof "Carlos"; //string
typeof undefined; // undefined

// Operadores booleanos
!true // false -> indica lo contrario
!false // true
!!true // true -> vuelve a su estado original

// Operadores de igualdad. 
true === true // true
true === false // false
true !== false // true
false !== false // false
// Dos "==" es de comparación. Tres "===" además pregunta si es del mismo tipo
3 == "3" // true -> solo compara valor y no tipo, por eso da true
3 === "3" // false -> no son del mismo tipo

// Signos de comparación: !=, >, <, >=, <=
5 > 3 // true
5 < 3 //false
3 >= 3 // true
2 <=1 // false

// COmparando el orden de los caracteres
"a" < "b" // true -> porque "a" está antes que "b"
"e" < "d" // false 

// Operador AND (&&) 
// Devuelve true siempre que todos los valores que estemos comprobando sean true. Si uno es false, devuelve false
true && true // true
true && false // false

// se utiliza para devolver valores sin que estos sean modificados
0 && true // 0 -> xq en js el cero se considera "false"
0 == false // true
1 == false // false
1 && "hello" // 'hello' -> ya que 1 es true y hello es un valor definido true, nos devuelve siempre el último valor

//Operador OR (||)
// Si todos los operadores son falsos, nos devuelve falso. Si uno es true, devolverá true
false || false || false // false
false || false || true // true

// se utiliza mucho para asignar valores por defecto. La lógica es que si el primer valor es true, se lo devuelve. Y sino el segundo
// por ejemplo es común en node js el ejemplo de abajo
// const port = process.env.PORT || 3000 // 3000 -> Ya que process.env.PORT no existe, no está definido


/*--------------------------------------------------------------------------------------------------*/
// CONDICIONALES

// If simplificado u operador ternario
// Sirve para asignar en una sola línea un valor determinado si la condición que se evalúa es true u otro si es false
condición ? valor_si_true : valor_si_false

// Condicional IF ELSE 
let miNUmero = 6
let resultadoPregunta = miNUmero == 7 // pregunta
console.log(resultadoPregunta) // false
if (miNUmero == 6) {
    console.log("Sí, mi número vale 6") // este
} else {
    console.log("NO, mi numero no vale 6")
}

if (miNUmero == "6"){ // No pregunta el tipo
    console.log("Si") // este resultado
}else {
    console.log("No")
}

if(miNUmero === "6"){ // Compara valor y tipo
    console.log("Si")
}else{
    console.log("No") // este resultado
}
// ------------------------
let miNOmbre = "David"

if(miNUmero === 6 && miNOmbre == "David"){ // Pide verificar ambos
    console.log("Si") // este resultado
}else{
    console.log("No") 
}

if(miNUmero === 6 || miNOmbre == "Kevin"){ // Pide verificar uno
    console.log("Si") // este resultado, porque se cumple al menos una condición
}else{
    console.log("No") 
}

// if else if else
let numero2 = 0
if(numero2 > 0){
    console.log("El número es positivo")
} else if(numero2 === 0){
    console.log("El número es cero") // este resultado
}else{
    console.log("El número es negativo")
}

// Sentencia Switch: Se puede sustituir un conjunto de sentencias if-else de una manera más legible
// el bloque default no es obligatorio
switch (condicion) {
    case condicion_1:
        bloque1
        break;
    case condicion_2:
        bloque1
        break;
    default:
        break;
}

/*--------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------- */
// Bucles
// while (mientras)
let contador = 0
while(contador < 5){
    console.log("Hola a todos") //Imprime 5 veces
    contador = contador + 1 // contador++
}

function bucleWhile(num) {
    let i = 0;
    while (i < num) {
        console.log(i);
        i++;
    }
 }
 bucleWhile(11) //imprime del 0 al 10

//------------
// DO-WHILE
// Huce una primera ejecución dentro del bloque del do y luego hace el while. No es muy común su uso
function doWhile(num) { 
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i < num);
}
doWhile(11) //imprime del 0 al 10
doWhile(0) // 0 -> imprime el cero xq ejecuta primero y al final pregunta

//------------------

//for
function bucleFor(num) {
    for (let i = 0; i < num; i++) {
    console.log(i) // imprime del 0 al 9
}
bucleFor(11) //imprime del 0 al 10
    
}
/*-------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

// FUNCIONES
/*Son bloques de código ejecutable, a los que podemos pasar parámetros y operar con ellos. Nos sirven para modular nuestros programas y estructurarlos
en bloques que realicen una tarea concreta. De esta manera nuestro código es más legible y mantenible.

Las funciones normalmente, al acabar su ejecución devuelven un valor con conseguimos con el parámetro "return". Se declaran con una palabra reservada function 
y a continuación suelen llevar un nombre , para poder invocarlas más adelante. Si no llevan nombre se les llama funciones anónimas */
// Se puede llamar a la función antes y después crearla
function saludar(nombre, edad){ // esta función no retorna nada, solo muestra en consola
    console.log("Hola. Mi nombre es " + nombre)
    console.log("Mi edad es: " + edad)

    return `Hola, mi nombre es ${nombre} y  tengo ${edad} años` // Hola, mi nombre es David y tengo 31 años
}
saludar("David", 31); // Hola. Mi nombre es David -> acá se llama a la función
                      // Mi edad es 31

//-------------
// Se puede poner un parámetro por defecto por si no se escribe nada en la llamada
function saludar(nombre = "Carlos") {
    return `¡Hola ${nombre}!`
} 
saludar() // '¡Hola Carlos!'
saludar('Paola') // '¡Hola Paola!'
// ------------
function multiplicar(num1, num2) {
    let resultado = num1 * num2; // con let solo existe dentro de esta función
    return resultado
}
let recibidor = multiplicar(2, 5); //hace la llamada y lo guarda en una variable
console.log(recibidor)
console.log(multiplicar(2,5)) // sino mostrar directamente

//--------------------------

/* Anteriormente JS se utilizaba para crear clases. Las clases está dentro de la POO (programación orientada a objetos). Una clases es
un molde de algo, por ejemplo la clase coche tiene ciertas propiedades y luego creas un objeto a partir de esa clase. En JS no había clases
hasta 2015 y se utilizaban funciones para ello*/
function Inventario(nombre) { // para identificar que eran de tipo clase, la convención era la 1ra letra en mayúsculas
    this.nombre = nombre;
    this.articulos = [];
}
Inventario.prototype.getNombre = function() { // para añadir métodos a este inventario se utiliza (también hay otra manera) la prop. prototype
        return this.nombre;                      // y ahí se añadian funciones que serían los métodos de esa función*/
}

Inventario.prototype.add = function(articulo, cantidad) { // agrega otro método al prototype que es añadir (add)
    this.articulos[articulo] = cantidad;
}
Inventario.prototype.cantidad = function(articulo){ // para mostrar la cantidad
    return this.articulos[articulo]
}
// Ya está la clase inventario. Ahora va a crear un objeto a la clase inventario
let libros = new Inventario('libros') /* 'libros' nombre del inventario. Se utiliza la palabra reservada new para crear un nuevo objeto
que tendrá la forma de más arriba "function Inventario(), es decir va a tener un nombre y una colección de artículos, y luego aparte
va a tener los métodos o funciones propias de la clase que son "getNombre" y "add" */
libros.getNombre()
libros.add("Aprendiendo Javascript", 5)
libros.cantidad('Aprendiendo Javascript'); // 5

// Ahora la forma moderna de crear clases. Es un poco más elegante
class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre() {
        return this.nombre;
    }

    add(articulo, cantidad) {
        this.articulos[articulo] = cantidad;
    }

    cantidad(articulo) {
        return this.articulos[articulo]
    }
}
let libros = new Inventario('libros');
libros.getNombre() // 'libros'
libros.add("Aprendiendo Javascript", 5)
libros.cantidad('Aprendiendo Javascript'); // 5

/*-----------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------- */
// ARRAYS - Arreglos. Generalmente se usan const xq son inmutables
// Tienen índices que indican posición. Arranca desde el cero

const array = [];
array[0] = '1'; //[1]
array[1] = '2'; //[1, 2]
array[0] // -> 1

//Los arrays son una colección de datos que pueden ser strings, números, funciones, otros objetos, otros arrays
let myArray = [1, 2, 3] // puede ser de números

myArray = ["hola", "que", "tal"] // de strings

myArray = [ // de objetos
    {propiedad: "valor"}, 
    {propiedad: "valor"}
]

myArray = [ // array de arrays
    [2, 4],
    [3, 6]
]
myArray[0][0] // -> 2   accede a la posición cero del array principal, y luego a la posición cero de ese array

myArray = [ // puede ser mixto
    1,
    true,
    [3, 2],
    "hola",
    { clave: "valor" }
]

// para saber la longitud de un array
myArray.length // 5  (la última modificación de myArray tiene 5 elementos)

//----------------------------
// Al heredar de Array tenemos varias funciones
let tuArray = [3, 6, 1, 4]

tuArray.sort() // -> [1, 3, 4, 6]  devuelve el array ordenado de menor a mayor

tuArray.pop() // -> 6   saca el último elemento del array, de la anterior modificación
tuArray // -> [1, 3, 4]  el 6 ya no está

tuArray.push(2) // para introducir un nuevo elemento
tuArray // -> [1, 3, 4, 2] introdujo el 2
tuArray.sort() // -> [1, 2, 3, 4] vuelve a ordenarlo

tuArray.reverse() // -> [4, 3, 2, 1]  ordena de forma inversa la última modificación

//----------------------------
// Un método muy útil que tiene la clase array, aunque ya no se usa tanto, es el método join(). Nos permite unir todos los elementos del array  en uno solo
// uniéndolos por el separador que le pasamos como parámetro. Esto era muy común para hacer plantillas de html aunque esto ya no se utiliza tanto
let valor = 3
const template = [
    "<li>",
    valor,
    "</li>"
].join("") // que los una y que no deje espacios
console.log(template) //-> ["<li>,", 3, "</li>"] sin el join            //-> '<li>3</li>'   con el join
// --------------------
// Otro método muy utilizado de arrays es el método map
// Esto nos permite aplicar una misma función a todos los elementos de un array y transformarlo. Y nos devolvería un array completamente nuevo con todos los
// elementos transformados

let segArray = [2, 4, 6, 8]

//Quiero calcular la raiz cuadrada de cada uno de ellos
let raices = segArray.map(function(item) {
    return Math.sqrt(item)
})
raices  //-> [ 1.41421356, 2, 2.44948974, 2.8284271247 ]    devuelve las raices cuadradas

// simplificando con arrow function
let raices2 = segArray.map((item) => Math.sqrt(item))
raices //-> [ 1.41421356, 2, 2.44948974, 2.8284271247 ]     devuelve lo mismo

// simplificando aun más. Si el parámetro coincide (en este caso item) se puede aplicar directamente el math.sqrt
raices = segArray.map(Math.sqrt) // aplica la raiz cuadrada a cada uno de los elementos

//----------------------------
// Método filter. Nos permite filtrar ciertos elementos de un array
let terArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] /*queremos filtrar aquellos que sean múltiplos de tres. Para saber eso, su división entre tres debería dar
de resto cero. Esa es la operación módulo y se utiliza el operador porcentaje*/

let resultado2 = terArray.filter(item => item % 3 === 0)
resultado // [3, 6, 9, 12, 15]
terArray // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]   no fue modificado, sigue siendo el mismo

terArray.slice(2, 4) //->[3, 4]    desde la posición dos hasta la cuarta, sin incluir esta última. En posición 2= 3, en posición 3 = 4

terArray.slice(2, -1) //-> [3,4,5,6,7,8,9,10,11,12,13,14]  desde la posición dos hasta la última, menos 1
//---------------------------
/*Método slice. Para hacer trozos de arrays. Le pasamos como parámetro el índice a partir del cual queremos cortar el array y el final. Si no se le indica final
irá hasta el final de array  */

terArray.slice(2) //->[3,4,5,6,7,8,9,10,11,12,13,14,15]    parte el array desde la posición 2
terArray // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]   sigue siendo el mismo
//---------------------------

// Otra forma de construir arrays. Llamando a la clase core, la clase primitiva array 
const array = new Array() // el número que se ponga dentro del paréntesis indicará la longitud del array

const obj = { // crea un objeto que dentro tiene un array que tiene 10 posiciones
    unArray: new Array(10)
}
for(let i = 0; i < obj.unArray.length; i++) {
    obj.unArray[1] = 'Hola'; //acá se pierde rendimiento. Primero en la comprobación de la longitud porque en la declaración del for
    // tiene que ir cacheando cada vez el obj.unArray.lenth y eso hace que el programa trabaje más. Abajo una mejor manera de hacerlo
}
// mejor manera
const unArray = obj.unArray;
let longitud = unArray.length; //también se lo puede poner dentro del for separado por coma al lado del let = 0
for(let i = 0; i < longitud; i++) {
    obj.unArray[i] = 'Hola'
}
// también así. Se pueden ahorrar micras de segundos para mejor optimización
const unArray = obj.unArray;
for(let i = 0, longitud = unArray.length; i < longitud; i++){
    obj.unArray[i] = 'Hola';
}

                            // para poder ver el tiempo de ejecución con buena y mala optimización
const obj = {
    unArray: new Array(1000)
}

function badPerformance() {
    console.time('bad');
    for(let i = 0; i < obj.unArray.length; i++) {
        obj.unArray[i] = 'Hola';
    }
    console.timeEnd('bad')
}

function goodPerformance() {
    console.time('good');
    let unArray = obj.unArray;
    for(let i = 0, longitud = unArray.length; i < longitud; i++){
        unArray[i] = 'Hola' //acá también hizo diferente al de arriba
    }
    console.timeEnd('good')
}
badPerformance(); //4ms de tiempo
goodPerformance(); //0ms de tiempo

//-----------

/* Otra estructura de bucle más completa. Se introdujo en la versión 5 de EcmaScript y es una función especial que pertenece a la clase array y permite iterar
dentro de un array de manera secuencial*/
const miArray = [1, 2, 3, 4]; //quiero iterar sin usar el for
miArray.forEach(function(item, index) {
    console.log("El valor de la posición " +index+ " es: " + item)
}); //El valor de la posición 0 es: 1 
    //El valor de la posición 1 es: 2 
    //El valor de la posición 2 es: 3 
    //El valor de la posición 3 es: 4

                    // usando el arrow function (ES6) y templates strings
const miArray2 = [1, 2, 3, 4];
miArray2.forEach((item, index) => {
    console.log(`El valor de la posición ${index} es: ${item}`)
})
//-------------------
//¿Qué utilidades tiene?
// Imaginá que tenés un objeto y que querés recorrer todos los valores de las propiedades de ese objeto
let libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: 'carlosazaustre.es',
    precio: '24.90',
} // No se puede iterar el objeto con forEach xq esta pertenece a la clase Array. Y un objeto no es un array
// Entonces necesitamos que estas propiedades del objeto sean un array. Lo podemos conseguir con una propiedad que tiene la clase object
// Una funcion que se llama "getOwnPropertyNames", esto nos va a devolver un array con todas las propiedades del objeto, y con la función 
// "getOwnPropertyDescriptor" nos devuelve el valor
const props = Object.getOwnPropertyNames(libro);
props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptors(libro, name).value // le pasamos el objeto libro, el name actual y queremos el value;
    console.log(`la prop ${name} contiene: ${valor}`)
})
// 'La prop titulo contiene: Aprendiendo Javascript'
// 'La prop autor contiene: Carlos Azaustre'
// 'La prop numPaginas contiene: 100'
// 'La prop editorial contiene: carlosazaustre.es' 
// 'La prop precio contiene: 24.90'
//--------------------

// For In. Apareció en EScript 6 y permite hacer lo mismo que for each pero de una forma más sencilla
for (key in object) //'para cada clave en un objeto quiero que hagas algo determinado'

for (let prop in libro) { // pone 'let prop' para que sea parecido a lo que vimos antes
    console.log(`La prop ${prop} contiene: ${libro[prop]}`)
 }
// 'La prop titulo contiene: Aprendiendo Javascript'
// 'La prop autor contiene: Carlos Azaustre'
// 'La prop numPaginas contiene: 100'
// 'La prop editorial contiene: carlosazaustre.es' 
// 'La prop precio contiene: 24.90'
// ---------------
let miArreglo = ["David", "Matias", "Kevin"]
for(let i = 0; i < 3; i++){
    console.log(miArreglo[i])
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------

// Las clases CORE y los módulos de Javascript. Las clases que forman el núcleo de lo que es el lenguaje
// Vamos a ver las clases CORE (object, number, array y string)

// OBJETOS: un objeto es una colección de variables y funciones agrupadas de manera estructural.
// Las variables que definimos dentro de un objeto se las llama 'propiedades' y a las funciones 'métodos'
let libro = {
    titulo: "Aprendiendo JavaScript", // las propiedades son pares clave-valor
    autor: "Carlos Azaustre",
    numPaginas: 100,
    editorial: 'carlosazaustre.es',
    precio: '24.90',
    leer: function() {
        console.log('He leido el libro')
    }
}
// para acceder a estas propiedades lo podemos hacer de dos formas: con la notación tipo punto y con la notacion de tipo array
libro.titulo // -> 'Aprendiendo JavaScript'
libro["titulo"] //  -> 'Aprendiendo JavaScript'  se usan ambos depende del caso. La propiedad podría ser nombre de variable y hay que trabajar sobre eso

// Aunque el objeto creado sea una constante (const) las propiedades y valor se pueden modificar
libro.titulo = "Desarrollo Web con React"
libro.titulo // -> "Desarrollo Web con React"  acá accediendo a la propiedad con el valor modificado

// Como podemos utilizar la notación con corchetes, nada nos impide crear una variable que se llame "pages" con el valor "numPaginas"
// y luego llamar a la propiedad
let pages = "numPaginas";
libro[pages] // -> 100
libro.pages // para esto no sirve, no te devuelve nada

// Dentro de un objeto se pueden crear funciones que se llamarían métodos. En el objeto creado se ve con la propiedad 'leer'
libro.leer() //-> 'He leido el libro'   así se lo llama al método

// ------------

// Para crear un objeto hay dos formas. Se puede hacer con la notación de llaves o creando una nueva instancia de la clase object
let libro = { // con corchetes y se puede ir rellenando con las propiedades y métodos
}

let libro = new Object({ titulo: "blablabla"});
libro.titulo //-> "blablabla"

// ----------------

// Un objeto puede tener varios niveles, no hace falta que las propiedades estén en el mismo nivel. Una propiedad puede tener asi mismo dentro otro objeto con
// más propiedades
let libro = {
    titulo: "Aprendiendo JavaScript",
    autor: {
        nombre: 'Carlos Azaustre',
        edad: 36,
        redes: {
            twitch: "twitch.tv/carlosazaustre",
            tiktok: "tiktok.com/@carlosazaustre"
        }
    }
}
// para acceder a las propiedades se hace de la misma manera
libro.autor.nombre //-> "Carlos Azaustre"
libro['autor']['redes']['twitch'] //-> "tiktok.com/@carlosazaustre"

// -------------

/* Una particularidad, cuando comprobemos objetos, para comprobar si son iguales ambos tienen que tener la misma referencia. Por tanto es recomendable utilizar
el triple igual. Por crear dos objetos con el mismo contenido no tienen porqué ser iguales. A no ser que compartan la referencia*/
const coche1 = { marca: "Tesla", modelo: "X"}
const coche2 = { marca: "Tesla", modelo: "X"}
coche1 === coche2 // -> false   No son iguales, no son la misma referencia (distintos nombre de variables). Si son iguales las propiedades
coche1.marca === coche2.marca // -> true    Las propiedades sí son iguales
// ¿Cómo hacer para que compartan referencia? Creamos un coche3 que sea igual a coche1
const coche3 = coche1 
coche3 === coche1 // -> true    Acá si tienen la misma referencia

// -------------

// Otra de las clases Core de JS es la clase Number. Esta clase codifica los números en coma flotante de doble precisión, es decir, con 8 bites o 64 bits
// Nos permite representar números enteros, decimales, hexadecimales y coma flotante
25 // numero entero
25.5 // numero decimal, también nos lo permite representar
0x1F  // número hexadecimal se codifica escribiendo el "0" "x" y luego el valor hexadecimal (1F sería el 31 en decimal)
0xFF // 255, es decir todos los valores. Ya que el hexadecimal va del cero al 15
5.4e2 // 540, xq hace 5.4 x 10 elevado a 2
1 / 0 // Infinity
-1 / 0 // -Infinity
1e1000 // Infinity, es un número demasiado grande
"a" / 15 // NaN, not a number. No es un número, no es una solución
// Para usar números podés crear directamente una variable
let numero = 5;
// O se puede hacer de una forma más elaborada, aunque no se utiliza
let numero1 = new Number(5) // sería exactamente lo mismo, pero esta versión no se utiliza

// Todos los número que creemos heredan de la clase Number y tienen unas funciones, unas propiedades interesantes. Y la propia función Number tiene dos 
// en particular muy utilizadas
parseInt("15") // formatea el string 15 a entero. Es útil en servicios web cuando envían datos en formato string
parseInt(15) // No se pierde nada aunque lo que se ingrese sea un número. Es mejor prevenir
parseInt("1111", 2) // 15 -> codifica esos 1111 como binarios. Y todo el conjunto (con el 2) en decimal es 15
parseFloat("5e3") // 5000 -> Float es similar a la versión Int, pero para los números en coma flotante 

// También se puede redondear números
let n = 2.5678
n.toFixed(2) // -> '2.57' eso nos devuelve un string
parseInt(n.toFixed(2)) // -> 2   lo parsea a entero
n.toFixed(0) // -> '3'

// también se puede redondear en números exponenciales
n.toExponential(2); // -> '2.57e+0'   2.57 por e elevado a la cero

// Podemos pasar un número a string
(1111).toString(10); // -> '1111'   el 10 es para que sea en base decimal. También ya viene predeterminada la base decimal

// Se puede pasar de número a binario
(15).toString(2) //-> '1111' en binario
(4369).toString(16) //-> '1111'  en base hexadecimal

//Math. En la documentación de Mozilla están todas las funciones de Math. Coseno, seno, etc
Math.PI // 3.141592653689783
Math.E // 2.718281828459045
Math.random() // 0.51763962  da un número aleatorio entre cero y uno
Math.random // 0.694398934 numero aleatorio distinto
Math.pow(2, 6) // 64   Potencia: dos elevado a la seis. No se usa tanto
2 ** 6 // 64  para potencias es la que más se usa
Math.min(2, 4, 6) //   2     el mínimo de usa serie de números
Math.max(4, 6, 2) // 6  el máximo en una serie de números

let persona = {
    nombre : "mi valor",
    edad: 24,
    masculino: true
}

persona.nombre = "Nuevo nombre"; //cambia el valor de nombre

persona.comidaFavorita = "Hamburguesa" // accede al objeto y crea un nuevo atributo

let persona2 = {
    nombre: "Kevin",
    edad: 21,
    masculino: false,
}

console.log(persona2.nombre) // muestra una sola cosa del objeto

console.log(persona, persona2)

// Array de objetos
let arregloDeObjetos = [persona, persona2]

// --------------------------
/* Clase String. Nos permite manipular texto. Un string se comporta como un array ya que es un conjunto de caracteres. Con índices que van desde el cero
hasta el último*/

"javascript"[2] //-> 'v'   | accede a la posición 2 del string
"javascript".length //-> 10    | tiene 10 caracteres
"javascript".charCodeAt(2) //-> 118    |   en la posición 2 está la 'v', y el 118 es el valor en unicode de ese caracter
"javascript".indexOf("script") //-> 4   |  ya que a partir de la posición 4 tenemos la palabra script
"javascript".indexOf("String") //-> -1  | quiere decir que no existe. Nos sirve para hacer comprobaciones en los condicionales
"javascript".substring(2, 4) //-> 'va' | tomar ciertas partes de la palabra. Acá desde la posición 2 a la 4 sin considerar esta última

// maneras de crear un string
let texto = "hola" // pasándole valor a una variable
let text = new String("Hola") // esta no se utiliza tanto

// Un string se puede transformar en array con el método split
const fecha = new Date()
fecha.toString() //-> 'Tue Mar 02 2021 19:20:30 GMT+0100 (Central Europa Standard Time)'
fecha.toString().split(" ") //-> ['Tue', 'Mar', '02', '2021', '19:20:30', 'GMT+0100', '(Central', 'European', 'Standard', 'Time)']
fecha.toString().split(" ")[4] //-> '19:21:08' | en  la posición 4 nos devuelve la hora
fecha.toString().split(" ")[4].split(":") //-> ['19', '20', '30'] 
fecha.toString().split(" ")[4].split(":")[0] // 19 | nos devuelve la hora. Y si quiero los minutos pongo la posición 1

//-------------------------------------------------------------------------------------------------------------------------------------------------------
// MANEJO DE ARRAYS Y MÉTODOS
// Vamos a ver 7 funciones de arrays que se utilizarán en el día a día

// Tenemos un array de objetos. Son posts de un blog.Vamos a ver cómo acceder a esos datos internos
const posts = [{
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com/1',
    tags: ['javascript', 'webdevelopment'],
},{
    id: 2,
    title: 'Mi experiencia con React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'], 
},{
    id: 3,
    title: 'Por qué dejé Angular',
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular'],
}]

//-------------------------

// Método Find. Nos permite buscar un elemento que contenga lo que estamos buscando
posts.find(post => post.title == 'Por qué dejé Angular') /* {id: 3, title: 'Por qué dejé Angular', image: 'https://img.com/3', 
tags: ['javascript', 'webdevelopment', 'angular'],}*/   // Al 'find' le pasamos una función de callback. Nos devuelve todo el objeto

// Se puede buscar por id
posts.find(post => post.id == 1) // {...}   | nos devuelve todo el primer objeto

//-------------------------

// Método Some. No es tan conocido pero también se utiliza. Nos va a devolver true o false dependiendo si existe o no lo que estamos buscando
// '¿Hay algún objeto que cumpla lo que voy a decirte ahora?'
posts.some(post => post.id == 4) // false | Puede servir para comprobar ciertas cosas
posts.some(post => post.id == 1) // true

// El anterior se puede combinar con el includes. NOs permite ver si existe dentro de un array cierta palabra
// '¿Hay algùn post en cuyas "tags" se incluya "vue"?'
post.some(post => post.tags.includes('vue')) // false | no tengo ningún post que tenga el tag 'vue'
post.some(post => post.tags.includes('react')) // true

//--------------------
// Método every. Contrario a some. No solo comprueba si hay alguno sino si se cumple en todas
// "¿En todos los posts, el atributo tags, incluye la etiqueta 'react'? "
post.every(post => post.tags.includes('react')) // false | porque solo está en 1
post.every(post => post.tags.includes('javascript')) // true

// ------------------------
/* Método map. Muy utilizado con React. Es como un bucle for de una manera más declarativa. En un for se declara de manera imperativa (lo que quiero ir haciendo)
y la forma declarativa es 'qué querés hacer'*/

// Queremos formar un array únicamente con los títulos de los objetos
posts.map(post => post.title) // ['Mi primer post', 'Mi experiencia con React', 'Por qué dejé Angular']
// Devuelve un array con los títulos de cada objeto

//--------------------------

// Podemos filtrar, es decir, que no devuelva un array a partir de otro únicamente con esa condición que queremos filtrar
posts.filter(post => post.tags.includes('angular')) /* [{   devuelve un array nuevo con los objetos. En este caso hay solo uno
                                                            id: 3,
                                                            title: 'Por qué dejé Angular',
                                                            image: 'https://img.com/3',
                                                            tags: ['javascript', 'webdevelopment', 'angular'],
                                                        }]*/

// Suponiendo que en el primer objeto del primer array no tiene imagen y quiero filtrar solamente los que sí tienen imágenes
posts.filter(post => post.image !== undefined) // y muestra los posts 2 y 3
posts.filter(post => post?.image) // lo mismo de arriba pero usando el operador "nullist colaising" . Ver en video "javascript necesario para react"

// -----------------------

// Método reduce.
// Cómo usarlo. Para usarlo en este array nos imaginamos que queremos crearnos un array que incluya todas las etiquetas que estamos utilizando
posts.reduce((allTags, post) => { /* luego del reduce la función callback recibe dos argumentos. El primero es el acumulador (en este caso llama a todas las 
    etiquetas - allTags) y el segundo es el elemento que estamos iterando en ese momento, que sería por ejemplo 'post'*/
    return [...allTags, ...post.tags]
}, []) // ['javascript', 'webdevelopment', 'javascript', 'webdevelopment', 'react', 'javascript', 'webdevelopment', 'angular']

/* Explicación del código: Retorna un nuevo array que contenga una copia (con express operator ...) de allTags y seguido queremos que concatene con el post
actual y las tags. De esta manera concatenamos arrays. Y por último lo inicializamos con un array vacío para que allTags entienda que es un array

Aparecen repetidas algunas, asi que usamos el nuevo operador de Js que es Set. Es una estructura que no tiene objetos repetidos*/
posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags])) // Creame un array a partir de otro array, pero este nuevo array va a ser Set 
}, []) // ['javascript', 'webdevelopment', 'react', 'angular']

// si lo de arriba es complicado, se puede usar filter
posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags]
}, []).filter((post, index, self) => index === self.indexOf(post)) // ['javascript', 'webdevelopment', 'react', 'angular']

/* ---------------------------------------------------------------------------------------------------------------------------------------------*/
// OBJETO THIS
/*This es un objeto especial que hace referencia al contexto en el que se está ejecutando la función  */
var obj = {
    foo: function () { return 'foo'},
    bar: function () {
        document.addEventListener('clic', event => this.foo())
    }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// CLOSURES 
// Closures, clausulas o funciones de cierre son muy utilizados en js. Está dentro de las good parts

// Las funciones en js son objetos, en realidad todo es un objeto. Y heredan propiedades de la clase object, por tanto podés tratarlas como tal.
// Podemos guardar una función en una variable y luego invocarla con un paréntesis 
const saludar = function(nombre) {
    return "Hola " + nombre;
}

saludar('David') // 'Hola David'
saludar; // f saludar() | devuelve la función saludar