import { motion } from "framer-motion";

const PandaBody = ({ accentColor = "#F2B8AD", eyeStyle = "normal", accessory = "bow" }) => (
  <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
    {/* Body */}
    <ellipse cx="40" cy="72" rx="22" ry="26" fill="#fff" stroke={accentColor} strokeWidth="1.5"/>
    {/* Legs */}
    <ellipse cx="28" cy="94" rx="8" ry="6" fill="#2C2C2C"/>
    <ellipse cx="52" cy="94" rx="8" ry="6" fill="#2C2C2C"/>
    {/* Left arm */}
    <ellipse cx="16" cy="72" rx="6" ry="9" fill="#2C2C2C" transform="rotate(-20 16 72)"/>
    {/* Right arm — waving */}
    <ellipse cx="64" cy="65" rx="6" ry="9" fill="#2C2C2C" transform="rotate(30 64 65)"/>
    {/* Tummy */}
    <ellipse cx="40" cy="75" rx="13" ry="15" fill={accentColor} opacity="0.15"/>
    {/* Head */}
    <circle cx="40" cy="38" r="22" fill="#fff" stroke={accentColor} strokeWidth="1.5"/>
    {/* Ears */}
    <circle cx="20" cy="20" r="10" fill="#2C2C2C"/>
    <circle cx="60" cy="20" r="10" fill="#2C2C2C"/>
    <circle cx="20" cy="20" r="6" fill="#fff"/>
    <circle cx="60" cy="20" r="6" fill="#fff"/>
    {/* Eye patches */}
    <ellipse cx="30" cy="38" rx="7" ry="7" fill="#2C2C2C"/>
    <ellipse cx="50" cy="38" rx="7" ry="7" fill="#2C2C2C"/>
    {/* Eyes */}
    {eyeStyle === "normal" && <>
      <circle cx="31" cy="37" r="3" fill="#fff"/>
      <circle cx="51" cy="37" r="3" fill="#fff"/>
      <circle cx="32" cy="37" r="1.5" fill="#1A1A1A"/>
      <circle cx="52" cy="37" r="1.5" fill="#1A1A1A"/>
    </>}
    {eyeStyle === "heart" && <>
      <text x="27" y="41" fontSize="9" fill="#E8A598">♥</text>
      <text x="47" y="41" fontSize="9" fill="#E8A598">♥</text>
    </>}
    {eyeStyle === "star" && <>
      <text x="27" y="41" fontSize="9" fill="#FFD700">★</text>
      <text x="47" y="41" fontSize="9" fill="#FFD700">★</text>
    </>}
    {eyeStyle === "happy" && <>
      <path d="M27 37 Q30 41 33 37" stroke="#fff" strokeWidth="1.5" fill="none"/>
      <path d="M47 37 Q50 41 53 37" stroke="#fff" strokeWidth="1.5" fill="none"/>
    </>}
    {/* Nose */}
    <ellipse cx="40" cy="44" rx="4" ry="2.5" fill={accentColor} opacity="0.7"/>
    {/* Mouth */}
    <path d="M35 49 Q40 53 45 49" stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    {/* Cheeks */}
    <ellipse cx="22" cy="46" rx="5" ry="3" fill={accentColor} opacity="0.35"/>
    <ellipse cx="58" cy="46" rx="5" ry="3" fill={accentColor} opacity="0.35"/>
    {/* Accessory */}
    {accessory === "bow" && (
      <>
        <path d="M30 16 C30 13 35 13 40 15 C45 13 50 13 50 16 C50 18 45 17 40 16 C35 17 30 18 30 16Z"
          fill="#E8A598" opacity="0.9"/>
        <ellipse cx="40" cy="16" rx="3" ry="2.5" fill="#F5C5BC"/>
      </>
    )}
    {accessory === "leaf" && (
      <path d="M38 12 C35 7 42 4 44 9 C42 7 39 9 38 12Z" fill="#7A9E7E"/>
    )}
    {accessory === "star" && (
      <text x="36" y="14" fontSize="10" fill="#FFD700">★</text>
    )}
    {accessory === "flower" && (
      <>
        <circle cx="40" cy="12" r="4" fill="#E8A598" opacity="0.8"/>
        <circle cx="40" cy="7" r="3" fill="#F5C5BC"/>
        <circle cx="45" cy="10" r="3" fill="#F5C5BC"/>
        <circle cx="35" cy="10" r="3" fill="#F5C5BC"/>
        <circle cx="40" cy="12" r="2.5" fill="#FFD700"/>
      </>
    )}
  </svg>
);

const pandas = [
  { accentColor: "#F2B8AD", eyeStyle: "normal", accessory: "bow" },
  { accentColor: "#A8C5A0", eyeStyle: "happy", accessory: "leaf" },
  { accentColor: "#B5D4F4", eyeStyle: "star", accessory: "star" },
  { accentColor: "#CECBF6", eyeStyle: "normal", accessory: "flower" },
  { accentColor: "#F5C4B3", eyeStyle: "heart", accessory: "bow" },
  { accentColor: "#FFD700", eyeStyle: "happy", accessory: "flower" },
];

const PandaSticker = ({ variant = 0, size = 80 }) => {
  const panda = pandas[variant % pandas.length];
  const scale = size / 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: -15, rotate: -8 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
      whileHover={{ scale: 1.12, rotate: 6, y: -4 }}
      animate={{ y: [0, -6, 0] }}
      style={{
        display: "inline-block",
        marginBottom: "4px",
        cursor: "pointer",
        filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
        transform: `scale(${scale})`,
        transformOrigin: "bottom center",
      }}
    >
      <PandaBody {...panda} />
    </motion.div>
  );
};

export default PandaSticker;