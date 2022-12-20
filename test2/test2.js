const total_score = 84;
const remain_sore = 84 - 3 * 16;
let twoshoot;
let oneshoot;

console.log(remain_sore);

function getScore() {
  halfValue = remain_sore / 2;
  twoshoot = halfValue / 2;
  oneshoot = halfValue;
  chance = oneshoot * 2;

  console.log(
    `2점슛은 ${twoshoot} 자유투를 ${chance}번 회득해 총 ${oneshoot}개의 자유튜를 성공하였습니다`
  );
}

getScore();
