const array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

console.log('Vypsat array:');
for (const i of array) {
    console.log(i);
}

const reversedArray = array.reverse();
console.log('Reversní array pomocí reverse:');
for (const i of reversedArray) {
    console.log(i);
}

const sortedArray = array.sort();
console.log('Abecedně pomocí sort:');
for (const i of sortedArray) {
    console.log(i);
}

const car = {
    Brand: "Toyota",
    Model: "Camry",
    Year: 2022
  };

const { Brand, Model, Year } = car;
console.log(`Značka: ${Brand}, Model: ${Model}, Rok: ${Year}`);

const randomNum = Math.floor(Math.random() * 556);
console.log(`Náhodné číslo je: ${randomNum}`);