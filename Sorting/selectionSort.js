function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let min = i
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

selectionSort([34,22,10,19,17])

function selectionSort2(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = 0; i< arr.length; i++){
        let min = i
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr
}

selectionSort([34,22,10,19,17])

