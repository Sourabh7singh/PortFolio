"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

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
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between h-full border border-gray-800/60 bg-[#1e293b]/20 backdrop-blur-md p-7 rounded-3xl hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] transition-all duration-500"
    >

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
          {project.title}
        </h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="mb-6 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={14} className="mt-1 text-purple-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8 mt-4">
          {project.tech.map((techItem, index) => (
            <span 
              key={index}
              className="text-[10px] md:text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-gray-800/50">
        <div className="flex items-center gap-4">
          {project.github !== "#" && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all group/link"
            >
              <GithubIcon size={18} className="group-hover/link:scale-110 transition-transform" />
              <span className="font-medium">Source</span>
            </a>
          )}
          {project.live !== "#" && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-all group/link"
            >
              <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
