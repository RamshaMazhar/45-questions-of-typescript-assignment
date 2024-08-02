function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt is size ".concat(size, " and has the message: \"").concat(message, "\"."));
}
// Call the function to create a large shirt with the default message
make_shirt();
// Call the function to create a medium shirt with the default message
make_shirt('M');
make_shirt('S', 'JavaScript is fun!');
