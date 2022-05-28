function numberCompare(num1, num2){
    return num2 - num1
}

[6,4,15,10].sort(numberCompare)

function compareByLen(str1, str2){
    return str2.length - str1.length
}