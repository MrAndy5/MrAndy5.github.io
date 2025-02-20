
function randomnumber() {
    const numeroProd = Math.floor(Math.random() * 30) + 1;
    return numeroProd;
}

function anuncioIzq() {
    fetch("https://dummyjson.com/products/"+randomnumber()) //URL de la llamada
    .then(response => response.json())
    .then(data => {
        document.getElementById("thumbnailL").src = data.thumbnail;
        document.getElementById("titleL").textContent = data.title;
        document.getElementById("linkL").href = "product.html?id=" + data.id;
    })
    .catch(error => console.error("Error al obtener los datos del producto:", error));
    document.getElementById("CargandoL").style.display = "none";
}

function anuncioDer() {
    fetch("https://dummyjson.com/products/"+randomnumber()) //URL de la llamada
    .then(data => {
        document.getElementById("thumbnailR").src = data.thumbnail;
        document.getElementById("titleR").textContent = data.title;
        document.getElementById("linkR").href = "product.html?id=" + data.id;
    })
    .catch(error => console.error("Error al obtener los datos del producto:", error));
    document.getElementById("CargandoR").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    anuncioIzq();
    anuncioDer();
});

