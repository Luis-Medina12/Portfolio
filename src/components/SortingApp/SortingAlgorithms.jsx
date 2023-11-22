import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import BubbleSort from './sortingAppComponents/BubbleSort'
import CocktailSort from "./sortingAppComponents/CocktailSort";
import CountingSort from "./sortingAppComponents/CountingSort";
import HeapSort from "./sortingAppComponents/HeapSort";
import SelectionSort from "./sortingAppComponents/SelectionSort";

let startTime;
let endTime;

function SortingAlgorithms(){
    const [input, setInput] = useState("");

    const [unsortedArray,setUnsortedArray] = useState([]);
    const [sortedArray,setSortedArray] = useState([]);
    const [elapsedtime, setElapsedTime] = useState(0);

    function handleUnsroted(){
        setUnsortedArray(Array.from({length: 20}, () => Math.floor(Math.random() * 50)));
        setSortedArray([]);
        setElapsedTime(0);
    }

    function handleSort(){
        switch(input){
            case 'Bubble':
                startTime = performance.now();
                setSortedArray(BubbleSort(unsortedArray.slice(0)));
                endTime = performance.now();
                break;
            case 'Cocktail':
                startTime = performance.now();
                setSortedArray(CocktailSort(unsortedArray.slice(0)));
                endTime = performance.now();

                
                break;
            case 'Counting':
                startTime = performance.now();
                setSortedArray(CountingSort(unsortedArray.slice(0)));
                endTime = performance.now();
                break;
            case 'Heap':
                
                break;
            case 'Insertion':
                break;
            case 'Quick':
                break;
            case 'Selection':
                startTime = performance.now();
                setSortedArray(SelectionSort(unsortedArray.slice(0)));
                endTime = performance.now();

                break;
        }

        setElapsedTime(endTime-startTime);
    }

    const handleAlgoChange = () => {
        setInput(document.getElementById("algoSelect").value);
        setSortedArray([]);
        setElapsedTime(0);
      };

      const handleReset = () =>{
        // setInput("");
        setElapsedTime(0);
        setSortedArray([]);
        setUnsortedArray([]);
      }
    
    return (
        <div className="algo-app">
            <Helmet><title>Sorting Algorithms</title></Helmet>
            <div>
                <label for="algoSelect">Choose an algorithm: </label>
                
                <select name="algoSelect" id="algoSelect" onChange={handleAlgoChange}>
                    <option value="" selected disabled>Select an Algorithm</option>
                    <option value="Bubble" >Bubble Sort</option>
                    <option value="Cocktail">Cocktail Sort</option>
                    <option value="Counting">Counting Sort</option>
                    <option value="Heap">Heap Sort</option>
                    <option value="Insertion">Insertion Sort</option>
                    <option value="Quick">Quick Sort</option>
                    <option value="Selection">Selection Sort</option>
                    <option value ="All" disabled>All Sorting Algos</option>
                </select>
            </div>

            <div className = "algo-container">
            
                <label for= "unsorted-array">Randomly Generated and Unsorted Array:</label>
                <div className="algo-list" id="unsorted-array">
                    {unsortedArray.toString()}
                </div>

                <label for= "sorted-array">Sorting Algorithm Results:</label>
                <div className="algo-list" id="sorted-array">
                    {sortedArray.toString()}
                </div>

                {input!=="" &&
                
                    <div className="algo-results-container">
                    
                    <button className="sort-button" onClick={handleUnsroted}>Generate Array</button>
                    <button className="sort-button" onClick={handleSort}>{input} Sort Array</button>
                    <button className="sort-button" onClick={handleReset}>Reset</button>
                    </div>
                }
                {/* For now this only displays the current elapsed time, but I will create a list of times 
                to allow for easier tracking and comparion */}
                {elapsedtime !=0 && <div className="algo-results">Elapsed Time: {elapsedtime} seconds</div>}
            </div>
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

export default SortingAlgorithms;