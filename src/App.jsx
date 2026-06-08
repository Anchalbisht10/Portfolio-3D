import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Certificates } from "./components";
import Butterflies from "./components/Butterflies";
import PandaSticker from "./components/PandaSticker";

const flapStyle = `
  @keyframes flapWings {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(0.15); }
  }
  .wing { 
    animation: flapWings 0.4s ease-in-out infinite;
    transform-origin: 20px 20px;
  }
`;

const CursorTrail = () => {
  const [dots, setDots] = useState([]);
  const counter = useRef(0);

  useEffect(() => {
    const addDot = (x, y) => {
      const id = counter.current++;
      const dot = { id, x, y, color: id % 2 === 0 ? "#E8A598" : "#A8C5A0" };
      setDots(prev => [...prev.slice(-18), dot]);
      setTimeout(() => setDots(prev => prev.filter(d => d.id !== id)), 700);
    };

    const handleMove = (e) => addDot(e.clientX, e.clientY);

    const handleTouch = (e) => {
      // loop all fingers
      Array.from(e.touches).forEach(t => addDot(t.clientX, t.clientY));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
      {dots.map((dot) => (
        <motion.div key={dot.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "fixed", left: dot.x - 4, top: dot.y - 4, width: 8, height: 8, borderRadius: "50%", background: dot.color, pointerEvents: "none" }}
        />
      ))}
    </div>
  );
};

// Ribbon intro
const RibbonIntro = ({ onComplete }) => (
  <motion.div
    initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay: 1.2 }}
    onAnimationComplete={onComplete}
    style={{ position: "fixed", inset: 0, background: "#FAF7F2", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingBottom: "10vh" }}
  >
    {/* Ribbon panels split open */}
    <motion.div initial={{ y: 0 }} animate={{ y: "-100%" }} transition={{ duration: 0.5, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "#FAF7F2", borderBottom: "2px solid rgba(232,165,152,0.4)", zIndex: 2 }}/>
    <motion.div initial={{ y: 0 }} animate={{ y: "100%" }} transition={{ duration: 0.5, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "#FAF7F2", borderTop: "2px solid rgba(232,165,152,0.4)", zIndex: 2 }}/>
    {/* Cross lines */}
    <motion.div initial={{ scaleY: 1, opacity: 1 }} animate={{ scaleY: 0, opacity: 0 }} transition={{ duration: 0.25, delay: 0.65 }}
      style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: "3px", background: "linear-gradient(to bottom, transparent, #E8A598, transparent)", zIndex: 3 }}/>
    <motion.div initial={{ scaleX: 1, opacity: 1 }} animate={{ scaleX: 0, opacity: 0 }} transition={{ duration: 0.25, delay: 0.65 }}
      style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", height: "3px", background: "linear-gradient(to right, transparent, #E8A598, transparent)", zIndex: 3 }}/>
    {/* Bow */}
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35, delay: 0.15, type: "spring", bounce: 0.5 }}
      style={{ position: "relative", zIndex: 4 }}>
      <svg width="120" height="70" viewBox="0 0 120 70">
        <path d="M60 35 C45 20 15 10 10 25 C5 38 30 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
        <path d="M60 35 C75 20 105 10 110 25 C115 38 90 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
        <path d="M60 35 C50 42 35 55 28 65 C32 65 42 55 60 38Z" fill="#F2B8AD" opacity="0.75"/>
        <path d="M60 35 C70 42 85 55 92 65 C88 65 78 55 60 38Z" fill="#F2B8AD" opacity="0.75"/>
        <ellipse cx="60" cy="35" rx="8" ry="7" fill="#E8A598"/>
        <ellipse cx="60" cy="35" rx="4.5" ry="4" fill="#F5C5BC"/>
      </svg>
    </motion.div>
    {/* Butterflies — fewer, faster */}
  {[
      { x: "8%",  y: "20%", size: 32, color: "#E8A598", delay: 0.1, dur: 8  },
      { x: "80%", y: "25%", size: 28, color: "#E8A598", delay: 0.2, dur: 9  },
      { x: "50%", y: "15%", size: 26, color: "#E8A598", delay: 0.1, dur: 9  },
      { x: "65%", y: "70%", size: 28, color: "#E8A598", delay: 0.3, dur: 8  },
      { x: "18%", y: "65%", size: 24, color: "#D4907E", delay: 0.2, dur: 10 },
      { x: "35%", y: "40%", size: 26, color: "#E8A598", delay: 0.15, dur: 7 },
      { x: "72%", y: "50%", size: 22, color: "#D4907E", delay: 0.25, dur: 9 },
      { x: "25%", y: "30%", size: 28, color: "#E8A598", delay: 0.05, dur: 8 },
      { x: "88%", y: "60%", size: 24, color: "#D4907E", delay: 0.35, dur: 10},
      { x: "55%", y: "75%", size: 26, color: "#E8A598", delay: 0.2,  dur: 7 },
      { x: "10%", y: "50%", size: 22, color: "#D4907E", delay: 0.4,  dur: 9 },
      { x: "42%", y: "85%", size: 24, color: "#E8A598", delay: 0.1,  dur: 8 },
    ].map((b, i) => (
      <motion.div key={i} initial={{ opacity: 0 }}
        animate={{ x: [0, 30, -20, 40, 0], y: [0, -40, 20, -30, 0], opacity: [0, 0.6, 0.4, 0.6, 0] }}
        transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", left: b.x, top: b.y, zIndex: 4, pointerEvents: "none" }}>
        <svg width={b.size} height={b.size} viewBox="0 0 40 40" fill="none">
          <ellipse cx="14" cy="16" rx="12" ry="8" fill={b.color} opacity="0.5" transform="rotate(-20 14 16)"/>
          <ellipse cx="14" cy="26" rx="9" ry="6" fill={b.color} opacity="0.4" transform="rotate(20 14 26)"/>
          <ellipse cx="26" cy="16" rx="12" ry="8" fill={b.color} opacity="0.5" transform="rotate(20 26 16)"/>
          <ellipse cx="26" cy="26" rx="9" ry="6" fill={b.color} opacity="0.4" transform="rotate(-20 26 26)"/>
          <ellipse cx="20" cy="20" rx="1.5" ry="7" fill="#2C2C2C" opacity="0.4"/>
        </svg>
      </motion.div>
    ))}
    {/* Name + pandas */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
      style={{ position: "relative", zIndex: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
      <svg width="44" height="56" viewBox="0 0 80 100" fill="none">
        <ellipse cx="40" cy="72" rx="22" ry="26" fill="#fff" stroke="#F2B8AD" strokeWidth="1.5"/>
        <ellipse cx="28" cy="94" rx="8" ry="6" fill="#2C2C2C"/><ellipse cx="52" cy="94" rx="8" ry="6" fill="#2C2C2C"/>
        <ellipse cx="16" cy="72" rx="6" ry="9" fill="#2C2C2C" transform="rotate(-20 16 72)"/>
        <ellipse cx="64" cy="65" rx="6" ry="9" fill="#2C2C2C" transform="rotate(30 64 65)"/>
        <ellipse cx="40" cy="75" rx="13" ry="15" fill="#F2B8AD" opacity="0.15"/>
        <circle cx="40" cy="38" r="22" fill="#fff" stroke="#F2B8AD" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="10" fill="#2C2C2C"/><circle cx="60" cy="20" r="10" fill="#2C2C2C"/>
        <circle cx="20" cy="20" r="6" fill="#fff"/><circle cx="60" cy="20" r="6" fill="#fff"/>
        <ellipse cx="30" cy="38" rx="7" ry="7" fill="#2C2C2C"/><ellipse cx="50" cy="38" rx="7" ry="7" fill="#2C2C2C"/>
        <circle cx="31" cy="37" r="3" fill="#fff"/><circle cx="51" cy="37" r="3" fill="#fff"/>
        <circle cx="32" cy="37" r="1.5" fill="#1A1A1A"/><circle cx="52" cy="37" r="1.5" fill="#1A1A1A"/>
        <ellipse cx="40" cy="44" rx="4" ry="2.5" fill="#F2B8AD" opacity="0.7"/>
        <path d="M35 49 Q40 53 45 49" stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
        <ellipse cx="22" cy="46" rx="5" ry="3" fill="#F2B8AD" opacity="0.35"/>
        <ellipse cx="58" cy="46" rx="5" ry="3" fill="#F2B8AD" opacity="0.35"/>
        <path d="M30 16 C30 13 35 13 40 15 C45 13 50 13 50 16 C50 18 45 17 40 16 C35 17 30 18 30 16Z" fill="#E8A598" opacity="0.9"/>
        <ellipse cx="40" cy="16" rx="3" ry="2.5" fill="#F5C5BC"/>
      </svg>
      <span style={{ fontFamily: "'Georgia', serif", fontSize: "22px", fontWeight: "300", color: "#2C2C2C", letterSpacing: "0.15em" }}>
        Anchal Bisht
      </span>
      <svg width="44" height="56" viewBox="0 0 80 100" fill="none" style={{ transform: "scaleX(-1)" }}>
        <ellipse cx="40" cy="72" rx="22" ry="26" fill="#fff" stroke="#F2B8AD" strokeWidth="1.5"/>
        <ellipse cx="28" cy="94" rx="8" ry="6" fill="#2C2C2C"/><ellipse cx="52" cy="94" rx="8" ry="6" fill="#2C2C2C"/>
        <ellipse cx="16" cy="72" rx="6" ry="9" fill="#2C2C2C" transform="rotate(-20 16 72)"/>
        <ellipse cx="64" cy="65" rx="6" ry="9" fill="#2C2C2C" transform="rotate(30 64 65)"/>
        <ellipse cx="40" cy="75" rx="13" ry="15" fill="#F2B8AD" opacity="0.15"/>
        <circle cx="40" cy="38" r="22" fill="#fff" stroke="#F2B8AD" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="10" fill="#2C2C2C"/><circle cx="60" cy="20" r="10" fill="#2C2C2C"/>
        <circle cx="20" cy="20" r="6" fill="#fff"/><circle cx="60" cy="20" r="6" fill="#fff"/>
        <ellipse cx="30" cy="38" rx="7" ry="7" fill="#2C2C2C"/><ellipse cx="50" cy="38" rx="7" ry="7" fill="#2C2C2C"/>
        <text x="27" y="41" fontSize="9" fill="#E8A598">♥</text>
        <text x="47" y="41" fontSize="9" fill="#E8A598">♥</text>
        <ellipse cx="40" cy="44" rx="4" ry="2.5" fill="#F2B8AD" opacity="0.7"/>
        <path d="M35 49 Q40 53 45 49" stroke="#2C2C2C" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
        <ellipse cx="22" cy="46" rx="5" ry="3" fill="#F2B8AD" opacity="0.35"/>
        <ellipse cx="58" cy="46" rx="5" ry="3" fill="#F2B8AD" opacity="0.35"/>
        <circle cx="40" cy="12" r="4" fill="#E8A598" opacity="0.8"/>
        <circle cx="40" cy="7" r="3" fill="#F5C5BC"/><circle cx="45" cy="10" r="3" fill="#F5C5BC"/><circle cx="35" cy="10" r="3" fill="#F5C5BC"/>
        <circle cx="40" cy="12" r="2.5" fill="#FFD700"/>
      </svg>
    </motion.div>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.4 }}
      style={{ position: "relative", zIndex: 4, fontFamily: "sans-serif", fontSize: "11px", color: "#E8A598", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "8px", textAlign: "center" }}>
      Building for the ones who need it most
    </motion.p>
  </motion.div>
);
// ── sections ──────────────────────────────────────────────────────────────────
const sections = [
  { id: "about",        label: "About",        variant: 0 },
  { id: "experience",   label: "Experience",   variant: 1 },
  { id: "certificates", label: "Certificates", variant: 2 },
  { id: "tech",         label: "Tech",         variant: 3 },
  { id: "work",         label: "Works",        variant: 4 },
  { id: "contact",      label: "Contact",      variant: 5 },
];

