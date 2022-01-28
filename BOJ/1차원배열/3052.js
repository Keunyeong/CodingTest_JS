let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const numArr = input.map((n)=>Number(n));
const remainder = numArr.map((n)=>n%42);
const count = [...new Set(remainder)].length;
console.log(count);
