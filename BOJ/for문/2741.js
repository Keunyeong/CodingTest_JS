let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=0; i<length; i++){
  
  i === 0 ? answer += `${i+1}` :
  answer += `\n${i+1}`;
}

console.log(answer);
