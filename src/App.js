import React, { useState, useEffect } from "react";
import "./App.css";
// import Photo from './components/photo'
import { API_KEY } from './secrets'
import axios from 'axios'

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
// "https://www.nasa.gov/multimedia/imagegallery/iotd.html?api_key=yeX2aVMl4CEHmu5DxqeL7BNBJQe5cPcGaJYj21cN"

const [nasaPhoto, setNasaPhoto] = useState()

useEffect(() => {
  axios.get(`${BASE_URL}${API_KEY}`)
  .then(res => {
    console.log(`ALL`, res)
    console.log(`DATA`, res.data)
    setNasaPhoto(res.data.date)
  })
  .catch(err => {
    console.log('this is an error message')
  })
}, [])



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!        
      </p>

      <div className="photoContainer">
        {nasaPhoto}
      </div>

    </div>


  );
}

export default App