//List.js is responsible for rendering a mapped list of todos which will be passed as props from App.js.
import React from 'react';
import Todo from './Todo';

const List = (props) => {

    return (
        <div>
            {props.list.map((item, index) => {
                return <Todo item={item} key={index} />
            })}
        </div>
    )

    // const mappedTodos = props.list.map((item, index) => {
    //     return (
    //     <Todo item={item} key={index} />
    //     )
    // })
}

export default List;