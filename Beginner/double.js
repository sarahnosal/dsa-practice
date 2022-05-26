function double(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2*arr[i])
    }
    return newArr
}

arr = [1,2,3]

double(arr)