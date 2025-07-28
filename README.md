## Resources used : Lessons, Bryan's class recordings

## Task management APP

This project is a simple task management application built using React and TypeScript. It allows users to view, update, and delete tasks. Each task has the following attributes:

                      Title

                      Description

                      Status (pending, in-progress, or completed)

                      Priority (low, medium, or high)

                      Due Date

## I created:

List of tasks displayed with all their details

Change task status using a dropdown menu

Change task priority (optional improvement)

Delete a task

## index.tsx

Added tpescript types for - Status => Pending, inprogress and completed

Interface types for tasks

Props for tasklist component and taskfilter component.

## tasklist.tsx

Added a map function to loop through each task in that task array. 

Created a container foir each task and key helped to keep track the items.

Displays task details like title, description, status, priority, and due date.

Added a dropdown to change the status of the task. It triggers the onStatusChange function passed via props.

Added a button to delete the task. It calls onDelete with the task’s ID.

## App.tsx : 

Handles the application state and renders the TaskList component. I added 3 tasks, handler for status change when the user changes the events and a handler for delete when the user wants to delete a task.

Added a tsx return block statement, containing a div that shows the entire UI content.Shows task manager at the top and renders all custom taskList component.

tasks={tasks} → the array of task objects 

onStatusChange={handleStatusChange} → a function to update a task's status when changed in the UI.

onDelete={handleDelete} → a function to delete a task from the list.



