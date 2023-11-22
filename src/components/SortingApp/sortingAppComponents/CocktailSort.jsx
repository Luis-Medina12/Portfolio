import React from "react";

function CocktailSort(input){
    //Cocktail is similar to bubble sort except it will go back and forth through the array, 
    //pushing the greatest number of each right traversal to the right and the smallest
    //of each left traversal to the left

    //it will do this until no swap is made, which indicates the array is sorted

    let unsortedArr = input;
    let swap = true;
    let direction = true;
    let beginning = 0;
    let end = unsortedArr.length-1;
    if(unsortedArr.length <=1){
        return unsortedArr;
    }
    
    while(swap===true){

        // reset at beginning of loop to ensure a previous swap does not cause a false positive
        swap = false;

        // direction = true -> traverse to the right, direction = false -> traverse to the left
        // each iteration largest will be pushed to its spot on the left, and smallest on the right
        if(direction){
            
            for(let i=0; i<=end;i++){
                if(unsortedArr[i] > unsortedArr[i+1]){
                    let temp = unsortedArr[i]
                    unsortedArr[i] = unsortedArr[i+1]
                    unsortedArr[i+1] = temp
                    swap = true;
                }
            }

            end--;
            direction = !direction;
        }else{
            
            for(let i=end; i>=0;i--){
                if(unsortedArr[i] > unsortedArr[i+1]){
                    let temp = unsortedArr[i]
                    unsortedArr[i] = unsortedArr[i+1]
                    unsortedArr[i+1] = temp
                    swap = true;
                }
            }

            beginning++;
            direction = !direction;
        }

    }

    return unsortedArr;
}

export default CocktailSort;