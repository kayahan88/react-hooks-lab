import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PokemonInfo = (props) => {

    console.log('these are the props', props)
    const [pokemon, setPokemon] = useState({});
    const {name} = props.match.params;

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(res => {
            setPokemon(res.data)
            console.log('res data', res.data)
          });
        return () => {
          console.log('goodbye')
        }
      }, [name])

        // const mappedMoves = pokemon.moves.move.map((move) => {
        //     return (
        //         <div>
        //             <h3>Here are my moves!</h3>
        //             <ul>
        //                 <li>{move}</li>
        //             </ul>
        //         </div>
        //     )
        // })


    return (
        <div>
            {/* {pokemon.moves.move} */}
            <h1>{pokemon.name}</h1>

            <img 
            className='pokemon-img' 
            src={pokemon.sprites?.front_default} 
            alt={pokemon.name}
            />
            
            <h2>My weight: {pokemon.weight}</h2>
            <h2>My height: {pokemon.height}</h2>

            {/* {mappedMoves} */}

            <Link to='/'><button>Back</button></Link>
        </div>
    )
}

export default PokemonInfo;