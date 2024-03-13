// declare variables for test
var x = 5;
var y = 3;
var Str1 = "Sehrish";
var Str2 = "Siddiq";
var Name = "SEHRISH";
var array1 = [1, 5, 6, 9, 8];
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
console.log("Is 'x' equal to 'y'? I predict False.");
console.log(x == y);
console.log("Is 'x' not equal to 'y'? I predict True.");
console.log(x != y);
console.log("Is ".concat(x, " greater than ").concat(y, "? I predict True."));
console.log(x > y);
console.log("Is ".concat(x, " less than ").concat(y, "? I predict False."));
console.log(x < y);
console.log("Is ".concat(x, " less than or equal to ").concat(y, "? I predict False."));
console.log(x <= y);
console.log("Is ".concat(x, " greater than or equal to ").concat(y, "? I predict False."));
console.log(x >= y);
//  Tests using "and" and "or" operators
console.log("Is ".concat(x, " is greater than 4 AND less than ").concat(y, "? I predict True."));
console.log(x > 4 && x > y);
console.log("Is ".concat(x, " is not equal to 2 OR ").concat(x, " greater than ").concat(y, "? I predict True."));
console.log(x != 2 || x > y);
// Test whether an item is in a array
console.log("Check The Number 5 Is present in the array [".concat(array1, "] ? I predict True"));
console.log(array1.includes(5));
// Test whether an item is not in a array
console.log("Check The Number 3 Is present in the array [".concat(array1, "] ? I predict False"));
console.log(array1.includes(3));
