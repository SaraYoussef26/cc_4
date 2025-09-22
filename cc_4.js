//Coding Challenge 4

//Step 2: Creating an array
let products = [
    {name: "Cell Phone", category: "electronics",  price: 600,  inventory: 8},
    {name: "Skirt", category: "apparel",  price: 19.99,  inventory:8},
    {name: "Strawberry", category: "groceries",  price: 3.12,  inventory: 20},
    {name: "Paper Towels", category: "household",  price: 6.03,  inventory: 15},
    {name: "Pencil", category: "other", price: 12.10,  inventory: 10},
];
//Step 3: Applying discounts to products
for (let product of products) {
    let discount = 0;
    switch (product.category) {
    case "electronics":
        discount = 0.2;
        break;
    case "apparel":
        discount = 0.15;
        break;
    case "groceries":
    case "household":
        discount = 0.1;
        break;
    default:
        discount = 0;
        break;
    }
    product.price *= (1 - discount);
}
//Step 4: Creating a variable customer type
let customerTypes = ["regular", "student", "senior"];
if (customerTypes === "student") { extraDiscount = 0.05; }
else if (customerType === "senior") { extraDiscount = 0.07; }
else { extraDiscount = 0; }


//Step 5: Checking out 3 customers
let customerType = ["regular", "student", "senior"];
for (customerTypes of regular) {
let customerType = customerTypes [ 1 ];
let extraDiscount = 0;

if (customerType === "student") { extraDiscount = 0.05; }
else if (customerType === "senior") { extraDiscount = 0.07; }
else { extraDiscount = 0; }  
}
let subtotal = 0;

for (let item of items) {
    if (item.inventory >= 0) {
        subtotal +=item.price;
        item.inventory--;
    } 
}
let finalTotal = subtotal * (1 - extraDiscount);
console.log (`Customer ${i}: $${finalTotal.toFixed(2)}`);

//Step 6
let cellPhone = products.find(product => product.name === "Cell Phone");
for (let key in cellPhone) {
 console.log(`${key}: ${cellPhone[key]}`);
}

//Step 7
let skirt = products.find(product => product.name === "Skirt");
for (let [key, value]of Object.entries(skirt)){
    console.log(`${key}: ${value}`);
}
let strawberry = products.find(product => product.name === "strawberry");
for (let [key, value]of Object.entries(strawberry)){
    console.log(`${key}: ${value}`);
}
let paperTowel = products.find(product => product.name === "papertTowel");
for (let [key, value]of Object.entries(paperTowel)){
    console.log(`${key}: ${value}`);
}
let pencil = products.find(product => product.name === "pencil");
for (let [key, value]of Object.entries(pencil)){
    console.log(`${key}: ${value}`);
}

