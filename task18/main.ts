let placesToVisit: string[] = ["Canada", "Turkey", "Dubai", "Tokyo", "Paris"];
console.log("Orginal Order:", placesToVisit);

// Print array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order:", [...placesToVisit].sort());

// Show array is still in its original order by printing it.
console.log("\nStill in Original Order:", placesToVisit);

//Print array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Order:", [...placesToVisit].reverse());

// Show array is still in its original order by printing it.
console.log("\nStill in Original Order:", placesToVisit);


// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:", placesToVisit);


// Reverse the order of the list again
placesToVisit.reverse();
// Print the list to show it’s back to its original order.
console.log("\nAgain Reversed Order:", placesToVisit);


// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:", placesToVisit);


// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.reverse();
// Print the list to show that its order has changed
console.log("\nSorted in Reverse Alphabetical Order:", placesToVisit);