export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 bg-[#0b0f1a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Saurabh Singh. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/Sourabh7singh" target="_blank" className="hover:text-white hover:scale-105 transition-all">GitHub</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">LinkedIn</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Twitter</a>
        </div>
      </div>
    </footer>
  );
}