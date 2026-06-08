import { motion } from "framer-motion";

const Butterfly = ({ x, y, size, color, delay, duration }) => (
  <motion.div
    style={{
      position: "fixed",
      left: `${x}%`,
      top: `${y}%`,
      pointerEvents: "none",
      zIndex: 0,
    }}
    animate={{
      x: [0, 30, -20, 40, 0],
      y: [0, -40, 20, -30, 0],
      opacity: [0, 0.6, 0.4, 0.6, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Left wings */}
      <motion.ellipse
        cx="14" cy="16" rx="12" ry="8"
        fill={color} opacity="0.5"
        transform="rotate(-20 14 16)"
        animate={{ scaleX: [1, 0.3, 1], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "20px 20px" }}
      />
      <motion.ellipse
        cx="14" cy="26" rx="9" ry="6"
        fill={color} opacity="0.4"
        transform="rotate(20 14 26)"
        animate={{ scaleX: [1, 0.3, 1], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "20px 20px" }}
      />
      {/* Right wings */}
      <motion.ellipse
        cx="26" cy="16" rx="12" ry="8"
        fill={color} opacity="0.5"
        transform="rotate(20 26 16)"
        animate={{ scaleX: [1, 0.3, 1], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "20px 20px" }}
      />
      <motion.ellipse
        cx="26" cy="26" rx="9" ry="6"
        fill={color} opacity="0.4"
        transform="rotate(-20 26 26)"
        animate={{ scaleX: [1, 0.3, 1], scaleY: [1, 1.1, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "20px 20px" }}
      />
      {/* Body */}
      <ellipse cx="20" cy="20" rx="1.5" ry="7" fill="#2C2C2C" opacity="0.4"/>
    </svg>
  </motion.div>
);

const butterfliesData = [
  { x: 5,  y: 15, size: 40, color: "#E8A598", delay: 0,   duration: 8  },
  { x: 15, y: 40, size: 32, color: "#D4907E", delay: 1.5, duration: 10 },
  { x: 80, y: 20, size: 36, color: "#E8A598", delay: 0.8, duration: 9  },
  { x: 90, y: 55, size: 30, color: "#D4907E", delay: 2,   duration: 11 },
  { x: 70, y: 75, size: 34, color: "#E8A598", delay: 3,   duration: 7  },
  { x: 25, y: 70, size: 28, color: "#E8A598", delay: 1,   duration: 12 },
  { x: 50, y: 10, size: 32, color: "#D4907E", delay: 2.5, duration: 9  },
  { x: 60, y: 85, size: 26, color: "#E8A598", delay: 0.5, duration: 13 },
  { x: 8,  y: 85, size: 30, color: "#D4907E", delay: 4,   duration: 8  },
  { x: 88, y: 35, size: 28, color: "#E8A598", delay: 1.8, duration: 10 },
  { x: 35, y: 25, size: 34, color: "#D4907E", delay: 0.3, duration: 9  },
  { x: 45, y: 60, size: 30, color: "#E8A598", delay: 2.2, duration: 11 },
  { x: 72, y: 45, size: 32, color: "#D4907E", delay: 1.2, duration: 8  },
  { x: 18, y: 55, size: 28, color: "#E8A598", delay: 3.5, duration: 10 },
  { x: 55, y: 30, size: 32, color: "#D4907E", delay: 0.7, duration: 12 },
  { x: 92, y: 75, size: 30, color: "#E8A598", delay: 1.6, duration: 9  },
  { x: 3,  y: 50, size: 34, color: "#D4907E", delay: 2.8, duration: 7  },
  { x: 65, y: 15, size: 32, color: "#E8A598", delay: 0.4, duration: 11 },
  { x: 40, y: 90, size: 28, color: "#D4907E", delay: 3.2, duration: 10 },
  { x: 78, y: 60, size: 32, color: "#E8A598", delay: 1.1, duration: 8  },
  { x: 32, y: 8,  size: 36, color: "#D4907E", delay: 0.6, duration: 9  },
  { x: 58, y: 48, size: 30, color: "#E8A598", delay: 2.9, duration: 8  },
  { x: 12, y: 22, size: 34, color: "#D4907E", delay: 1.4, duration: 11 },
  { x: 83, y: 82, size: 32, color: "#E8A598", delay: 0.9, duration: 10 },
  { x: 47, y: 35, size: 28, color: "#D4907E", delay: 3.8, duration: 9  },
  { x: 22, y: 88, size: 36, color: "#E8A598", delay: 1.7, duration: 7  },
  { x: 95, y: 30, size: 30, color: "#D4907E", delay: 2.3, duration: 12 },
  { x: 38, y: 62, size: 32, color: "#E8A598", delay: 0.2, duration: 10 },
  { x: 68, y: 28, size: 34, color: "#D4907E", delay: 4.2, duration: 8  },
  { x: 2,  y: 35, size: 28, color: "#E8A598", delay: 1.3, duration: 11 },
];

const Butterflies = () => (
  <div style={{
    position: "fixed", inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    overflow: "hidden",
  }}>
    {butterfliesData.map((b, i) => (
      <Butterfly key={i} {...b} />
    ))}
  </div>
);

export default Butterflies;