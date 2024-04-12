"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Task } from "@/app/page";
import { useTasksContext } from "@/contexts/tasksContext";

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be atleast 5 characters.",
    })
    .max(50),
  description: z
    .string()
    .max(200),
});

const AddTask = () => {

  //CONTEXT
  const {tasks, setTasks} = useTasksContext()
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const [openDialog, setOpenDialog] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "hahahadshahdahsd",
      description: "curry",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    addTask({...values, isChecked:false})
    form.reset()
    setOpenDialog(false)
  }

  return (
    
    <div>
      <Dialog open= {openDialog} onOpenChange={() => {
        setOpenDialog(!openDialog)
      }} >
        <DialogTrigger asChild>
          <Button className="h-16 w-36 text-md rounded-xl">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Task</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type task description here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Add Task
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTask;
