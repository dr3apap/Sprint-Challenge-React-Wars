import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components"
import axios from "axios"
import StarWarsCard from "./components/StarWarsCard"

const App = () => {
  const [people, setState] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        setState(res.count.results)
        console.log(res.count.results)


      })


      .catch(error => {
        console.log("The data was requested", error)
      })

  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsCard results={people} />
    </div>
  );
}

export default App;
