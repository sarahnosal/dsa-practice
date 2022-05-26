//Write a function that accepts a long and short string and checks to see if the short string occurs within the longer one

function naiveSearch(long, short){
    let count = 0
    for(let i = 0; i< long.length; i++){
        for(let j=0; j< short.length; j++){
            if (short[j] !== long[i+j]){
                break;
            }
            if(j === short.length-1){
                count++
            }
        }
    }
    return count
}