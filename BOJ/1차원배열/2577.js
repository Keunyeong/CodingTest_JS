let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');
const numArr = input.map((n)=>Number(n));
const A = numArr[0];
const B = numArr[1];
const C = numArr[2];
const result = A*B*C;
const resultNumberArr = String(result).split('').map((n)=>Number(n));
for(let i=0; i<10; i++){
  const count = resultNumberArr.filter((n)=>i===n).length;
  console.log(count);
}
