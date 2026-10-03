import React, { useState } from 'react'
import Header from './components/Header'
import "./App.css";
import Search from './components/Search';
import Filter from './components/Filter';
import Todo from './components/Todo';
const App = () => {
  const[todos,setTodos]=useState([])
  const[filter,setFilter]=useState("All")
  const addTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
  const updateTodoStatus=(todoStatus,todoId)=>{
    setTodos(todos.map((todo)=>todo.id===todoId?{...todo,status:todoStatus}:todo))
  }
  const filteredtodos = todos.filter((todo)=>{
    if(filter==="All"){
      return true;}
      return todo.status===filter;
    })
    const deleteTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.filter((todo) => todo.id !== id)
  );
};
    
    const editTodo = (todoId, updatedName, updatedDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              name: updatedName,
              describtion: updatedDescription
            }
          : todo
      )
    )
  }
  return (
    <div>
      <Header/>
      <Search addTodo={addTodo}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <div className='todo-list'>
        {
        filteredtodos.map((todo)=>(
          <Todo key={todo.id} 
          todo={todo}
          updateTodoStatus={updateTodoStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
