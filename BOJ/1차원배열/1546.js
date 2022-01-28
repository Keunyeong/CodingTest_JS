let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let numArr = input[1].split(' ').map((n)=>Number(n));
const maxNum = Math.max(...numArr);
numArr = numArr.map((n)=>n/maxNum*100)
const average = numArr.reduce((a,b)=>a+b)/numArr.length;
console.log(average);
