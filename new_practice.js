console.log('Course--JavaScript-The-Hard-Parts-v2');

const myArray = [1,2,3];

function copyArrayAndMultiplyBy2(array){
    let output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]*2);
    }
    return output;
}

let result = copyArrayAndMultiplyBy2(myArray);
console.log(result);

function copyArrayAndDivideBy2(array){
    let output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]/2);
    }
    return output;
}

result = copyArrayAndDivideBy2(result);
console.log(result);


// Closure

function createFunction(){
    function multiplyBy2(num){
        return num*2;
    }
    return multiplyBy2;
}

const generateFunction = createFunction();
console.log(generateFunction)
result = generateFunction(3);
console.log(result)

function outer(){
    let counter = 0;
    function increamentCounter(){
        counter++;
    }
    increamentCounter();
    console.log(counter);
}

result = outer();

function outer1(){
    let counter = 0;
    function increamentCounter(){
        console.log('Counter : ',counter);
        counter++;
    }
    return increamentCounter;
}

const myNewFunc = outer1();

console.log(myNewFunc);

myNewFunc();

console.log(myNewFunc);

myNewFunc();

console.log(myNewFunc);

myNewFunc();

console.log(myNewFunc);

function display(data){
    console.log(data.json());
    // return data.json();
}

const futureData = fetch('https://jsonplaceholder.typicode.com/posts');
futureData.then(display)
// .then((data)=>console.log(data));