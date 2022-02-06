let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input.slice(1,input.length).map((n)=>Number(n)).sort((a,b)=>a-b)

arr.forEach((n)=>{console.log(n)});
