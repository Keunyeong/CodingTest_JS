let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0].split(' ')[0]);
let X = Number(input[0].split(' ')[1]);
let A = input[1].split(' ');
let answer = A.filter((n)=>{return X > Number(n)})

console.log(...answer);
