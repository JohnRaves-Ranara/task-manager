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
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-dots-vertical"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <TaskAction
              editDialogTrigger={<DropdownMenuItem>Edit</DropdownMenuItem>}
              actionType="edit"
              title={title}
              description={description}
            ></TaskAction>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
