import React, { useReducer } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDo';
import { initialState, reducer } from '../src/reducers/reducer';

function App() {
  const [{todos}, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <ToDoForm dispatch={dispatch} />
      <ToDoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
