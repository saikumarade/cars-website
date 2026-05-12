import { initCart } from './cart-system.js';
import { renderInventory } from './filter.js';

document.addEventListener('DOMContentLoaded', () => {
    initCart();
    renderInventory();

    // Listener for filter dropdown if it exists
    const filterDropdown = document.getElementById('cat-filter');
    if(filterDropdown) {
        filterDropdown.addEventListener('change', (e) => {
            renderInventory(e.target.value);
        });
    }
});
