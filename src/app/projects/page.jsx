"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-16 md:py-24 bg-[#0b0f1a] relative overflow-hidden text-white font-sans">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            Portfolio
          </motion.span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">
            Creative <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 text-transparent bg-clip-text">Showcase</span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            A curated selection of my most impactful work, ranging from complex full-stack architectures to refined frontend experiences.
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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