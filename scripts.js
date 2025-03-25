document.addEventListener("DOMContentLoaded", function() {
    // Productos y filtro de precio
    const productsContainer = document.getElementById("productsContainer");
    const priceFilter = document.getElementById("priceFilter");
    const priceValue = document.getElementById("priceValue");

    function fetchAndDisplayProducts(maxPrice = 5000) {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.products.filter(product => product.price <= maxPrice);
                displayProducts(filteredProducts);
            })
            .catch(error => console.error("Error fetching products:", error));
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ""; // Limpiar productos anteriores

        let row;
        products.forEach((product, index) => {
            if (index % 4 === 0) {
                row = document.createElement("div");
                row.className = "product-row";
                productsContainer.appendChild(row);
            }

            const productElement = document.createElement("div");
            productElement.className = "product";
            productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p><strong>Precio: $${product.price}</strong></p>
                <p>Descuento: ${product.discountPercentage}%</p>
                <p>Valoración: ${product.rating}</p>
                <p>Stock: ${product.stock}</p>
                <p>Marca: ${product.brand}</p>
                <p>Categoría: ${product.category}</p>
            `;

            row.appendChild(productElement);
        });
    }

    priceFilter.addEventListener("input", function() {
        const maxPrice = parseFloat(this.value);
        priceValue.textContent = maxPrice;
        fetchAndDisplayProducts(maxPrice);
    });

    fetchAndDisplayProducts();
});

// Anuncios aleatorios
function randomnumber() {
    return Math.floor(Math.random() * 30) + 1;
}

function anuncioIzq() {
    fetch("https://dummyjson.com/products/" + randomnumber())
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
    fetch("https://dummyjson.com/products/" + randomnumber())
        .then(response => response.json())
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

// Estadísticas de La Liga
const API_URL = 'https://v3.football.api-sports.io';
const API_KEY = '89145378487ac5b3b446de6d5a85bd6b';
const LEAGUE_ID = 140;

async function fetchLaLigaStats(season, tableId) {
    try {
        const response = await fetch(`${API_URL}/standings?league=${LEAGUE_ID}&season=${season}`, {
            method: 'GET',
            headers: { 'x-apisports-key': API_KEY }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Standings API Response for ${season}:`, data);

        if (!data.response || data.response.length === 0) {
            console.error(`No standings found for season ${season}`);
            return;
        }

        const leagueData = data.response[0]?.league;
        const standings = leagueData?.standings[0];

        if (!standings) {
            console.error(`No standings data available for season ${season}`);
            return;
        }

        const standingsTable = document.getElementById(tableId);
        if (!standingsTable) {
            console.error(`Table element not found: ${tableId}`);
            return;
        }

        standingsTable.innerHTML = `<tr><th>Pos</th><th>Equipo</th><th>Puntos</th><th>GF</th><th>GC</th></tr>`;

        standings.forEach(team => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${team.rank}</td>
                <td>${team.team.name}</td>
                <td>${team.points}</td>
                <td>${team.all.goals.for}</td>
                <td>${team.all.goals.against}</td>
            `;
            standingsTable.appendChild(row);
        });
    } catch (error) {
        console.error(`Error fetching La Liga stats for season ${season}:`, error);
    }
}

window.onload = function () {
    fetchLaLigaStats(2021, 'standings-table-2021');
    fetchLaLigaStats(2022, 'standings-table-2022');
    fetchLaLigaStats(2023, 'standings-table-2023');
};