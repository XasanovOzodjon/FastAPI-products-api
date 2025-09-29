// This file contains the JavaScript code that handles the dynamic behavior of the frontend. 

const apiUrl = 'http://localhost:8000/products';

async function fetchProducts(query = "", page = 1, limit = 10) {
    try {
        let url = apiUrl;
        if (query) {
            url += `/search?search=${encodeURIComponent(query)}`;
        } else {
            url += `?page=${page}&limit=${limit}`;
        }
        const response = await fetch(url);
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
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.className = 'product';

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productBrand = document.createElement('p');
        productBrand.textContent = `Brand: ${product.brand ?? '-'}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = `Description: ${product.description ?? '-'}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        li.appendChild(productName);
        li.appendChild(productBrand);
        li.appendChild(productDescription);
        li.appendChild(productPrice);
        productContainer.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const pageInput = document.getElementById('page-input');
    const limitInput = document.getElementById('limit-input');
    const paginationBtn = document.getElementById('pagination-btn');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-btn');

    function loadProducts() {
        const page = parseInt(pageInput.value) || 1;
        const limit = parseInt(limitInput.value) || 10;
        const query = searchInput.value.trim();
        if (query.length >= 3) {
            fetchProducts(query);
        } else {
            fetchProducts("", page, limit);
        }
    }

    fetchProducts();

    paginationBtn.addEventListener('click', loadProducts);

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query.length >= 3) {
            fetchProducts(query);
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query.length >= 3) {
                fetchProducts(query);
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = "";
        loadProducts();
    });
});