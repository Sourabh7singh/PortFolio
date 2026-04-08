"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";

export default function AboutPage() {
  const skills = {
    Frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"],
    Backend: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "Prisma ORM"],
    Tools: ["Git & GitHub", "Docker", "Redis", "Socket.io", "Vercel", "Postman"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Me</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* BIO SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-400 leading-relaxed text-lg"
          >
            <p>
              Hi! I'm <span className="text-white font-semibold">Saurabh Singh</span>, a passionate Full Stack Developer focused on building highly scalable, performant, and user-centric web applications.
            </p>
            <p>
              I thrive on architecting full digital ecosystems. Whether it's designing a polished glassmorphism interface with Next.js or engineering a real-time hyper-local platform utilizing Socket.io and Redis, I love solving complex engineering challenges.
            </p>
            <div className="flex items-center gap-3 mt-8 p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="text-purple-400 w-8 h-8" />
              <p className="text-purple-200 text-sm md:text-base font-medium">
                "Continuously learning and exploring the edges of modern web capability."
              </p>
            </div>
          </motion.div>

          {/* SKILLS MATRIX */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Frontend */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Frontend.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Backend.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-green-500/10 text-green-300 border border-green-500/20">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-purple-400" />
                <h3 className="text-xl font-bold text-white">Tools & Architecture</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Tools.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}