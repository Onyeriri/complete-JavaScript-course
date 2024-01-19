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
// let marksWeight = 78;
// let markHeight = 1.69;
// let johnsWeight = 92;
// let johnHeight = 1.95;
//
// let johnBMI = johnsWeight/ (johnHeight ** 2);
// let marksBMI = marksWeight/(markHeight ** 2);
//
// let markHigherBMI = marksBMI > johnBMI;
//
// // console.log(`John BMI: ${johnBMI}, Mark BMI: ${marksBMI}, MarKHigherBMI: ${markHigherBMI}`);
//
// if(marksBMI > johnBMI) {
//     console.log(`Marks BMI: ${marksBMI} is greater than John BMI: ${johnBMI}`);
// } else {
//     console.log(`John BMI: ${johnBMI} is greater than Marks BMI: ${marksBMI}`)
// }
//
//
// // Data 2
// marksWeight = 95;
// markHeight = 1.88;
// johnsWeight = 85;
// johnHeight = 1.76;
//
// johnBMI = johnsWeight/ (johnHeight ** 2);
// marksBMI = marksWeight/(markHeight ** 2);
//
// markHigherBMI = marksBMI > johnBMI;
//
// if(marksBMI > johnBMI) {
//     console.log(`Marks BMI: ${marksBMI} is greater than John BMI: ${johnBMI}`);
// } else {
//     console.log(`John BMI: ${johnBMI} is greater than Marks BMI: ${marksBMI}`);
// }

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

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
//
//     Your tasks:
//
//     1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
//
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
//
// "Dolphins win the trophy" if Dolphins win, or
//
// "Koalas win the trophy" if Koalas win, or
//
// "Both win the trophy" if their average scores are equal.
//
//
//
//     TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// let scoreDolphins, scoreKoalas;
//
// scoreDolphins = (96 + 108 + 89) / 3;
// scoreKoalas = (88 + 91 + 110) / 3;
//
// if(scoreDolphins > scoreKoalas) {
//     console.log(`Dolphin win the trophy with ${scoreDolphins.toFixed(2)} over Koalas ${scoreKoalas.toFixed(2)}`);
// }else if(scoreDolphins < scoreKoalas) {
//     console.log(`Koalas win the trophy with ${scoreKoalas.toFixed(2)} over Koalas ${scoreDolphins.toFixed(2)}`);
// }else {
//     console.log("Both win the trophy" + 'Dolphin score: '+ scoreDolphins.toFixed(2) + 'equals '+'Koalas score: ' + scoreKoalas.toFixed(2) )
// }

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
//
// Your tasks:
//
//     Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
//
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
//
//     Example: The bill was 275, the tip was 41.25, and the total value 316.25.
//
//     Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
//
// TEST DATA: Test with different bill values: 275, 40, and 430
//
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
//
// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

let tip, bill, finalValue;

bill = 275;

tip = (bill >= 50 && bill <= 30) ? bill * 0.2 : bill * 0.15;

finalValue = tip + bill;

console.log(`Bill value: ${bill}, Tip: ${tip}, Final value: ${finalValue}`)


