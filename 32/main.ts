// List of current usernames
const currentUsers = ["Ramsha", "Mazhar", "Rohaan", "Hassan", "Dodu"];

// List of new usernames to check
const newUsers = ["ramsha", "mazhar", "newUser", "Hassan", "Uzair"];

// Convert current usernames to lowercase for case insensitive comparison
const currentUsersLowerCase = currentUsers.map(user => user.toLowerCase());

// Check each new username
newUsers.forEach(newUser => {
    if (currentUsersLowerCase.includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
});
