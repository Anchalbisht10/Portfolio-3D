import { motion } from "framer-motion";
import { useState } from "react";
import PandaSticker from "./PandaSticker";
import { SectionWrapper } from "../hoc";

const certificates = [
  {
    title: "Harnessing the Power of Data to End Harmful Practices",
    org: "UNICEF",
    date: "May 2026",
    emoji: "🌐",
    color: "#1CABE2",
    bg: "rgba(28,171,226,0.06)",
    border: "rgba(28,171,226,0.2)",
    link: "/certificates/unicef.pdf",
    category: "global",
  },
  {
    title: "Making Decentralization Work for Children",
    org: "UNICEF",
    date: "May 2026",
    emoji: "👶",
    color: "#1CABE2",
    bg: "rgba(28,171,226,0.06)",
    border: "rgba(28,171,226,0.2)",
    link: "/certificates/unicef_2.pdf",
    category: "global",
  },
  {
    title: "Words Matter: Communicating with Children So They Thrive",
    org: "FutureLearn",
    date: "May 2026",
    emoji: "💬",
    color: "#E8A598",
    bg: "rgba(232,165,152,0.06)",
    border: "rgba(232,165,152,0.22)",
  link: "/certificates/childthrive.pdf",
    category: "youth",
  },
  {
    title: "The Psychology of Wellbeing",
    org: "University of Aberdeen",
    date: "May 2026",
    emoji: "🧠",
    color: "#7A9E7E",
    bg: "rgba(122,158,126,0.06)",
    border: "rgba(122,158,126,0.22)",
    link: "/certificates/wellbeing.pdf",
    category: "youth",
  },
  {
    title: "Art and the Environment in Southeast Asia",
    org: "National Gallery Singapore",
    date: "May 2026",
    emoji: "🎨",
    color: "#E8A598",
    bg: "rgba(232,165,152,0.06)",
    border: "rgba(232,165,152,0.22)",
       link: "/certificates/southeastasia.pdf",
    category: "global",
  },
  {
    title: "Emotion: An Introductory Picture",
    org: "The Open University",
    date: "Aug 2024",
    emoji: "💭",
    color: "#7A9E7E",
    bg: "rgba(122,158,126,0.06)",
    border: "rgba(122,158,126,0.22)",
    link: "/certificates/AA308_2_statement.pdf",
    category: "youth",
  },
  {
    title: "Advanced French: At the Science Museum in Paris",
    org: "The Open University",
    date: "Aug 2024",
    emoji: "🇫🇷",
    color: "#8B7EC8",
    bg: "rgba(139,126,200,0.06)",
    border: "rgba(139,126,200,0.22)",
    link: "/certificates/FRENCH.pdf",
    category: "language",
  },
 
];
const CertCard = ({ cert, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => setFlipped(!flipped)}
  style={{
        width: "min(260px, 100%)",
        height: "160px",
        perspective: "1000px",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <div style={{
        width: "100%",
        height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>

        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          background: "#fff",
          border: `1px solid ${cert.border}`,
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}>
          {/* Top band */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "3px", background: cert.color,
            borderRadius: "16px 16px 0 0",
          }}/>

          <div>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", marginBottom: "10px",
            }}>
              <span style={{ fontSize: "24px" }}>{cert.emoji}</span>
              <span style={{
                fontSize: "9px", padding: "3px 8px",
                borderRadius: "10px", background: cert.bg,
                color: cert.color, border: `1px solid ${cert.border}`,
                fontFamily: "sans-serif", letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}>
                {cert.org}
              </span>
            </div>
            <p style={{
              fontSize: "12px", color: "#2C2C2C",
              fontFamily: "sans-serif", fontWeight: "500",
              lineHeight: 1.5, margin: 0,
            }}>
              {cert.title}
            </p>
          </div>

          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{
              fontSize: "10px", color: "#9C9C9C",
              fontFamily: "sans-serif",
            }}>
              {cert.date}
            </span>
            <span style={{
              fontSize: "10px", color: cert.color,
              fontFamily: "sans-serif",
            }}>
              tap to flip ↻
            </span>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: cert.bg,
          border: `1px solid ${cert.border}`,
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          textAlign: "center",
        }}>
          <span style={{ fontSize: "32px" }}>{cert.emoji}</span>
          <p style={{
            fontSize: "11px", color: "#5C5C5C",
            fontFamily: "sans-serif", lineHeight: 1.6,
            margin: 0,
          }}>
            Issued by <strong style={{ color: cert.color }}>{cert.org}</strong>
            <br />{cert.date}
          </p>
        
        {cert.link ? (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={e => e.stopPropagation()}
    style={{
      fontSize: "11px", padding: "7px 16px",
      borderRadius: "20px", background: cert.color,
      color: "#fff", textDecoration: "none",
      fontFamily: "sans-serif", letterSpacing: "0.05em",
      display: "flex", alignItems: "center", gap: "6px",
    }}
  >
    📄 View Certificate ↗
  </a>
) : (
  <span style={{
    fontSize: "10px", color: "#9C9C9C",
    fontFamily: "sans-serif", fontStyle: "italic",
  }}>
    Certificate available on request
  </span>
)}

        </div>

      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div style={{
      background: "#FAF7F2",
      paddingBottom: "40px",
      fontFamily: "'Georgia', serif",
    }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "11px", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "#7A9E7E",
          marginBottom: "12px", fontFamily: "sans-serif",
        }}
      >
        <PandaSticker variant={2} size={56} /> Credentials
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(26px, 4vw, 42px)",
          fontWeight: "300", color: "#2C2C2C",
          lineHeight: 1.2, marginBottom: "12px",
          letterSpacing: "-0.5px",
        }}
      >
        Not for certificates —{" "}
        <em style={{ color: "#E8A598" }}>for the work ahead.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: "14px", color: "#9C9C9C",
          marginBottom: "40px", fontFamily: "sans-serif",
          lineHeight: 1.7,
        }}
      >
        Tap any card to flip and verify. These are the courses I chose
        because I am genuinely preparing — not performing.
      </motion.p>

      {/* Cards — horizontal scroll on mobile, wrap on desktop */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "flex-start",
      }}>
        {certificates.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: "36px",
          padding: "18px 24px",
          background: "rgba(122,158,126,0.06)",
          borderRadius: "12px",
          border: "1px solid rgba(122,158,126,0.15)",
          display: "flex", alignItems: "center", gap: "12px",
        }}
      >
        <span style={{ fontSize: "18px" }}>📋</span>
        <p style={{
          fontSize: "13px", color: "#7C7C7C",
          fontFamily: "sans-serif", margin: 0, lineHeight: 1.6,
        }}>
          Technical certifications also completed — JPMorgan Chase, Accenture, YBI Foundation AI/ML, SSC Full Stack A+.
          Available on request.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");