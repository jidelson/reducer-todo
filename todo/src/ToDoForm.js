import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../src/reducers/reducer';

function ToDoForm (props) {
    const {dispatch} = props
    const [text, setText] = useState("")

    const handleChanges = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addNewItem(text)
        setText("")
    }

    const addNewItem = text => {
        const newItem = {
            item: text,
            completed: false,
            id: new Date()
        }
        dispatch({ type: "ADD_TODO", payload: newItem})
    }

    return(
        <div>
            <h1>My ToDo List</h1>
            <form onSubmit={handleSubmit}>
                <label> Task:
                <input 
                    type='text'
                    name='task'
                    value={text}
                    onChange={handleChanges}
                />
                </label>
                <button>
                    Submit
                </button>

                <button onClick={() => dispatch({ type: 'CLEAR_TODO'})}>
                    Clear
                </button>
            </form>
        </div>
    )
}

export default ToDoForm;