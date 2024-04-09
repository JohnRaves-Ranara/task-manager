import TaskCard from "./TaskCard";

type Task = {
  title: string
  description: string
  isChecked: boolean
}

type TaskListProps = {
  tasks: Task[]
  toggleCheckBox: Function
}

const TaskList = ({tasks, toggleCheckBox} : TaskListProps) => {
  return (
    <div className="space-y-4">
      <h1>Tasks:</h1>
      <div className="flex gap-3">
        {tasks.map((task, index)=> {
          return (
            <TaskCard index={index} title={task.title} description={task.description} isChecked={task.isChecked} toggleCheckBox={toggleCheckBox} groupType="tasks"/>
          )
        })}
      </div>
    </div>
  );
};

export default TaskList;
