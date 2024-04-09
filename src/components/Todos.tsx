import TaskCard from "./TaskCard";

type TodosProps = {
  tasks: any[]
  toggleCheckBox: Function
}

const Todos = ({tasks, toggleCheckBox} : TodosProps) => {
  return (
    <div className="px-12 space-y-4">
      <h1>Todos:</h1>
      <div className="flex gap-3">
        {tasks.map((task, index)=> {
          return (
            <TaskCard index={index} title={task.title} description={task.description} isChecked={task.isChecked} toggleCheckBox={toggleCheckBox}/>
          )
        })}
      </div>
    </div>
  );
};

export default Todos;
