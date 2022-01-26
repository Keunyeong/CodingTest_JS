let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');
let length = input.length;
let index= 0;

while(true){
  const A = input[index].split(' ').map(n=>Number(n))[0];
  const B = input[index].split(' ').map(n=>Number(n))[1];
  if(index===length-1){
    break;} else {index++;}
    console.log(A+B);
}
