import React from 'react';

function ToDoList(props) {
    const {dispatch} = props
   return(
       <div>
            {props.todos.map((task, idx) => (
        <div 
            key={task.id}
            onClick={() => dispatch({type: "TOGGLE_TODO", idx})}
            style={{
            textDecoration: task.completed ? 'line-through' : ""
        }}
        >
        {task.item}
        </div>
    ))}
  
   </div>
    )
}

export default ToDoList;