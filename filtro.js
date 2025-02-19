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
const list = document.getElementById("lista-de-productos");
const input = document.querySelector(".input");

//Se envuelve el ciclo for de los productos en una arrow function
const displayProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    //cambio nombre de variable
    const container = document.createElement("div");
    container.classList.add("producto");
    //cmabio a nombre descriptivo de la variable title
    const title = document.createElement("p");
    title.classList.add("titulo");
    title.textContent = products[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", products[i].img);

    container.appendChild(title);
    container.appendChild(imagen);

    list.appendChild(container);
  }
  return;
};

//Faltaría definir lo que entiendo que es una función de displayProductos.
displayProducts(products);

//Se agrega el punto para que mi querySelector sea de clase
//Se cambia la const a inglés
const filterButton = document.querySelector(".button");

filterButton.onclick = function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const text = input.value;
  console.log(text);
  //Se cambia el nombre de la variable a inglés
  const filterProducts = filtering(products, text);

  for (let i = 0; i < filterProducts.length; i++) {
    //Se cambia el nombre de las variables a inglés y más descriptivas de acuerdo a la etiqueta que hacen referencia
    const container = document.createElement("div");
    container.classList.add("producto");

    const title = document.createElement("p");
    title.classList.add("titulo");
    title.textContent = filterProducts[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", filterProducts[i].img);

    container.appendChild(title);
    container.appendChild(imagen);

    list.appendChild(container);
  }
};

const filtering = (products = [], text) => {
  return products.filter(
    (item) => item.tipo.includes(text) || item.color.includes(text)
  );
};
