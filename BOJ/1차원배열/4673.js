let makingArr = [];
const making = function(n){
  let newN = 0;
  const arr = String(n).split('').map((num)=>Number(num));
  const sum = arr.reduce((a,b)=>a+b);
  newN = n + sum;
  return newN
}
for(let i=0; i<10000; i++){
  makingArr.push(making(i));
  if(!makingArr.includes(i)){
    console.log(i);
  };
}
