"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
<AuroraBackground>
<Navbar />

        <div className=" place-content-center ">
          <br /> <br /> <br /> <br /> <br /> <br />  <br /> <br />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center  px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          One stop for online learning.
        </div>
        
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
         Learn, Practice, Take Notes in one place. 
        </div>
        <button className="relative backdrop-blur-sm  overflow-hidden  rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    <Link href='/topic'>Get Started ➡️</Link>
  </span>
</button>
      </motion.div>
      </div>
    </AuroraBackground>
    </main>
  );
}
