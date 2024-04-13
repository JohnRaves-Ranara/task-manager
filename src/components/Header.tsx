import TaskAction from "./TaskAction";
import { Task } from "@/app/page";
import { useTasksContext } from "@/contexts/tasks-context";
import { useContext } from "react";
import { useTaskActionDialogContext } from "@/contexts/taskaction-dialog-context";
import { Button } from "@/components/ui/button";
import { opendir } from "fs";

export default function Header() {
  const { openDialog, setOpenDialog } = useTaskActionDialogContext();

  return (
    <div className="flex justify-between py-8 px-12 items-center">
      <h1 className="font-bold text-3xl">✍️ My Tasks</h1>
      <TaskAction actionType='add'></TaskAction>
    </div>
  );
}
