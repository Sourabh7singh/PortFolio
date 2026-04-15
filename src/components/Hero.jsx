"use client";

import { useEffect, useState } from "react";
import RobotScene from "./Robot";

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
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-8 md:py-0 gap-4 md:gap-8 overflow-hidden relative z-[2]">
      {/* LEFT CONTENT */}
      <section className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 space-y-5 md:space-y-6 order-1 md:order-1">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Saurabh
          </span>
        </h1>

        <h2 className="text-base sm:text-lg md:text-3xl font-semibold text-gray-300 min-h-[28px] md:min-h-[40px]">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            {text}
          </span>
          <span className="ml-1 animate-pulse">|</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
          I build scalable, high-performance full-stack applications with real-time
          features using Next.js, Socket.io, and modern web technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 sm:gap-4 mt-2 md:mt-4 flex-wrap justify-center md:justify-start">

          <a
            href="/projects"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition duration-300 text-sm sm:text-base"
          >
            🚀 View Projects
          </a>

          <a
            href="/contact"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-gray-600/50 bg-gray-800/30 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 text-sm sm:text-base"
          >
            📩 Contact Me
          </a>

        </div>
      </section>

      {/* RIGHT - ROBOT */}
      <section className="md:w-1/2 w-full flex justify-center items-center relative order-2 md:order-2">

        {/* Glow */}
        <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] bg-purple-500/20 blur-[100px] md:blur-[120px] rounded-full"></div>

        {/* Robot */}
        <div className="w-full max-w-[500px] md:max-w-[600px] z-10 flex justify-center">
          <RobotScene />
        </div>

      </section>

    </div>
  );
}