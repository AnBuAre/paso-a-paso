import { fastFoof } from "./datos.js";
console.log(fastFoof);

const button = document.querySelector("#button");
const div2= document.querySelector(".div2");

button.addEventListener("click",() => {
    if(div2.style.display === "none"){
        div2.style.display = "block";
    } else{ 
        div2.style.display = "none";
    }

});

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.body.appendChild(containerDiv);

const firstDiv = document.createElement("div");
firstDiv.id ="firstDiv";
containerDiv.appendChild(firstDiv);

const image = document.createElement("img");
image.src= fastFoof[0].img;
image.style.width = "120px";
image.style.height = "120px";
image.style.borderRadius = "10px";
firstDiv.appendChild(image);

const secondDiv = document.createElement("div");
secondDiv.id ="secondDiv";
containerDiv.appendChild(secondDiv);

const name = document.createElement("h1");
name.id = "h1";
name.textContent = `Nombre: ${fastFoof[0].productName}`;
const price = document.createElement("p");
price.id= "p";
price.textContent = `Precio: €${fastFoof[0].price.toFixed(2)}`;

firstDiv.appendChild(name);
firstDiv.appendChild(price);

const botton = document.createElement("button");
botton.id = "botton"
botton.textContent = "Add"
containerDiv.appendChild(botton)
console.log(botton);

const productListContainer = document.createElement("div");
productListContainer.id = "productListContainer";
document.body.appendChild(productListContainer);

fastFoof.forEach(product => {
    const productContainer= document.createElement("div");
    productContainer.id= "productContainer";

    const image = document.createElement('img');
    image.id= "img";
    image.src = product.img;
    image.alt = product.productName;
    image.style.width = '100px';
    image.style.height = '100px';
    image.style.borderRadius = '10px';
    productContainer.appendChild(image);

    const name = document.createElement('p');
    name.id= "name";
    name.textContent = `Nombre: ${product.productName}`;
    productContainer.appendChild(name);

    const price = document.createElement('p');
    price.id = "price";
    price.textContent = `Precio: ${product.price.toFixed(2)}€`;
    productContainer.appendChild(price);

    productListContainer.appendChild(productContainer);

    const botton = document.createElement("button");
    botton.id = "botton"
    botton.textContent = "Add"
    productContainer.appendChild(botton)
     

})



