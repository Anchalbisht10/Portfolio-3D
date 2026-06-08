import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import PandaSticker from "./PandaSticker";

const Tech = () => {
  return (
    <div style={{
      background: "#FAF7F2",
      paddingBottom: "20px",
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
          textAlign: "center",
        }}
      >
        <PandaSticker variant={3} size={56} /> What I work with
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(24px, 3.5vw, 38px)",
          fontWeight: "300", color: "#2C2C2C",
          lineHeight: 1.2, marginBottom: "14px",
          letterSpacing: "-0.5px", textAlign: "center",
        }}
      >
        Technology as a{" "}
        <em style={{ color: "#E8A598" }}>tool for people.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "14px", color: "#9C9C9C",
          textAlign: "center", marginBottom: "40px",
          fontFamily: "sans-serif", lineHeight: 1.7,
        }}
      >
        Not an end in itself — a means to reach the people who need it most.
      </motion.p>

      {/* Tech pills */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "14px",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(232,165,152,0.2)" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              background: "#fff",
              border: "1px solid rgba(232,165,152,0.2)",
              borderRadius: "30px",
              cursor: "default",
              transition: "box-shadow 0.2s",
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: "22px", height: "22px", objectFit: "contain" }}
            />
            <span style={{
              fontSize: "13px",
              color: "#4A4A4A",
              fontFamily: "sans-serif",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Social impact skills below */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          marginTop: "36px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {[
          "Social Impact Technology",
          "Youth Development",
          "AI for Social Good",
          "SDG Implementation",
          "Community Building",
          "French (in progress)",
        ].map((skill, i) => (
          <span key={i} style={{
            fontSize: "12px",
            padding: "6px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(122,158,126,0.3)",
            color: "#4A7A50",
            background: "rgba(122,158,126,0.06)",
            fontFamily: "sans-serif",
            letterSpacing: "0.04em",
          }}>
            {skill}
          </span>
        ))}
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Tech, "");