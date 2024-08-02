function create_car(manufacturer, model) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    additionalInfo.forEach(function (info) {
        Object.assign(car, info);
    });
    return car;
}
var car1 = create_car('Toyota', 'Corolla', { color: 'Red' }, { year: 2022 });
var car2 = create_car('Honda', 'Civic', { color: 'Blue' }, { features: 'Sunroof' });
console.log(car1);
console.log(car2);
