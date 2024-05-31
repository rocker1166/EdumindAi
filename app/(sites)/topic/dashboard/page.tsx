"use client"
import React from 'react'
import { BentoGridThirdDemo } from '@/app/components/Dashbooardcontent';
import { useContext } from 'react';
import InputContext from '@/app/context/InputContext';

 function Dashboard() {
  const { input } = useContext(InputContext);
  console.log({input})
  return (
    <main className=''>
 <div className=''>
        <BentoGridThirdDemo />
       
      </div>
      <p>The input value is: {input}</p>
    </main>
  )
}

export default Dashboard