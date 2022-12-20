def playResult(getLeather):
    get_sliver = getLeather * 2
    get_8copper = get_sliver * 8
    get_gold = get_8copper / 32

    print("플레이어는 8시간 플레이 하여 총"+str(get_gold) +
          "gold  " + str(get_8copper) + " " + "copper개를 얻었습니다")


playResult(45)
