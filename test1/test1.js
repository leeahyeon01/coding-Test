const pi = 3.14;

function cone_volume(r, h) {
  console.log(r, h);
  result = (pi * (r * r) * h) / 3;
  let volume = parseInt(result);
  console.log(volume);
}

const x = Math.floor(Math.random() * 100);
const y = Math.floor(Math.random() * 100);
cone_volume(x, y);
