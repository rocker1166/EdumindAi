/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fGBhg874qLw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "./ui/input"
export default function Youtube() {
  return (
    <div className="flex h-screen ">

      <div className="flex-grow overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center  backdrop-blur-sm rounded-md">
            <MicroscopeIcon className="h-5 w-5  backdrop-blur-md ml-3" />
            <Input className="pl-2 w-full" placeholder="Search" type="search" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <a className="block group" href="#">
              <div className=" backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  alt="Video thumbnail"
                  className="w-full"
                  height="140"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/180",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-4  backdrop-brightness-25 border-red-100 ">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    Battle for Indias Future
                  </h3>
                  <p className=" text-yellow-50">8 hours ago · 168K views</p>
                </div>
              </div>
            </a>
            <a className="block group" href="#">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  alt="Video thumbnail"
                  className="w-full"
                  height="180"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/180",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    Launching our platform and courses
                  </h3>
                  <p className="text-gray-600">5 hours ago · 20K views</p>
                </div>
              </div>
            </a>
            <a className="block group" href="#">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  alt="Video thumbnail"
                  className="w-full"
                  height="180"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/180",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    Krish is Back! Salaar 2 Begins!
                  </h3>
                  <p className="text-gray-600">10 hours ago · 259K views</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <button title="hi" className="fixed top-4 left-4 z-10 rounded-md bg-[#1F1F1F] p-2 text-white md:hidden">
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MicroscopeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}