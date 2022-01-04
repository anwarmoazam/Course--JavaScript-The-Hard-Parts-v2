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