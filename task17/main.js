var guestList = ["Hamza", "Usman", "Noor", "Sundus"];
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
var MissingFriend = guestList[1];
console.log("\n".concat(MissingFriend, ", cant make it to dinner."));
console.log("\nYour New Friend is Kiran\n");
guestList.splice(1, 1, "Kiran");
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
console.log("\nGood news! We found a bigger dinner table!\n");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Shahbaz");
// Add one new guest to the beginning of the array
guestList.unshift("Osama");
// Add one new guest to the end of the array
guestList.push("Mahnoor");
//Updated list of the Guests
console.log("Updated List:\n");
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
// Inform that only two people can be invited for dinner
console.log("\nI can only invite two people for dinner.\n");
// remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("I am Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print invitations to the two people still on the list
console.log("\nInvitations to the Last 2 guests:\n");
guestList.forEach(function (person) { return console.log("Dear ".concat(person, ", you're still invited to dinner.")); });
// Removing last two Names
guestList.pop();
guestList.pop();
// Print the empty list to ensure that my guestlist is empty
console.log("\nEmpty list:", guestList);