// ── Butterfly with FLAPPING wings (matches Butterflies.jsx exactly) ────────────
const FlapButterfly = ({ color, size, delay = 0 }) => (
  <>
    <style>{flapStyle}</style>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <ellipse className="wing" cx="14" cy="16" rx="12" ry="8"
        fill={color} opacity="0.6" transform="rotate(-20 14 16)"
        style={{ animationDelay: `${delay}s` }}/>
      <ellipse className="wing" cx="14" cy="26" rx="9" ry="6"
        fill={color} opacity="0.5" transform="rotate(20 14 26)"
        style={{ animationDelay: `${delay + 0.05}s` }}/>
      <ellipse className="wing" cx="26" cy="16" rx="12" ry="8"
        fill={color} opacity="0.6" transform="rotate(20 26 16)"
        style={{ animationDelay: `${delay}s` }}/>
      <ellipse className="wing" cx="26" cy="26" rx="9" ry="6"
        fill={color} opacity="0.5" transform="rotate(-20 26 26)"
        style={{ animationDelay: `${delay + 0.05}s` }}/>
      <ellipse cx="20" cy="20" rx="1.5" ry="7" fill="#2C2C2C" opacity="0.4"/>
    </svg>
  </>
);
// ── Burst of flapping butterflies on panda click ──────────────────────────────
const ButterflyBurst = ({ active }) => {
  if (!active) return null;
  const colors = ["#E8A598","#D4907E","#F2B8AD","#E8A598","#D4907E",
                  "#F2B8AD","#E8A598","#D4907E","#F2B8AD","#E8A598"];
  return (
    <>
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * 360;
        const rad   = (angle * Math.PI) / 180;
        const tx    = Math.cos(rad) * 90;
        const ty    = Math.sin(rad) * 90;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
            animate={{ opacity: 0, x: tx, y: ty, scale: 0.2, rotate: angle }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{
              position: "absolute", top: "50%", left: "50%",
              marginTop: -9, marginLeft: -9,
              pointerEvents: "none", zIndex: 20,
            }}
          >
            <FlapButterfly color={colors[i]} size={18} delay={i * 0.04} />
          </motion.div>
        );
      })}
    </>
  );
};

