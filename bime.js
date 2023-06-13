let x = parseInt(1000000, 10);

let year = 30;
let mounth = 360;
let sum = parseInt(0, 10);
let profit = 18;
function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}
for (let i = 1; i <= year; i++) {
  let temp;
  let p;
  p = x;
  console.log("واریزی ماهانه سال  : ", i, " مبلغ : ", x);
  for (let t = 1; t <= 12; t++) {
    sum = sum * 1.017;
    sum = sum + x;
    temp = sum;
    console.log("سال : ", i, " ماه : ", t, "  ", sum);
  }
  x = x * 1.1;
}
//sum = parseInt(sum, 10);
console.log("جمع بعد از سی سال = ", sum);
