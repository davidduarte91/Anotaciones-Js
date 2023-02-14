function calcularRaizCuadrada(num) {
  if (num < 0) { // no existe raiz cuadrada para numeros negativos
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-4))