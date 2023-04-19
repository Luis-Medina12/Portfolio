import React from "react";

function BubbleSort(){
    return(
        <div className = "algo-container">
            <div className="algo-list">This is where the unsorted list goes</div>
            <div className="algo-list">results of sort</div>
            <div className="algo-results-container">
                <button className="sort-button">SORT</button>
                <div className="algo-results"> time it took</div>
            </div>
            
            <div className="algo-visualizer">visualization area</div>
        </div>
    )
}

export default BubbleSort;