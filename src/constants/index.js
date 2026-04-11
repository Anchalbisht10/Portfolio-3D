import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Full-Stack Development Training",
    company_name: "Smart Skills Council",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "May 2024 - May 2025",
    certificate:"/certificates/ssc.pdf",
    points: [
     "Completed 12-month structured training in Full Stack Development.",
      "Built real-world projects using MERN stack and SQL databases.",
      "Worked on frontend, backend, REST APIs, and database design.",
      "Learned Python, Flask, and Django fundamentals.",
      "Cleared final assessment with 90/100 (A+ grade performance).",
    ],
  },
  {
    title: "AI/ML Virtual Internship Experience",
    company_name: "YBI Foundation",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sept 2024",
    certificate:"/certificates/Ybi.pdf",
    points: [
        "Worked on machine learning projects using Python.",
      "Performed data preprocessing, feature engineering, and model training.",
      "Gained exposure to supervised and unsupervised learning techniques.",
      "Improved understanding of real-world AI/ML workflow.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company_name: "JPMorgan Chase & Co.",
    icon:shopify,
    iconBg: "#ffffff",
    date: "Aug 2024 - Sept 2024",
    certificate:"/certificates/JP.pdf",
    points: [
     "Completed virtual job simulation focused on software engineering tasks.",
      "Worked on data handling, financial data structures, and analysis tasks.",
      "Learned industry-level development workflow and problem solving.",
      "Improved analytical thinking and coding practices.",
    ],
  },
  {
    title: "Artificial Intelligence Virtual Experience",
    company_name: "Accenture",
    icon: meta,
    iconBg: "#ffffff",
    date: "Jul 2024 - Aug 2024",
    certificate:"/certificates/accenture.pdf",
    points: [
    " Completed a 3-week virtual learning program focused on Artificial Intelligence fundamentals.",
    "Worked approximately 2 hours per week on structured learning modules and case-based tasks.",
    "Explored how AI is transforming modern workplaces and business decision-making.",
    "Gained understanding of AI trends, applications, and human-AI collaboration in real-world scenarios.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Full Stack Developer focused on building scalable, real-world web applications using MERN stack.",
    name: "Development",
    designation: "React • Node • Express",
    company: "MongoDB",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    testimonial: "Strong expertise in frontend development with responsive UI/UX using React and Tailwind CSS.",
    name: "Frontend Skills",
    designation: "UI / UX Focus",
    company: "Tailwind CSS",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
  },
  {
    testimonial: "Experienced in REST APIs, authentication systems, and integrating third-party services like Stripe and EmailJS.",
    name: "Backend & APIs",
    designation: "Secure & Scalable",
    company: "Node.js",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055672.png",
  },
];
const projects = [
  {
    name: "Food Delivery",
    description:
      "This is a full-stack Food Delivery Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Stripe integration for secure online payments. It supports a complete food ordering experience — from menu browsing and cart management to admin controls and real-time order tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
        {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    image: "/projects/food.png",
    live_link: "https://fooddel-frontend-pi.vercel.app",
    source_code_link: "https://github.com/Anchalbisht10/Food-delivery",
  },
   {
    name: "Doctor Appointment",
    description:
      "A full-stack Doctor Appointment Booking System built using the MERN stack. This project allows users to browse doctors, book appointments, and manage their profiles. It also includes an admin panel for managing doctors and appointments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node js ",
        color: "pink-text-gradient",
      },
        {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    image: "/projects/doctor.png",
    live_link: "https://doctor-frontend-beryl.vercel.app",
    source_code_link: "https://github.com/Anchalbisht10/Doctor-Appointment",
  },
   {
    name: "Brainwave",
    description:
      "A modern and responsive AI SaaS landing page built using React.js, Vite, and Tailwind CSS, showcasing advanced UI/UX design principles and smooth interactive animations.This project is a visually rich frontend application designed to replicate a modern AI product landing page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/brainwave.png",
    live_link: "https://brainwave-ui-ux-design.vercel.app",
    source_code_link: "https://github.com/Anchalbisht10/brainwave-ui-ux_design",
  },
   {
    name: "Bookstore",
    description:
      "This is a full-stack project combining a bookstore system with user management. Users can sign up, log in, view books, and manage their account. Admin-like functionality allows managing books and users with create, update, and delete.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
        {
        name: "rest api",
        color: "yellow-text-gradient",
      },
    ],
    image: "/projects/book.png",
    live_link: "https://github.com/Anchalbisht10/book-store",
    source_code_link: "https://github.com/Anchalbisht10/book-store",
  },
  {
    name: "User Management",
    description:
      "A full-stack web application that allows users to register, login, and manage user data securely.The project demonstrates authentication using JWT with HTTP-only cookies and protected API routes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
        {
        name: "rest api",
        color: "yellow-text-gradient",
      },
    ],
    image:"/projects/user.png",
    live_link: "https://github.com/Anchalbisht10/fullstack-user-management-system",
    source_code_link: "https://github.com/Anchalbisht10/fullstack-user-management-system",
  },
  {
    name: "E-Commerce",
    description:
      "Responsive e-commerce web application built with React, featuring product listings, shopping cart functionality, and a smooth user interface for an enhanced shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image:"/projects/ecommerce.png",
    live_link: "https://ecommerce-website-two-flax.vercel.app",
    source_code_link: "https://github.com/Anchalbisht10/ecommerce-website",
  },
    {
    name: "Movie-box",
    description:
      "“Dynamic movie search application built with React that integrates external APIs to fetch and display real-time movie data, allowing users to explore movie details through a fast, responsive, and user-friendly interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image:"/projects/movie.png",
    live_link: "https://movie-search-react-brown.vercel.app/",
    source_code_link: "https://github.com/Anchalbisht10/movie-search-react",
  },
    {
    name: "Quiz-App",
    description:
      "Interactive quiz application built with React that allows users to answer multiple-choice questions, track their score in real time, and receive instant feedback for an engaging learning experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image:"/projects/quiz.png",
    live_link: "https://quiz-app-zeta-inky.vercel.app/",
    source_code_link: "https://github.com/Anchalbisht10/quiz-app",
  },
    {
    name: "Portfolio",
    description:
      "A modern, fully responsive developer portfolio built with React, Three.js, and Tailwind CSS to showcase my projects, skills, and experience with smooth animations and interactive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image:"/projects/portfolio.png",
    live_link: "https://portfolio-3-d-u19m.vercel.app/",
    source_code_link: "https://github.com/Anchalbisht10/Portfolio-3D",
  },
];

export { services, technologies, experiences, testimonials, projects };
