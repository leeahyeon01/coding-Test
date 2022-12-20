# array = [50000, 10000, 500, 100, 50, 10]
# changeMoney = []
# r = 85400

# test(item):
#        last = None
#     if item == 50000:
#         let change = r / item
#         let coin = Math.floor(change)
#         last = r % item
#         console.log(coin)
#         console.log(last)
#         changeMoney.push(coin)
#     elif item === 10000:
#         let next = (r % 50000) / item
#         console.log(item)
#         let num = Math.floor(next)
#         let last_money = (r % 50000) % item
#         console.log(num)
#         console.log(last_money)
#         changeMoney.push(num)
#      elif item == 500:
#         let next = (r % 10000) / item
#         console.log(item)
#         let num = Math.floor(next)
#         let last_money = (r % 10000) % item
#         console.log(num)
#         console.log(last_money)
#         changeMoney.push(num)
#      elif item == 100:
#         let next = (r % 500) / item
#         console.log(item)
#         let num = Math.floor(next)
#         let last_money = (r % 500) % item
#         console.log(num)
#         console.log(last_money)
#         changeMoney.push(num)
#     else item == 50:
#         let next = (r % 100) / item
#         console.log(item)
#         let num = Math.floor(next)
#         let last_money = (r % 100) % item
#         console.log(num)
#         console.log(last_money)
#         changeMoney.push(num)


# console.log(changeMoney)

# let key = {
#     오만원권: changeMoney[0],
#     일만원권: changeMoney[1],
#     오백원동전: changeMoney[2],
#     일백원동전: changeMoney[3],
#     오십원동전: changeMoney[4],
#     일십원동전: changeMoney[5],
# }
# console.log(key)

class getMoney(money, price):
    def getMoney(self, omanwon, manwon, obaekwon, beakwon, oshipwon, shipwon):
        self.omanwon = omanwon
        self.manwon = manwon
        self.obaekwon = obaekwon
        self.beakwon = beakwon
        self.oshipwon = oshipwon
        self.shipwon = shipwon

    exchange = money - price

    safe = getMoney(1000, 1000, 100, 1000, 100, 1000)
    exchangeMoney = getMoney()

    while exchange > 0:
        if exchange > 50000 and safe.omanwon > 0:
            exchange - 50000
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange > 10000 and safe.manwon > 0:
            exchange - 10000
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange > 500 and safe.manwon > 0:
            exchange - 500
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange > 100 and safe.manwon > 0:
            exchange - 500
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange > 50 and safe.manwon > 0:
            exchange - 50
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange > 10 and safe.manwon > 0:
            exchange - 10
            getMoney.omanwon - 1
            exchangeMoney.omanwon + 1
        elif exchange == 0:
            break
            return exchangeMoney
