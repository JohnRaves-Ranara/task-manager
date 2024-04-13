import TaskCard from "./TaskCard";
import { useTasksContext } from "@/contexts/tasks-context";

const TaskList = () => {

  const {tasks, setTasks} = useTasksContext()
  const todoTasks = tasks.filter((task)=>task.isChecked===false)
  
  return (
    <div className="space-y-4 w-full">
      <h1>Tasks:</h1>
      <div className="flex gap-3 p-4 bg-blue-200 min-h-[100px] rounded-lg flex-wrap">
        {todoTasks.length === 0 ? (
          <div className="flex justify-center items-center w-full">No tasks.</div>
        ) : (
          todoTasks.map((todoTask) => {
            return (
              <TaskCard
                id={todoTask.id}
                key={todoTask.id}
                title={todoTask.title}
                description={todoTask.description}
                isChecked={todoTask.isChecked}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskList;
