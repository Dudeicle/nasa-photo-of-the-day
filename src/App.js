import React, { useState } from "react";
import "./App.css";
import Photo from './components/photo'
import { API_KEY } from './secrets'


const BASE_URL = ''


export default function App() {

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


