import React, {useState} from 'react';
import AddTodo from './Components/AddTodo';
import List from './Components/List';
import './App.css';

function App() {

    const [todos, setTodos] = useState(['Drink water', 'Give my sister a haircut']);
    // const [userTodo, setUserTodo] = useState('');

      function addTodo(item){
        const newList = [...todos, item]
        setTodos(newList)
      }

      return (
        <div className="App">
          <AddTodo addTodo={addTodo}/>
          <List list={todos}/>
        </div>
      );
};

export default App;

