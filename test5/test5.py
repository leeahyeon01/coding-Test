inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]


def sortArray(array):
    i = 0
    j = i+1
    for i in array:
        for j in array:
            print(i, j)
            if array[i] > array[j]:
                tem = array[i]
                array[i] = array[j]
                array[j] = tem

        print(array)
    array_object = {
        "one": array[0],
        "two": array[1],
        "three": array[2],
        "four": array[3],
        "five": array[4],
        "six": array[5],
        "seven": array[6],
        "eight": array[7],
        "nine": array[8]
    }
    print(array_object)


sortArray(inputData)
