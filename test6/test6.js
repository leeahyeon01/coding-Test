const fixed_expenses = {
  teacher_commute: {
    bicyle: "1500원",
    taxi: "3500원",
  },
  teacher_coffee: {
    esina: "4500원",
    kanu: "200원",
  },
  cat_food: {
    chicken: "400원",
    milk: "800원",
  },
};

const count = {
  commute: {
    b_commute: "19회",
    t_commute: "3회",
  },
  coffee: {
    e_coffee: "6회",
    k_coffee: "15회",
  },
  food: {
    c_food: "30회",
    m_food: "2회",
  },
};

// console.log(fixed_expenses.cat_food.milk.slice(0, -1));
// console.log(Object.keys(fixed_expenses)[0]);
// console.log(Object.values(count.commute)[0].slice(0, -1));
// console.log(Object.values(count.commute)[1].slice(0, -1));

// 1번) 객체안의 객체의 value값만 뽑아서 배열에 넣음
fixed_moneyArray = [];

for (key in fixed_expenses) {
  fixed_moneyArray.push(Object.values(fixed_expenses[key])[0].slice(0, -1));
  fixed_moneyArray.push(Object.values(fixed_expenses[key])[1].slice(0, -1));
}

fixed_countArray = [];
for (key in count) {
  fixed_countArray.push(Object.values(count[key])[0].slice(0, -1));
  fixed_countArray.push(Object.values(count[key])[1].slice(0, -1));
}

// console.log(fixed_countArray);

//2번) 고정지출가격을  숫자로 바꿔서 배열에 담았다.
paymoneyArray = [];
for (let i = 0; i < 6; i++) {
  number = Number(fixed_moneyArray[i]);
  paymoneyArray.push(number);
}
console.log(paymoneyArray);

paycountArray = [];
for (let i = 0; i < 6; i++) {
  number = Number(fixed_countArray[i]);
  paycountArray.push(number);
}
console.log(paycountArray);

//한달에 쓰는 물량의총값 ,총값 구하는 함수
let totalmoney;
function multiply(a, b) {
  let total = 0;
  for (let i = 0; i < 6; i++) {
    let value = a[i] * b[i];
    // console.log(value);

    total += value;
  }
  console.log(total); // 총 한달에 쓰는값
  totalmoney = total;
}

multiply(paymoneyArray, paycountArray);

console.log(totalmoney);

// 고정지출 줄여주는 함수 (십만원 -고양이밥-게임기 =21600원만써야함)
function get_poketmon(getmoney) {
  if (getmoney > 64800) {
    let rand_bicyle = Math.floor(Math.random() * 2);
    let rand_taxi = Math.floor(Math.random() * 2);
    let rand_esina = Math.floor(Math.random() * 2);
    let rand_kanu = Math.floor(Math.random() * 3);
    console.log(rand_bicyle);
    paycountArray[0] = rand_bicyle;
    paycountArray[1] = rand_taxi;
    paycountArray[2] = rand_esina;
    paycountArray[3] = rand_kanu;
  }
  console.log(paycountArray);
}

get_poketmon(totalmoney);
multiply(paymoneyArray, paycountArray);

console.log(`한달동안 자전거 ${paycountArray[0]}회
              택시 ${paycountArray[1]} 회
            커피엔시나 ${paycountArray[2]}회
             커피 카누${paycountArray[3]}회 
             하면 한달 총 지출 ${totalmoney}         
`);
