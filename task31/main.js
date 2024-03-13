// Array of usernames
var usernames = ['Admin', 'Hamza', 'Umer', 'Ayesha', 'Urooj'];
usernames = []; //comment
// check array is empty or not?
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop on an array to print greeting
    usernames.forEach(function (singleuser) {
        if (singleuser == 'Admin') {
            console.log("Hello ".concat(singleuser, ", would you like to see a status report?")); //greeting to admin
        }
        else {
            console.log("Hello ".concat(singleuser, ", thank you for logging in again.")); //greeting to common Username
        }
    });
}
