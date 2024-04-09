import TaskCard from "./TaskCard";

type Task = {
  title: string
  description: string
  isChecked: boolean
}

type CompletedProps = {
  completedTasks:Task[]
  toggleCheckBox: Function
}

const Completed = ({completedTasks, toggleCheckBox} : CompletedProps) => {
  return (
    <div className="space-y-4">
      <h1>Completed:</h1>
      <div className="flex gap-3">
        {completedTasks.map((task, index) => <TaskCard index={index} title={task.title} description={task.description} isChecked={task.isChecked} toggleCheckBox={toggleCheckBox} groupType="completedTasks"/>)}
      </div>
    </div>
  );
};

export default Completed;
