// Sample product data (normally fetched from a backend)
const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
    { id: 4, name: 'Product 4', price: 15 },
    { id: 5, name: 'Product 5', price: 10 }
];

function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart! (This is a demo)`);
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
