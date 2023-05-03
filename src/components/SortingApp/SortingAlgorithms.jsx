import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import BubbleSort from './sortingAppComponents/BubbleSort'
import CocktailSort from "./sortingAppComponents/CocktailSort";
import CountingSort from "./sortingAppComponents/CountingSort";

let startTime;
let endTime;
let totalTime;

function SortingAlgorithms(){
    const [input, setInput] = useState("");

    const [unsortedArray,setUnsortedArray] = useState([]);
    const [sortedArray,setSortedArray] = useState([]);
    const [elapsedtime, setElapsedTime] = useState(0);
    let tempArr = [];

    function handleUnsroted(){
        // event.preventDefault();
        
        for(let i =0; i<20; i++){
            tempArr[i] = i+1;
        }
        shuffle(tempArr);

        setUnsortedArray(tempArr.slice(0));
    }

   // console.log("shuffled:", tempArr.toString())

    function handleSort(){
        switch(input){
            case 'bubble':
                startTime = performance.now();
                setSortedArray(BubbleSort(unsortedArray.slice(0)));
                endTime = performance.now();

                setElapsedTime(endTime-startTime);
                break;
            case 'cocktail':
                startTime = performance.now();
                setSortedArray(CocktailSort(unsortedArray.slice(0)));
                endTime = performance.now();

                setElapsedTime(endTime-startTime);
                break;
            case 'counting':
                startTime = performance.now();
                setSortedArray(CountingSort(unsortedArray.slice(0)));
                endTime = performance.now();

                setElapsedTime(endTime-startTime);
                break;
            case 'heap':
                break;
            case 'insertion':
                break;
            case 'quick':
                break;
            case 'selection':
                break;
        }
    }

    const handleAlgoChange = () => {
        setInput(document.getElementById("algoSelect").value);
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
                    <option value="bubble" >Bubble Sort</option>
                    <option value="cocktail">Cocktail Sort</option>
                    <option value="counting">Counting Sort</option>
                    <option value="Heap">Heap Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value ="all" disabled>All Sorting Algos</option>
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