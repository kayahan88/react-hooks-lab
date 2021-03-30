//AddTodo.js will be responsible for rendering the necessary input and button to make this interface work.
import React, {useState} from 'react';
import List from './List';

const AddTodo = (props) => {

    const [userInput, setUserInput] = useState('');

    function addItem(e){
        props.addTodo(userInput)
        setUserInput('')
    }

    return (
        <div>
            <input 
            placeholder='Add a todo!'
            onChange={e => setUserInput(e.target.value)}
            value={userInput}
            />
            <button onClick={addItem}>Submit</button>
        </div>
    )
}

export default AddTodo;