import React, { useState } from "react";
import Completed from "./Completed";
import TaskCard from "./TaskCard";
import Todos from "./Todos";
import Header from "./Header";

type DashboardProps = {
  tasks: any[]
  completedTasks: any[]
  toggleCheckBox: Function
};

const Dashboard = ({ tasks, completedTasks, toggleCheckBox}: DashboardProps) => {
  return (
      <div className="flex flex-col h-screen gap-6 items-start justify-center">
        <Todos tasks={tasks} toggleCheckBox={toggleCheckBox}/>
        <Completed />
      </div>
  );
};

export default Dashboard;
