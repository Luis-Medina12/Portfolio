import React from "react";

function BubbleSort(input){
    const unsortedArr = input;
    // need to compare two numbers and swap if left > right
    // need to do this until it does an entire pass without swapping
    let swap = true;
    if(unsortedArr.length <=1){
        return unsortedArr;
    }

    while(swap===true){
        swap = false;
        for(let i=0; i<unsortedArr.length;i++){
            if(unsortedArr[i] > unsortedArr[i+1]){
                let temp = unsortedArr[i]
                unsortedArr[i] = unsortedArr[i+1]
                unsortedArr[i+1] = temp
                swap = true;
            }
        }
    }
    
    return unsortedArr;
}

export default BubbleSort;