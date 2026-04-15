"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Sparkles, Coffee, Rocket, Layers, GitBranch } from "lucide-react";
import AnimatedCounter from "../../components/AnimatedCounter";

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

  const journey = [
    { year: "2022", title: "Started Learning Web Development", desc: "Began with HTML, CSS, JavaScript" },
    { year: "2023", title: "Full Stack Projects", desc: "Built multiple MERN stack applications" },
    { year: "2024", title: "Advanced Architecture", desc: "Socket.io, Redis, real-time systems" },
    { year: "2025", title: "AI & ML Integration", desc: "Deep learning, digit recognition, predictive models" },
  ];

  return (
    <main className="min-h-screen px-6 md:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a] relative z-[2]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            About
          </motion.span>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Me</span>
          </h1>
        </motion.div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          <AnimatedCounter target={5} suffix="+" label="Projects Built" icon={<Rocket size={28} />} />
          <AnimatedCounter target={18} suffix="+" label="Technologies" icon={<Layers size={28} />} />
          <AnimatedCounter target={500} suffix="+" label="Commits" icon={<GitBranch size={28} />} />
          <AnimatedCounter target={1000} suffix="+" label="Cups of Coffee" icon={<Coffee size={28} />} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
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
              <Sparkles className="text-purple-400 w-8 h-8 flex-shrink-0" />
              <p className="text-purple-200 text-sm md:text-base font-medium">
                "Continuously learning and exploring the edges of modern web capability."
              </p>
            </div>

            {/* JOURNEY TIMELINE */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-0 relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500/20" />
                
                {journey.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4 pb-6 relative"
                  >
                    {/* Dot */}
                    <div className="w-4 h-4 mt-1 rounded-full bg-purple-500 border-2 border-[#0b0f1a] flex-shrink-0 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <div>
                      <span className="text-xs font-bold text-purple-400 tracking-wider">{item.year}</span>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Frontend.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 cursor-default hover:bg-blue-500/20 hover:border-blue-400/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl hover:border-green-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Backend.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-green-500/10 text-green-300 border border-green-500/20 cursor-default hover:bg-green-500/20 hover:border-green-400/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-gray-800/60 bg-[#1e293b]/30 backdrop-blur-sm shadow-xl hover:border-purple-500/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-purple-400" />
                <h3 className="text-xl font-bold text-white">Tools & Architecture</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Tools.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 cursor-default hover:bg-purple-500/20 hover:border-purple-400/40 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}