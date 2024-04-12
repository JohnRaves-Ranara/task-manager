"use client"
import { createContext, useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import TasksContextProvider from "@/contexts/tasks-context";
import { useCompletedTasksContext } from "@/contexts/completed-tasks-context";
import { useTasksContext } from "@/contexts/tasks-context";

// @refresh reset

export type Task = {
  title: string
  description: string
  isChecked: boolean
}


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  // const toggleCheckBox = (taskIndex:number, groupType:string) => {
  //   if(groupType==='tasks'){
  //     const taskToggled:Task = tasks[taskIndex]
  //     taskToggled.isChecked = true
  //     //remove task from tasks
  //     setTasks(tasks.filter((task, index) => index !== taskIndex))
  //     //add task to completed tasks
  //     setCompletedTasks([...completedTasks, taskToggled])
  //   }else{
  //     const taskToggled:Task = completedTasks[taskIndex]
  //     taskToggled.isChecked = false
  //     //remove task from completed tasks
  //     setCompletedTasks(completedTasks.filter((completedTask, index) => index !== taskIndex))
  //     //add task to tasks
  //     setTasks([...tasks, taskToggled])
  //   }
  // }


  // const editTask = (taskIndex: number,editedTask: Task) => {
  //   const newTasks = tasks.map((task, index) =>  {
  //     if(index===taskIndex){
  //       return editedTask
  //     }else{
  //       return task
  //     }
  //   })
  //   setTasks(newTasks)
  // }

  return (
    <div>
      <Header></Header>
      <Dashboard/>
    </div>
  );

}
