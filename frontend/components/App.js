import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const[characters,setCharacters]=useState([]);
  const[planets,setPlanets]=useState([]);
  const[error,setError]=useState(null);

  useEffect(() => {
    axios
      .get(urlPeople)
      .then((response) => {
        setCharacters(response.data);
        console.log('Fetched Characters:', response.data); 
      })
      .catch((error) => setError(`Error fetching characters: ${error.message}`));
  }, []);

  useEffect(() => {
    axios
      .get(urlPlanets)
      .then((response) => {
        setPlanets(response.data);
        console.log('Fetched Planets:', response.data); 
      })
      .catch((error) => setError(`Error fetching planets: ${error.message}`));
  }, []);

      
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      characters.map((character) => (
          <Character key={character.name} character={character} planets={planets} />
        ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
