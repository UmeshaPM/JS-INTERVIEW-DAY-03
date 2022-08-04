console.log("working");

//Q-1 :-

//What is callback hell?

// It instead of immediately returning result like other functions, taken time to produce the result.
// So, if we stuck in some particular call which prevents us from making  further calls ends us into Callback Hell.
// The structure of Callback Hell looks like pyramid/arrow shape.
// This makes our code look haphazard(badly Organized)  and make it hard to understand.
// We should always try to avoid  using multiple Callbacks to end up falling into callback hell.

// Create a callback hell where it will print the number from 1 to 5

function printNumber() {
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(() => {
                        console.log('5');
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
// printNumber();

//....................................................................................................................................................................................................................................................

//Q-2 :-

//What are promises and why do we need them?

//Promises are used to avoid callback hell.
//We can write clean code
//Promises are used to handle asynchronous operations in JavaScript.

//It has 3 states- 1.Pending , 2.Resolve , 3.Reject

//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//....................................................................................................................................................................................................................................................

//Q-3 :-

//What is promise chaining?

//Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order.

//In case of resolve, .then()) method is called

//In case of esject, .catch()) method is called

//In the end, .finally() is used which concludes the promise

//Create a promise to print vowels AEIOU after 6,5,4,3,2 seconds

        // const printAlpha = (time,value) => {
        //     return new Promise ((resolve,reject) => {
        //         setTimeout(() => {
        //             console.log(value);
        //             resolve();
        //         },time);
        //     })
        // }
        // printAlpha(6000,"A")
        //     .then(() => printAlpha(5000,"E"))
        //     .then(() => printAlpha(4000,"I"))
        //     .then(() => printAlpha(3000,"O"))
        //     .then(() => printAlpha(2000,"U")) // multiple then blocks leads to promise chaining
        
        //output- 
                 //A, after 6sec
                 //E, after 5sec
                //I, after 4sec
                //O, after 3sec
                //U, after 2sec

//....................................................................................................................................................................................................................................................

//Q-4 :-

//What is the purpose of async/await keywords?

// It was introduced in ES8.
// They used to handle promises  more efficiently.
//Async- needs to be returned before the starting of a function
//Await always added when Async is used

//....................................................................................................................................................................................................................................................

//Q-5 :-

//Give an example of async/await

const printAlpha = (time,value) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        },time);
    })
}

async function newFunction(){
    await printAlpha(6000,"A")
    await printAlpha(5000,"E")
    await printAlpha(4000,"I")
    await printAlpha(3000,"O")
    await printAlpha(2000,"U")
}
newFunction();   

//....................................................................................................................................................................................................................................................

//Q-6 :-

//What is hoisting?

// Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope before the code execution.
//Hoisting allows functions to be safely used in code before they are declared.
//var supports hoisting.

//....................................................................................................................................................................................................................................................

//Q-7 :-

//What is the DOM?

//DOM stands for Document Object Model is a programming API for HTML and XML documents.
//It defines the logical structure of documents and the way a document is accessed and manipulated.
//The DOM is a tree-like representation of the web page that gets loaded into the browser. It represents the web page using a‌‌ series of objects.

// Syntax:
//          document.property_name;

//Basically we can access the HTML in 4 ways using this,

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()


//....................................................................................................................................................................................................................................................

//Q-8 :-

//Difference between undefined vs not defined vs NaN

//Undefined : The undefined property indicates that the variable has not been assigned a value or not declared at all. 

//   example - 1 :
let name;
console.log(name); //undefined

//   example - 2 :
//When value is not assigned in array or object
let numArray = [1,2,,4];
console.log(numArray);  //[1, 2, empty, 4]
console.log(typeof(numArray[2]))//undefined


//Not-defined : A not defined is a variable which is not declared at a given point of time with declaration keyword like var, let or const.

//   example  :
      //console.log(b);//reference error as b is not defined.
        b = 5;


//NaN : The NaN property represents a “Not-a-Number” value. NaN is a number that is not a legal number.

//....................................................................................................................................................................................................................................................

//Q-9 :-

//How many operators do we have in JS ?

// 1.Aithmetic Opertors
// 2.Assignment Opertors
// 3.Logical Opertors
// 4.Comparison Opertors
// 5.Bitwise Opertors
// 6.Relational Opertors

//....................................................................................................................................................................................................................................................

//Q-10 :-

//What are pure functions?

//A function is called pure function which gives same output for the same input passed.
//It doesn't depends upon variables whose value might change in future.
//It gives same values.

//Example :

function area(r){
    let res = 3.14 * r * r;
    console.log(res);
}
area(3);
area(3);
area(3);
area(3);

//....................................................................................................................................................................................................................................................

//Q-11 :-

//What are arrow functions?

//Arrow function is one of the features introduced in the ES6 version of JavaScript.
//It allows you to create functions in a cleaner way compared to regular functions. Arrow functions are a new way to write anonymous function expressions.
//By this method, function expressions can be avoided











