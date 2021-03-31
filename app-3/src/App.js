import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import routes from './routes';
import './App.css';

function App() {

  return(
    <div className="App">
     {routes}
    </div>

  )
}

export default App;
