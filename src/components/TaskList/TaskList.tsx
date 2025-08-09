
import { useState } from 'react';

import type{ TaskListProps , TaskStatus,TaskPriority} from '../../types';
import TaskItem from '../TaskItem/TaskItem';
import TaskFilter from '../TaskFilter/TaskFilter';


export default function TaskList(props:TaskListProps){

const [statusFilter, setStatusFilter]= useState <TaskStatus| ''> ('');
const [priorityFilter, setPriorityFilter] = useState <TaskPriority | ''> ('');

const filteredTasks = props.tasks.filter(task => {

  return ( 
   (statusFilter === ''|| task.status===statusFilter ) &&
    (priorityFilter === ''|| task.priority===priorityFilter)
  );
});
    
const handleStatusFilterChange = (status: TaskStatus  |'') => {
    setStatusFilter(status);
  };

  const handlePriorityFilterChange = (priority: TaskPriority| '') => {
    setPriorityFilter(priority);
  };

  return (
    <div>
      <TaskFilter
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onStatusFilterChange={handleStatusFilterChange}
        onPriorityFilterChange={handlePriorityFilterChange}
      />

      {filteredTasks.length === 0 ? (
        <p>No tasks match the selected filters.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={props.onStatusChange}
            onPriorityChange={props.onPriorityChange}
            onDelete={props.onDelete}
          />
        ))
      )}
    </div>
  );
}
