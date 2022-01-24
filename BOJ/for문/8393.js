let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let num = Number(input[0]);
let sum = 0;
for(let i=1; i<num+1; i++){
  sum += i;
}
console.log(sum);
