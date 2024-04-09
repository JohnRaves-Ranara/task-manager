"use client"
import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

export type Task = {
  title: string
  description: string
  isChecked: boolean
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "task1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, perferendis.",
      isChecked: false
    },
    {
      title: "task2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, perferendis.",
      isChecked: false
    },
  ])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const toggleCheckBox = (taskIndex:number, groupType:string) => {
    if(groupType==='tasks'){
      const taskToggled:Task = tasks[taskIndex]
      taskToggled.isChecked = !taskToggled.isChecked
      //remove task from tasks
      setTasks(tasks.filter((task, index) => index !== taskIndex))
      //add task to completed tasks
      setCompletedTasks([...completedTasks, taskToggled])
    }else{
      const taskToggled:Task = completedTasks[taskIndex]
      taskToggled.isChecked = !taskToggled.isChecked
      //remove task from completed tasks
      setCompletedTasks(completedTasks.filter((completedTask, index) => index !== taskIndex))
      //add task to tasks
      setTasks([...tasks, taskToggled])
    }
  }

  const addTask = (title:string, description:string, isChecked: boolean) => {
    let newTask = {
      title,
      description,
      isChecked
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header addTask={addTask}/>
      <Dashboard tasks={tasks} completedTasks={completedTasks} toggleCheckBox={toggleCheckBox}/>
    </div>
  );
}
