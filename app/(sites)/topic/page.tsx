"use client"
import { Vortex } from "@/app/components/ui/vortex"
import Placeholder from "@/app/components/ui/button";
import Nav from "@/app/components/navbar";
export default function VortexDemoSecond() {
    return (
      <div className="w-[calc(100%-rem)] mx-auto rounded-md  h-screen overflow-hidden">
       
       <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className=" md:px-10  py-4 w-full h-full"
      >
       <Nav />
       <Placeholder />
      </Vortex>
      </div>
    );
  }