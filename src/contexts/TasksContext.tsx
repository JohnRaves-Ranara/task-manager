"use client";
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Task } from "@/app/page";

type TasksContextProviderProps = {
  children: React.ReactNode;
};

type TasksContext = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TasksContext = createContext<TasksContext | null>(null);

export default function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() { 
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error(
      "useTasksContext must be used within a useTasksContext Provider"
    );
  }
  return context;
}
