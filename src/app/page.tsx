"use client"
import { useState } from "react";
import TaskCard from "@/components/TaskCard";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  
  let taskList = [
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
  ]

  let completedTaskList:any[] = []

  const [tasks, setTasks] = useState(taskList)
  const [completedTasks, setCompletedTasks] = useState(completedTaskList)

  const toggleCheckBox = (index:number) => {
    let newTasks = [...tasks]
    newTasks[index].isChecked = !newTasks[index].isChecked
    setTasks(newTasks)
  }

  const addTask = (title:string, description:string, isChecked: boolean) => {
    let newTask = {
      title,
      description,
      isChecked
    }
    let newTasks = [...tasks]
    newTasks.push(newTask)
    setTasks(newTasks)
  }

  return (
    <div>
      <Header addTask={addTask}/>
      <Dashboard tasks={tasks} completedTasks={completedTasks} toggleCheckBox={toggleCheckBox}/>
    </div>
  );
}
