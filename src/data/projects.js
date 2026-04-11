export const projects = [
  {
    title: "NearbuyDukan",
    description:
      "A hyperlocal digital ecosystem connecting consumers with local shops and healthcare institutions. Enables virtual queue management, digital billing, real-time chat, location-based discovery, and secure medical record storage—eliminating waiting time and paper-based workflows.",
    features: [
      "Live token-based queue tracking for customers and patients",
      "Location-based discovery of nearby shops and healthcare centers",
      "Secure medical history and document storage",
      "Real-time chat between users and vendors",
      "Digital invoice generation with automated record keeping",
      "QR-based instant access for token booking and payments",
    ],
    tech: [
      "Next.js (App Router)",
      "MongoDB",
      "Prisma ORM (v6)",
      "Socket.io",
      "Redis",
      "NextAuth.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Sourabh7singh/dukan_near_buy",
    live: "https://dukan-near-buy-tuws.vercel.app/overview",
  },

  {
    title: "Saurabh Weather Application",
    description:
      "A modern React-based weather application delivering real-time weather data, 3-day forecasts, and hourly insights with geolocation support. Features a premium glassmorphism UI, responsive design, and optimized rendering for smooth performance.",
    features: [
      "Real-time weather data including temperature, humidity, wind speed, UV index, and pressure",
      "Automatic geolocation-based weather detection",
      "City-based global weather search functionality",
      "3-day forecast with interactive hourly weather visualization",
      "Responsive glassmorphism UI with dynamic twilight theme",
      "Performance optimization using GPU acceleration and efficient rendering techniques",
    ],
    tech: [
      "React.js (v18)",
      "JavaScript (ES6+)",
      "CSS3 (Flexbox, Grid, Glassmorphism)",
      "React Context API",
      "WeatherAPI",
      "REST API (fetch)",
    ],
    github: "https://github.com/Sourabh7singh/Weather_App",
    live: "https://weather-app-wheat-pi-24.vercel.app/",
  },

  {
    title: "ChatSphere",
    description:
      "A full-stack real-time chat application built with the MERN stack and Socket.IO. Enables one-on-one and group conversations with live messaging, user presence tracking, and secure authentication.",
    features: [
      "Real-time one-on-one messaging using Socket.IO",
      "Group chat with multiple participants",
      "Online/offline user presence tracking",
      "Secure authentication with OTP-based password reset",
      "Profile customization with image upload (Cloudinary)",
      "Lazy loading of messages for performance optimization",
      "Search functionality for conversations and groups",
      "Responsive UI with toast notifications",
    ],
    tech: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "Socket.IO",
      "Tailwind CSS",
      "Cloudinary",
      "Nodemailer",
      "bcrypt",
    ],
    github: "https://github.com/Sourabh7singh/MernChatApp",
    live: "https://mern-chat-app-ashen-delta.vercel.app", 
  },
];