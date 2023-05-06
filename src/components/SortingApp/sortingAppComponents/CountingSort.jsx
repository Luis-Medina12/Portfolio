import React from "react";

function CountingSort(input){

    // given an array, go thorugh array and count number of instances of a number
    // once we know how many instances of a number there are, fill solution array
    // in order 

    //intialize array and fill with zeros
    let countArr = [];
    for(let i=0; i<=50; i++){countArr[i] = 0;}
    console.log(countArr);

    for(let k=0; k<input.length; k++){
        countArr[input[k]] = countArr[input[k]]+1;
    }
    console.log(countArr);
    console.log(input);
    
    // pos will be index of solution Arr
    let pos = 0;

    // j will be index of counting array
    for(let j = 0; j<= 50; j++){

        while(countArr[j]!==0){
            input[pos] = j;
            countArr[j] = countArr[j]-1;
            pos++;
            console.log("adding: ", j)
        }
    }

    return input;
}

export default CountingSort;