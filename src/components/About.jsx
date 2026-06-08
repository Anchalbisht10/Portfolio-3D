import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import PandaSticker from "./PandaSticker";

const About = () => {
  return (
    <div style={{
      background: "#FAF7F2",
      fontFamily: "'Georgia', serif",
      paddingBottom: "40px",
    }}>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#7A9E7E",
          marginBottom: "12px",
          fontFamily: "sans-serif",
        }}
      >
        <PandaSticker variant={0} size={56} />  Who I Am
      
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(26px, 4vw, 42px)",
          fontWeight: "300",
          color: "#2C2C2C",
          lineHeight: 1.2,
          marginBottom: "40px",
          letterSpacing: "-0.5px",
        }}
      >
        A builder who believes technology<br />
        can hold space for{" "}
        <em style={{ color: "#E8A598" }}>human emotion.</em>
      </motion.h2>

      {/* Two column text */}
      <div style={{
        display: "grid",
     gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
        gap: "40px",
        marginBottom: "50px",
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ fontSize: "15px", color: "#5C5C5C", lineHeight: 1.9, marginBottom: "18px" }}>
            I am Anchal Bisht from Rishikesh, Uttarakhand.
            I finished my B.Tech in Computer Science and immediately turned
            toward the work that actually keeps me awake at night.
          </p>
          <p style={{ fontSize: "15px", color: "#5C5C5C", lineHeight: 1.9, marginBottom: "18px" }}>
            Young people who are suffering silently. Girls from small towns
            who have no one to guide them. Rural communities that cannot
            find a doctor.
          </p>
          <p style={{ fontSize: "16px", color: "#2C2C2C", lineHeight: 1.9, fontStyle: "italic" }}>
            So I built for them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p style={{ fontSize: "15px", color: "#5C5C5C", lineHeight: 1.9, marginBottom: "18px" }}>
            My goal is to reach international organizations — UNESCO,
            UNICEF, UN Women, WHO — and work on the problems that
            actually matter. Youth mental health. Gender equity.
            Healthcare access.
          </p>
          <p style={{ fontSize: "15px", color: "#5C5C5C", lineHeight: 1.9 }}>
            I am pursuing a fully-funded Masters abroad through scholarship
            as the next step toward that. Every project I build is a step closer.
          </p>
        </motion.div>
      </div>

      {/* Four impact cards */}
      <div style={{
        display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        gap: "16px",
        marginBottom: "40px",
      }}>
        {[
          {
            emoji: "🌿",
            title: "Youth Mental Health",
            desc: "Building spaces where young people can arrive exactly as they are.",
            color: "#7A9E7E",
            bg: "rgba(122,158,126,0.07)",
            border: "rgba(122,158,126,0.22)",
          },
          {
            emoji: "🎓",
            title: "Educational Equity",
            desc: "Helping first-generation girls find the path no one showed them.",
            color: "#E8A598",
            bg: "rgba(232,165,152,0.07)",
            border: "rgba(232,165,152,0.25)",
          },
          {
            emoji: "🏥",
            title: "Healthcare Access",
            desc: "Connecting rural communities to care that distance should never deny.",
            color: "#7A9E7E",
            bg: "rgba(122,158,126,0.07)",
            border: "rgba(122,158,126,0.22)",
          },
          {
            emoji: "🌍",
            title: "Global Development",
            desc: "Targeting UNESCO, UNICEF, UN Women — work that builds a better world.",
            color: "#E8A598",
            bg: "rgba(232,165,152,0.07)",
            border: "rgba(232,165,152,0.25)",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.07)" }}
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
              borderRadius: "16px",
              padding: "24px 20px",
              transition: "box-shadow 0.2s",
            }}
          >
            <div style={{ fontSize: "26px", marginBottom: "10px" }}>{item.emoji}</div>
            <h3 style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2C2C2C",
              marginBottom: "6px",
              fontFamily: "sans-serif",
            }}>
              {item.title}
            </h3>
            <p style={{
              fontSize: "12px",
              color: "#7C7C7C",
              lineHeight: 1.7,
              fontFamily: "sans-serif",
              margin: 0,
            }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote callout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          padding: "24px 28px",
          background: "rgba(232,165,152,0.07)",
          borderLeft: "3px solid #E8A598",
          borderRadius: "0 12px 12px 0",
        }}
      >
        <p style={{
          fontSize: "15px",
          color: "#5C5C5C",
          lineHeight: 1.85,
          fontStyle: "italic",
          margin: 0,
        }}>
          "I train with UNICEF. I study child communication, youth wellbeing,
          and global development policy — not for certificates, but because
          I am genuinely preparing for the work ahead."
        </p>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(About, "about");