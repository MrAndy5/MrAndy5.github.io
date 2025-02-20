document.addEventListener("DOMContentLoaded", async function () {
    const productContainer = document.getElementById("product-list");
    const filterInput = document.getElementById("price-filter");

    async function fetchProducts() {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            return data.products;
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    }
    function displayProducts(products) {
        productContainer.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image"/>
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
            `;
            productContainer.appendChild(productElement);
        });
    }

    function filterProducts(products, maxPrice) {
        return products.filter(product => product.price <= maxPrice);
    }

    // Initialize store
    const allProducts = await fetchProducts();
    displayProducts(allProducts);

    // Filter event listener
    filterInput.addEventListener("input", function () {
        const maxPrice = parseFloat(filterInput.value);
        const filteredProducts = isNaN(maxPrice) ? allProducts : filterProducts(allProducts, maxPrice);
        displayProducts(filteredProducts);
    });
});
