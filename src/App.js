import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants';
import styled from 'styled-components';

const Colors = styled.div`
color:white;
background-color:black;
border: 10px solid red;
padding: 8px;
margin: 100px;
`
const H1Style = styled.h1`
font-size:100px;
`
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
      <Colors>
      <H1Style>{'Pictures That Are Out of This World!'}</H1Style>
      <img src={picture.url}/>
      <div>
      <h2>{picture.date}</h2>
      </div>
      <div>
        <h3>{picture.explanation}</h3>
      </div>
      </Colors>
    </div>
    
      
  );
}

export default App;
