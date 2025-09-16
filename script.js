// Shopping Cart Functionality
let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
    showAddToCartAnimation();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cartTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <div style="font-weight: bold; color: #5d4037;">${item.name}</div>
                <div style="font-size: 0.9em; color: #8d6e63;">$${item.price} x ${item.quantity}</div>
            </div>
            <button onclick="removeFromCart
