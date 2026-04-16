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
    title: "Weather Application",
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
    live: "https://mern-chat-app-ashen-delta.vercel.app/overview",
  },

  {
    title: "Accident Fatality Prediction",
    description:
      "A machine learning-based predictive system that analyzes large-scale traffic accident data to forecast accident severity. Achieved ~85% accuracy using Random Forest and Logistic Regression, enabling data-driven road safety insights and risk assessment.",
    features: [
      "Built predictive models (Random Forest, Logistic Regression) achieving ~84–85% accuracy",
      "Performed extensive data preprocessing including cleaning, feature engineering, and encoding",
      "Implemented multiple missing value strategies (Mean vs Mode) for performance comparison",
      "Transformed temporal data into meaningful features like Time of Day",
      "Analyzed feature importance to identify key factors influencing accident severity",
      "Visualized trends and model performance using data analysis techniques",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    github: "https://github.com/Sourabh7singh/Machine-Learning-Project",
  },
  {
    title: "Digit Recognition System",
    description:
      "A deep learning-powered web application that recognizes handwritten digits in real-time using a CNN model trained on the MNIST dataset. Integrated with a Django backend to deliver fast and secure predictions through an interactive web interface.",
    features: [
      "Real-time handwritten digit recognition using a CNN model",
      "Achieved high accuracy on MNIST dataset (trained on 60,000+ samples)",
      "Implemented image preprocessing including resizing, grayscale conversion, and normalization",
      "Built a responsive UI for image upload and instant predictions",
      "Secure backend integration using Django with CSRF protection",
      "Optimized model inference for fast and efficient predictions",
    ],
    tech: [
      "Python",
      "Django",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pillow (PIL)",
      "HTML",
      "CSS",
      "JavaScript",
      "Gunicorn",
    ],
    github: "https://github.com/Sourabh7singh/DigitRecognitionSystem",
  }
];

export const titles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
  "Software Engineer",
];

export const skills = {
  Frontend: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "HTML/CSS",
    "JavaScript",
    "Redux",
    "ShadCN UI"
  ],
  Backend: [
    "Node.js",
    "Express",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "REST APIs",
    "JWT Authentication"
  ],
  Tools: [
    "Git & GitHub",
    "Socket.io",
    "Postman",
    "Vercel",
    "Figma"
  ]
};
export const journey = [
  { year: "2025", title: "AI & ML Integration", desc: "Deep learning, digit recognition, predictive models" },
  { year: "2024", title: "Advanced Architecture", desc: "Socket.io, Redis, real-time systems" },
  { year: "2023", title: "Full Stack Projects", desc: "Built multiple MERN stack applications" },
  { year: "2022", title: "Started Learning Web Development", desc: "Began with HTML, CSS, JavaScript" },
];