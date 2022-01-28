let fs = require('fs'); //(/dev/stdin)
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input.forEach((a,i)=>{
  if(i>0){
    let score = 0;
    let totalScore = 0;
    a.split('').forEach((answer)=>{
      if(answer==='O'){
        score++
        totalScore = totalScore+score;
      } else {
        score = 0;
      }
    })
    console.log(totalScore);
  }
});
