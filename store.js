
document.addEventListener("DOMContentLoaded", function() {
    // Fetch all products from the server
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            // Display all products
            displayProducts(data.products);
        })
        .catch(error => console.error("Error fetching products:", error));

    // Add event listener to the price filter
    document.getElementById("priceFilter").addEventListener("input", function() {
        const maxPrice = parseFloat(this.value);
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                // Filter products by price
                const filteredProducts = data.products.filter(product => product.price <= maxPrice);
                displayProducts(filteredProducts);
            })
            .catch(error => console.error("Error fetching products:", error));
    });
});

function displayProducts(products) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = ""; // Clear previous products

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";

        productElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Discount: ${product.discountPercentage}%</p>
            <p>Rating: ${product.rating}</p>
            <p>Stock: ${product.stock}</p>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
        `;

        productsContainer.appendChild(productElement);
    });
}