const products = [
    'dell 200gb laptop',
    'iphone 1tb camera',
    'yellow laptop black camera',
    'lenovo yoga Laptop',
    'lg phone',
    'HTC phone',
    'laptop'
];

const searching = 'laptop';

const output = [];
for (const product of products) {

    ////indexOf
    // if (product.toLocaleLowerCase().indexOf(searching) != -1) {
    //     output.push(product);
    // }


    ////Search includes
    // if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
    //     output.push(product);
    // }

    ////startswith
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);