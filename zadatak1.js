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

