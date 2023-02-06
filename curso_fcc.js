function proximoEnLaFila(arr, elem) {
    arr.push(elem); // agrega al final del arreglo
    return arr.shift() // remueve el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

console.log(`Antes: ${JSON.stringify(miArreglo)}`) // Antes: [1,2,3,4,5]
// Para ver el status del arreglo antes y después de llamar a la función
// JSON.stringify: es útil para mostrar arreglos en la consola

console.log(proximoEnLaFila(miArreglo, 6)) // 1

console.log(`Después: ${JSON.stringify(miArreglo)}`) // Después: [2,3,4,5,6]