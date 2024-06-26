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
image.src= "https://upload.wikimedia.org/wikipedia/commons/7/71/McD_Big_Mac.jpg";
image.style.width = "100px";
image.style.height = "100px";
image.style.borderRadius = "10px";
firstDiv.appendChild(image);

const secondDiv = document.createElement("div");
secondDiv.id ="secondDiv";
containerDiv.appendChild(secondDiv);






