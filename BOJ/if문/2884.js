let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0];
let h = Number(line.split(' ')[0]);
let m = Number(line.split(' ')[1]);

if(m-45<0){
  m = 60+(m-45);
  if(h-1<0){
    h = 24 + (h-1);
  } else {
    h = h-1;
  }
} else {
  m = m-45;
}

console.log(h, m);
