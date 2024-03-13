// declare variables for test
let x :number = 5;
let y :number = 3;
let Str1 : string = "Sehrish";  
let Str2 : string = "Siddiq";
let Name : string = "SEHRISH";
let array1 : number[] = [1,5,6,9,8];

// Tests for equality and inequality with strings
console.log("Is 'Str1' equal 'Sehrish'? I predict True.");
console.log(Str1 == "Sehrish");

console.log("Is 'Str1' not equal 'Str2'? I predict True.");
console.log(Str1 != Str2);

// Tests using the lower case function
console.log("Is 'Name' equal to 'Sehrish' when it is in lowercase ? I predict True.");
console.log(Name.toLowerCase() == 'Sehrish');

/* Numerical tests involving equality and inequality,
 greater than and less than, greater than or equal to, and less than or equal to*/

 console.log(`Is 'x' equal to 'y'? I predict False.`);
 console.log(x == y);
 
 console.log(`Is 'x' not equal to 'y'? I predict True.`);
 console.log(x != y); 
 
 console.log(`Is ${x} greater than ${y}? I predict True.`);
 console.log(x > y); 
 
 console.log(`Is ${x} less than ${y}? I predict False.`);
 console.log(x < y); 
 
 console.log(`Is ${x} less than or equal to ${y}? I predict False.`);
 console.log(x <= y);
 
 console.log(`Is ${x} greater than or equal to ${y}? I predict False.`);
 console.log(x >= y); 

//  Tests using "and" and "or" operators

console.log(`Is ${x} is greater than 4 AND less than ${y}? I predict True.`);
console.log(x > 4 && x > y); 

console.log(`Is ${x} is not equal to 2 OR ${x} greater than ${y}? I predict True.`);
console.log(x != 2  || x > y); 

// Test whether an item is in a array

console.log(`Check The Number 5 Is present in the array [${array1}] ? I predict True`);
console.log(array1.includes(5));

// Test whether an item is not in a array

console.log(`Check The Number 3 Is present in the array [${array1}] ? I predict False`);
console.log(array1.includes(3));
