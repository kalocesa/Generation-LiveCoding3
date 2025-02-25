// Tenemos un li de productos
//Se mejora legibilidad del array de productos. Todos en columna
//Le cambio el nombre al array en inglés
//Ingresé las imagenes a la carpeta images
const products = [
  {
    name: "Zapato negro",
    type: "zapato",
    color: "negro",
    img: "./images/taco-negro.jpg",
  },
  {
    name: "Zapato azul",
    type: "zapato",
    color: "azul",
    img: "./images/taco-azul.jpg",
  },
  {
    name: "Bota negra",
    type: "bota",
    color: "negro",
    img: "./images/bota-negra.jpg",
  },
  {
    name: "Bota azul",
    type: "bota",
    color: "azul",
    img: "./images/bota-azul.jpg",
  },
  {
    name: "Zapato rojo",
    type: "zapato",
    color: "rojo",
    img: "./images/zapato-rojo.jpg",
  },
];
//Se le cambia el getElementsById para que busque ese selector.
const list = document.getElementById("listProducts");
const input = document.querySelector(".input");

//Se envuelve el ciclo for de los productos en una arrow function
const displayProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    //cambio nombre de variable
    const container = document.createElement("div");
    container.classList.add("product");
    //cmabio a nombre descriptivo de la variable title
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = products[i].name;

    const image = document.createElement("img");
    image.setAttribute("src", products[i].img);

    container.appendChild(title);
    container.appendChild(image);

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
    container.classList.add("product");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = filterProducts[i].name;

    const image = document.createElement("img");
    image.setAttribute("src", filterProducts[i].img);

    container.appendChild(title);
    container.appendChild(image);

    list.appendChild(container);
  }
};

const filtering = (products = [], text) => {
  return products.filter(
    (item) => item.type.includes(text) || item.color.includes(text)
  );
};

const resetButton = document.querySelector(".reset-button");

resetButton.onclick = function () {
  input.value = ""; // Limpiar el valor del input
  displayProducts(products); // Mostrar productos originales
};
