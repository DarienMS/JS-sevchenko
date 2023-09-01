const url = 'https://burgers-hub.p.rapidapi.com/find-burger/?search=chicken';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dd577adadmshb03301c0818f732p130635jsn0bae33cff311',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	}
};


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
  });
});


const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};




const resultadoDiv = document.getElementById("resultado");



const recetaDiv = document.getElementById("receta");


const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("La solicitud no se pudo completar");
    }
    return response.json();
  })
  .then(data => {
    
    const receta = data.meals[0];
    
    
    const contenido = `
      <h2>${receta.strMeal}</h2>
      <img src="${receta.strMealThumb}" alt="${receta.strMeal}">
      <p>Category: ${receta.strCategory}</p>
      <p>Ingredients:</p>
      <ul>
        <li>${receta.strIngredient1} - ${receta.strMeasure1}</li>
        <li>${receta.strIngredient2} - ${receta.strMeasure2}</li>
      </ul>
      <p>Instructions: ${receta.strInstructions}</p>
    `;

    
    recetaDiv.innerHTML = contenido;
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });