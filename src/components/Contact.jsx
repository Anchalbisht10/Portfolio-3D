import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import PandaSticker from "./PandaSticker";

const Contact = () => {
  return (
    <div style={{
      background: "#FAF7F2",
      fontFamily: "'Georgia', serif",
      paddingBottom: "60px",
    }}>

      {/* Section label */}
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
         
    
    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PandaSticker variant={0} size={56} /> Get in touch
        </span>
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
        Let's build something that{" "}
        <em style={{ color: "#E8A598" }}>actually matters.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: "15px", color: "#7C7C7C",
          lineHeight: 1.8, maxWidth: "500px",
          marginBottom: "50px", fontFamily: "sans-serif",
        }}
      >
        If you are working on youth welfare, gender equity, mental health,
        or global development — I would genuinely love to connect.
      </motion.p>

      {/* Two column layout */}
      <div style={{
        display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        gap: "40px",
        alignItems: "start",
      }}>

        {/* LEFT — Contact info cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          {[
            {
              emoji: "✉️",
              label: "Email",
              value: "anchal001bisht@gmail.com",
              href: "mailto:anchal001bisht@gmail.com",
            },
            {
              emoji: "🌿",
              label: "Chianya — Live Project",
              value: "chianya.vercel.app",
              href: "https://chianya.vercel.app",
            },
            {
              emoji: "💼",
              label: "LinkedIn",
              value: "linkedin.com/in/anchal-bisht-39327b302",
              href: "https://linkedin.com/in/anchal-bisht-39327b302",
            },
            {
              emoji: "🐙",
              label: "GitHub",
              value: "github.com/Anchalbisht10",
              href: "https://github.com/Anchalbisht10",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ x: 4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 20px",
                background: "#fff",
                border: "1px solid rgba(232,165,152,0.2)",
                borderRadius: "14px",
                textDecoration: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = "rgba(232,165,152,0.5)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,165,152,0.15)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = "rgba(232,165,152,0.2)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.03)";
              }}
            >
              <span style={{ fontSize: "22px" }}>{item.emoji}</span>
              <div>
                <p style={{
                  fontSize: "10px", color: "#9C9C9C",
                  fontFamily: "sans-serif", letterSpacing: "0.1em",
                  textTransform: "uppercase", margin: "0 0 2px",
                }}>
                  {item.label}
                </p>
              <p style={{
                  fontSize: "13px", color: "#2C2C2C",
                  fontFamily: "sans-serif", margin: 0,
                  fontWeight: "500",
                  wordBreak: "break-all",
                }}>
                  {item.value}
                </p>
              </div>
              <span style={{
                marginLeft: "auto", fontSize: "16px",
                color: "#E8A598", opacity: 0.6,
              }}>↗</span>
            </motion.a>
          ))}

          {/* Resume button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(232,165,152,0.35)" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "15px 24px",
              background: "#E8A598",
              color: "#fff",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "sans-serif",
              letterSpacing: "0.06em",
              fontWeight: "500",
              marginTop: "6px",
              transition: "box-shadow 0.2s",
            }}
          >
            View Resume 📄
          </motion.a>
        </motion.div>

        {/* RIGHT — Intention card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            background: "#fff",
            border: "1px solid rgba(232,165,152,0.2)",
            borderRadius: "20px",
            padding: "36px 32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
          }}
        >
          {/* Top bow decoration */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <svg width="80" height="44" viewBox="0 0 80 44">
              <path d="M40 22 C30 12 8 6 5 16 C2 24 20 28 40 22Z"
                fill="#F2B8AD" opacity="0.85"/>
              <path d="M40 22 C50 12 72 6 75 16 C78 24 60 28 40 22Z"
                fill="#F2B8AD" opacity="0.85"/>
              <path d="M40 22 C34 28 24 38 20 43 C24 43 32 34 40 25Z"
                fill="#F2B8AD" opacity="0.7"/>
              <path d="M40 22 C46 28 56 38 60 43 C56 43 48 34 40 25Z"
                fill="#F2B8AD" opacity="0.7"/>
              <ellipse cx="40" cy="22" rx="5" ry="4" fill="#E8A598"/>
            </svg>
          </div>

          <p style={{
            fontSize: "15px", color: "#5C5C5C",
            lineHeight: 1.9, fontStyle: "italic",
            marginBottom: "24px", fontFamily: "'Georgia', serif",
          }}>
            "My goal is not just a job. It is to contribute to something that outlives any single project —
            a world where young people are heard, girls from small towns have a chance,
            and no one has to travel 100 kilometres to find a doctor."
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "8px",
            marginBottom: "24px",
          }}>
         {["UNESCO", "UNICEF", "UN Women", "WHO", "Erasmus 2027", "Türkiye Bursları 2027", "Stipendium Hungaricum 2027"].map((tag) => (
              <span key={tag} style={{
                fontSize: "11px", padding: "4px 12px",
                borderRadius: "20px",
                border: "1px solid rgba(122,158,126,0.3)",
                color: "#4A7A50",
                background: "rgba(122,158,126,0.06)",
                fontFamily: "sans-serif",
                letterSpacing: "0.04em",
              }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{
            fontSize: "13px", color: "#9C9C9C",
            fontFamily: "sans-serif", lineHeight: 1.7,
            margin: 0,
          }}>
            Based in Rishikesh, Uttarakhand, India · Open to remote and global opportunities
          </p>
        </motion.div>

      </div>

      {/* Footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: "60px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(232,165,152,0.2)",
          textAlign: "center",
        }}
      >
        <p style={{
          fontSize: "13px", color: "#B0B0B0",
          fontFamily: "sans-serif", letterSpacing: "0.05em",
        }}>
          © 2026 Anchal Bisht · Built with intention, not just code 🌿
        </p>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");