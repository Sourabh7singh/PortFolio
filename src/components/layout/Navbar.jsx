"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 border-b border-gray-800/60 bg-[#0b0f1a]/80 backdrop-blur-md">
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-pointer">
          Saurabh
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`hover:text-white transition duration-300 ${
              pathname === link.href 
                ? "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500" 
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0b0f1a] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className={`text-3xl font-bold tracking-tight ${
                    pathname === link.href 
                      ? "text-white" 
                      : "text-gray-500 hover:text-white"
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}