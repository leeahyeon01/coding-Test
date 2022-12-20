
const random_num: number[] = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];

let sortArray = (array:number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tem = array[i];
        array[i] = array[j];
        array[j] = tem;
      }
    }
  }
  let array_object = {
    one: array[0],
    two: array[1],
    three: array[2],
    four: array[3],
    five: array[4],
    six: array[5],
    seven: array[6],
    eight: array[7],
    nine: array[8],
  };
  console.log(array);
  console.log(array_object);
};

sortArray(random_num);
