import AddTask from "./AddTask";
import { Task } from "@/app/page";
import { useTasksContext } from "@/contexts/tasks-context";
import { useContext } from "react";

// export type HeaderProps = {
//   addTask: (newTask: Task) => void
// }

// const addTask = (newTask: Task) => {
//   setTasks([...tasks, newTask])
// }

export default function Header() {
  return (
    <div className="flex justify-between py-8 px-12 items-center">
      <h1 className="font-bold text-3xl">✍️ My Tasks</h1>
      <AddTask/>
    </div>
  );
}
