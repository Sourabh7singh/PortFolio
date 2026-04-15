"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle2, MapPin, Clock, Sparkles } from "lucide-react";

// Dot grid background with ripple
function DotGrid() {
  const canvasRef = useRef(null);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const spacing = 30;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      ripples.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: 200,
        opacity: 1,
      });
    };
    canvas.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          let dotOpacity = 0.08;
          let dotSize = 1;

          // Check ripples
          for (const r of ripples.current) {
            const dx = x - r.x;
            const dy = y - r.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < r.radius + 20 && dist > r.radius - 20) {
              const wave = 1 - Math.abs(dist - r.radius) / 20;
              dotOpacity = Math.max(dotOpacity, wave * r.opacity * 0.5);
              dotSize = Math.max(dotSize, 1 + wave * r.opacity * 2);
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${dotOpacity})`;
          ctx.fill();
        }
      }

      // Update ripples
      ripples.current = ripples.current.filter((r) => {
        r.radius += 3;
        r.opacity -= 0.008;
        return r.opacity > 0;
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-auto" />
  );
}

// Confetti particles for success state
function ConfettiParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1.5,
    size: 4 + Math.random() * 6,
    color: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "50%", x: `${p.x}%`, opacity: 1, scale: 1 }}
          animate={{
            y: "-100%",
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360,
          }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <MapPin size={18} />, label: "Location", value: "India" },
    { icon: <Clock size={18} />, label: "Response time", value: "Within 24 hours" },
  ];

  return (
    <main className="min-h-screen px-6 md:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a] relative overflow-hidden z-[2]">
      {/* Dot Grid Background */}
      <DotGrid />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            Contact
          </motion.span>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Drop me a message below!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#1e293b]/30 border border-gray-800/60 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                {info.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                <p className="text-sm text-white font-semibold">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1e293b]/30 backdrop-blur-sm border border-gray-800/60 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Success confetti */}
          {isSubmitted && <ConfettiParticles />}

          {/* Subtle glow behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} /> Name
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "name" ? "shadow-[0_0_20px_rgba(168,85,247,0.2)]" : ""}`}>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} /> Email
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "email" ? "shadow-[0_0_20px_rgba(168,85,247,0.2)]" : ""}`}>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={16} /> Message
              </label>
              <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "message" ? "shadow-[0_0_20px_rgba(168,85,247,0.2)]" : ""}`}>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Submit Button & Success Message */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between relative">
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                className={`group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white transition-all duration-300 w-full sm:w-auto
                  ${isSubmitting 
                    ? "bg-gray-700 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20"
                >
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-medium">Message sent!</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}