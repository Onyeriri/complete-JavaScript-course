// // // CHALLENGE #1
// // // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// // //
// // //     Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// // //
// // // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// // //
// // //
// // //
// // //     Your tasks:
// // //
// // //     Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
// // //
// // // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
// // //
// // // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// // //
// // // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// // //
// // // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// // //
// // //
// // //
// // //     TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// // //
// // // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
// //
// // 'use strict';
// //
// // const calcAverage = (firstScore, secondScore, thirdScore) => {
// //     return (firstScore + secondScore + thirdScore) / 3;
// // };
// //
// // let scoreDolphins = calcAverage(44, 23,71);
// // let scoreKoalas = calcAverage(65, 54,49);
// //
// // const checkWinner = (avgDolphins, avgKoalas) => {
// //     if(avgDolphins > avgKoalas * 2){
// //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}`);
// //     } else if(avgKoalas > avgDolphins * 2) {
// //         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}`);
// //     } else {
// //         console.log("No team win!!!");
// //     }
// // };
// //
// // checkWinner(scoreDolphins, scoreKoalas);
//
// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
//
// Your tasks:
//
//     Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
//
// And now let's use arrays! So, create an array called bills containing the test data below.
//
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
//
//     BONUS: Create an array totals containing the total values, so the bill + tip.
//
//     TEST DATA: 125, 555, and 44.
// const calcTip = (bill) => {
//     if(bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     }else {
//         return bill * 0.20;
//     }
// };
//
// const calcTotal = (bill, func) => {
//     return bill + func(bill);
// };
//
// const bills = [125, 555, 44];
// const tips = [];
// const total = [];
//
// tips[0] = calcTip(bills[0]);
// tips[1] = calcTip(bills[1]);
// tips[2] = calcTip(bills[2]);
//
// total[0] = calcTotal(bills[0], calcTip);
// total[1] = calcTotal(bills[1], calcTip);
// total[2] = calcTotal(bills[2], calcTip);
//
// console.log(tips);
// console.log(total);

const jonas = {
    firstName: 'jonas',
    lastName: 'jobs',
    birthYear: 1991,
    job: 'teacher',
    friends: ["Micheal", "Peter", "Steven"],
    calAge: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    }
};

// console.log(`Jonas has 3 friends, and his best friend is called ${jonas.friends[0]}`);
jonas.calAge();
console.log(jonas.age);