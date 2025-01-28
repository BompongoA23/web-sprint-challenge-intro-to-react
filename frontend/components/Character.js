import React, {useState} from 'react'

function Character({character,planets}) { // ❗ Add the props
  const [showHomeworld, setShowHomeworld] =useState(false);
  
  console.log("Character's Homeworld URL:", character.homeworld);
  console.log("Planets Array:", planets);

  const homeworldName = planets.find(planet => planet.url === character.homeworld)?.name || 'Unknown';
  
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  };
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      <h3>{character.name}</h3>
    { /* <p>Gender: {character.gender}</p>*/}
    { /* <p>Birth Year: {character.birth_year}</p>*/}
      <button onClick={toggleHomeworld}>
        {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
      </button>
      {showHomeworld && <p>Homeworld: {homeworldName}</p>}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
} 

export default Character
