//Write a function which accespts a base and exponent. The function should return the power of the base to the exponent. 

function power(num, exp){
    if(exp === 0) return 1
    return num * power(num, exp-1)
}