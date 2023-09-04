import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initalURL = "https://pokeapi.co/api/v2/pokemon";
//https://pokeapi.co/api/v2/pokemon

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンのデータを取得
      let res = await getAllPokemon(initalURL);
      console.log(res);
    }
    fetchPokemonData();
  },[]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
