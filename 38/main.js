function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi'); // Default country (Pakistan)
describe_city('Mumbai', 'India'); // Custom country (India)
describe_city('Tokyo', 'Japan'); // Custom country (Japan)
