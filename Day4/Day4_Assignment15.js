
const studentName = "Rahul";
let age = 20;
let percentage = 85.5;
let isEnrolled = true;
let favoriteSubject = null;
let futureGoal;

const skills = ["HTML", "CSS", "JavaScript"];

const student = {
    name: studentName,
    age: age,
    percentage: percentage,
    enrolled: isEnrolled,
    skills: skills
};

console.log("----- STUDENT PROFILE -----");
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Percentage:", percentage);
console.log("Enrolled:", isEnrolled);
console.log("Favorite Subject:", favoriteSubject);
console.log("Future Goal:", futureGoal);
console.log("Skills:", skills);
console.log("Student Object:", student);

console.log("----- DATA TYPES -----");
console.log("Name:", typeof studentName);
console.log("Age:", typeof age);
console.log("Percentage:", typeof percentage);
console.log("Enrolled:", typeof isEnrolled);
console.log("Future Goal:", typeof futureGoal);
console.log("Skills:", typeof skills);
console.log("Student:", typeof student);
