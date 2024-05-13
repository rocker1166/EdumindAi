"use client";

import { useRouter } from "next/navigation";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function Placeholder() {
  const placeholders = [
    "Gravitaion class 11",
    "Theromodynamics",
    "World War 2 brief",
    "Type of Soil in india",
    "Array in Python?",
  ];

  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // Log the input value for debugging or tracking
    setInputValue(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    router.push(`/dashboard?inputValue=${inputValue}`) 
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black hover:text-gradient-to-r from-violet-500 to-fuchsia-500">
        Ask Anything! Learn Anything ➡️
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
