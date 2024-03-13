// Exercise 14 Guest list
var guestList = ["Ayesha", "Kiran", "Mairya", "Sundus", "Mahnoor"];
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
// Inform about the number of guests invited to dinner
var guestlength = guestList.length;
console.log("\nI am inviting ".concat(guestlength, " people to dinner."));
