//Write a method that is a factorial of a given number (4!)

function factorial1(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

factorial1(5)

//Iterative solution
function factorial1(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

factorial1(5)