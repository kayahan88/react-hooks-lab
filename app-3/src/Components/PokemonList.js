import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        axios
          .get('https://pokeapi.co/api/v2/pokemon')
          .then(res => {
            setPokemon(res.data.results)
            console.log('this is the res', res.data)
          });
        return () => {
          console.log('goodbye App.js')
        }
      }, [])
    
    
    return (
    
      <div>
        {pokemon.map((pokemon) => {
            return (
              <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
                <h1>{pokemon.name}</h1>
              </Link>
            )
            })}
      </div>
    
    );

}
export default PokemonList;