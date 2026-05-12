import { cars } from './car-data.js';

export function renderInventory(filter = 'all') {
    const grid = document.querySelector('.car-grid');
    if(!grid) return;

    const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);

    grid.innerHTML = filtered.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p>$${car.price.toLocaleString()}</p>
                <span>${car.topSpeed}</span>
                <button onclick="addToCart(${car.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}
