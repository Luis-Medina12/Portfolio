import '../SaurianApp/App.css';
import Header from './components/Header'
import Translator from './components/Translator';
import React, {useEffect, useState} from "react";
import Footer from '../Footer/Footer';

export default function SaurianTranslator () {
    const [text, setText] = useState("Enter your text here");
    const [transalate, setTranslate] = useState(null);
  
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setText(prevState => ({
      ...prevState,
      [name] : value
    }));
  };
  
  const translateInput = () =>{
    // setTranslate(prevState => ({
    //   ...prevState,text
    // }));
    setTranslate(text.text);
  };
  
    return (
      <div className="App">
        
        {/* <header className="App-header">
          Saurian-English Translator
        </header> */}
  
        <Header/>
        
        {/* TODO: Need to add switch or button to switch between languages */}
        <body className = "App-body">
          <p>Welcome to the saurian Translator! Here you can translate sentances from English to Saurian and Saurian to English.</p>
  
          <textarea placeholder='Enter your text here' name="text" className = "Input-box" onChange={handleInputChange}/>
          <div className = "interactables">
          <button onClick = {translateInput} className = "submit-button" >TRANSLATE</button>
          {/* <label className="switch">
            <input className="switch-input" type="checkbox"/>
            <span className="switch-label" data-on="Saurian" data-off="English"></span> 
            <span className="switch-handle"></span> 
          </label> */}
          </div>
          {console.log(text)}
  
            {transalate!=null && transalate!= "" && <p className='result-window'>Translation:</p>}
            {text!=null && transalate!= "" && <Translator text = {transalate} className='result-window'/>}
        </body>
        <Footer/>
      </div>
    );

}