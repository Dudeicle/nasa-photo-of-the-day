import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './components/photo.js'
import { API_KEY, BASE_URL } from './secrets'
import axios from 'axios'

function App() {

// useEffect(() => {
//   axios.get(`${BASE_URL}${API_KEY}`)
//   .then(res => {
//     console.log(`ALL`, res)
//     console.log(`DATA`, res.data)
//     setNasaPhoto(res.data.date)
//   })
//   .catch(err => {
//     console.log('this is an error message')
//   })
// }, [])



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

export default App