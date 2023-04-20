import React from "react";
import BubbleSort from "./BubbleSort";
import CocktailSort from "./CockTailSort";
import CountingSort from "./CountingSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

function DisplayAlgo(input){

    let unsortedArray = [2,3,4,1];
    let sortedArray =[];
    let startTime;
    let endTime;
    switch(input.algo){
        case 'bubble':
            startTime = performance.now();
            sortedArray = BubbleSort(unsortedArray);
            endTime = performance.now();
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
            <div className="algo-list" id="unsorted-array">This is where the unsorted list goes</div>
            
            <label for= "sorted-array">Sorting Algorithm Results:</label>
            <div className="algo-list" id="sorted-array">results of sort</div>

            <div className="algo-results-container">
                <button className="sort-button">SORT</button>
                <div className="algo-results" placeholder="elapsed Time"></div>
            </div>
            
            {/* <div className="algo-visualizer">
                <div >----------------------------------------------------------------------------------------------------</div>
                <div >------------------------------------------------------------------------------------------</div>
                <div >--------------------------------------------------------------------------------</div>
                <div>{sortedArray}</div>
                
             </div> */}
            
        </div>
    )
}

export default DisplayAlgo;