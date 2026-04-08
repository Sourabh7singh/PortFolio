"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A showcase of my technical expertise, featuring scalable full-stack applications, real-time systems, and responsive design.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}