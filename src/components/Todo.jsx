import React, { useState } from 'react'

const Todo = ({todo,updateTodoStatus,editTodo,deleteTodo}) => {
  const [isEdit,setIsEdit] = useState(false);
   const [todoName, setTodoName] = useState(todo.name)
  const [description, setDescription] = useState(todo.describtion)

    const handleUpdate = () => {

    editTodo(
      todo.id,
      todoName,
      description
    )

    setIsEdit(false)
  }
  
  return (
    <>
    <div className='todo-card'>
      <div className='todo-container'>
        {
          isEdit ? (
            <>
            <div className='todo-innercontainer1edit'>
                <div className='todo-innercontainer1' >
                  <h3>Name:</h3>
                  <span className={todo.status==="Completed"?"completed":"not-completed"}>{todo.status==="Completed"? "✓ Completed":"✗ Not Completed"}
                  </span>
                 </div>
                 <div className='todo-innercontainer1input'>
                    <input type="text" value={todoName} onChange={(e)=>setTodoName(e.target.value)}></input>
                 </div>
             </div>
        <p>Describtion:</p>
         <input type = "text" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            </>
          ):(
            <>
            <div className='todo-innercontainer1'>
          <h3>Name:{todo.name}</h3>
          <span className={todo.status==="Completed"?"completed":"not-completed"}>{todo.status==="Completed"? "✓ Completed":"✗ Not Completed"}
         </span>
          </div>
          <p>Describtion:{todo.describtion}</p>
            </>
            
          )
        }
        <div className='todo-innercontainer2'>
          <select value={todo.status} onChange={(e)=>(updateTodoStatus(e.target.value,todo.id))}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          {
            isEdit ?(
              <button onClick={handleUpdate} className='edit-Button'>Update</button>

            ):(
              <button className="edit-btn" onClick={()=>setIsEdit(true)}>✎ Edit</button>

            )
            
          }
          
           <button className="delete-btn" onClick={()=>deleteTodo(todo.id)}>🗑 Delete</button>
        </div>
      </div>    
    </div>
    </>
        
    
  )
}

export default Todo
