import React from "react";
import BubbleSort from "./BubbleSort";
import CocktailSort from "./CockTailSort";
import CountingSort from "./CountingSort";
import HeapSort from "./HeapSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

function DisplayAlgo(input){
    switch(input.algo){
        case 'bubble':
            return <BubbleSort/>;
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

export default DisplayAlgo;