"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.3.4-1.6-.2-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7 2.2 6 2.5 6 2.5c-.6 1.9-.3 3.2-.2 3.5-.9 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.9 2.2V22" />
    <path d="M9 20c-4 1-5-2-7-2" />
  </svg>
);

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between h-full border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm p-7 rounded-2xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300"
    >
      <div>
        <h2 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h2>
        <p className="text-gray-400 my-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem, index) => (
            <span 
              key={index}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-sm"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5 mt-auto pt-4 border-t border-gray-800/50">
        {project.github !== "#" && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:scale-105 transition-all"
          >
            <GithubIcon size={18} />
            <span className="font-medium">Source</span>
          </a>
        )}
        {project.live !== "#" && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 hover:scale-105 transition-all"
          >
            <ExternalLink size={18} />
            <span className="font-medium">Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}