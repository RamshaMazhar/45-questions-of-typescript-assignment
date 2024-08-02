// Array containing numbers from 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through each number in the array
numbers.forEach(function (number) {
    var suffix;
    // Determine the correct suffix based on the number
    if (number === 1) {
        suffix = 'st';
    }
    else if (number === 2) {
        suffix = 'nd';
    }
    else if (number === 3) {
        suffix = 'rd';
    }
    else {
        suffix = 'th';
    }
    // Print the number with its ordinal suffix
    console.log("".concat(number).concat(suffix));
});
