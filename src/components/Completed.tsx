import { Task } from "@/app/page";
import TaskCard from "./TaskCard";

type CompletedProps = {
  completedTasks: Task[];
  toggleCheckBox: (taskIndex:number, groupType:string) => void;
};

const Completed = ({ completedTasks, toggleCheckBox }: CompletedProps) => {
  return (
    <div className="space-y-4 w-full">
      <h1>Completed:</h1>
      <div className="flex gap-3 p-4 bg-green-200 min-h-[100px] rounded-lg flex-wrap">
        {completedTasks.length === 0 ? (
          <div className="flex justify-center items-center w-full">No completed tasks yet.</div>
        ) : (
          completedTasks.map((task, index) => (
            <TaskCard
              index={index}
              title={task.title}
              description={task.description}
              isChecked={task.isChecked}
              toggleCheckBox={toggleCheckBox}
              groupType="completedTasks"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Completed;
