/*function myFunc(a, b){
    return a+b;
}

let total = function(a, b){    //Function Expression
    return a+b
}

function(a, b){    // (a,b)=>a+b
    return a+b

let sum = myFunc(10, 20)
console.log(sum)
console.log(total(30, 80))*/

// map, filter, reduce

let numbers = [10, 12, 15, 17]

let evenNumbers = numbers.filter(num=>num%2==0); // Callback

// function getEven(num){
//   return num%2 == 0
// }

console.log(evenNumbers)