// ── MiniLanding ───────────────────────────────────────────────────────────────
const MiniLanding = ({ onEnter }) => {
  const [burstPanda,   setBurstPanda]   = useState(null);
  const [clickedPanda, setClickedPanda] = useState(null);
  // track which pandas have "arrived" so we stagger them truly one-by-one
  const [visibleCount, setVisibleCount] = useState(0);

  // After mount, reveal pandas one by one with a real timer chain
  useEffect(() => {
    let t;
    const reveal = (n) => {
      if (n > sections.length) return;
      setVisibleCount(n);
      t = setTimeout(() => reveal(n + 1), 200); // 200ms between each
    };
    // start after a short initial delay so photo/name appear first
    t = setTimeout(() => reveal(1), 900);
    return () => clearTimeout(t);
  }, []);

  const handlePandaClick = (id) => {
    if (clickedPanda) return;
    setBurstPanda(id);
    setClickedPanda(id);
    setTimeout(() => {
      onEnter();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }, 650);
  };

  const bgButterflies = [
    { x: "5%",  y: "8%",  size: 28, color: "#E8A598", delay: 0,   dur: 7  },
    { x: "90%", y: "12%", size: 24, color: "#D4907E", delay: 0.8, dur: 9  },
    { x: "15%", y: "78%", size: 26, color: "#E8A598", delay: 0.4, dur: 8  },
    { x: "82%", y: "72%", size: 22, color: "#D4907E", delay: 1.2, dur: 10 },
    { x: "48%", y: "4%",  size: 20, color: "#E8A598", delay: 0.6, dur: 6  },
    { x: "6%",  y: "45%", size: 18, color: "#D4907E", delay: 1.8, dur: 9  },
    { x: "93%", y: "48%", size: 20, color: "#E8A598", delay: 0.2, dur: 8  },
    { x: "30%", y: "88%", size: 22, color: "#D4907E", delay: 1.4, dur: 7  },
    { x: "70%", y: "90%", size: 18, color: "#E8A598", delay: 0.9, dur: 9  },
    { x: "22%", y: "18%", size: 16, color: "#D4907E", delay: 2.1, dur: 8  },
    { x: "75%", y: "22%", size: 20, color: "#E8A598", delay: 0.5, dur: 7  },
    { x: "55%", y: "92%", size: 16, color: "#D4907E", delay: 1.6, dur: 10 },
    { x: "38%", y: "35%", size: 22, color: "#E8A598", delay: 1.1, dur: 8  },
    { x: "62%", y: "55%", size: 18, color: "#D4907E", delay: 2.4, dur: 9  },
    { x: "12%", y: "32%", size: 20, color: "#E8A598", delay: 0.7, dur: 11 },
    { x: "85%", y: "38%", size: 16, color: "#D4907E", delay: 1.9, dur: 8  },
    { x: "42%", y: "68%", size: 24, color: "#E8A598", delay: 0.3, dur: 7  },
    { x: "78%", y: "55%", size: 18, color: "#D4907E", delay: 2.6, dur: 10 },
    { x: "25%", y: "52%", size: 20, color: "#E8A598", delay: 1.3, dur: 9  },
    { x: "60%", y: "15%", size: 22, color: "#D4907E", delay: 0.9, dur: 8  },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", inset: 0, background: "#FAF7F2",
        zIndex: 9000, overflowY: "auto",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "40px 16px", fontFamily: "'Georgia', serif",
      }}
    >
      {/* Background flapping butterflies */}
      {bgButterflies.map((b, i) => (
        <motion.div key={i}
          animate={{ x: [0, 25, -18, 30, 0], y: [0, -35, 18, -25, 0], opacity: [0.5, 0.85, 0.5, 0.85, 0.5] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "fixed", left: b.x, top: b.y, pointerEvents: "none", zIndex: 1 }}>
          <FlapButterfly color={b.color} size={b.size} delay={b.delay} />
        </motion.div>
      ))}

      {/* Photo frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.35 }}
        style={{ position: "relative", width: "180px", marginBottom: "28px", zIndex: 2 }}
      >
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", top: "-16px", left: "-16px", right: "-16px", bottom: "-16px", borderRadius: "50%", border: "1.5px dashed rgba(232,165,152,0.4)", pointerEvents: "none" }}/>
        <div style={{ width: "180px", height: "210px", borderRadius: "50% 50% 50% 50% / 45% 45% 55% 55%", overflow: "hidden", border: "3px solid rgba(232,165,152,0.5)", boxShadow: "0 12px 40px rgba(232,165,152,0.3)" }}>
          <img src="/logo.png" alt="Anchal" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        </div>
        <svg width="90" height="54" viewBox="0 0 120 70" style={{ position: "absolute", top: "-22px", left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
          <path d="M60 35 C45 20 15 10 10 25 C5 38 30 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
          <path d="M60 35 C75 20 105 10 110 25 C115 38 90 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
          <path d="M60 35 C50 42 35 55 28 65 C32 65 42 55 60 38Z" fill="#F2B8AD" opacity="0.8"/>
          <path d="M60 35 C70 42 85 55 92 65 C88 65 78 55 60 38Z" fill="#F2B8AD" opacity="0.8"/>
          <ellipse cx="60" cy="35" rx="7" ry="6" fill="#E8A598"/>
        </svg>
        {[
          { top: "5%",  left: "-28px", delay: 0,   size: 16 },
          { top: "40%", right: "-24px", delay: 0.6, size: 14 },
          { bottom: "15%", left: "-22px", delay: 1.2, size: 15 },
        ].map((b, i) => (
          <motion.div key={i}
            style={{ position: "absolute", top: b.top, left: b.left, right: b.right, bottom: b.bottom, zIndex: 4, pointerEvents: "none" }}
            animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: b.delay }}>
            <FlapButterfly color="#F2B8AD" size={b.size} delay={b.delay} />
          </motion.div>
        ))}
      </motion.div>

      {/* Name */}
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: "300", color: "#1A1A1A", letterSpacing: "-0.5px", marginBottom: "4px", textAlign: "center" }}>
        Anchal Bisht
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        style={{ fontSize: "12px", color: "#C4817A", fontStyle: "italic", marginBottom: "36px", textAlign: "center", fontFamily: "sans-serif" }}>
        Youth Advocate · Social Impact Technologist
      </motion.p>

      {/* Pandas grid — truly one-by-one via visibleCount */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "4px 16px",
        marginBottom: "36px",
        zIndex: 2, width: "100%", maxWidth: "400px",
      }}>
        {sections.map((sec, i) => {
          const isVisible = i < visibleCount;
          return (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: -50, rotate: -20, scale: 0.3 }}
              animate={isVisible
                ? { opacity: 1, y: 0, rotate: 0, scale: 1 }
                : { opacity: 0, y: -50, rotate: -20, scale: 0.3 }
              }
              transition={{ duration: 0.5, type: "spring", bounce: 0.7 }}
              onClick={() => handlePandaClick(sec.id)}
              whileHover={{
                scale: 1.18, y: -8,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.85, rotate: -10 }}
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", cursor: "pointer",
                position: "relative", padding: "6px 4px",
              }}
            >
              <ButterflyBurst active={burstPanda === sec.id} />

              <motion.div
                animate={clickedPanda === sec.id
                  ? { scale: [1, 1.4, 0.7, 1.2, 0], rotate: [0, -20, 20, -10, 0], y: [0, -20, 5, -10, 0] }
                  : { y: [0, -5, 0] }
                }
                transition={clickedPanda === sec.id
                  ? { duration: 0.6, ease: "easeInOut" }
                  : { duration: 2.2 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                }
              >
                <PandaSticker variant={sec.variant} size={60} />
              </motion.div>

              <span style={{
                fontSize: "10px", fontFamily: "sans-serif",
                color: "#7C7C7C", letterSpacing: "0.1em",
                textTransform: "uppercase", marginTop: "4px", fontWeight: "500",
              }}>
                {sec.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
        onClick={onEnter}
        whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(232,165,152,0.4)" }}
        whileTap={{ scale: 0.96 }}
        style={{
          padding: "13px 32px", background: "#E8A598", color: "#fff",
          borderRadius: "30px", border: "none", fontSize: "14px",
          fontFamily: "sans-serif", letterSpacing: "0.06em", fontWeight: "500",
          cursor: "pointer", boxShadow: "0 4px 20px rgba(232,165,152,0.3)",
          transition: "box-shadow 0.2s", zIndex: 2,
        }}
      >
        Open Full Portfolio 🌿
      </motion.button>
    </motion.div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
const App = () => {
  const [introVisible, setIntroVisible] = useState(true);
  const [showMini,     setShowMini]     = useState(false);
  const [showFull,     setShowFull]     = useState(false);

  const handleIntroComplete = () => {
    setIntroVisible(false);
    setTimeout(() => setShowMini(true), 500);
  };

  const handleEnterFull = () => {
    setShowMini(false);
    setShowFull(true);
  };

  return (
    <BrowserRouter>
      <AnimatePresence>
        {introVisible && <RibbonIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <AnimatePresence>
        {showMini && <MiniLanding onEnter={handleEnterFull} />}
      </AnimatePresence>
      <CursorTrail />
      <Butterflies />
      {showFull && (
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ background: "#FAF7F2", overflowX: "hidden", width: "100%", position: "relative" }}
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Certificates />
          <Tech />
          <Works />
          <Contact />
        </motion.div>
      )}
    </BrowserRouter>
  );
};

export default App;