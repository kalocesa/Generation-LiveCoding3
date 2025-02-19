// Tenemos un li de productos
//Se mejora legibilidad del array de productos. Todos en columna
//Le cambio el nombre al array en inglés
const products = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];
//Se le cambia el getElementsById para que busque ese selector.
const list = document.getElementsById("lista-de-productos");
const $i = document.querySelector(".input");

for (let i = 0; i < productos.length; i++) {
  //cambio nombre de variable
  const container = document.createElement("div");
  container.classList.add("producto");
  //cmabio a nombre descriptivo de la variable title
  const title = document.createElement("p");
  title.classList.add("titulo");
  title.textContent = productos[i].nombre;

  var imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  list.appendChild(d);
}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
