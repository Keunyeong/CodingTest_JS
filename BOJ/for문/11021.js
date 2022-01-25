let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=1; i<length+1; i++){
  
  i === 1 ? answer += `Case #${i}: ${Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])}` :
  answer += `\nCase #${i}: ${Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])}`;
}

console.log(answer);
