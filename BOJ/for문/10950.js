let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let length = Number(input[0]);

for(let i=0; i<length; i++){
  let sum=Number((input[i+1]).split(' ')[0])+Number((input[i+1]).split(' ')[1]);
  console.log(sum);
}
