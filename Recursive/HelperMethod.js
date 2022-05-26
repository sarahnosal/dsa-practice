//Write a function that returns an array with all odd values using a helper method

function collectOdds(arr){
    let result = []

    function helper(helperInput) {
        if(helperInput.length === 0){
            return
        }
        if(helperInput[0]%2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

collectOdds([1,2,3,4,6,8])