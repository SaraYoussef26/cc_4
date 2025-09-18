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
    switch (product.category) {
    case "electornics":
        discount = 0.2
        break;
    case "apparel":
        discount = 0.15
        break;
    case "groceries":
    case "household":
        discount = 0.1
        break;
    case "other":
        //no discount
        default:
        break;
    }
}


