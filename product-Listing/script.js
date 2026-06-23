const products = [

{
    name:"HP Laptop",
    category:"Electronics",
    price:50000,
    rating:4.8
},

{
    name:"iPhone 15",
    category:"Electronics",
    price:75000,
    rating:4.9
},

{
    name:"Samsung Galaxy S24",
    category:"Electronics",
    price:68000,
    rating:4.7
},

{
    name:"Smart Watch",
    category:"Electronics",
    price:5000,
    rating:4.5
},

{
    name:"Bluetooth Speaker",
    category:"Electronics",
    price:2500,
    rating:4.4
},

{
    name:"Sports Shoes",
    category:"Shoes",
    price:3000,
    rating:4.5
},

{
    name:"Running Shoes",
    category:"Shoes",
    price:4500,
    rating:4.7
},

{
    name:"Sneakers",
    category:"Shoes",
    price:4000,
    rating:4.6
},

{
    name:"Casual Shoes",
    category:"Shoes",
    price:2800,
    rating:4.2
},

{
    name:"Formal Shoes",
    category:"Shoes",
    price:3500,
    rating:4.4
},

{
    name:"T-Shirt",
    category:"Clothing",
    price:800,
    rating:4.2
},

{
    name:"Jeans",
    category:"Clothing",
    price:1500,
    rating:4.5
},

{
    name:"Hoodie",
    category:"Clothing",
    price:1800,
    rating:4.7
},

{
    name:"Jacket",
    category:"Clothing",
    price:2500,
    rating:4.8
},

{
    name:"Shirt",
    category:"Clothing",
    price:1200,
    rating:4.4
}

];

const productContainer = document.getElementById("products");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

displayProducts(products);

categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

function filterAndSort(){

    let filtered = [...products];

    if(categoryFilter.value !== "all"){

        filtered = filtered.filter(
            product =>
            product.category === categoryFilter.value
        );
    }

    if(sortOption.value === "priceLow"){

        filtered.sort((a,b)=>
            a.price-b.price
        );
    }

    else if(sortOption.value === "priceHigh"){

        filtered.sort((a,b)=>
            b.price-a.price
        );
    }

    else if(sortOption.value === "rating"){

        filtered.sort((a,b)=>
            b.rating-a.rating
        );
    }

    displayProducts(filtered);
}

function displayProducts(data){

    productContainer.innerHTML = "";

    data.forEach(product=>{

        let emoji = "📦";

        if(product.category === "Electronics")
            emoji = "💻";

        if(product.category === "Shoes")
            emoji = "👟";

        if(product.category === "Clothing")
            emoji = "👕";

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <div class="product-image">
                ${emoji}
            </div>

            <div class="card-content">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <button class="buy-btn">
                    Add to Cart
                </button>

            </div>
        `;

        productContainer.appendChild(card);
    });
}