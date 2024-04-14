const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

const {
  user: {
    id,
    name,
    age,
    email,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
  },
  products: [product1, product2, product3],
  settings: { darkMode, notifications, language },
} = data;

console.log("User Info:");
console.log("ID:", id);
console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);
console.log("City:", city);
console.log("Country:", country);
console.log("Hobbies:", hobbies);
console.log("Math Score:", math);
console.log("Science Score:", science);
console.log("History Score:", history);

console.log(product1);
console.log(product2);
console.log(product3);

// console.log("\nProducts:");
// console.log("Product 1 - ID:", productId1);
// console.log("Product 1 - Name:", productName1);
// console.log("Product 1 - Price:", productPrice1);
// console.log("Product 2 - ID:", productId2);
// console.log("Product 2 - Name:", productName2);
// console.log("Product 2 - Price:", productPrice2);
// console.log("Product 3 - ID:", productId3);
// console.log("Product 3 - Name:", productName3);
// console.log("Product 3 - Price:", productPrice3);

console.log("\nSettings:");
console.log("Dark Mode:", darkMode);
console.log("Notifications:", notifications);
console.log("Language:", language);
