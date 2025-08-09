
//  import React from 'react';
import type  { TaskItemProps } from '../../types';

export default function TaskItem({
  task,
  onStatusChange,
  onPriorityChange,
  onDelete,
} : TaskItemProps ) {
    return (

    <div>

   <h3> {task.title} </h3>
    <p>{task.description}</p>
     <p>Status:{task.status}</p>
     <p>Priority:{task.priority}</p>
      <p>Due Date : {task.dueDate}</p>

      <label>Status: 
        
        <select value={task.status} onChange= {(e)=>
  onStatusChange(task.id,e.target.value as 'pending'|'in-progress'| 'completed')}>
  
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
  </select>
  </label>

  <br/>
   <label> Priority : <select value = {task.priority} onChange = {(e)=> 
    onPriorityChange (task.id , e.target.value as 'low'|'medium'|'high')}>

    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
</select>
</label>


  <button onClick={()=> onDelete(task.id)}>Delete</button>
  
</div>
);
}
  
