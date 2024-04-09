import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Checkbox } from "@/components/ui/checkbox"


type TaskCardProps = {
    index: number;
    title: string;
    description: string;
    isChecked: boolean;
    toggleCheckBox: Function;
    groupType: string;
}

const TaskCard = ({index, title, description, isChecked, toggleCheckBox, groupType} : TaskCardProps) => {
  return (
    <Card className="max-w-[300px] bg-red-200">
      <CardHeader className="flex flex-row items-start gap-4">
        <Checkbox checked={isChecked} onClick={() => toggleCheckBox(index, groupType)} className="size-6 mt-2"></Checkbox>
        <div className="space-y-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TaskCard
