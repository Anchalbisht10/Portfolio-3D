import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import PandaSticker from "./PandaSticker";

const projects = [
  {
    name: "Chianya — Forest of Consciousness",
    tagline: "A digital sanctuary for youth who are carrying something heavy.",
    description: "An AI-powered emotional wellbeing platform for youth aged 16–28. A living 3D forest that responds to how you feel. AI companion Antar with crisis detection routed to real helplines. Letter to Future Self delivered 30 days later. Built because the 11 PM moment deserved a real answer.",
    tags: ["React", "Three.js", "Node.js", "MongoDB", "Groq AI"],
    sdgs: ["SDG 3", "SDG 4"],
    status: "live",
    color: "#7A9E7E",
    bg: "rgba(122,158,126,0.06)",
    border: "rgba(122,158,126,0.2)",
    emoji: "🌿",
    image: "/projects/chianya.png",
    live_link: "https://chianya.vercel.app",
    github_link: "https://github.com/Anchalbisht10/Chianya",
  },
  {
    name: "KAIROS — For the First-Generation Girl",
    tagline: "An AI older sister for girls from small towns who have no one to guide them.",
    description: "A scholarship and guidance platform for first-generation college girls from Tier 2/3 Indian cities. AI mentor KAI helps them find scholarships, navigate careers, and know they are not alone. 35+ real scholarships seeded across 7 states.",
    tags: ["React", "Node.js", "MongoDB", "Groq AI"],
    sdgs: ["SDG 4", "SDG 5"],
    status: "in development",
   color: "#8B7EC8",
bg: "rgba(88, 57, 225, 0.06)",
border: "rgba(139,126,200,0.22)",
    emoji: "🎓",
    image: "/projects/kairos.png",
    live_link: null,
    github_link: "https://github.com/Anchalbisht10",
  },
  {
    name: "OjasVyn — Rural Healthcare Access",
    tagline: "Because healthcare is not a privilege that distance should deny.",
    description: "A bilingual Hindi/English platform connecting rural Indians to government hospitals and Ayurvedic health guidance via AI. Covers 20+ states and 1,400+ government facilities. Zero cost. Zero registration.",
    tags: ["React", "Node.js", "MongoDB", "Groq AI"],
    sdgs: ["SDG 3", "SDG 10"],
    status: "in development",
   color: "#2A9D8F",
bg: "rgba(42,157,143,0.06)",
border: "rgba(42,157,143,0.2)",
    emoji: "🏥",
    image: "/projects/ojas.png",
    live_link: null,
    github_link: "https://github.com/Anchalbisht10",
  },
];

