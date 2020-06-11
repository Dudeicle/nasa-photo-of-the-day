import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './components/photo.js'
import { API_KEY, BASE_URL } from './secrets'
import axios from 'axios'

function App() {

const [photo, setPhoto] = useState([])

useEffect(() => {
    const fetchPhoto = () => {

        axios.get(`${BASE_URL}${API_KEY}`)
        .then(res =>{
            setPhoto(res.data)
            console.log(res.data);
        })
        .catch(err => {
            console.log('This is error', err)
        })
    };
    fetchPhoto();
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!        
      </p>
      
      <Photo photo={photo}/>
      <div>
            <p>{photo.date}</p>
      </div>
      <div>
            <p>{photo.explanation}</p>
      </div>
    </div>
  );
}

export default App