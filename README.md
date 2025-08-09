## Task Management Application

This is a simple React-based Task Management application built with TypeScript. It allows users to manage tasks with features such as:

        Viewing a list of tasks

        Filtering tasks by status and priority

        Updating task status

        Deleting tasks

## TaskFilter:

Takes in 4 props via TaskFilterProps:

        statusFilter: current selected status filter ("", "pending", "in-progress", or "completed")

        priorityFilter: current selected priority filter ("", "low", "medium", "high")

        onStatusFilterChange: function to call when status changes

        onPriorityFilterChange: function to call when priority changes

##  Two dropdown inputs

        One for Status

        One for Priority

## TaskItem

      Displays the task details: title, description, status, priority, due date.

      Provides dropdowns for updating status and priority, with proper type casting.

      Includes a Delete button that triggers a callback to remove the task.


## TaskList

      Keeps track of the currently selected filters for task status and priority.

      Filters the incoming tasks prop based on those filters.

      Passes the filter state and handler functions down to the TaskFilter component.

      Renders either a no tasks match message or a list of TaskItems with proper event handlers for status, priority changes, and deletions.


        

