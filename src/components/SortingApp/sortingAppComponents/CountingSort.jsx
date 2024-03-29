import React from "react";

function CountingSort(input){

    // given an array, go through array and count number of instances of a number
    // once we know how many instances of a number there are, fill solution array
    // in order 

    //intialize array and fill with zeros
    let countArr = new Array(100).fill(0);

    for(let k=0; k<input.length; k++){
        countArr[input[k]] = countArr[input[k]]+1;
    }
    
    // pos will be index of solution Arr
    let pos = 0;

    // j will be index of counting array
    for(let j = 0; j<countArr.length; j++){

        while(countArr[j] !=0){
            input[pos] = j;
            countArr[j] = countArr[j]-1;
            pos++;
        }
    }

    return input;
}

export default CountingSort;