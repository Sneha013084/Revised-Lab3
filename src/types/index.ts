
// taskstatus
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' |'high'
 

//Task interface - task object

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus; // current status of the task
  priority: TaskPriority;
  dueDate: string;
}

// props accepted by taskitem component

 export interface TaskListProps {
  tasks: Task[]; // array of task to display
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; // call back when task status selected
  onPriorityChange: (taskId: string, newPriority: TaskPriority) => void
  onDelete: (taskId: string) => void; 
}

//props accepted by taskItem

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onPriorityChange: (taskId: string, newPriority: TaskPriority) => void;
  onDelete: (taskId: string) => void;
}

//taskFilter
export interface TaskFilterProps {
  statusFilter: TaskStatus | '';
  priorityFilter: TaskPriority | '';
  onStatusFilterChange: (status: TaskStatus| '') => void;
  onPriorityFilterChange: (priority: TaskPriority | '') => void;
}