

// Part 1
var numbers = [2,4,6,3,5,9,10,1];

var numbers = numbers.map((number) => {
    return (number * number);
});

console.log(numbers);

// Part2
(function(num1,num2) {
    console.log(num1 + num2);
}(7,5));

// Part3 
const timesTwo = (number) => {
    return number * 2
  }

console.log(timesTwo(22));


// TASK 3!
const colors = ['Red','Blue','Green','White','Black'];

// For
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ForEach
colors.forEach(color => console.log(color));

function ChangeArray(shiftNum) {
    
    var newArr = colors.splice(colors.length - shiftNum,shiftNum);
    return [...newArr,...colors]
}

console.log(ChangeArray(2));


// Reduce funtion..
const numberNiz = [2,4,5,7,4,1];

function sum(v1,v2) {
    return v1 + v2;
}

var value = numberNiz.reduce((v1,v2) => v1 + v2, 50);

console.log(value);


// Custom funkcija
function MakeFunction(numb) {
    var retArr = [];

    for (let i = 0; i < numb; i++) {
        retArr.push(i);
    }

    retArr = [...retArr,...retArr.reverse()];

    return retArr;
}

console.log(MakeFunction(5));


// ANIMALS..

const Animals = [
    ['Zirafa', ['Sisar',12]],
    ['Slon', ['Sisar',18]],
    ['Zmija', ['Gmizavac',2]],
    ['Soko', ['Ptica',44]]
];

function zooInventory(inputArray) {

    return inputArray.map(animal => animal[0] + ' ' + animal[1][0] + ' je star ' + animal[1][1]);
}

console.log(zooInventory(Animals));


// OBJECTS
var person = {firstName: 'John', lastName: 'Will',Age: 45};

var jsonPerson = '{"firstName" : "John","lastName" : "Will","Age" : 45}';

console.log(person);
console.log(jsonPerson);

// JS object to JSON format.
var toJson = JSON.stringify(person);
console.log(toJson);

// JsonString to Javascript Object.
var toObject = JSON.parse(jsonPerson);
console.log(toObject);


var numbersJS = [1,2,3,4,5,6,7,8];
console.log(JSON.stringify(numbersJS));

var numbersJSON = '[1,2,3,4,5,6,7,8]';
var parsed = JSON.parse(numbersJSON);

for (let i = 0; i < parsed.length; i++) {
    console.log(parsed[i]);
}