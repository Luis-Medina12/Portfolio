import React from "react";
import About from './About';
import TargetBetterPrice from './TargetApp/TargetBetterPrice';
import SaurianTranslator from './SaurianApp/SaurianTranslator';
import './styles.css'
import { Link } from "react-router-dom";


export default function NavBar () {
    return(
        <div className="NavBar">
            <Link to='/' className="Links"><span>Home</span></Link>
            <Link to='/About' className="Links"><span>About Me</span></Link>
            <Link to='/TargetBetterPrice' className="Links"><span>Target Better Price</span></Link>
            <Link to='/SaurianTranslator' className="Links"><span>Saurian</span></Link>
        </div>
    )
}