import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={{
      background: "#FAF7F2",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Georgia', serif",
    }}>

      <style>{`
   @media (max-width: 768px) {
          .hero-layout { flex-direction: column !important; gap: 16px !important; padding: 90px 24px 60px !important; align-items: center !important; }
          .hero-photo-col { display: flex !important; width: 200px !important; margin: 0 auto !important; transform: none !important; }
          .hero-photo-col > div { width: 200px !important; height: 240px !important; }
          .hero-text-col { max-width: 100% !important; }
          .hero-cta-row { flex-direction: column !important; gap: 10px !important; }
          .hero-cta-row a { text-align: center !important; }
          .hero-quote-card { display: none !important; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,165,152,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(122,158,126,0.14) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      {/* Floating dots */}
      {[
        { top: "12%", left: "6%", size: 7, color: "#E8A598" },
        { top: "22%", left: "18%", size: 4, color: "#7A9E7E" },
        { top: "68%", left: "4%", size: 5, color: "#E8A598" },
        { top: "82%", left: "14%", size: 3, color: "#7A9E7E" },
        { top: "8%", right: "12%", size: 4, color: "#7A9E7E" },
        { top: "58%", right: "6%", size: 6, color: "#E8A598" },
        { top: "88%", right: "18%", size: 3, color: "#E8A598" },
      ].map((dot, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          style={{
            position: "absolute",
            top: dot.top, left: dot.left, right: dot.right,
            width: dot.size, height: dot.size,
            borderRadius: "50%", background: dot.color, pointerEvents: "none",
          }}
        />
      ))}

      {/* Main layout */}
      <div className="hero-layout" style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "100px 60px 80px",
        display: "flex", flexDirection: "row",
        alignItems: "center", justifyContent: "space-between",
        gap: "80px", width: "100%", boxSizing: "border-box",
      }}>

        {/* LEFT TEXT */}
        <motion.div
          className="hero-text-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ flex: 1, maxWidth: "560px" }}
        >
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "11px", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#7A9E7E",
              marginBottom: "14px", fontFamily: "sans-serif",
            }}>
            Building technology for the ones who need it most
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: "clamp(36px, 5.5vw, 68px)",
              fontWeight: "300", color: "#1A1A1A",
              lineHeight: 1.05, marginBottom: "10px",
              letterSpacing: "-2px",
            }}>
            Anchal Bisht
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{
              fontSize: "15px", color: "#C4817A",
              marginBottom: "26px", fontStyle: "italic",
              letterSpacing: "0.03em",
            }}>
            Youth Advocate · Social Impact Technologist · Founder of Chianya
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            style={{ marginBottom: "32px" }}>
            <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "16px" }}>
              I finished my B.Tech and instead of updating my resume with frameworks,
              I asked myself one question:
            </p>
            <p style={{
              fontSize: "18px", color: "#1A1A1A",
              fontStyle: "italic", lineHeight: 1.6,
              borderLeft: "3px solid #E8A598",
              paddingLeft: "20px", marginBottom: "16px",
            }}>
              "What actually needs to be built?"
            </p>
            <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.85 }}>
              The answer was not another app. It was a forest.
            </p>
          </motion.div>

          {/* SDG badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
            {["🌱 SDG 3", "📚 SDG 4", "♀ SDG 5", "🤝 SDG 10"].map((tag) => (
              <span key={tag} style={{
                fontSize: "12px", padding: "5px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(122,158,126,0.4)",
                color: "#4A7A50",
                background: "rgba(122,158,126,0.07)",
                fontFamily: "sans-serif", letterSpacing: "0.04em",
              }}>{tag}</span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="https://chianya.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{
                padding: "13px 30px",
                background: "#E8A598", color: "#fff",
                borderRadius: "30px", textDecoration: "none",
                fontSize: "14px", fontFamily: "sans-serif",
                letterSpacing: "0.05em", fontWeight: "500",
                boxShadow: "0 4px 20px rgba(232,165,152,0.35)",
                transition: "transform 0.2s",
              }}>
              Visit Chianya 🌿
            </a>
            <a href="#work"
              style={{
                padding: "13px 30px",
                background: "transparent", color: "#2C2C2C",
                borderRadius: "30px",
                border: "1.5px solid #2C2C2C",
                textDecoration: "none",
                fontSize: "14px", fontFamily: "sans-serif",
                letterSpacing: "0.05em",
              }}>
              See My Work
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo (hidden on mobile) */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
    style={{ flex: "0 0 auto", position: "relative", width: "340px", minWidth: "0" }}
        >
          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              top: "-20px", left: "-20px", right: "-20px", bottom: "-20px",
              borderRadius: "50%",
              border: "1.5px dashed rgba(232,165,152,0.35)",
              pointerEvents: "none",
            }}
          />
          <div style={{
            position: "absolute",
            top: "-32px", left: "-32px", right: "-32px", bottom: "-32px",
            borderRadius: "50%",
            border: "1px solid rgba(122,158,126,0.15)",
            pointerEvents: "none",
          }}/>

          {/* Photo */}
          <div style={{
            width: "320px", height: "380px",
            borderRadius: "50% 50% 50% 50% / 45% 45% 55% 55%",
            overflow: "hidden",
            border: "3px solid rgba(232,165,152,0.4)",
            position: "relative", zIndex: 1,
            boxShadow: "0 20px 60px rgba(232,165,152,0.25), 0 0 0 8px rgba(232,165,152,0.06)",
          }}>
            <img src="/logo.png" alt="Anchal Bisht"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "40%",
              background: "linear-gradient(to top, rgba(232,165,152,0.2), transparent)",
            }}/>
          </div>

          {/* BOW */}
          <svg width="120" height="70" viewBox="0 0 120 70"
            style={{
              position: "absolute", top: "-28px", left: "50%",
              transform: "translateX(-50%)", zIndex: 3,
              filter: "drop-shadow(0 2px 6px rgba(232,165,152,0.4))",
            }}
          >
            <path d="M60 35 C45 20 15 10 10 25 C5 38 30 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
            <path d="M60 35 C45 22 20 18 18 28 C16 36 35 40 60 35Z" fill="#E8A598" opacity="0.6"/>
            <path d="M60 35 C75 20 105 10 110 25 C115 38 90 45 60 35Z" fill="#F2B8AD" opacity="0.9"/>
            <path d="M60 35 C75 22 100 18 102 28 C104 36 85 40 60 35Z" fill="#E8A598" opacity="0.6"/>
            <path d="M60 35 C50 42 35 55 28 65 C32 65 42 55 60 38Z" fill="#F2B8AD" opacity="0.8"/>
            <path d="M60 35 C70 42 85 55 92 65 C88 65 78 55 60 38Z" fill="#F2B8AD" opacity="0.8"/>
            <ellipse cx="60" cy="35" rx="7" ry="6" fill="#E8A598"/>
            <ellipse cx="60" cy="35" rx="4" ry="3.5" fill="#F5C5BC"/>
          </svg>

          {/* Small butterflies */}
          {[
            { top: "10%", left: "-30px", delay: 0, size: 20 },
            { top: "30%", right: "-25px", delay: 0.8, size: 16 },
            { bottom: "20%", left: "-20px", delay: 1.5, size: 18 },
            { bottom: "10%", right: "-20px", delay: 0.4, size: 14 },
          ].map((b, i) => (
            <motion.div key={i}
              style={{
                position: "absolute",
                top: b.top, left: b.left, right: b.right, bottom: b.bottom,
                zIndex: 2, pointerEvents: "none",
              }}
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: b.delay }}
            >
              <svg width={b.size} height={b.size} viewBox="0 0 40 40" fill="none">
                <ellipse cx="14" cy="16" rx="12" ry="8" fill="#F2B8AD" opacity="0.7" transform="rotate(-20 14 16)"/>
                <ellipse cx="14" cy="26" rx="9" ry="6" fill="#E8A598" opacity="0.6" transform="rotate(20 14 26)"/>
                <ellipse cx="26" cy="16" rx="12" ry="8" fill="#F2B8AD" opacity="0.7" transform="rotate(20 26 16)"/>
                <ellipse cx="26" cy="26" rx="9" ry="6" fill="#E8A598" opacity="0.6" transform="rotate(-20 26 26)"/>
                <ellipse cx="20" cy="20" rx="1.5" ry="7" fill="#2C2C2C" opacity="0.3"/>
              </svg>
            </motion.div>
          ))}

          {/* Floating quote card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hero-quote-card"
            style={{
              position: "absolute", bottom: "-15px", left: "-70px",
              background: "#fff", borderRadius: "14px",
              padding: "14px 18px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.07)",
              maxWidth: "190px", zIndex: 2,
              borderLeft: "3px solid #E8A598",
            }}
          >
            <p style={{
              fontSize: "12px", color: "#5C5C5C",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic", lineHeight: 1.6, margin: 0,
            }}>
              "No one should have to carry this alone."
            </p>
            <p style={{
              fontSize: "10px", color: "#E8A598",
              fontFamily: "sans-serif", margin: "6px 0 0",
              letterSpacing: "0.05em",
            }}>— Chianya 🌿</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <div style={{
        position: "absolute", bottom: "32px",
        left: "50%", transform: "translateX(-50%)",
      }}>
        <a href="#about" style={{ textDecoration: "none" }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{
              width: "22px", height: "22px",
              border: "2px solid #E8A598",
              borderTop: "none", borderLeft: "none",
              transform: "rotate(45deg)",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;