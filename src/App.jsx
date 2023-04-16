import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About';
import TargetBetterPrice from './components/TargetApp/TargetBetterPrice';
import SaurianTranslator from './components/SaurianApp/SaurianTranslator';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import { Routes,Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";

  function App () {
    return (
        <>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/TargetBetterPrice" element={<TargetBetterPrice/>}/>
          <Route exact path="/SaurianTranslator" element={<SaurianTranslator/>}/>
        </Routes>
        <Footer></Footer>
        </>
    )
}

export default App;