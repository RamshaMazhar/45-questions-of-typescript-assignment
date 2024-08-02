function create_car(manufacturer, model, ...additionalInfo) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };

    additionalInfo.forEach(info => {
        Object.assign(car, info);
    });

    return car;
}

const car1 = create_car('Toyota', 'Corolla', { color: 'Red' }, { year: 2022 });
const car2 = create_car('Honda', 'Civic', { color: 'Blue' }, { features: 'Sunroof' });

console.log(car1);
console.log(car2);
