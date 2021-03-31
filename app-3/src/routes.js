import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';

export default (
    <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route path='/pokemon/:name' component={PokemonInfo} />
    </Switch>
)