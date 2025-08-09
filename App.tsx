
import { useState } from 'react'

import TaskList from './components/TaskList/TaskList';
import {type Task, type TaskStatus} from "./types";
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState <Task[]> ([
    {
    id: "1",
    title: "Buy fruits",
    description: "Apple , Orange, Banana",
    status: "pending",
    priority: "high",
    dueDate: "2025- 03-05"
  },
   {
    id: "2",
    title: "Finish household work",
    description: "Cleaning , Mopping, Washing",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025- 04-05"
  },

   {
    id: "3",
    title: "Do exercise",
    description: "Running, push ups, Jumping",
    status: "completed",
    priority: "low",
    dueDate: "2025- 06-22"
  }
  ]);
 const handleStatusChange = (taskId: string, newStatus: TaskStatus) =>{
  setTasks((prev)=>
    prev.map((task) =>
      task.id ===taskId ? {...task,status :newStatus}:task
    )
  );
 };

 const handlePriorityChange = (taskId: string, newPriority: 'low' | 'medium' | 'high') => {
  setTasks(prev =>
    prev.map(task =>
      task.id === taskId ? { ...task, priority: newPriority } : task
    )
  );
};

 const handleDelete =(taskId: string)=> {
 setTasks (prev =>prev.filter((task)=>task.id !==taskId));
};

//JSX

  return (
    <div>
    <h1>Task Manager</h1>
    <TaskList
     tasks={tasks}
     onStatusChange={handleStatusChange}
     onPriorityChange={handlePriorityChange}
    onDelete={handleDelete}
    />
    </div>
  );
}
