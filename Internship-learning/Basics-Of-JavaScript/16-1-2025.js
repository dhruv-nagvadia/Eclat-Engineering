



//Array

/*-----------------------------------------------------------------------------------------------------------------------------------*/

let arr = [1, 2, 3];


arr.push(4);       
arr.unshift(0); 
arr.splice(1,1,7);

// push operations add element at the end of the array and unshift operation push 0 at the beginning of the array


arr.pop();         
arr.shift(); 

//pop removes the elemt from the end of the array and shift removes element form the beginning of the array


console.log(arr[1]);  
arr[1] = 5;           

// by this we can change the element of the array


console.log(arr.indexOf(5)); 
console.log(arr.includes(3)); 

// index of opeeration gives the index of element and includes operations return true if it includes the element other wise it returns false.


let sliced = arr.slice(1, 3); 
arr.splice(1, 1, 8);          

// slice operation cut the array and give that array and splice operation first integer indicates index second indicates number of element we want to remove and this element will push in the array.


arr.forEach((item) => console.log(item)); 

// prints all element of the array


arr.sort((a, b) => b - a);
arr.reverse();            

// sorting array in desending order and reverse it

let newArr = arr.concat([10, 20]); 

// concat merge 2 arrays

let mapped = newArr.map((x) => x * 2);  
let filtered = newArr.filter((x) => x > 5);
let sum = newArr.reduce((acc, x) => acc + x, 0); 


// we doube all elemnt by map operation and we filter element which value is more then 5 and reduse operation is used of operation we want to do on array.


console.log("Original array:", arr);
console.log("Sliced array:", sliced);
console.log("Mapped array:", mapped);
console.log("Filtered array:", filtered);
console.log("Sum:", sum);

//here we print all results


/*-----------------------------------------------------------------------------------------------------------------------------------*/


// Object


/*-----------------------------------------------------------------------------------------------------------------------------------*/


let obj = { key1: "value1", key2: "value2" };
// Created an object


console.log(obj.key1);        
console.log(obj["key2"]);     
// Accessing properties



obj.key3 = "value3";
obj["key4"] = "value4";
// Adding properties



obj.key1 = "newValue1";
// Modifying properties


delete obj.key2;
// Deleting properties


console.log("key1" in obj);           
console.log(obj.hasOwnProperty("key3")); 
// Checking for properties this both returns true or false. if this inludes property then return true else false.  


for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// Iterating over properties


let keys = Object.keys(obj);     
let values = Object.values(obj);
let entries = Object.entries(obj); 
// Object methods.object key return key .object value return value and object entries return key and value both.

console.log(keys);      
console.log(values);    
console.log(entries);   

//here we print all the keys value and entries.

/*-----------------------------------------------------------------------------------------------------------------------------------*/

//basic codes

/*-----------------------------------------------------------------------------------------------------------------------------------*/

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  let num = 5; 
  console.log( factorial(num));

/*-----------------------------------------------------------------------------------------------------------------------------------*/
  
  function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
  }
  
  let terms = 10; 
  console.log(fibonacci(terms));
  

/*-----------------------------------------------------------------------------------------------------------------------------------*/
