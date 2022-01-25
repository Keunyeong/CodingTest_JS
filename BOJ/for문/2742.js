let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=length; i>0; i--){
  
  i === length ? answer += `${i}` :
  answer += `\n${i}`;
}

console.log(answer);
