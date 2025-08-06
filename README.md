## Resources used : Lessons, Bryan's class recordings

## Task management APP

This project is a simple task management application built using React and TypeScript. It allows users to view, update, and delete tasks. Each task has the following attributes:

                      Title

                      Description

                      Status (pending, in-progress, or completed)

                      Priority (low, medium, or high)

                      Due Date


## index.tsx

Added tpescript types for - Status => Pending, inprogress and completed

Interface types for tasks

Props for tasklist component and taskfilter component.

## Taskfilter component

## Defined Component Props Using TypeScript Interface

I defined a TaskFilterProps interface that specifies the expected props:

statusFilter: current selected task status filter.

priorityFilter: current selected task priority filter.

onStatusFilterChange: callback function to update the status filter.

onPriorityFilterChange: callback function to update the priority filter.

## I created two drop downs for status and priority

Filter tasks by status with options:

          All (no filter)

          Pending

          In Progress

          Completed

Filter tasks by priority with options:

        All (no filter)

        Low

        Medium

        High

## Handled User Selection Changes

Each dropdown has an onChange event handler that - Extracts the selected value from the event.

Calls the corresponding callback prop (onStatusFilterChange or onPriorityFilterChange) with the new selected value, properly cast to the expected string literal types.

## Added an “All” Option

To allow users to clear filters, an "All" option is included in both dropdowns, represented by a blank space (" ").


## tasklist.tsx

The TaskList component is responsible for displaying a list of tasks.
It receives task data and callback functions via props, and renders each task using the TaskItem component.

Receives a list of tasks via the tasks prop.

Maps through the task list and renders each task using the TaskItem component.

Passes callback functions (onStatusChange, onPriorityChange, onDelete) to each TaskItem so user interactions can trigger updates.


Handles empty list gracefully by showing a "No tasks found" message if the task list is empty.

Created a container foir each task and key helped to keep track the items.

Displays task details like title, description, status, priority, and due date.
filteredTasks: the list of tasks filtered based on user selection.

handleStatusChange: function to update a task's status.

handlePriorityChange: function to update a task's priority.

handleDelete: function to remove a task.

Added a dropdown to change the status of the task. It triggers the onStatusChange function passed via props.

Added a button to delete the task. It calls onDelete with the task’s ID.

## App.tsx : 

Handles the application state and renders the TaskList component. I added 3 tasks, handler for status change when the user changes the events and a handler for delete when the user wants to delete a task.

Added a tsx return block statement, containing a div that shows the entire UI content.Shows task manager at the top and renders all custom taskList component.

tasks={tasks} → the array of task objects 

onStatusChange={handleStatusChange} → a function to update a task's status when changed in the UI.

onDelete={handleDelete} → a function to delete a task from the list.



