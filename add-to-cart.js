// JavaScript for Add to Cart Button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.closest('.menu-item');
        const itemName = menuItem.querySelector('h2').textContent;
        const itemPrice = menuItem.querySelector('.price').textContent;

        // Show a simple alert for now (could be a modal or toast notification)
        alert(`${itemName} has been added to your cart. Price: ${itemPrice}`);
        
        // Here you can also save it in localStorage, update a cart icon, etc.
    });
});
