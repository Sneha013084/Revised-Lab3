
//  import React from "react";
import  type { TaskFilterProps } from "../../types";

export default function TaskFilter({
  statusFilter,
  priorityFilter,
  onStatusFilterChange,
  onPriorityFilterChange,
}: TaskFilterProps) {
  return (
    <div>
      <label>
        Status:
        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusFilterChange(
              e.target.value as "pending" | "in-progress" | "completed"
            )
          }
        >
          <option value=""> All </option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        {" "}
        Priority :
        <select
          value={priorityFilter}
          onChange={(e) =>
            onPriorityFilterChange(e.target.value as "low"| "medium"|"high")
          }
        >
          <option value=""> All </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high"> High</option>
        </select>
      </label>
    </div>
  );
}


