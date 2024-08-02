function make_sandwich(...items) {
    console.log("Sandwich order summary:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
}

make_sandwich('bread', 'egg', 'vegetables');
make_sandwich('bread', 'chicken', 'cheese', 'spread');
make_sandwich('bread', 'vegetables', 'cheese', 'spread');
