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

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos.id.propiedad = discos[id][propiedad] || []; // acá si no se cumple lo primero (si no es undefined ) se cumple lo 2do. Se cubren las dos primeras condiciones
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor; // estamos agregando el valor a la propiedad del album especifico. Si la propiedad no existe se va a agregar y si ya existe se va a actualizar. Porque solamente puede llevar un solo valor
  }
}