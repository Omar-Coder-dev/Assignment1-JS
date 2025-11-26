//Question 1

// const result = Number("123")+7;
// console.log(result); // Output: 130

//Question 2

// const value = 0;
// if (!value){
//     console.log("Invalid");
// } // Output: Invalid

//Question 3

// for (let i = 1; i <=10 ; i++){
//     if (i % 2 === 0)
//     continue;
//     console.log(i);
// } // Output: 1,3,5,7,9

//Question 4

// const arr = [1,2,3,4,5]
// const evenNums=arr.filter(num => num % 2 === 0);
// console.log(evenNums) // Output: 2,4

//Question 5

// const arr1 =[1,2,3];
// const arr2 =[4,5,6];
// const mergedArr = [...arr1,...arr2];
// console.log(mergedArr); // Output: [ 1,2,3,4,5,6 ]

//Question 6

// const dayNumber = 2;
// switch (dayNumber){
//     case 1:
//     console.log("Sunday");
//     break;
//     case 2:
//     console.log("Monday");
//     break;
//     case 3:
//     console.log("Tuesday");
//     break;
//     case 4:
//     console.log("Wednesday");
//     break;
//     case 5:
//     console.log("Thursday");
//     break;
//     case 6:
//     console.log("Friday");
//     break;
//     case 7:
//     console.log("Saturday");
//     break;
//     default:
//     console.log("Invalid day number");
//     break;
// } // Output: Monday

//Question 7

// const arr = ['a','ab','abc','abcd'];
// const arrLength = arr.map(str => str.length);
// console.log(arrLength); // Output: [1,2,3,4]

//Question 8

// function devisibleBy3and5(number){
//     if (number%3 === 0 && number%5 === 0){
//         return "Divisible by both ";
//     }
//     else {
//         return "Not Divisible by both ";
//     }
// }
// console.log(devisibleBy3and5(15)); // Output: Divisible by both

//Question 9

// const squareNumber = (num)=> num * num;
// console.log(squareNumber(5)); // Output: 25

//Question 10

// function  details(person){
//     const {name , age} = person;
//     return `Name: ${name}, Age: ${age}`;
// }
// const person1 = {name: "Omar", age: 20};
// console.log(details(person1)); // Output: Name: Omar, Age: 20

//Question 11

// function sum (...numbers){
//     let total =0;
//     for (let i =0; i<numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5)); // Output: 15

//Question 12

// function timer(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 3000);
//     });
// }
// timer().then(message => console.log(message)); // Output (after 3 seconds): Success

//Question 13

// function maxArray(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxArray([1, 5, 3, 9, 2])); // Output: 9

//Question 14

// function getKeys(obj) {
//     return Object.keys(obj);
// }
// const sampleObj = {name : "Omar", age: 20, city: "Cairo"};
// console.log(getKeys(sampleObj)); // Output: ["name", "age", "city"]

//Question 15

// function splitString(str){
//     return str.split(" ");
// }
// console.log(splitString("The quick brown fox")); // Output: ["The", "quick", "brown", "fox"]

//Essay Questions

//Question 1

/*forEach is an array method that runs a function on each element of an array.
Example:  arr.forEach(num => console.log(num)); // Can't break

for of is a loop that iterates over iterable objects like arrays, strings.
Example:  for (const num of arr) { console.log(num); } // Can break

  we use forEach when we want to perform a specific action on each element of an array.
  we use for of when we want to iterate over elements of an iterable object / skip elements or break the loop.
*/

//Question 2

/*
    Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.

    var and function declarations are hoisted, while let and const are hoisted but not initialized.
    the time before declaration is called the temporal dead zone (TDZ).

    Example:
    console.log(x); // Output: undefined
    var x = 5;

    Example 2:
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
*/

//Question 3

/*
    == converts types before comparing, so "5" == 5 is true.
    === compares both value and type, so "5" === 5 is false.

    Example : 0 == false is true
              0 === false is false
*/

//Question 4

/*
    try-catch is used for error handling in JS.
    Code inside try block is executed, if an error occurs, control goes to catch block.

    in async functions, we can use try-catch to handle errors from awaited promises APIS or other async operations.
    Example:

async function getData() {
    try {
        const response = await fetch('api/data');
        return await response.json();
    } catch (error) {
        console.error('Failed:', error);
        return null;
    }
}
*/

//Question 5

/*
    Conversion is when you manually convert types using functions.
    Coercion is when JS automatically converts types during operations.

    Example of conversion:
    const num = Number("123"); // converts string to number
    Example of coercion:
    const result = "5" + 10; // JS coerces 10 to string, result is "510"
*/
