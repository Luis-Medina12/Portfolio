import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import BubbleSort from './sortingAppComponents/BubbleSort'
import CocktailSort from "./sortingAppComponents/CocktailSort";
import CountingSort from "./sortingAppComponents/CountingSort";
import HeapSort from "./sortingAppComponents/HeapSort";
import SelectionSort from "./sortingAppComponents/SelectionSort";
import InsertionSort from "./sortingAppComponents/InsertionSort";

<<<<<<< HEAD
let startTime;
let endTime;
=======
let startTime =0.0;
let endTime = 0.0;
let tempArr = [];
let counter = 1;
>>>>>>> 3c8fcaffdca069495af6c843c8bae69209c77c1c

function SortingAlgorithms(){
    const [input, setInput] = useState("");
    
    const [unsortedArray,setUnsortedArray] = useState([]);
    const [sortedArray,setSortedArray] = useState([]);
<<<<<<< HEAD
    const [elapsedtime, setElapsedTime] = useState(0);

    function handleUnsroted(){
        setUnsortedArray(Array.from({length: 20}, () => Math.floor(Math.random() * 50)));
        setSortedArray([]);
        setElapsedTime(0);
=======
    const [elapsedtime, setElapsedTime] = useState();
    const [times, setTimes] = useState({
        time:null,
        type:null,
        number:null,
    })
    
    let listItems = tempArr.map((elapsed) =>
        <p key = {elapsed} className="listItems"> {elapsed.type} sort in {elapsed.time}</p>
    );

    function handleUnsroted(){
        // generates a random-enough array of length 25 that may contain duplicates
        const arrWithDuplicates = Array.from({length: 25}, () => Math.floor(Math.random() * 70));

        // sets the working array as a version of the previusly generated array without any duplicates
        setUnsortedArray(arrWithDuplicates.filter((item, index) => arrWithDuplicates.indexOf(item) === index));
>>>>>>> 3c8fcaffdca069495af6c843c8bae69209c77c1c
    }

    function handleSort(){

        // TODO: implement quick and heap sort

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
<<<<<<< HEAD

                
=======
>>>>>>> 3c8fcaffdca069495af6c843c8bae69209c77c1c
                break;
            case 'Counting':
                startTime = performance.now();
                setSortedArray(CountingSort(unsortedArray.slice(0)));
                endTime = performance.now();
                break;
            case 'Heap':
                startTime = performance.now();
                setSortedArray(HeapSort(unsortedArray.slice(0)));
                endTime = performance.now();
                break;
            case 'Insertion':
                startTime = performance.now();
                setSortedArray(InsertionSort(unsortedArray.slice(0)));
                endTime = performance.now();
                break;
            case 'Quick':
                break;
            case 'Selection':
                startTime = performance.now();
                setSortedArray(SelectionSort(unsortedArray.slice(0)));
                endTime = performance.now();
<<<<<<< HEAD

                break;
        }

        setElapsedTime(endTime-startTime);
=======
                break;
        }
        setTimes({time:(endTime-startTime), type: input});
        if(times.time!=null){
            tempArr.push(times);
        }
>>>>>>> 3c8fcaffdca069495af6c843c8bae69209c77c1c
    }

    const handleAlgoChange = () => {
        setInput(document.getElementById("algoSelect").value)
        setSortedArray([]);
        setElapsedTime(0);
      };

      const handleReset = () =>{
        setElapsedTime(0);
        setSortedArray([]);
        setUnsortedArray([]);
        listItems = [];
        tempArr = [];
        console.log(listItems)
        setTimes({time: null, type: null, number: null})
        
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

                {times.time != null && <p className="algo-results">Elapsed Time: {times.time} seconds</p>}

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