"use client"
import React from 'react'
import { useQuery } from "convex/react";
import { api } from '@/convex/_generated/api';
function Notes() {

  
    const tasks = useQuery(api.tasks.get);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
       
      </main>
    );
  }

export default Notes