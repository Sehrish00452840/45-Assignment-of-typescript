//list of current username
var current_users = ["hammad", "kashan", "moiz", "umer", "hina"];
//list of new username
var new_users = ["HAMMAD", "kashif", "mohsin", "umair", "HINA"];
// Loop through the new_users list
new_users.forEach(function (new_username) {
    // Convert the new username to lowercase for case insensitivity
    var lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === lowercase_new_username; })) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
});
