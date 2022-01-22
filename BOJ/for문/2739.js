let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0];

for(let i=1; i<10; i++){
  console.log(`${Number(line)} * ${i} = ${Number(line)*i}`)
}
