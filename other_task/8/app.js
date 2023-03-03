let n = 5;

function doStr(n_){
let str = '';
for (let i = 0; i < n_; i++) {
  let pr = prompt('inser');
  str+=pr;
}
return str;
}

let resStr =doStr(n);

function rev(resStr_){
  try {
    let res = resStr_.split('').reverse().join('');
    return res;
  } catch (error) {
    return error.message;
  }
}
let reverseStr = rev(resStr);
console.log(reverseStr);
