"use client"
import {useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

// @refresh reset

export type Task = {
  id: number
  title: string
  description: string
  isChecked: boolean
}


export default function Home() {

  return (
    <div>
      <Header></Header>
      <Dashboard/>
    </div>
  );

}
