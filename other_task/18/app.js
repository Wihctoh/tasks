function doSum() {
  let res = 0;
  return (a) => {
    res += a;
    console.log(res);
  };
}

const res = doSum();

res(1);
res(2);
res(4);
