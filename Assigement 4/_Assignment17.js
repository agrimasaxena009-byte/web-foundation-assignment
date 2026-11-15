
console.log("1. Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("2. Even numbers from 1 to 20");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("3. Sum from 1 to 10");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum =", sum);

console.log("4. Multiplication table of 5");
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("5. Factorial of 5");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log("Factorial =", factorial);
