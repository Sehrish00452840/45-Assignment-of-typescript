// Array of usernames
let userNames: string[] = ['Admin', 'Hamza', 'Umer', 'Ayesha', 'Urooj'];

// Loop on an array to print greeting
userNames.forEach(singleuser =>{
    if (singleuser == 'Admin') {
        console.log(`Hello ${singleuser}, would you like to see a status report?`);//greeting to admin
    } else {
        console.log(`Hello ${singleuser}, thank you for logging in again.`);//greeting to common Username
    }
})