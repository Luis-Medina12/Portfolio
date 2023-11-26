import React from "react";
import './App.css'
import About from './components/About';
import SaurianTranslator from './components/SaurianApp/SaurianTranslator';
import TargetBetterPrice from './components/TargetApp/TargetBetterPrice';
import SortingAlgorithms from "./components/SortingApp/SortingAlgorithms";
import NavBar from './components/NavBar';
import { Routes,Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

  function App () {
    return (
        <>
        <NavBar/>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/Portfolio" element={<About/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/TargetBetterPrice" element={<TargetBetterPrice/>}/>
          <Route exact path="/SaurianTranslator" element={<SaurianTranslator/>}/>
          <Route exact path="/SortingAlgorithms" element={<SortingAlgorithms/>}/>
        </Routes>
        <Footer></Footer>
        </>
    )
}

export default App;
