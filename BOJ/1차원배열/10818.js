let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');
const length = Number(input[0]);
let numArr = input[1].split(' ').map((n)=>Number(n));

numArr = numArr.sort((a,b)=>a-b);

console.log(`${numArr[0]} ${numArr[length-1]}`);
