import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input';
import Task from './Components/Task';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container" style={{ width: "800px"}}>
      <h1>Todo List</h1>
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
      
    </div>
  );
}

export default App;