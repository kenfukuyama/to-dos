import './App.css';
import React, {useState} from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    setToDos([...toDos, {task: task, done: false}]);
    setTask("");
    console.log(toDos);
  }

  const handleDelete = (delIdx) => {
    const filtered = toDos.filter((toDo, i) => {return i !== delIdx});
    setToDos(filtered);
  };

  const handleCheck = (idx) => {
    // setToDos([...toDos.slice(0,idx), {...toDos[idx], done: !toDos[idx]} ])
    const updatedToDos = toDos.map((toDo, i) => {
      if (i === idx) {
        toDo.done = !toDo.done;
        // console.log("checked:", toDo);

        // avoid mutatinbg
        // const updatedToDo = {...toDo, done: !toDo.done}
        // return updatedToDo;
      }
      return toDo;
    })
    // console.log(toDos)
    // don't forget this!
    setToDos(updatedToDos);
    
  }

  return (
    <div className="App">
      <form onSubmit={ handleAdd }>
            <h1>Add a task
            </h1>
            <textarea 
                rows="4"
                cols="60"
                placeholder="Enter your task here"
                onChange={e => setTask(e.target.value)}
                value={ task }
            ></textarea>
            <input type="submit" value="Add Task" />
        </form>

        <h3>
            Task: <hr/>
            {toDos.map( (toDo, i) => {
              return (
                <div key={i}>
                  <input onChange={e => {handleCheck(i)}} checked={toDo.done}  type="checkbox"/>
                  {
                    toDo.done ?  <p style={{text: "red"}}>done</p> : <p> {toDo.task}</p>
                  }
                  <p> {toDo.task} : {String(toDo.done)}</p>
                  <button onClick={(e) => handleDelete(i)}>Delete</button>
                </div>
              )}
            )}
        </h3>
    </div>
  );
}

export default App;
