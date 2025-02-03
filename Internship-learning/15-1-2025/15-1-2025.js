// java script basics

/*===========================================================================================================================================================*\

// data types and their scopes

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// var type
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

var scope="global scope";
{
    var scope="local scope"
    // console.log(scope);

}
console.log(scope);
// both console.log gives local scope
// var type has a global scope so i we change var in block it will also changa same variable which is outside block


var abc="dhurv"
var abc="tirth"
abc="om"

console.log(abc);
// this will prinnt om
// we can redeclair and reinitilize var type variables

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/


// let type
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

let name="tirth"
name="dhruv"
console.log(name);
// this will print dhruv


let surname="patel"
surname="nagvadia"
console.log(surname);
// this will give print nagvadia we can reassign let but can not redeclair it.

let father="abc"
{
    let father="def"
    console.log(father);
    
}
console.log(father);

// let has block scope there for first cosole.log prints def and second prints abc.
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/



// const type
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

const city="ahemdabad"
// city="vadodra"
console.log(city);
// if we uncomment city this will give  error we can not reinitilize const type

const state="gujarat"
{
    const state="maharastra"
    console.log(state);
}
console.log(state);

// firts print maharastra and second print gujarat

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// operators

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log(1+2+"3"); //33
console.log(1+"2"+"3");//123
console.log("1"+2+"3");//123
console.log("1"+"2"+3);//123

// if it fings first element as string then it converts the other elemnt as string and concat it or if first and scond element as int then it will so sum of that digit and print.

console.log(1-2-"3"); //-4
console.log(1-"2"+"3");//-13
console.log("1"-2+"3");//-13
console.log("1"-"2"+3);//2

// - operator convert string to int do operations.

console.log((+"1")+(+"2")+(+"3"));//6
console.log("1"+"2"+"3");//123
console.log((-"1")-(-"2")-(-"3"));//4
console.log("1"-"2"-"3");//-4

// this is type convertion exaples and + operator convert string to int and do adition and - operator also convert string to int.


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// arrays

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

const arr=["dhruv","piyush","om","rahul"];
console.log(arr.length);//4
console.log(arr[2]);//om


arr.push("hapani")
console.log(arr.length);//5
console.log(arr);//[ 'dhruv', 'piyush', 'om', 'rahul', 'hapani' ]

arr.pop()
console.log(arr);//[ 'dhruv', 'piyush', 'om', 'rahul' ]
arr.shift()
console.log(arr);//[ 'piyush', 'om', 'rahul' ]


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// conditional statements

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//if-else and function

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

function teen(a){
if(a<=17){
    console.log("not 18+ he/she is teen");
}else{
    console.log("18+ not teen");
}
}
teen(17)

//prints 18+

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//switch case and arrow function

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

const value = b=>{
switch(b){
    case 1:console.log("value of b is 1"); break;
    case 2:console.log("value of b is 2");break;
    case 3:console.log("value of b is 3");break;
}
}
value(2)
// value of b is 2.

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//loops

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

for(let i=0;i<5;i++){
console.log(i);
}
//print 0 to 4

let y=0
while(y<5){
    console.log(y);
    y++;   
}
//print 0 to 4

let z=0
do{
    console.log(z);
    z++;
    
}while(z<5)
//print 0 to 4

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Traditional function
const addTraditional = function (a, b) {
    return a + b;
  };
  
// Arrow function
const add = (a, b) => a + b;

console.log(addTraditional(5, 5));//10    
console.log(add(3, 5)); //8

//no parameters
const Hello = () => "Hello";
console.log(Hello()); // Hello
  
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Template Literals

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

const firstname = "Dhruv";
const age = 22;
console.log(`My name is ${firstname} and I am ${age} years old.`); 
//My name is Dhruv and I am 22 years old.

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// basic programs

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//calculator

const prompt = require("prompt-sync")();
const num1=parseFloat(prompt("enter first number"));
const num2=parseFloat(prompt("enter second number"));
const type=prompt("enter OPERATION TYPE");

const calculator=(num1,num2,type) =>{
    switch(type){
    case "add":return num1+num2; break;
    case "sub":return num1-num2; break;
    case "mul":return num1*num2; break;
    case "div":return num1/num2; break;
    }
}   
console.log(calculator(num1,num2,type));

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//palindom

const palindrome=prompt("enter string");

const result=(palindrome)=>{
    let i=0;
    let j=palindrome.length-1;
    while(i<j){
            if(palindrome[i]!=palindrome[j]){
                return "not palindrome";
            }else{
                i++;
                j--;
            }
    }
    return "palindrome";
}
console.log(result(palindrome));

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/


// Summary of Work on JavaScript Basics

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*In this task, I explored and implemented foundational JavaScript concepts, focusing on data types, scopes, operators, control structures, functions, and basic programming logic. Below are the key takeaways from the work:

Understanding Scopes and Data Types:
Learned the behavior of var, let, and const and their differences in terms of scope and reusability.
Practiced examples to understand how variable declarations work inside and outside blocks.

Operators and Type Conversion:
Explored JavaScript operators (+, -, etc.) and their effects on strings and numbers.
Gained insights into implicit and explicit type conversion using examples.

Control Structures:
Practiced if-else conditions and switch cases.
Implemented different looping constructs: for, while, and do-while.

Functions:
Worked with both traditional and arrow functions, understanding the syntax and use cases for both.
Implemented basic reusable functions to solve problems.

Template Literals:
Used template literals to create cleaner and more readable strings with embedded variables.

Basic Programs:
Built a calculator program to perform basic arithmetic operations based on user input.
Developed a palindrome checker to determine if a given string is a palindrome.*/