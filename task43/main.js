"use strict";
// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let magician_names = ["Harry Poter", "Hammad", "Usman"];
// Making a copy of Orignal array through .slice() function
let copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and Copied
// Original
console.log("Orginal Array\n");
show_magicians(magician_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
