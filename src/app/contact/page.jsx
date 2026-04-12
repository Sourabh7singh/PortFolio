"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen px-6 md:px-16 py-16 md:py-24 bg-gradient-to-b from-[#0b0f1a] to-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Drop me a message below!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1e293b]/30 backdrop-blur-sm border border-gray-800/60 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} /> Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder:text-gray-600"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} /> Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={16} /> Message
              </label>
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-[#0b0f1a]/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none placeholder:text-gray-600"
              />
            </div>

            {/* Submit Button & Success Message */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between relative">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white transition-all duration-300 w-full sm:w-auto
                  ${isSubmitting 
                    ? "bg-gray-700 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02]"
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
              </button>

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