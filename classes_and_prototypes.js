console.log("Classes & Prototypes");

const user1 = {
    name : "Tim",
    score : 3,
    increment : function(){ user1.score++; }
}

const user2 = {
    name : 'Stephanie',
    score : 5,
    increment : function(){ user2.score++; }
}

console.log('User 1 Score : ',user1.score);
user1.increment();
console.log('User 1 Score : ',user1.score);

console.log('User 2 Score : ',user2.score);
user2.increment();
console.log('User 2 Score : ',user2.score);

// Creating User3 user dot notation
// Declare an empty object and add properties with dot natation
const user3 = {};
user3.name = 'Tim';
user3.score = 0;
user3.increment = function(){ user3.score++; };

console.log('User 3 Score : ',user3.score);
user3.increment();
console.log('User 3 Score : ',user3.score);

// Creating User4 using Object.create
const user4 = Object.create(null);
console.log(user4);
user4.name = 'Eva';
user4.score = 3;
user4.increment = function(){ user4.score++; };

console.log('User 4 Score : ',user4.score);
user4.increment();
console.log('User 4 Score : ',user4.score);

// Solution 1
// Generate objects using a function
function userCreator(name,score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){ newUser.score++; };
    return newUser;
}

const user5 = userCreator('Will',9);
console.log('User 5 Score : ',user5.score);
user5.increment();
console.log('User 5 Score : ',user5.score);

// Solution 2
// Using the prototype chain
function userCreator1(name,score){
    const newUser = Object.create(userFunctionStore);
    console.log(newUser);

    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment : function(){this.score++;},
    login : function(){return `Welcome ${this.name}`}
}

const user6 = userCreator1('Tim',11);
console.log('User 6 Score : ',user6.score);
user6.increment();
console.log('User 6 Score : ',user6.score);
console.log(user6.login());
console.log(user6.hasOwnProperty('score'));