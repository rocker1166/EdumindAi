"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
 function Nav1() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Learning Tools"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const path = usePathname();
  const router = useRouter();
  return (
    
 <nav className="sticky  top-0 z-7 backdrop-blur-xl ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-5xl text-white font-semibold"><Link href='/'>🤖</Link> </span>
      <div className="flex space-x-4 text-white">
        <Link href="/topic/dashboard" className={path === "/topic/dashboard" ? "active" : ""}>Dashboard</Link>
        <Link className={path === "/topic/dashboard/notes" ? "active" : "hidden md:block"}  href="/topic/dashboard/notes">Notes📝</Link>
        <Link className={path === "/topic/dashboard/youtube" ? "active" : "hidden md:block"} href="/topic/dashboard/youtube">Lecture📺</Link>
        <Link className={path === "/topic/dashboard/problem" ? "active" : "hidden md:block"} href="/topic/dashboard/problem">Problem❓</Link>
        <Link className={path === "/topic/dashboard/cheatsheet" ? "active" : "hidden md:block"}href="/topic/dashboard/cheatsheet">Cheatsheet📒</Link>
        <Link className={path === "/topic/dashboard/posturechecker" ? "active" : "hidden md:block"}href="/topic/dashboard/posturechecker">PostureCheaker🧘</Link>
        <button onClick={() => router.push('/topic')} className="relative   overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    New Topic
  </span>
</button>
       <Dropdown>
      <DropdownTrigger>
      <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
       
      >
        <DropdownItem key="notes" href="/dashboard/notes"> Notes📝 </DropdownItem>
        <DropdownItem key="youtube" href="/dashboard/youtube"> Lecture📺 </DropdownItem>
        <DropdownItem key="problem" href="/dashboard/problem"> Problem❓ </DropdownItem>
        <DropdownItem key="cheatsheet" href="/dashboard/cheatsheet"> Cheatsheet📒 </DropdownItem>
        <DropdownItem key="posturechecker" href="/dashboard/posturechecker"> PostureCheaker🧘 </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Nav1