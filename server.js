const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve frontend assets

// Static array to store items (No Database)
let items = [
    { name: "Pizza Margherita", price: "299", image: "margherita-pizza.jpg" },
    { name: "Pepperoni Pizza", price: "449", image: "pepperoni-pizza.jpg" },
    { name: "Veggie Pizza", price: "341", image: "veggie-pizza.jpg" },
    { name: "Cheese burger", price: "299", image: "cheese-burger.jpg" },
    { name: "Veggie Burger", price: "Rs.439", image: "burger2.jpg" },
];

// Cart (Stored in memory for now)
let cart = [];

// Serve index.html as homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Fetch All Items
app.get("/items", (req, res) => {
    res.json(items);
});

// Add Item Route (Admin)
app.post("/add-item", (req, res) => {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ message: "Please provide name, price, and image URL." });
    }
    items.push({ name, price, image });
    console.log("New Item Added:", { name, price, image });
    res.json({ message: "Item added successfully!" });
});

// ✅ Updated: Fetch Cart Items route (matches frontend)
app.get("/cart", (req, res) => {
    res.json(cart);
});

// ✅ Updated: Add to Cart stores name, price, and image
app.post("/add-to-cart", (req, res) => {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
        return res.status(400).json({ message: "Item name, price, and image are required." });
    }
    cart.push({ name, price, image });
    res.json({ message: `${name} added to cart!` });
});

// Clear Cart
app.post("/clear-cart", (req, res) => {
    req.session.cart = [];
    res.json({ success: true });
});

// Place Order
app.post("/order", (req, res) => {
    console.log("Order received:", req.body);
    res.json({ message: "Order placed successfully!" });
});

// Serve Additional Pages
app.get("/cart-page", (req, res) => res.sendFile(path.join(__dirname, "public", "add-to-cart.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "public", "about-us.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "contact-us.html")));
app.get("/services", (req, res) => res.sendFile(path.join(__dirname, "public", "services.html")));
app.get("/margherita-pizza.jpg",(req,res)=>
    {
    res.sendFile(__dirname+"/margherita-pizza.jpg");
    });
app.get("/pepperoni-pizza.jpg",(req,res)=>
        {
        res.sendFile(__dirname+"/pepperoni-pizza.jpg");
        });    
app.get("/veggie-pizza.jpg",(req,res)=>
            {
            res.sendFile(__dirname+"/veggie-pizza.jpg");
            });   
app.get("/bacon-burger.jpg",(req,res)=>
                {
            res.sendFile(__dirname+"/bacon-burger.jpg");
                });  
app.get("/cheese-burger.jpg",(req,res)=>
                    {
            res.sendFile(__dirname+"/cheese-burger.jpg");
                    }); 
app.get("/veggie-burger.jpg",(req,res)=>
                        {
            res.sendFile(__dirname+"/veggie-burger.jpg");
                    });                                          
app.get("/sushi-roll.jpg",(req,res)=>
                        {
             res.sendFile(__dirname+"/sushi-roll.jpg");
                        });
app.get("/tempura-sushi.jpg",(req,res)=>
                            {
            res.sendFile(__dirname+"/tempura-sushi.jpg");
                            });    
app.get("sushi-nigiri.jpg",(req,res)=>
                                {
             res.sendFile(__dirname+"/sushi-nigiri.jpg");
                                });   
 app.get("/greek-salad.jpg",(req,res)=>
                                    {
            res.sendFile(__dirname+"/greek-salad.jpg");
                                    });  
app.get("/caesar-salad.jpg",(req,res)=>
                                        {
            res.sendFile(__dirname+"/caesar-salad.jpg");
                                        }); 
 app.get("fruit-salad.jpg",(req,res)=>
                                            {
            res.sendFile(__dirname+"/fruit-salad.jpg");
                                        });                                          
app.get("/chocolate-cake.jpg",(req,res)=>
                                            {
            res.sendFile(__dirname+"/chocolate-cake.jpg");
                                            });  
 app.get("/cheese-cake.jpg",(req,res)=>
                                                {
            res.sendFile(__dirname+"/cheese-cake.jpg");
                                                }); 
app.get("ice-cream.jpg",(req,res)=>
                                                    {
            res.sendFile(__dirname+"/ice-cream.jpg");
                                                });                                          
                                                                   
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
