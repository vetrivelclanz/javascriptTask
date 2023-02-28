const products = [{
    id: 1,
    name: "Carbonated Water - Strawberry",
    price: 204,
    quantity: 42
  }, {
    id: 2,
    name: "Sage Ground Wiberg",
    price: 144,
    quantity: 30
  }, {
    id: 3,
    name: "Bread - Hot Dog Buns",
    price: 445,
    quantity: 17
  }, {
    id: 4,
    name: "Oil - Shortening - All - Purpose",
    price: 255,
    quantity: 42
  }, {
    id: 5,
    name: "Wasabi Paste",
    price: 481,
    quantity: 39
  },{
    id: 6,
    name: "Carbonateds Water - Strawberry",
    price: 2067,
    quantity: 42
  },

]

  console.log(products);

  function calculateRevenue(products) {
    const revenue = {};
  
    for (let i = 0; i < products.length; i++) {
      const { name, price, quantity } = products[i];
      const total = price * quantity;
  
      if (revenue[name]) {
        revenue[name] += total;
      } else {
        revenue[name] = total;
      }
    }
  
    return revenue;
  }

  const revenue = calculateRevenue(products);
console.log(revenue);


  