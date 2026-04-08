"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Frontend Engineer (React / Next.js)",
    "Backend Developer (Node.js / Django)",
    "Software Engineer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Deleting
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a]">

      {/* LEFT CONTENT */}
      <section className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 space-y-6">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Saurabh
          </span>
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-gray-300 h-10">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            {text}
          </span>
          <span className="ml-1 animate-pulse">|</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-lg">
          I build scalable, high-performance full-stack applications with real-time
          features using Next.js, Socket.io, and modern web technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">

          <a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition duration-300"
          >
            🚀 View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-600/50 bg-gray-800/30 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            📩 Contact Me
          </a>

        </div>
      </section>

      {/* RIGHT IMAGE */}
      <section className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">

        {/* Glow effect */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-500/30 blur-[100px] rounded-full"></div>

        <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl hover:scale-105 hover:shadow-purple-500/20 transition-all duration-500 bg-[#0f172a]/50 backdrop-blur-sm">
          <Image
            src="/assets/about_me.png"
            alt="Developer Illustration"
            height={500}
            width={500}
            className="object-cover"
          />
        </div>

      </section>

    </div>
  );
}