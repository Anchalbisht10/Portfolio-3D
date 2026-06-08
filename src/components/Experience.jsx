import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import PandaSticker from "./PandaSticker";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#fff",
        color: "#2C2C2C",
        border: "1px solid rgba(232,165,152,0.25)",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(232,165,152,0.3)" }}
      date={experience.date}
      dateClassName="experience-date"
      iconStyle={{
        background: experience.iconBg || "#FAF0F0",
        border: "2px solid rgba(232,165,152,0.35)",
        boxShadow: "0 0 0 3px rgba(232,165,152,0.1)",
      }}
      icon={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: "60%", height: "60%", objectFit: "contain" }}
          />
        </div>
      }
    >
      {/* Title + company */}
      <div style={{ marginBottom: "12px" }}>
        <h3 style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#1A1A1A",
          fontFamily: "'Georgia', serif",
          marginBottom: "4px",
        }}>
          {experience.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <p style={{
            fontSize: "13px",
            color: "#7A9E7E",
            fontFamily: "sans-serif",
            fontWeight: "500",
            margin: 0,
          }}>
            {experience.company_name}
          </p>
          {experience.certificate && (
            <button
              onClick={() => window.open(experience.certificate, "_blank")}
              style={{
                fontSize: "10px",
                padding: "3px 12px",
                borderRadius: "20px",
                border: "1px solid rgba(232,165,152,0.5)",
                background: "rgba(232,165,152,0.08)",
                color: "#C4817A",
                cursor: "pointer",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#E8A598";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(232,165,152,0.08)";
                e.currentTarget.style.color = "#C4817A";
              }}
            >
              View Certificate ↗
            </button>
          )}
        </div>
      </div>

      {/* Points */}
      <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
        {experience.points.map((point, index) => (
          <li
            key={index}
            style={{
              fontSize: "13px",
              color: "#6C6C6C",
              lineHeight: 1.8,
              fontFamily: "sans-serif",
              marginBottom: "4px",
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div style={{ background: "#FAF7F2", fontFamily: "'Georgia', serif" }}>

      <style>{`
        .vertical-timeline::before { background: rgba(232,165,152,0.3) !important; }
        .experience-date { color: #C4817A !important; font-family: sans-serif !important; font-size: 13px !important; }
      `}</style>

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
        <PandaSticker variant={1} size={56} /> What I have done so far
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(26px, 4vw, 42px)",
          fontWeight: "300", color: "#2C2C2C",
          lineHeight: 1.2, marginBottom: "50px",
          letterSpacing: "-0.5px", textAlign: "center",
        }}
      >
        Training &{" "}
        <em style={{ color: "#E8A598" }}>Experience.</em>
      </motion.h2>

      <VerticalTimeline lineColor="rgba(232,165,152,0.25)">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

    </div>
  );
};

export default SectionWrapper(Experience, "work");