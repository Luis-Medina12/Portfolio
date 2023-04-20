import React from "react";
import BubbleSort from "./BubbleSort";
import CocktailSort from "./CockTailSort";
import CountingSort from "./CountingSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

function DisplayAlgo(input){

    let unsortedArray = [];

    for(let i =0; i<100; i++){
        unsortedArray[i] = i+1;
    }
    let startTime;
    let endTime;
    startTime = performance.now();
    let sortedArray =shuffle(unsortedArray);
    endTime = performance.now();
    

    switch(input.algo){
        case 'bubble':
            
            // sortedArray = BubbleSort(unsortedArray);
            
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

    return(
        <div className = "algo-container">
            
            <label for= "unsorted-array">Randomly Generated and Unsorted Array:</label>
            <div className="algo-list" id="unsorted-array">{unsortedArray.toString()}</div>
            
            <label for= "sorted-array">Sorting Algorithm Results:</label>
            <div className="algo-list" id="sorted-array">{sortedArray.toString()}</div>

            <div className="algo-results-container">
                <button className="sort-button">SORT</button>
                <div className="algo-results">Elapsed Time: {endTime-startTime}</div>
            </div>
            <div></div>
            
            {/* <div className="algo-visualizer">
                <div >----------------------------------------------------------------------------------------------------</div>
                <div >------------------------------------------------------------------------------------------</div>
                <div >--------------------------------------------------------------------------------</div>
                <div>{sortedArray}</div>
                
             </div> */}
            
        </div>
    )
}

function shuffle(array) {
    let currentIndex = array.length;
    let newArr = [...array];
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex], newArr[currentIndex]];
    }
  
    return newArr;
  }

export default DisplayAlgo;