function playResult(getLeather: number){
    let get_sliver = getLeather * 2;
    let get_8copper = get_sliver * 8;
    let get_gold = get_8copper / 32; 

    
  console.log(
    `플레이어는 8시간 플레이 하여 총${get_gold}gold, ${get_8copper}copper개를 얻었습니다`
  );
}

playResult(45);