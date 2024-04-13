import TaskAction from "./TaskAction";

export default function Header() {
  return (
    <div className="flex justify-between py-8 px-12 items-center">
      <h1 className="font-bold text-3xl">✍️ My Tasks</h1>
      <TaskAction actionType='add'></TaskAction>
    </div>
  );
}
