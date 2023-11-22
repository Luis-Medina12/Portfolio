import { Helmet } from 'react-helmet';
import Header from './components/Header'
import Translator from './components/Translator';
import React, {useEffect, useState} from "react";

export default function SaurianTranslator () {
    const [text, setText] = useState(null);
    const [transalate, setTranslate] = useState(null);
    const [transLanguage, setTransLanguage] = useState('ENGLISH');
  
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setText(prevState => ({
      ...prevState,
      [name] : value
    }));
  };

  function switchLang() {
    if(transLanguage === 'ENGLISH')
    {
      setTransLanguage("SAURIAN")
    }else{
      setTransLanguage("ENGLISH")
    }
  }

  function reset() {
    setText(null);
    document.getElementById("text").value = '';
  }
  
    return (
      <div className="App">
        <Helmet><title>Saurian Translator</title></Helmet>
        <Header/>
        
        <body className = "App-body">
          <div className='saurianTitle'>
            <p>Welcome to the saurian Translator! Here you can translate sentances from English to Saurian.</p>
          </div>  

          <textarea placeholder='Enter your text here' name="text" id="text" className = "Input-box" onChange={handleInputChange}/>

          <div className = "interactables">
            <button onClick={switchLang} className = "submit-button">TRANSLATE FROM: {transLanguage}</button>
            <button onClick = {reset} className = "submit-button" >RESET</button>
          </div>
  
          {text!=null &&  <p className='result-window'>Translation:</p>}
          {text!=null && <Translator text = {text.text} language = {transLanguage} className='result-window'/>}
          
        </body>
      </div>
    );

}