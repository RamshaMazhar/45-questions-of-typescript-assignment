function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    items.forEach(function (item) {
        console.log("- ".concat(item));
    });
}
make_sandwich('bread', 'egg', 'vegetables');
make_sandwich('bread', 'chicken', 'cheese', 'spread');
make_sandwich('bread', 'vegetables', 'cheese', 'spread');
