"use client";
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Task } from "@/app/page";

type TaskActionContextProviderProps = {
    children: React.ReactNode
}

type TaskActionContext = {
    openDialog: boolean
    setOpenDialog: Dispatch<SetStateAction<boolean>>
}

export const TaskActionContext = createContext<TaskActionContext | null>(null)

export default function TaskActionDialogContextProvider({children} : TaskActionContextProviderProps){
    const [openDialog, setOpenDialog] = useState(false)
    
    return (
        <TaskActionContext.Provider value={{
            openDialog,
            setOpenDialog
        }}>
            {children}
        </TaskActionContext.Provider>  
    )
    
}

export function useTaskActionDialogContext(){
    const context = useContext(TaskActionContext)
    if(!context){
        throw new Error("useTaskActioNDialogContext must be used within TaskActionDialogProvider")
    }
    return context
}