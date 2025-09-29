// This file contains the JavaScript code that handles the dynamic behavior of the frontend. 

const apiUrl = 'http://localhost:8000/products';

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productContainer.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});