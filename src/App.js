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

// useEffect(() => {
//     setTimeout(() => {
//       setTimer(timer - 1)
//     }, 1000)
// }, [timer]);



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

      
      {/* <h1>
        {timer}  
      </h1> */}
    </BodyStyles>
  );
}
export default App
