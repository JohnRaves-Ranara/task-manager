import { Task } from "@/app/page";
import TaskCard from "./TaskCard";


type TaskListProps = {
  tasks: Task[];
  toggleCheckBox: (taskIndex:number, groupType:string) => void;
};

const TaskList = ({ tasks, toggleCheckBox }: TaskListProps) => {
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
                index={index}
                title={task.title}
                description={task.description}
                isChecked={task.isChecked}
                toggleCheckBox={toggleCheckBox}
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
