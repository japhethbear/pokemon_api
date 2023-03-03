import './App.css';
import Pokemon from './components/Pokemon'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
  
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    //       .then(response => response.json())
    //       .then(response => setPokemon(response.results))
    //       .catch(err => console.log(err));
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response=> {
      setPokemon(response.data.results)})
    .catch(err => console.log(err))
  }, []);



  return (
    <div className="App">
      {pokemon.map((pokemons, idx) => (
        <div key={idx}>
          <h3>{pokemons.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
