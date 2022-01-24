// 시간제한 1.5초 를  통과하기 위해 console.log() 로 한줄씩 찍지 않고
// 개행으로 담아 한번에 출력하였다.
let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let length = Number(input[0]);
let answer = '';
for(let i=0; i<length; i++){
  let sum=Number((input[i+1]).split(' ')[0])+Number((input[i+1]).split(' ')[1]);
  i === 0 ? answer += `${sum}` :
  answer += `\n${sum}`;
}

console.log(answer);
