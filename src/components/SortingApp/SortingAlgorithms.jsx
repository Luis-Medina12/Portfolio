import React, {useEffect, useState} from "react";
import DisplayAlgo from "./sortingAppComponents/DisplayAlgo";

function SortingAlgorithms(){
    const [input, setInput] = useState("");

    const handleAlgoChange = () => {
        const name= document.getElementById("algoSelect").value;
        setInput(name);
      };
    
    return (
        <div className="algo-app">
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


            {input!="" && <DisplayAlgo algo = {input}/>}
        </div>
    )
}

export default SortingAlgorithms;