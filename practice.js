console.log("This is Tutorial JavaScript: The Hard Parts, v2");

// JavaScript Principles

const num = 3;

function multiplyBy2(inputNumber){
    const result = inputNumber * 2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

console.log('output = ',output);
console.log('newOutput = ',newOutput)

// Functions & Callbacks
function tenSquared(){
    return 10*10;
}

console.log(tenSquared());

function squareNum(num){
    return num*num;
}

const output1 = squareNum(10);
console.log(output1);

// Repeating Functionality
function copyArrayAndMultiplyBy2(array){
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]*2);
    }
    return output;
}

let myArray = [1,2,3];
let result = copyArrayAndMultiplyBy2(myArray);
console.log(result);


function copyArrayAndDivideBy2(array){
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]/2);
    }
    return output;
}

myArray = [1,2,3];
result = copyArrayAndDivideBy2(myArray);
console.log(result);

// Higher Order Function
function copyArrayAndManipulate(array,instructions){
    const output = [];
    for(let i=0; i<array.length; i++){
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2(input){return input*2;}
function divideBy2(input) {return input/2;}
function addBy2(input) {return input+2;}

let result1 = copyArrayAndManipulate(myArray,multiplyBy2);
let result2 = copyArrayAndManipulate(myArray,divideBy2);
let result3 = copyArrayAndManipulate(myArray,addBy2);

console.log(result1);
console.log(result2);
console.log(result3);

// Arrow Functions
function multiplyBy3(input) {return input*3;}

multiplyBy3 = (input) => {return input*3;}

multiplyBy3 = (input) => input*3;

multiplyBy3 = input => input*3;

const outputMultiplyBy3 = multiplyBy3(5);
console.log(outputMultiplyBy3);

// Updating out callback function as an arrow function

multiplyBy2 = input => input*2;
divideBy2 = input => input/2;
addBy2 = input => input+2;

result1 = copyArrayAndManipulate([10,20,30,40,50],multiplyBy2);
result2 = copyArrayAndManipulate([10,20,30,40,50],divideBy2);
result3 = copyArrayAndManipulate([10,20,30,40,50],addBy2);

console.log(result1);
console.log(result2);
console.log(result3);

// We can even pass in callback function directly without name
result1 = copyArrayAndManipulate([10,20,30],input => input*2);
console.log(result1);
result2 = copyArrayAndManipulate([10,20,30],input => input/2);
console.log(result2);
result3 = copyArrayAndManipulate([10,20,30],input => input+2);
console.log(result3);


// Closure

// Functions get a new memory every run/invocation
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}

let result4 = multiplyBy2(7);
console.log(result4);

let result5 = multiplyBy2(10);
console.log(result5);

// Function can be returned from other functions in JavaScript
function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result6 = generatedFunc(3);

console.log(result6);

// Calling a function in the same function call as it was defined
function outer(){
    let counter = 0;
    function increamentCounter(){ counter++; }
    return increamentCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

// Run outer again
const anotherFunction = outer();
anotherFunction();
anotherFunction();

// Asynchronous JavaScript
// Promises, Async & the Event loop

// What if we try to delay a function directly using setTimeout?
// setTimeout is a build in function - its first argument is the function to delay followed by millisecond to delay by

// function printHello(){
//     console.log("Hello");
// }

// setTimeout(printHello,1000);
// console.log("Me first!");

// We're interacting with a world outside of JavaScript now - so we need rules

// function printHello(){
//     console.log("Hello");
// }

// function blockFor1Sec(){
//     for(let i=0; i<10000; i++){
//         console.log('I is : ',i+1);
//     }
// }

// setTimeout(printHello,0);
// blockFor1Sec();
// console.log("Me first!");

/*
function printThis(){
    let a = 10;
    function increament(){
        return a++;
    }
    return increament
}

const output = printThis();
let result = output();
result = output();
result = output();
const result1 = output();
const result2 = output();


log(1)

function x (){
    log(2);
}

log(3)

(function y (){
    log(4);
})()

setTimeout(log(5), 100)
setTimeout(log(5.8), 0)

log(6)

ajax(log(7), 0)

log(8)

promise(log(9), 0)

log(10)

// 1
// 3
// 4
// 6
// 8
// 10
// 9
// 5.8
// 7
// 5

// Callback Queue --> 5.8/7/5
// MicroTask Queue --> 9 

// Promise State - Pending/Fullfilled/Rejected

*/

// function display(data){
//     console.log(data);
// }

// const url = 'www.google.com';
// const futureData = fetch(url);
// futureData.then(display);

// console.log("Me first!!!");

// Classes & Prototypes
// Objects - store functions with their associated data!
const user1 = {
    name: 'Anwar',
    score: 3,
    increament: function(){ user1.score++;}
};

user1.increament();
console.log(user1.score);

const user2 = {};
user2.name = 'ABC';
console.log(user2);

const user3 = Object.create(null);

user3.name = 'Hafiz';

console.log(user3);

// Generate objects using a function

/*
function userCreater(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increament = function() {
        newUser.score++;
    };
    return newUser;
}

const user4 = userCreater('Will',5);
console.log(user4);

user4.increament();
console.log(user4);
*/

// Solution 2 : Using the prototype chain

function userCreater(name, score){
    const newUser = Object.create(userFunctionStore);
    // const newUser = {};
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increament: function(){this.score++;},
    login: function(){console.log("Logged in !");}
};

const user4 = userCreater('Anwar',3);
const user5 = userCreater('Moazam',5);
console.log(user4);
user4.increament();
user4.login();
console.log(user4);
console.log(user5);
console.log(user4.hasOwnProperty('score'));

// The new keyword automates a lot of our manual work

function userCreator1(name,score){
    this.name = name;
    this.score = score;
}

userCreator1.prototype.increament = function(){
    this.score++
};

const user6 = new userCreator1("Sikandar",10);
console.log(user6);
user6.increament();
console.log(user6);

// Interlude - functions are both objects and functions
function multiplyBy2(number){
    return number*2;
}

multiplyBy2.stored = 5;

console.log(multiplyBy2(multiplyBy2.stored));

// Solution 4 : The class 'syntactic sugar'
class UserCreator {
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    increament(){ this.score++; }
    login(){ console.log("Logged In!!!"); }
}

const user7 = new UserCreator('Aaliya',13);
console.log(user7);
user7.increament();
console.log(user7);
user7.name = "Uzair";
console.log(user7);
user7.login();

function display(data){
    console.log(data);
}

let myData = fetch('https://ghibliapi.herokuapp.com/people');

console.log(myData);

myData.then(display);
myData.catch((error)=>{
    console.log('Some error occured');
})