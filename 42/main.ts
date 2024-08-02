// Create an array of magician names
const magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Define the function to print each magician's name
function show_magicians(magiciansArray) {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}

// Define the function to add 'the Great' to each magician's name
function make_great(magiciansArray) {
    // Use map to create a new array with 'the Great' added to each name
    return magiciansArray.map(magician => `${magician} the Great`);
}

// Call make_great and update the magicians array
const greatMagicians = make_great(magicians);

// Call show_magicians with the updated array
show_magicians(greatMagicians);
