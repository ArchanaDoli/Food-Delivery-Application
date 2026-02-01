const API_URL = "http://localhost:2007";
function fetchItems() {
    fetch(`${API_URL}/items`)
    .then(response => response.json())
    .then(items => {
        const itemList = document.getElementById("items-list");
        itemList.innerHTML = "";
        items.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.classList.add("item-card");
            itemCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="150">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart('${item.name}', '${item.price}', '${item.image}')">Add to Cart</button>
            `;
            itemList.appendChild(itemCard);
        });
    })
    .catch(error => console.error("Error fetching items:", error));
}
function addToCart(name, price, image) {
    fetch(`${API_URL}/add-to-cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, image })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error adding to cart:", error));
}
function fetchCartItems() {
    fetch(`${API_URL}/cart`)
    .then(response => response.json())
    .then(cartItems => {
        const cartList = document.getElementById("cart-list");
        cartList.innerHTML = "";
        cartItems.forEach(item => {
            const cartCard = document.createElement("div");
            cartCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="100">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            `;
            cartList.appendChild(cartCard);
        });
    })
    .catch(error => console.error("Error fetching cart:", error));
}
if (document.getElementById("items-list")) {
    fetchItems();
}
if (document.getElementById("cart-list")) {
    fetchCartItems();
}