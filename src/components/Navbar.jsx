"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 border-b border-gray-800/60 bg-[#0b0f1a]/80 backdrop-blur-md">
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-pointer">
          Saurabh
        </h1>
      </Link>

      <div className="space-x-6 text-gray-300 font-medium">
        <Link href="/" className={`hover:text-white transition duration-300  ${pathname === "/" ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 " : ""}`}>Home</Link>
        <Link href="/about" className={`hover:text-white transition duration-300  ${pathname === "/about" ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 " : ""}`}>About</Link>
        <Link href="/projects" className={`hover:text-white transition duration-300 ${pathname === "/projects" ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 " : ""}`}>Projects</Link>
        <Link href="/contact" className={`hover:text-white transition duration-300  ${pathname === "/contact" ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500 " : ""}`}>Contact</Link>
      </div>
    </nav>
  );
}