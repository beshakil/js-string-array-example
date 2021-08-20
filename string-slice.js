const anthem = 'Amar Sonar Bangla';
const anthemMore = 'desh';
const joinWords = ['a', 'b', 'c'];

const words = anthem.split(' ');
const withoutA = anthem.split('a');

const smallSlice = anthem.slice(5, 13)
const substr = anthem.substr(5, 7);
const substring = anthem.substring(5, 7);
const concat = anthem.concat(anthemMore);
const join = joinWords.join('');

console.log(words);
console.log(withoutA);
console.log(smallSlice);
console.log(substr);
console.log(substring);
console.log(concat);
console.log(join);