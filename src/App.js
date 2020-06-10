import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './components/photo'
import { API_KEY } from './secrets'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export default function App() {


  // "https://www.nasa.gov/multimedia/imagegallery/iotd.html?api_key=yeX2aVMl4CEHmu5DxqeL7BNBJQe5cPcGaJYj21cN"

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=yeX2aVMl4CEHmu5DxqeL7BNBJQe5cPcGaJYj21cN")
    .then(res => {
      console.log(res)
      return `${res.data.date}`
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
      <Photo />
    </div>
  );
}
