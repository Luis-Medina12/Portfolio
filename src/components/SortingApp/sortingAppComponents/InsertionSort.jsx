import React from "react";

function InsertionSort(input){

    let length = input.length;
    console.log(input);

    // sorted if only 1 element or none
    if(length <= 1){
        return input;
    }
    
    for(let i = 1; i < length; i++){
        let key = input[i];

        let j = i-1;

        while(j>=0 && input[j] > key){
            input[j+1] = input[j];
            j = j-1;
        }

        input[j+1] = key;

    }

    console.log(input);
        

    return input;
}

export default InsertionSort;