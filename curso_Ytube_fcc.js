const sumar = (x, y, z) => { //recibe solor 3 argumentos
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

// para que reciba cualquier cantidad de argumentos
const sumar1 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sumar1(1, 2)) // 3