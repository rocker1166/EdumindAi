"use client"
// Example usage in a Next.js page
// Adjust the path as neeed
import React, { useState } from "react";
import Editor from "@/app/components/Editor";

import { useContext } from 'react';
import InputContext from '@/app/context/InputContext';



const MyPage = () => {
  const [editorData, setEditorData] = useState();
  const { input } = useContext(InputContext);
  console.log({input})
  // Handle changes when the editor content updates
  const handleEditorChange = (newData:any) => {
    setEditorData(newData);
  };



  return (
   
<main className="flex min-h-screen text-lg flex-col items-center justify-between p-4  relative" >

<p>{input}</p>



 <Editor
        data={editorData} // Pass initial content data
        onChange={handleEditorChange} // Callback for content changes
        holder="my-editor" // ID of the HTML element where the editor will be rendered
      />
    

  </main>


  );
};

export default MyPage;

