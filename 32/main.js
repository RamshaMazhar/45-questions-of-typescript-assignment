// List of current usernames
var currentUsers = ["Ramsha", "Mazhar", "Rohaan", "Hassan", "Dodu"];
// List of new usernames to check
var newUsers = ["ramsha", "mazhar", "newUser", "Hassan", "Uzair"];
// Convert current usernames to lowercase for case insensitive comparison
var currentUsersLowerCase = currentUsers.map(function (user) { return user.toLowerCase(); });
// Check each new username
newUsers.forEach(function (newUser) {
    if (currentUsersLowerCase.includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
});
