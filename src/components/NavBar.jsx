import React from "react";
import { Link } from "react-router-dom";


export default function NavBar () {
    return(
        <div className="NavBar">
            <Link to='/About' className="Links"><span>About Me</span></Link>
            <Link to='/TargetBetterPrice' className="Links"><span>Target Better Price</span></Link>
            <Link to='/SaurianTranslator' className="Links"><span>Saurian Translator</span></Link>
            <Link to='/SortingAlgorithms' className="Links"><span>Sorting Algorithms</span></Link>
        </div>
    )
}