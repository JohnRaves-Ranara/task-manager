import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="font-montserrat flex justify-between py-4 px-4 w-screen items-center bg-primary">
      <h1 className="font-bold text-base text-white">Task Management</h1>
      {/* <button className="lg:hidden box-content p-1 rounded-lg border-black border-3 border-solid bg-blue-200 text-black text-base">Add Task</button> */}
      <Button variant="secondary">Add Task</Button>
      <div className="hidden lg:flex lg:gap-8 lg:items-center">
        <div>
          <h2 className="font-semibold text-lg">Raves</h2>
          <p className="font-regular text-md">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="bg-blue-300 rounded-[50%] size-14"></div>
      </div>
    </div>
  );
}
