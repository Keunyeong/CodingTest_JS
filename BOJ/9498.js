let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let a = Number(input[0])
if(a>=90){
  console.log('A')
} else if(90>a && 80<=a){
  console.log('B')
} else if(80>a && 70<=a){
  console.log('C')
} else if(70>a && 60<=a){
  console.log('D')
} else {
  console.log('F')
}
