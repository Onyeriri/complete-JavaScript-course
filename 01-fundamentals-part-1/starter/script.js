// let greeting = "Hello World!!!";
//
// if(greeting === "Hello World!!!") console.log(greeting);
//
// // greeting = "CSS";
//
//
// if(greeting === "Hello World!!!") alert(greeting);

// let firstName = "Chinonso";
// let middleName = "Victor";
// let lastName = "Onyeriri";
// let age = 23;
//
// alert(`My name is ${firstName} ${middleName} ${lastName}, am ${age} year's old`);

// Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
//
//     Log their values to the console.

// let country, continent, population;
//
// country = "Nigeria";
// continent = "Africa";
// population = 200000000
//
// alert(`The name of my Country is ${country} on ${continent} continent with population of ${population}.`);

// Data Types
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
//
// Log the types of isIsland, population, country and language to the console.

// const isIsland = false;
// let language;
//
// console.log(typeof isIsland, typeof language);

// Data 1
let marksWeight = 78;
let markHeight = 1.69;
let johnsWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnsWeight/ (johnHeight ** 2);
let marksBMI = marksWeight/(markHeight ** 2);

let markHigherBMI = marksBMI > johnBMI;

// console.log(`John BMI: ${johnBMI}, Mark BMI: ${marksBMI}, MarKHigherBMI: ${markHigherBMI}`);

if(marksBMI > johnBMI) {
    console.log(`Marks BMI: ${marksBMI} is greater than John BMI: ${johnBMI}`);
} else {
    console.log(`John BMI: ${johnBMI} is greater than Marks BMI: ${marksBMI}`)
}


// Data 2
marksWeight = 95;
markHeight = 1.88;
johnsWeight = 85;
johnHeight = 1.76;

johnBMI = johnsWeight/ (johnHeight ** 2);
marksBMI = marksWeight/(markHeight ** 2);

markHigherBMI = marksBMI > johnBMI;

if(marksBMI > johnBMI) {
    console.log(`Marks BMI: ${marksBMI} is greater than John BMI: ${johnBMI}`);
} else {
    console.log(`John BMI: ${johnBMI} is greater than Marks BMI: ${marksBMI}`);
}

// console.log(`John BMI: ${johnBMI}, Mark BMI: ${marksBMI}, MarKHigherBMI: ${markHigherBMI}`);

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
//
//     1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
//
//     "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
//
// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
//
//     Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
//
//     Note: Don't round the BMI values. Leave them as they are.
//
//
//
// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
//
//
//
// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).



