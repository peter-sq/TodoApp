import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

const App = () => {
  //states
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [FilteredTodo, setFilteredTodo] = useState([]);
    //function


    //useEffect

    useEffect(() => {
      getLocalTodos();
    }, []);

    //run once
    useEffect(() => {
      filterHandler();
    }, [todos, status])


    const filterHandler = () =>{
      switch(status){
        case 'completed':
           setFilteredTodo(todos.filter(todo => todo.completed === true))
           break;
           case 'uncompleted':
            setFilteredTodo(todos.filter(todo => todo.completed === false))
            break;
            default:
              setFilteredTodo(todos);
              break;
      }
    }
    //save to local
    const saveLocalTodos = ()  => {
   
        localStorage.setItem('todos',  JSON.stringify([]));
    
    };
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') ===null){
        localStorage.setItem('todos',  JSON.stringify([]));
      }
      else{
       let todolocal =  JSON.parse(localStorage.getItem('todos'))
       setTodos(todolocal);
      }
    };

    
    return (
        <div className = "App">
        <header>
        <h1>Peter's Todo List</h1>
      </header>
      <Form inputText = {inputText}
       todos={todos}
        setTodos={setTodos}
         setInputText = {setInputText}
         setStatus = {setStatus} 
         />
      <TodoList
       setTodos={setTodos} 
      todos= {todos} 
      FilteredTodo = {FilteredTodo}
      />

      </div>
       
  
    );
    }

export default App;

