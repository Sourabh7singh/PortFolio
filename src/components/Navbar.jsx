"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 border-b border-gray-800/60 bg-[#0b0f1a]/80 backdrop-blur-md">
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-pointer">
          Saurabh
        </h1>
      </Link>

      <div className="space-x-6 text-gray-300 font-medium">
        <Link href="/" className="hover:text-white transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-white transition duration-300">About</Link>
        <Link href="/projects" className="text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500">Projects</Link>
        <Link href="/contact" className="hover:text-white transition duration-300">Contact</Link>
      </div>
    </nav>
  );
}