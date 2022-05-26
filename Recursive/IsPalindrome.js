//Write a recursive function which returns true if the string passed to it is a palindrome. Otherwise it is false

function isPalindrome(str){
    if(str.length <= 1) return true
    if(str.legnth === 2) return str[0] === str[1]
    if(str[0] ===str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}