const number = [4, 5, 2, 1, 7, 9];
const bigNumber = [64, 5, 2, 111, 77, 9, 55, 1, 9];

const sortNumber = number.sort();
console.log(sortNumber);

const reverseNumber = number.reverse();
console.log(reverseNumber);

const reverseNumberBig = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(reverseNumberBig);
