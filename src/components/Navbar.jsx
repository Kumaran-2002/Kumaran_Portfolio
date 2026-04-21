import { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all .3s",
        background: scrolled
          ? "rgba(250,251,255,.85)"
          : "rgba(250,251,255,.85)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid var(--border)",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#hero" style={{ fontSize: 20, fontWeight: 800 }}>
          Kumaran<span style={{ color: "var(--primary)" }}>.</span>
        </a>

        {/* Desktop */}
        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 14 }}>
              {l.label}
            </a>
          ))}

          {/* Resume Dropdown */}
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 10,
                background: "var(--primary)",
                padding: "8px 16px",
                color: "var(--primary-fg)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Download size={16} /> Resume
            </button>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "110%",
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <a
                  href="/Kumaran_Balachandran_Frontend_Resume.pdf"
                  download
                  style={{ display: "block", padding: 10 }}
                >
                  Download PDF
                </a>
                <a
                  href="/Kumaran_Balachandran_Frontend_Resume.docx"
                  download
                  style={{ display: "block", padding: 10 }}
                >
                  Download DOCX
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", display: "none" }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          {/* Mobile Resume Buttons */}
          <a
            href="/Kumaran_Balachandran_Frontend_Resume.pdf"
            download
            style={{
              background: "var(--primary)",
              color: "white",
              padding: "10px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Download PDF
          </a>

          <a
            href="/Kumaran_Balachandran_Frontend_Resume.docx"
            download
            style={{
              border: "1px solid var(--border)",
              padding: "10px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Download DOCX
          </a>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important}
          .nav-toggle{display:block!important}
        }
      `}</style>
    </header>
  );
}
