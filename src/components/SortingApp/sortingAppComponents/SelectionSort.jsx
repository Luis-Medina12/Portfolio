import React from "react";

function SelectionSort(input){
    console.log("Selection Sort");
    // linear sort, start at beginning and traverse array
    let swap = true;
    let begin = 0;
    let lowest, temp;
    while(swap == true){
        swap = false;
        lowest = begin;

        for(let i = begin; i <input.length; i++){
            if(input[i] <= input[lowest]){
                lowest = i;
                swap = true;
            }
        }

        temp = input[begin];
        input[begin] = input[lowest];
        input[lowest] = temp;
        begin++;
    }

    return input;
}

export default SelectionSort;