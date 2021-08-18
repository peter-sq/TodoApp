import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, FilteredTodo}) => {
    return (
        
            <div className="todo-container">
            <ul className="todo-list">
            {FilteredTodo.map((todo) => (
                   
                   <Todo 
                   setTodos = {setTodos} 
                   text={todo.text} 
                   key={todo.id} 
                   todos={todos}
                   todo={todo}
                 
                   />

             ))}
              
            </ul>
        </div>
       
    )
}

export default TodoList;