const ProjectCard = ({ project, index }) => {
  const isChianya = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 50px ${project.color}30`,
        rotateX: 2,
      }}
 style={{
        background: "#fff",
        border: `1px solid ${project.border}`,
        borderRadius: "20px",
        width: "100%",
        maxWidth: "100%",
        minWidth: "0",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Georgia', serif",
        boxShadow: isChianya
          ? `0 8px 40px ${project.color}25`
          : "0 2px 20px rgba(0,0,0,0.04)",
        transform: isChianya ? "none" : "none",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
    >
      {/* Top color band */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: isChianya ? "5px" : "3px",
        background: project.color,
        borderRadius: "20px 20px 0 0",
      }}/>

{/* Project image preview */}
<div style={{
  width: "100%",
  height: isChianya ? "200px" : "160px",
  overflow: "hidden",
  position: "relative",
  marginTop: "3px",
}}>
  <img
    src={project.image}
    alt={project.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      transition: "transform 0.4s ease",
      filter: index === 0 ? "none" : "saturate(0.7) brightness(1.1)",
    }}
    onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
  />
  {/* Warm tint overlay — makes dark screenshots feel warm */}
  <div style={{
    position: "absolute", inset: 0,
    background: index === 0
      ? "linear-gradient(to bottom, transparent 50%, rgba(122,158,126,0.15) 100%)"
      : `linear-gradient(to bottom, ${project.color}22 0%, ${project.color}44 100%)`,
    mixBlendMode: "multiply",
  }}/>
</div>
     

      {/* Card body */}
      <div style={{ padding: "24px 24px 20px" }}>

        {/* Emoji + Status */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: "14px",
        }}>
          <span style={{ fontSize: isChianya ? "32px" : "26px" }}>{project.emoji}</span>
          <span style={{
            fontSize: "10px", padding: "4px 12px",
            borderRadius: "20px",
            background: project.status === "live"
              ? "rgba(122,158,126,0.12)" : "rgba(232,165,152,0.1)",
            color: project.status === "live" ? "#4A7A50" : "#C4817A",
            border: `1px solid ${project.border}`,
            fontFamily: "sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: "500",
          }}>
            {project.status === "live" ? "✦ Live" : "In Development"}
          </span>
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: isChianya ? "18px" : "16px",
          fontWeight: "600", color: "#1A1A1A",
          marginBottom: "6px", lineHeight: 1.3,
          fontFamily: "sans-serif",
        }}>
          {project.name}
        </h3>

        {/* Tagline */}
        <p style={{
          fontSize: "12px", color: project.color,
          fontStyle: "italic", marginBottom: "12px", lineHeight: 1.5,
        }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p style={{
          fontSize: "12px", color: "#6C6C6C",
          lineHeight: 1.8, marginBottom: "16px",
          fontFamily: "sans-serif",
        }}>
          {project.description}
        </p>

        {/* SDG badges */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
          {project.sdgs.map((sdg) => (
            <span key={sdg} style={{
              fontSize: "10px", padding: "3px 10px",
              borderRadius: "12px",
              background: "rgba(122,158,126,0.08)",
              color: "#4A7A50",
              border: "1px solid rgba(122,158,126,0.2)",
              fontFamily: "sans-serif", letterSpacing: "0.05em",
            }}>
              {sdg}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "20px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "10px", padding: "3px 9px",
              borderRadius: "12px",
              background: "rgba(44,44,44,0.05)",
              color: "#888", fontFamily: "sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "10px" }}>
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, padding: "10px 0",
                background: project.color, color: "#fff",
                borderRadius: "20px", textDecoration: "none",
                fontSize: "12px", fontFamily: "sans-serif",
                letterSpacing: "0.06em", textAlign: "center",
                fontWeight: "500", transition: "opacity 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
              onMouseOut={e => e.currentTarget.style.opacity = "1"}
            >
              Visit Live 🌐
            </a>
          )}
          <a href={project.github_link} target="_blank" rel="noopener noreferrer"
            style={{
              flex: project.live_link ? "0 0 auto" : 1,
              padding: "10px 16px",
              background: "transparent", color: "#5C5C5C",
              borderRadius: "20px",
              border: "1px solid rgba(44,44,44,0.15)",
              textDecoration: "none", fontSize: "12px",
              fontFamily: "sans-serif", letterSpacing: "0.05em",
              textAlign: "center", transition: "border-color 0.2s",
            }}
            onMouseOver={e => e.currentTarget.style.borderColor = project.color}
            onMouseOut={e => e.currentTarget.style.borderColor = "rgba(44,44,44,0.15)"}
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div style={{
      background: "#FAF7F2",
      padding: "20px 0 60px",
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
        <PandaSticker variant={4} size={56} /> My Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: "300", color: "#2C2C2C",
          lineHeight: 1.15, marginBottom: "16px",
          letterSpacing: "-0.5px",
        }}
      >
        Three platforms. Three problems.<br />
        <em style={{ color: "#E8A598" }}>One intention.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: "15px", color: "#7C7C7C",
          lineHeight: 1.8, maxWidth: "560px",
          marginBottom: "50px", fontFamily: "sans-serif",
        }}
      >
        I do not build projects for portfolios. I build them because the
        problems are real and the people who need them deserve more than
        a prototype that never ships.
      </motion.p>
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
  gap: "24px",
  width: "100%",
}}>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          marginTop: "50px", padding: "24px 28px",
          background: "rgba(232,165,152,0.07)",
          borderRadius: "14px",
          border: "1px solid rgba(232,165,152,0.2)",
          display: "flex", alignItems: "center", gap: "16px",
        }}
      >
        <span style={{ fontSize: "24px" }}>🎯</span>
        <p style={{
          fontSize: "14px", color: "#5C5C5C",
          lineHeight: 1.7, fontFamily: "sans-serif", margin: 0,
        }}>
          All three platforms are aligned with United Nations Sustainable Development Goals and built
          toward a career in international organizations —{" "}
          <strong style={{ color: "#2C2C2C" }}>UNESCO, UNICEF, UN Women, WHO.</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "work");