let guestList: string[] = ["Hamza", "Usman", "Noor", "Sundus"];
guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});
    
let MissingFriend = guestList[1];
console.log(`\n${MissingFriend}, cant make it to dinner.`);
console.log("\nYour New Friend is Kiran\n");

guestList.splice(1, 1, "Kiran");
guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});
   

console.log("\nGood news! We found a bigger dinner table!\n");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Shahbaz");

// Add one new guest to the beginning of the array
guestList.unshift("Osama");

// Add one new guest to the end of the array
guestList.push("Mahnoor");

//Updated list of the Guests
console.log("Updated List:\n");
guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`);
});

// Inform that only two people can be invited for dinner
console.log("\nI can only invite two people for dinner.\n");

// remove guests from the list until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`I am Sorry ${removedGuest}, I can't invite you to dinner.`);}

// Print invitations to the two people still on the list
console.log("\nInvitations to the Last 2 guests:\n");
guestList.forEach(person => console.log(`Dear ${person}, you're still invited to dinner.`));

// Removing last two Names
guestList.pop();
guestList.pop();

// Print the empty list to ensure that my guestlist is empty
console.log("\nEmpty list:", guestList);