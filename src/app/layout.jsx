import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import MouseGlow from "../components/MouseGlow";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Saurabh Singh | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ParticleBackground />
        <MouseGlow />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}