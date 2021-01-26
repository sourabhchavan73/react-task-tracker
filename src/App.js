import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showFrom, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchtasks();
      setTasks(tasksFromServer)
    }

    getTasks();

  }, [])

  const fetchtasks = async () => {
    var res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    
    return data
  }

  // for reminder
  const fetchtask = async (id) => {
    var res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    
    return data
  }


  
  
  // delete task
  const deletHandler = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE', 
      headers: { 
          'Content-type': 'application/json'
      } 
    })

    const deletSingleTask = tasks.filter(task => task.id !== id)
    setTasks(deletSingleTask);
  };

  // toggle reminder on double click
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchtask(id);
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT', 
      headers: { 
          'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask) 
    });  

    const data = await res.json(); 

  
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !data.reminder} : task)
    )
  }

  // Add task to UI
  const addTaskController = async (task) => {
    const res = await fetch (`http://localhost:5000/tasks`, {
      method: 'POST', 
      headers: { 
          'Content-type': 'application/json'
      },
      body: JSON.stringify(task) 
    })

    const data = await res.json();
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTasks = { id, ...task }
    // console.log(newTasks);
    // setTasks([...tasks, newTasks])
  }

  const showFormController = () => {
    setShowForm(!showFrom);
  }
 
  return (
    <div className="container">
      <Header onAdd = {showFormController} showBtn = {showFrom} taskLength = {tasks.length} />
      {showFrom && <AddTask onAdd = {addTaskController} />}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deletHandler} onDoubleClick={toggleReminder} /> :
        'no task in pending'  
      }
    </div>
  );
}

export default App;
