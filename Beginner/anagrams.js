//Given two strings, write a function to determine if the
//second string is an anagram of the first. An anagram is a 
//word, phrase or name formed by rearranging the letters of 
//another, such as cinema, formed from iceman.

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    } 
    return true
}


//second solution
function validAnagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let lookup = {}

    for(let i = 0; i < str1.length; i++){
        let letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!lookup[letter]){
            return false
        } else {
            lookup[letter] -= 1;
        }
    } 
    return true
}

validAnagram2('butts', 'stutb')