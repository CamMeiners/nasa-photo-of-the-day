import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants';


function App() {
  const [picture, setPicture] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res =>{
      setPicture(res.data);
      console.log(res.data);
    }).catch(err => console.error(err));
  },[]) 

  return (
    <div className="App">
      <h1>{'Pictures That Are Out of This World!'}</h1>
      <img src={picture.url}/>
      <div>
      <h2>{picture.date}</h2>
      </div>
      <div>
        <h3>{picture.explanation}</h3>
      </div>
    </div>
    
      
  );
}

export default App;
