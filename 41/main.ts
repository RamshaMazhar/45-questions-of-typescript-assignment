// Create an array of magician names
const magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Define the function to print each magician's name
function show_magicians(magiciansArray) {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

// Call the function with the array of magician names
show_magicians(magicians);

