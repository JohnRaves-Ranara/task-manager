"use client"
import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// @refresh reset

export type Task = {
  title: string
  description: string
  isChecked: boolean
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const toggleCheckBox = (taskIndex:number, groupType:string) => {
    if(groupType==='tasks'){
      const taskToggled:Task = tasks[taskIndex]
      taskToggled.isChecked = true
      //remove task from tasks
      setTasks(tasks.filter((task, index) => index !== taskIndex))
      //add task to completed tasks
      setCompletedTasks([...completedTasks, taskToggled])
    }else{
      const taskToggled:Task = completedTasks[taskIndex]
      taskToggled.isChecked = false
      //remove task from completed tasks
      setCompletedTasks(completedTasks.filter((completedTask, index) => index !== taskIndex))
      //add task to tasks
      setTasks([...tasks, taskToggled])
    }
  }

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header addTask={addTask}/>
      <Dashboard tasks={tasks} completedTasks={completedTasks} toggleCheckBox={toggleCheckBox}/>
    </div>
  );
}
