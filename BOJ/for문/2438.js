let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=1; i<length+1; i++){
  let star='';
  for(let j=0; j<i;j++){star+='*'};
  i === 1 ? answer += `*` :
  answer += `\n${star}`;
}

console.log(answer);
