//Write a function that returns the sum of all previous numbers of a given number

function sumRange(num) {
    if(num === 1) return 1
    return num + sumRange(num-1)
}

sumRange(3)