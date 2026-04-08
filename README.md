# Saurabh Singh - Premium Full Stack Portfolio

A highly polished, recruiter-focused developer portfolio built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. It features smooth animations, an advanced glassmorphism interface, and a fully responsive design geared toward showcasing engineering projects and skills effectively.

## ✨ Features

- **Dynamic Hero Section**: A stunning greeting area with a sleek gradient UI, typing animations, and ambient glow effects.
- **Glassmorphic UI**: Components heavily utilize `backdrop-blur` and semi-transparent backgrounds to create a high-end, modern look.
- **Micro-Interactions**: Elegant, staggered scroll animations powered by Framer Motion, along with subtle hover-scaling and interactive shadows across all clickable elements and cards.
- **Skills Matrix**: A clearly categorized skills section (Frontend, Backend, Architecture) with tailored visual badges for high scannability.
- **Sleek Contact Form**: An animated, visually appealing contact form with simulated interaction states.
- **Next.js App Router**: Optimized routing and performance via `src/app`.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (v16.2)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev) & Custom inline SVGs

## 🚀 Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Folder Structure Highlights

- `/src/app`: Contains the main application routes (`/about`, `/projects`, `/contact`).
- `/src/components`: UI elements shared across pages (`Navbar`, `Hero`, `ProjectCard`, `Footer`).
- `/src/data`: Holds static project definitions (`projects.js`).

## 🤝 Make It Your Own

Feel free to fork and customize the code! To use it for your own portfolio, just update the data in `src/data/projects.js`, replace the bio text in `src/app/about/page.jsx`, and adjust the Hero greetings.
