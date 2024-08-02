
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi');           // Default country (Pakistan)
describe_city('Mumbai', 'India');   // Custom country (India)
describe_city('Tokyo', 'Japan');    // Custom country (Japan)
