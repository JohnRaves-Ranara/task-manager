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
import { Task } from "@/app/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TaskActionDialogContextProvider, { useTaskActionDialogContext } from "@/contexts/taskaction-dialog-context";
import TaskAction from "./TaskAction";

type TaskCardProps = {
  id: number
  title: string;
  description: string;
  isChecked: boolean;
};

const TaskCard = ({
  id,
  title,
  description,
  isChecked,
}: TaskCardProps) => {
  const { tasks, setTasks } = useTasksContext();

  const toggleCheckBox = () => {
    //update that task's ischecked to true/false
    const newTasks = tasks.map((task) => {
      if(id===task.id){
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      else{
        return task
      }
    })

    //set tasks new value
    setTasks(newTasks)

  };

  const deleteTask = (id:number) => {
    setTasks(tasks.filter((task) => task.id!==id))
  }

  return (
    <Card className="max-w-[330px] bg-red-200">
      <CardHeader className="flex flex-row items-start gap-4">
        <Checkbox
          checked={isChecked}
          onClick={() => toggleCheckBox()}
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
            <TaskAction actionType="edit" id={id} title={title} description={description}/>
            <button onClick={()=>{deleteTask(id)}} className="hover:cursor-pointer w-full text-start p-2 hover:bg-accent text-sm rounded-sm">Delete</button>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
    </Card>
  );
};

export default TaskCard;
