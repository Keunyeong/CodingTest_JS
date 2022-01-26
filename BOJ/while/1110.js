let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');
const s = Number(input[0]);
let a = 0;
let b = 0;
if(s < 10){
  b = s;
} else {
  a = Number(input[0].split('')[0]);
  b = Number(input[0].split('')[1]);
}

let c = 0;
let n = 0;
while(true){
  if(a+b < 10){
    n++;
    c = Number(String(b)+String(a+b).split('')[0]);
    if(c < 10){
      a = 0;
      b = Number(String(c).split('')[0])
    }else{
      a = Number(String(c).split('')[0]);
      b = Number(String(c).split('')[1]);
    }
    if(c === s){
      console.log(n);
      break;
    }
  } else {
    n++;
    c = Number(String(b)+String(a+b).split('')[1]);
    
    if(c < 10){
      a = 0;
      b = Number(String(c).split('')[0])
    }else{
      a = Number(String(c).split('')[0]);
      b = Number(String(c).split('')[1]);
    }
    if(c === s){
      console.log(n);
      break;
    }
  }
}
