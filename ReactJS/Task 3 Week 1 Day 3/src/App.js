import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks,setTasks] = useState(
        
    [
        {
            id: 1,
            text: 'Practice String Builder Using C#',
            day: 'March 22th at 10:30am',
            reminder: true,
        },
        {
            id: 2,
            text: 'Practice Dictionary Using C#',
            day: 'March 23rd at 10:30am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Practice List Using C#',
            day: 'March 24th at 11:00am',
            reminder: false,
        }
    ]
    
        )
        
    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    //delete Task

    const deleteTask = (id) =>
    {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //reminder
    const toggleReminder = (id) => 
    {
     setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ))
    }

  return (
    <div className="container">
   <Header />
   {showAddTask && <AddTask onAdd = {addTask}/>}
   { tasks.length > 0 ? (
   <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
   ) : ('No Tasks To Show')
}
    </div>
  );
}

export default App;
