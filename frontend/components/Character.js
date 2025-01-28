import React, {useState} from 'react'

function Character({character,planets}) { // ❗ Add the props
  const [showHomeworld, setShowHomeworld] =useState(false);
  
  console.log("Character's Homeworld URL:", character.homeworld);
  console.log("Planets Array:", planets);

  const homeworldName = planets.find(planet => planet.id === character.homeworld)?.name || 'Unknown';
  
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div 
    className="character-card" 
    style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }} 
    onClick={toggleHomeworld} // Toggle the planet display on click
  >
    <h3>{character.name}</h3>
    <p>Gender: {character.gender}</p>
    <p>Birth Year: {character.birth_year}</p>
    {showHomeworld && <p>Homeworld: {homeworldName}</p>}  {/* Conditionally render homeworld name */}
  </div>
  )
} 

export default Character
