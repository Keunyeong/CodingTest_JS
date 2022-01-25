let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=1; i<length+1; i++){
  i === 1 ? answer += `${' '.repeat(length-1)}*` :
  answer += `\n${' '.repeat(length-i)}${'*'.repeat(i)}`;
}

console.log(answer);
