//Write a function called maxSubarraySum which accepts an array of
//integers and a number called n. The function should calculate
//the maximum sum of n consecutive elements in the array.

//Naive Solution
function maxSubarraySum(arr, num) {
    if (num > arr.length){
        return null
    }
    var max = -Infinity;
    for (let i=0; i < arr.length - num + 1; i++){
        temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max
}
//Refactored Solution
function maxSubarraySum2(arr, num){
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSUm = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

maxSubarraySum2([1,2,3,4,3,2,1,4,3,2,5,4,3], 2)