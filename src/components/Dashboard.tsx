import React, { useState } from "react";
import Completed from "./Completed";
import TaskCard from "./TaskCard";
import TaskList from "./TaskList";
import Header from "./Header";
import { Task } from "@/app/page";

type DashboardProps = {
  tasks: Task[]
  completedTasks: Task[]
  toggleCheckBox: (taskIndex:number, groupType:string) => void;
};

const Dashboard = ({ tasks, completedTasks, toggleCheckBox}: DashboardProps) => {
  return (
      <div className="flex flex-col gap-6 items-start justify-center px-12 pt-6 pb-12">
        <TaskList tasks={tasks} toggleCheckBox={toggleCheckBox}/>
        <Completed completedTasks={completedTasks} toggleCheckBox={toggleCheckBox} />
      </div>
  );
};

export default Dashboard;
