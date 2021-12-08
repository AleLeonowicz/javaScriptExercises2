// // function describeCountry(country, population, capitalCity) {
// //     const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// //     return countryDescription;
// // }

// // const describePoland = describeCountry('Poland', 38, 'Warsaw');
// // console.log(describePoland);

// // const describeGermany = describeCountry('Germany', 83, 'Berlin');
// // console.log(describeGermany);

// // const describeDominicanRepublic = describeCountry('Dominican Republic', 11, 'Santo Domingo');
// // console.log(describeDominicanRepublic);



// // function percentageOfWorld1(population) {
// //     return population / 7900 * 100;
// // }

// // const percentagePoland = percentageOfWorld1(38);
// // console.log(percentagePoland);

// // const percentageGermany = percentageOfWorld1(83);
// // console.log(percentageGermany);

// // const percentageDominicanRepublic = percentageOfWorld1(11);
// // console.log(percentageDominicanRepublic);




// // const percentageofWorld2 = function (population) {
// //     return population / 7900 * 100;
// // }

// // const percentagePoland2 = percentageofWorld2(38);
// // console.log(percentagePoland2);

// // const percentageGermany2 = percentageofWorld2(83);
// // console.log(percentageGermany2);

// // const percentageDominicanRepublic2 = percentageofWorld2(11);
// // console.log(percentageDominicanRepublic2);


// const percentageOfWorld3 = population => population / 7900 * 100;

// // const percentagePoland3 = percentageOfWorld3(38);
// // console.log(percentagePoland3);

// // const percentageGermany3 = percentageOfWorld3(83);
// // console.log(percentageGermany3);

// // const percentageDominicanRepublic3 = percentageOfWorld3(11);
// // console.log(percentageDominicanRepublic3);


// const describePopulation = (country, population) => {
//     const percentageCountry = percentageOfWorld3(population);
//     return `${country} has ${population} milion people, which is about ${percentageCountry}% of the world.`
// }

// const describePolishPopulation = describePopulation('Poland', 38);
// console.log(describePolishPopulation);

// const populations = [38, 83, 11, 97]

// if (populations.length = 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const percentageOfWorld3 = (population) => population / 7900 * 100;

// const percentages = [percentageOfWorld3(38), percentageOfWorld3(83), percentageOfWorld3(11), percentageOfWorld3(97),];

// console.log(percentages);

// neighbours = ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'];

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// neighbours.shift();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country');
// }


// console.log(neighbours.indexOf('Ukraine'))

// neighbours[2] = 'Utopia';

// console.log(neighbours);

// const myCountry = {
//     country: 'Poland',
//     capital: 'Warsaw',
//     language: 'polish',
//     population: 38,
//     neighbours: ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//     },

//     checkIsIsland: function () {
//         // if (this.neighbours.length === 0) {
//         //     this.isIsland = true;
//         // } else {
//         //     this.isIsland = false;
//         // }

//         // this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;

//         this.isIsland = this.neighbours.length === 0

//         console.log(this.isIsland);
//     }
// };

// // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(myCountry.describe());

// for (rep = 1; rep <= 50; rep++) {
//     console.log(`Voter number ${rep} is currently voting!`);
// }

