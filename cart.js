export function initCart() {
    let cart = JSON.parse(localStorage.getItem('userGarage')) || [];

    window.addToCart = (id) => {
        cart.push(id);
        localStorage.setItem('userGarage', JSON.stringify(cart));
        updateCartCount();
        alert("Car added to your collection!");
    };

    function updateCartCount() {
        const badge = document.getElementById('cart-count');
        if(badge) badge.innerText = cart.length;
    }

    updateCartCount();
}
