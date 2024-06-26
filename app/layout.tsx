
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduMindAi",
  description: "A web app with all tools for online learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
   
    
      <body className={inter.className}>
        <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
        </body>
    </html>
  );
}
