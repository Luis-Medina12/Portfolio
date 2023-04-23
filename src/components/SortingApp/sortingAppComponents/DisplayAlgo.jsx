import React, {useEffect, useState} from "react";
import BubbleSort from "./BubbleSort";
import CocktailSort from "./CockTailSort";
import CountingSort from "./CountingSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";


// setUnsortedArray(tempArr.slice(0));

let startTime;
let endTime;
let totalTime;

function DisplayAlgo(input){
    const [unsortedArray,setUnsortedArray] = useState([]);
    const [sortedArray,setSortedArray] = useState([]);
    // const [elapsedtime, setElapsedTime] = useState(0);
    let tempArr = [];

    function handleunsroted(){
        console.log("handle unsorted enetered")
        
        for(let i =0; i<20; i++){
            tempArr[i] = i+1;
        }
        shuffle(tempArr);

        setUnsortedArray(tempArr.slice(0));
    }

   // console.log("shuffled:", tempArr.toString())

    function handleSort(){
        switch(input.algo){
            case 'bubble':
                console.log("entered bubble sort");
                startTime = performance.now();
                const temp = unsortedArray.splice(0);
                const result = BubbleSort(temp);
                setSortedArray(result);
                console.log(sortedArray);
                endTime = performance.now();
                
                // console.log(sortedArray.toString());

                // totalTime = endTime-startTime;
                // console.log(totalTime);
                break;
            case 'cocktail':
                return <h1>cocktail</h1>;
            case 'counting':
                return <h1>counting</h1>;
            case 'heap':
                return <h1>heap</h1>;
            case 'insertion':
                return <h1>insertion</h1>;
            case 'quick':
                return <h1>quick</h1>;
            case 'selection':
                return <h1>selection</h1>;
        }
    }

    return(
        <div className = "algo-container">
            
            <label for= "unsorted-array">Randomly Generated and Unsorted Array:</label>
            <div className="algo-list" id="unsorted-array">{unsortedArray}</div>

            <div className="algo-results-container">
                
                <button className="sort-button" onClick={handleunsroted}>Generate Array</button>
                <button className="sort-button" onClick={handleSort}>{input.algo} Sort Array</button>

                <div className="algo-results">Elapsed Time: </div>
            </div>
            {sortedArray.length==0 &&  
                <>
                    <label for= "sorted-array">Sorting Algorithm Results:</label>
                    <div className="algo-list" id="sorted-array">{sortedArray.toString()}</div>
                </>
            }
            <div></div>
            
        </div>
    )
}

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default DisplayAlgo;