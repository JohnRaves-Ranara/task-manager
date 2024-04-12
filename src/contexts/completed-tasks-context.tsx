"use client";
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Task } from "@/app/page";

type CompletedTasksContextProviderProps = {
  children: React.ReactNode;
};

type CompletedTasksContext = {
  completedTasks: Task[];
  setCompletedTasks: Dispatch<SetStateAction<Task[]>>;
};

export const CompletedTasksContext = createContext<CompletedTasksContext | null>(
  null
);

export default function CompletedTasksContextProvider({
  children,
}: CompletedTasksContextProviderProps) {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  return (
    <CompletedTasksContext.Provider
      value={{completedTasks, setCompletedTasks}}
    >
      {children}
    </CompletedTasksContext.Provider>
  );
}

export function useCompletedTasksContext() {
  const context = useContext(CompletedTasksContext);
  if (!context) {
    throw new Error(
      "useCompletedTasksContext must be used within a CompletedTasksContext Provider"
    );
  }
  return context;
}
