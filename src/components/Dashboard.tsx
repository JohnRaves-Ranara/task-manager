import React, { useState } from "react";
import Completed from "./Completed";
import TaskCard from "./TaskCard";
import TaskList from "./TaskList";
import Header from "./Header";
import { Task } from "@/app/page";
import { useCompletedTasksContext } from "@/contexts/completed-tasks-context";

const Dashboard = () => {
  return (
      <div className="flex flex-col gap-6 items-start justify-center px-12 pt-6 pb-12">
        <TaskList/>
        <Completed/>
      </div>
  );
};

export default Dashboard;
