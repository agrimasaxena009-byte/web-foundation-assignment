
"use strict";

// Mini Project 1: Number Guessing Logic

const secretNumber = 7;
const guess = 5;

if (guess === secretNumber) {
    console.log("Correct guess!");
} else if (guess < secretNumber) {
    console.log("Your guess is too low.");
} else {
    console.log("Your guess is too high.");
}

// Mini Project 2: Shopping Bill Calculator

const cart = [
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Bag", price: 500, quantity: 1 }
];

let totalBill = 0;

for (const item of cart) {
    const itemTotal = item.price * item.quantity;
    totalBill += itemTotal;

    console.log(
        item.name + ": " + item.quantity + " x " +
        item.price + " = " + itemTotal
    );
}

console.log("Total Bill: ₹" + totalBill);
