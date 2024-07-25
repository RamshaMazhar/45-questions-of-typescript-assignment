//  interfaces for different types of objects
interface Person {
    name: string;
    age: number;
    gender: string;
}

interface Computer {
    brand: string;
    model: string;
    year: number;
}

interface City {
    name: string;
    population: number;
    country: string;
}


const person: Person = {
    name: "Ramsha",
    age: 30,
    gender: "Female"
};

const computer: Computer = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2021
};

const city: City = {
    name: "New York",
    population: 8800000,
    country: "United States"
};

console.log("Person:", person);
console.log("Computer:", computer);
console.log("City:", city);

