import { Button } from "@/components/ui/button"


type HeaderProps = {
  addTask: Function
}

export default function Header({addTask} : HeaderProps) {
  return (
    <div className="flex justify-between py-8 px-12 items-center">
      <h1 className="font-bold text-3xl">✍️ My Tasks</h1>
      <Button className="h-16 w-36 text-md rounded-xl" onClick={() => addTask("todo 420", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, perferendis.", false)}>Add Task</Button>
    </div>
  );
}
