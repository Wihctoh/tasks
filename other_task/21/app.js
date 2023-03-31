function countBy(x, n) {
  let z = [];
  let res = [];
  for(let i = 1; i <= n; i++){
    res.push(i);
  }
  for(let i = 0; i < 5; i++){
    if(res[i] % 2 == 0){
      z.push(res[i]);
    }
  }
  console.log(res.length);
  return z;
}

console.log(countBy(2,5));