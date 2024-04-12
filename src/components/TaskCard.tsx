import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useTasksContext } from "@/contexts/tasks-context";
import { useCompletedTasksContext } from "@/contexts/completed-tasks-context";
import { Task } from "@/app/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TaskAction from "./TaskAction";

type TaskCardProps = {
  index: number;
  title: string;
  description: string;
  isChecked: boolean;
  groupType: string;
};

const TaskCard = ({
  index,
  title,
  description,
  isChecked,
  groupType,
}: TaskCardProps) => {
  const { tasks, setTasks } = useTasksContext();
  const { completedTasks, setCompletedTasks } = useCompletedTasksContext();

  const toggleCheckBox = (taskIndex: number, groupType: string) => {
    if (groupType === "tasks") {
      const taskToggled: Task = tasks[taskIndex];
      taskToggled.isChecked = true;
      //remove task from tasks
      setTasks(tasks.filter((task, index) => index !== taskIndex));
      //add task to completed tasks
      setCompletedTasks([...completedTasks, taskToggled]);
    } else {
      const taskToggled: Task = completedTasks[taskIndex];
      taskToggled.isChecked = false;
      //remove task from completed tasks
      setCompletedTasks(
        completedTasks.filter((completedTask, index) => index !== taskIndex)
      );
      //add task to tasks
      setTasks([...tasks, taskToggled]);
    }
  };

  return (
    <Card className="max-w-[330px] bg-red-200">
      <CardHeader className="flex flex-row items-start gap-4">
        <Checkbox
          checked={isChecked}
          onClick={() => toggleCheckBox(index, groupType)}
          className="size-6 mt-2"
        ></Checkbox>
        <div className="space-y-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
          <TaskAction editDialogTrigger={<DropdownMenuItem>Edit</DropdownMenuItem>} actionType="edit" title={title} description={description}></TaskAction>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
