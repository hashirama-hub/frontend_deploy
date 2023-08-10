import Button from '@atlaskit/button';
import './App.css';
import TaskToDo from './components/TaskToDo';
import Textfield from "@atlaskit/textfield"
import { useState } from 'react';
import { V4Options, v4 } from 'uuid';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [texinput, setTextinput] = useState("");

  const onTextInputChange = (e) => {
    setTextinput(e.target.value);

  };
  const onAddbtnClick = (e) => {
    setToDoList([ {id: v4(), name: texinput },...todoList
    ]);
    setTextinput('')


  };


  return (
    <>
      <h3> Task List Linh To Do</h3>
      <Textfield 
      name='add-todo' 
      placeholder='Add Task Here' 
      elemAfterInput={<Button isDisabled={!texinput} appearance='primary' onClick={onAddbtnClick}>ADD</Button>}
      value={texinput}
      onChange={onTextInputChange}
      
      >
        
    

      </Textfield>
      <TaskToDo todoList={todoList}/>
    </>
    
  )

  
}

export default App;
