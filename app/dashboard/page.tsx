"use client"
import React from 'react'
import { BentoGridThirdDemo } from '../components/Dashbooardcontent'
import { useSearchParams } from 'next/navigation'

 function Dashboard() {
  const searchParams = useSearchParams()
  const value = searchParams.get('inputValue')
  return (
    <main className=''>
 <div className=''>
        <BentoGridThirdDemo />
        <h1>{value}</h1>
      </div>
    </main>
  )
}

export default Dashboard