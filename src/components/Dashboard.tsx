import React, { useState } from "react";
import Completed from "./Completed";
import TaskCard from "./TaskCard";
import TaskList from "./TaskList";
import Header from "./Header";

type Task = {
  title: string
  description: string
  isChecked: boolean
}

type DashboardProps = {
  tasks: Task[]
  completedTasks: Task[]
  toggleCheckBox: Function
};

const Dashboard = ({ tasks, completedTasks, toggleCheckBox}: DashboardProps) => {
  return (
      <div className="flex flex-col min-h-[88dvh] gap-6 items-start justify-center mx-12">
        <TaskList tasks={tasks} toggleCheckBox={toggleCheckBox}/>
        <Completed completedTasks={completedTasks} toggleCheckBox={toggleCheckBox} />
      </div>
  );
};

export default Dashboard;
