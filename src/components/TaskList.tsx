import { Task } from "@/app/page";
import TaskCard from "./TaskCard";
import { useTasksContext } from "@/contexts/tasks-context";

const TaskList = () => {

  const {tasks, setTasks} = useTasksContext()

  return (
    <div className="space-y-4 w-full">
      <h1>Tasks:</h1>
      <div className="flex gap-3 p-4 bg-blue-200 min-h-[100px] rounded-lg flex-wrap">
        {tasks.length === 0 ? (
          <div className="flex justify-center items-center w-full">No tasks.</div>
        ) : (
          tasks.map((task, index) => {
            return (
              <TaskCard
                key={index}
                index={index}
                title={task.title}
                description={task.description}
                isChecked={task.isChecked}
                groupType="tasks"
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskList;
