"use client"

import { Inter } from "next/font/google";
import Nav1 from "@/app/components/navbar copy";
import ScrollToTopButton from "@/app/components/moveup";
import { InputProvider } from "@/app/context/InputContext";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
   
  
      <body className={inter.className}><div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
     
      <Nav1 />
     
      
  {/* Radial gradient for the container to give a faded look */}
  <div className=" pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

  <InputProvider>
  {children}
  </InputProvider>
  

</div>

<ScrollToTopButton />
</body>
    </html>
  );
}
