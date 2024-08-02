
function make_shirt(size = 'L', message = 'I love TypeScript') {
    console.log(`The shirt is size ${size} and has the message: "${message}".`);
}

// Call the function to create a large shirt with the default message
make_shirt();

// Call the function to create a medium shirt with the default message
make_shirt('M');
make_shirt('S', 'JavaScript is fun!');
