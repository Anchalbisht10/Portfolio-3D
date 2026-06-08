import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .nav-logo-text { font-size: 14px !important; }
        }
        @media (min-width: 641px) {
          .nav-desktop-links { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 20,
        padding: "14px 24px",
        background: scrolled ? "rgba(250,247,242,0.97)" : "rgba(250,247,242,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(232,165,152,0.2)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxSizing: "border-box",
      }}>

        {/* LOGO */}
        <Link to="/" onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" fill="#FAF0F0" stroke="#E8A598" strokeWidth="1.2"/>
            <path d="M18 28 L18 16" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 21 C15 19 11 15 13 11 C15.5 11 18 15 18 18" fill="#7A9E7E" opacity="0.9"/>
            <path d="M18 19 C21 17 25 13 23 9 C20.5 9 18 13 18 16" fill="#A8C5A0" opacity="0.85"/>
            <circle cx="24" cy="23" r="1.5" fill="#E8A598"/>
            <path d="M14 7 C14 5 16 5 18 6 C20 5 22 5 22 7 C22 8.5 20 8 18 7 C16 8 14 8.5 14 7Z"
              fill="#E8A598" opacity="0.7"/>
          </svg>
          <span className="nav-logo-text" style={{
            fontFamily: "'Georgia', serif",
            fontSize: "16px", fontWeight: "400",
            color: "#2C2C2C", letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}>
            Anchal Bisht
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-desktop-links" style={{
          listStyle: "none", gap: "32px", margin: 0, padding: 0,
        }}>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                style={{
                  textDecoration: "none", fontFamily: "sans-serif",
                  fontSize: "14px", letterSpacing: "0.06em",
                  color: active === nav.title ? "#E8A598" : "#5C5C5C",
                  borderBottom: active === nav.title ? "1px solid #E8A598" : "1px solid transparent",
                  paddingBottom: "2px", transition: "color 0.2s",
                }}
                onMouseOver={e => e.target.style.color = "#E8A598"}
                onMouseOut={e => e.target.style.color = active === nav.title ? "#E8A598" : "#5C5C5C"}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="nav-mobile-btn" style={{
          display: "none", alignItems: "center",
          position: "relative",
        }}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            style={{ width: "22px", cursor: "pointer", filter: "invert(0.3)" }}
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div style={{
              position: "fixed", top: "56px", right: "16px", left: "16px",
              background: "#FAF7F2",
              border: "1px solid rgba(232,165,152,0.3)",
              borderRadius: "16px",
              padding: "20px 24px",
              display: "flex", flexDirection: "column", gap: "18px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
              zIndex: 100,
            }}>
              {navLinks.map((nav) => (
                <a key={nav.id} href={`#${nav.id}`}
                  onClick={() => { setToggle(false); setActive(nav.title); }}
                  style={{
                    textDecoration: "none", fontFamily: "sans-serif",
                    fontSize: "16px", color: "#2C2C2C",
                    padding: "4px 0",
                    borderBottom: "1px solid rgba(232,165,152,0.15)",
                  }}>
                  {nav.title}
                </a>
              ))}
            </div>
          )}
        </div>

      </nav>
    </>
  );
};

export default Navbar;