import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY, BASE_URL } from './secrets'
import axios from 'axios'
import Photo from './components/photo.js'
import BodyStyles from './components/bodyStyle.js'
import PStyles from './components/pStyle.js'

function App() {


  const [photo, setPhoto] = useState([])
  const [timer, setTimer] = useState(10)
  


useEffect(() => {
  const parentDiv = document.createElement('div')
  parentDiv.classList.add('clockDiv')
  
  const daysChild = document.createElement('div')
  daysChild.classList.add('days')
  daysChild.textContent = 'Hello'
  
  const hoursChild = document.createElement('div')
  hoursChild.classList.add('hours')
  
  const minutesChild = document.createElement('div')
  minutesChild.classList.add('minutes')
  
  const secondsChild = document.createElement('div')
  secondsChild.classList.add('seconds')
  
  parentDiv.appendChild(daysChild)
  parentDiv.appendChild(hoursChild)
  parentDiv.appendChild(minutesChild)
  parentDiv.appendChild(secondsChild)
}, []);

useEffect(() => {
    const fetchPhoto = () => {

        axios.get(`${BASE_URL}${API_KEY}`)
        .then(res =>{
            setPhoto(res.data)
        })
        .catch(err => {
            console.log('This is error', err)
        })
    };
    fetchPhoto();
}, []);


useEffect(() => {
    setTimeout(() => {
      if (timer > 1){
        setTimer(timer - 1)
      } else {
        setTimer(timer + 9)
      }
    }, 1000)
}, [timer]);


  return (
    <BodyStyles>

      <PStyles>
        This is NASA's photo of the day!        
      </PStyles>

      
      <Photo photo={photo}/>

      <div>
            <PStyles>{photo.title}</PStyles>
            <PStyles>{photo.date}</PStyles>
      </div>

      <div>
            <PStyles>{photo.explanation}</PStyles>
      </div>

      <h1>
        {timer}  
      </h1>
    </BodyStyles>
  );
}
export default App

