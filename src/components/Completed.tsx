import TaskCard from "./TaskCard";
import { useTasksContext } from "@/contexts/tasks-context";

const Completed = () => {


  const {tasks, setTasks} = useTasksContext()
  const completedTasks = tasks.filter((task)=> task.isChecked===true)
  
  return (
    <div className="space-y-4 w-full">
      <h1>Completed:</h1>
      <div className="flex gap-3 p-4 bg-green-200 min-h-[100px] rounded-lg flex-wrap">
        {tasks.length === 0 ? (
          <div className="flex justify-center items-center w-full">No completed tasks yet.</div>
        ) : (
          completedTasks.map((completedTask) => (
            <TaskCard
              id={completedTask.id}
              key={completedTask.id}
              title={completedTask.title}
              description={completedTask.description}
              isChecked={completedTask.isChecked}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Completed;
