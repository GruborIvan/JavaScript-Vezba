

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

    for (let i = (numb - 1); i >= 0; i--) {
        retArr.push(i);
    }

    return retArr;
}

console.log(MakeFunction(5));


// ANIMALS..

const Animals = [
    { Naziv: 'Zirafa', Vrsta: 'Sisar', Godine: 12 },
    { Naziv: 'Slon', Vrsta: 'Sisar', Godine: 18 },
    { Naziv: 'Zmija', Vrsta: 'Gmizavac', Godine: 2 },
    { Naziv: 'Soko', Vrsta: 'Ptica', Godine: 44 }
]

function zooInventory(inputArray) {

    var animalInv = [];
    inputArray.forEach(animal => animalInv.push(animal.Naziv + ' ' + animal.Vrsta + ' je star ' + animal.Godine));
    return animalInv;
}

console.log(zooInventory(Animals));