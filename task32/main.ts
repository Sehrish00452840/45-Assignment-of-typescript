//list of current username
let current_users:string[] = ["hammad","kashan","moiz","umer","hina"];

//list of new username
let new_users:string[] = ["HAMMAD","kashif","mohsin","umair","HINA"];

// Loop through the new_users list
new_users.forEach(new_username => {
    // Convert the new username to lowercase for case insensitivity
    let lowercase_new_username : string = new_username.toLowerCase();

    
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.some(current_user => current_user.toLowerCase() === lowercase_new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }

});