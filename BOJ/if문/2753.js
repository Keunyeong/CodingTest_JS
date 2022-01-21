let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0])
if(a%4===0){
  if(a%100 === 0){
    if(a%400 === 0){
      console.log(1);
    } else {
      console.log(0);
    }
  } else {
    console.log(1);
  }
} else {
  console.log(0)
}
