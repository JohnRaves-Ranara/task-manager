import AddTask from "./AddTask";
import { Task } from "@/app/page";

export type HeaderProps = {
  addTask: (newTask: Task) => void
}

export default function Header({addTask} : HeaderProps) {
  return (
    <div className="flex justify-between py-8 px-12 items-center">
      <h1 className="font-bold text-3xl">✍️ My Tasks</h1>
      <AddTask addTask={addTask}/>
    </div>
  );
}
