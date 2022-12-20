array = [50000, 10000, 500, 100, 50, 10];
changeMoney = [];
r = 85400;

array.forEach(function (item) {
  let last;
  if (item === 50000) {
    let change = r / item;
    let coin = Math.floor(change);
    last = r % item;
    console.log(coin);
    console.log(last);
    changeMoney.push(coin);
  } else if (item === 10000) {
    let next = (r % 50000) / item;
    console.log(item);
    let num = Math.floor(next);
    let last_money = (r % 50000) % item;
    console.log(num);
    console.log(last_money);
    changeMoney.push(num);
  } else if (item === 500) {
    let next = (r % 10000) / item;
    console.log(item);
    let num = Math.floor(next);
    let last_money = (r % 10000) % item;
    console.log(num);
    console.log(last_money);
    changeMoney.push(num);
  } else if (item === 100) {
    let next = (r % 500) / item;
    console.log(item);
    let num = Math.floor(next);
    let last_money = (r % 500) % item;
    console.log(num);
    console.log(last_money);
    changeMoney.push(num);
  } else if (item === 50) {
    let next = (r % 100) / item;
    console.log(item);
    let num = Math.floor(next);
    let last_money = (r % 100) % item;
    console.log(num);
    console.log(last_money);
    changeMoney.push(num);
  }
});

console.log(changeMoney);

let key = {
  오만원권: changeMoney[0],
  일만원권: changeMoney[1],
  오백원동전: changeMoney[2],
  일백원동전: changeMoney[3],
  오십원동전: changeMoney[4],
  일십원동전: changeMoney[5],
};
console.log(key);
