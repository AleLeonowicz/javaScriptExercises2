// //1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAverage1 = calcAverage(44, 23, 71);
// console.log(dolphinsAverage1);

// const koalasAverage1 = calcAverage(65, 54, 49);
// console.log(koalasAverage1);

// const dolphinsAverage2 = calcAverage(85, 54, 41);
// console.log(dolphinsAverage2);

// const koalasAverage2 = calcAverage(23, 34, 27);
// console.log(koalasAverage2);


// const checkWinner = (dolphinsAverage, koalasAverage) => {
//     if (dolphinsAverage >= 2 * koalasAverage) {
//         return `Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`;
//     } else if (koalasAverage >= 2 * dolphinsAverage) {
//         return `Koalas win (${koalasAverage} vs. ${dolphinsAverage})`;
//     } else {
//         return 'There is no winner!';
//     }
// }

// const winner1 = checkWinner(dolphinsAverage1, koalasAverage1);
// const winner2 = checkWinner(dolphinsAverage2, koalasAverage2);

// console.log(winner1)
// console.log(winner2)


//2
// const calcTip = (billValue) => {
//     if (billValue >= 50 && billValue <= 300) {
//         return 0.15 * billValue;
//     } else {
//         return 0.2 * billValue;
//     }
// }

// tipValue1 = calcTip(100);
// console.log(tipValue1);


// const bills = [125, 555, 44]

// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tip);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
// console.log(total);


//3

// const person1 = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     },

// }

// const person2 = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     },

// }
// person1.calcBMI();
// person2.calcBMI();

// if (person1.BMI > person2.BMI) {
//     console.log(`${person1.fullName}'s BMI (${person1.BMI}) is higher than ${person2.fullName}'s (${person2.BMI}).`);
// } else if (person1.BMI < person2.BMI) {
//     console.log(`${person2.fullName}'s BMI (${person2.BMI}) is higher than ${person1.fullName}'s (${person1.BMI}).`);
// };

