"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ target, suffix = "", label, icon, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center p-6 rounded-2xl bg-[#1e293b]/30 border border-gray-800/60 backdrop-blur-sm"
    >
      <div className="text-purple-400 mb-3">{icon}</div>
      <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        {count}{suffix}
      </span>
      <span className="text-gray-400 text-sm mt-2 font-medium">{label}</span>
    </motion.div>
  );
}
