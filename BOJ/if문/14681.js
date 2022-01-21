// runtime error ... 
let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().split('\n');

let a = input[0];
let b = input[1];

let x = Number(a);
let y = Number(b);

if(x>0 && y>0){
  console.log(1);
} else if(x<0 && y>0){
  console.log(2);
} else if(x<0 && y<0){
  console.log(3);
} else if(x>0 && y<0){
  console.log(4);
};

// 방식 변경

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function() {
    const [a, b] = input;
    
    if (a > 0 && b > 0) {
        console.log(1);
    }
    else if (a < 0 && b > 0) {
        console.log(2);
    }
    else if (a < 0 && b < 0) {
        console.log(3);
    }
    else if (a > 0 && b < 0) {
        console.log(4);
    }
    process.exit();
})
