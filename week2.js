console.log('Hello World!');

var x = 12;
console.log(x);

var x = 11;
console.log(x);

let y = 12;
console.log(y);

y = 10;
console.log(y);

const numberA = 10;
const numberB = 12;

// tradisional function
function addNumber(x,y) {
    return x + y;
}

console.log(addNumber(numberA, numberB));

// arrow function
const multiplenumber = (x,y) => {
    return x * y;
}

console.log(multiplenumber(numberA, numberB));

// map();
const arr = [2,4,5,2,3];

const map = arr.map((array) => array * 2);
console.log(map);

// filter()
const filter = arr.filter((array) => array > 4 );
console.log(filter); 

// reduce() 
const reduce = arr.reduce((array, sum) => {
    return array + sum
}, 2);  
console.log(reduce);

// forEach()
const foreach = arr.forEach((array) => console.log(array));