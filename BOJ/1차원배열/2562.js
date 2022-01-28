let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');
const numArr = input.map((n)=>Number(n));

const maxNum = Math.max(...numArr);

const index = numArr.indexOf(maxNum)+1;

console.log(maxNum);
console.log(index);
