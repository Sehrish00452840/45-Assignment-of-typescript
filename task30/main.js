// Array of usernames
var userNames = ['Admin', 'Hamza', 'Umer', 'Ayesha', 'Urooj'];
// Loop on an array to print greeting
userNames.forEach(function (singleuser) {
    if (singleuser == 'Admin') {
        console.log("Hello ".concat(singleuser, ", would you like to see a status report?")); //greeting to admin
    }
    else {
        console.log("Hello ".concat(singleuser, ", thank you for logging in again.")); //greeting to common Username
    }
});
