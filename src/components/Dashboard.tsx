import Completed from "./Completed";
import TaskList from "./TaskList";

const Dashboard = () => {
  return (
      <div className="flex flex-col gap-6 items-start justify-center px-12 pt-6 pb-12">
        <TaskList/>
        <Completed/>
      </div>
  );
};

export default Dashboard;
