

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
var person = {firstName: 'John', lastName: 'Will', age: 45};

var jsonPerson = '{"firstName" : "John","lastName" : "Will","age" : 45}';

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


// Class function..
function User(ime,prezime,godine) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = godine;
}

const user1 = new User('Marko','Markovic',21);


class Korisnik {
    constructor(ime,prezime,godine) {
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
}

const user2 = new Korisnik('Marko','Markovic',21);

console.log(user1);
console.log(user2);


// PROMISES
// Ako ostavimo poziv ka reject(), desice se prekid i ispisace se FAILED!
// Ako ostavimo poziv ka successs(), uspece Promise, i ispisace se YAY!
const myPromise = new Promise((success,reject) => {
   
    setTimeout(() => {
        success();
        //reject();
    },2000);

});

myPromise.then(() => {
    console.log('YAY!');
})

myPromise.catch(() => {
    console.log('FAILED!');
});

class Character {

    static characterCount = 0;

    constructor() {
        if (this.constructor === Character) {
            throw new Error('Abstract class cannot have an instance.');
        }

        this.x = Math.round(Math.random() * 10);
        this.y = Math.round(Math.random() * 10);
        characterCount++;
    }

    GetCoords() {
        console.log('X : ' + this.x + ' Y: ' + this.y);
    }

    SetCoords(x,y) {
        if (!isNaN(x) && !isNaN(y) && x > 0 && x <= 10 && y > 0 && y <= 10) {
            this.x = x;
            this.y = y;
        }
    }
}

class PlayableCharacter extends Character {
    
}

class NonPlayableCharacter extends Character {

}


var p1 = new PlayableCharacter();
var p2 = new NonPlayableCharacter();

// Ako otkomentarisemo ovu metodu dobijamo gresku da abstraktna klasa ne moze biti instancirana.
//var p3 = new Character();

p2.SetCoords(13,28);

p1.GetCoords();
p2.GetCoords();

console.log('Character count: ' + Character.characterCount);