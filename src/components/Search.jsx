import React, { useState } from 'react'

const Search = ({addTodo}) => {
  const [todoName,settodoName]= useState('');
    const [describtion,setDescribtion]=useState('');
    const handleAdd=()=>{
      const newTodo={
        id:Date.now(),
        name:todoName,
        describtion:describtion,
        status:"Not Completed"
      }
      addTodo(newTodo)
      settodoName('')
      setDescribtion('')
    }
  return (
    
    <div className='main-container'>
        <h3>Add New Todo</h3>
        <div className='input'>
           <div>
             <label>Todo Name</label><br></br>
             <input type="text" value={todoName} onChange={(e)=>settodoName(e.target.value)} placeholder='Enter todo name'></input>
           </div>
           <div>
            <label>Describtion</label><br></br>
            <input type = "text" placeholder='Enter describtion' value={describtion} onChange={(e)=>setDescribtion(e.target.value)}></input>
           </div>
           <button onClick={handleAdd}>Add Tasks</button>

        </div>
      
    </div>
  )
}

export default Search
