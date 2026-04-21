import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        paddingTop: 128,
        background: "linear-gradient(180deg,var(--bg),var(--bg2))",
      }}
    >
      <div
        className="container"
        style={{ display: "grid", gap: 48, alignItems: "center" }}
      >
        <div className="hero-grid">
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                background: "rgba(34,197,94,.1)",
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 500,
                color: "var(--success)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--success)",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for new opportunities
            </span>
            <p style={{ marginTop: 24, fontSize: 18, color: "var(--fg2)" }}>
              Hi, I'm
            </p>
            <h1
              style={{
                marginTop: 8,
                fontSize: "clamp(2.5rem,6vw,4.5rem)",
                fontWeight: 800,
                letterSpacing: "-.03em",
                lineHeight: 1.1,
              }}
            >
              Kumaran{" "}
              <span style={{ color: "var(--primary)" }}>Balachandran</span>
            </h1>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--primary)",
              }}
            >
              Frontend Developer{" "}
              <span style={{ color: "var(--fg3)" }}>
                | React.js | Next.js | TypeScript
              </span>
            </p>
            <p
              style={{
                marginTop: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--fg3)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MapPin size={14} /> Chennai, India · React · TypeScript · Next.js
            </p>
            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                color: "var(--fg2)",
                maxWidth: 560,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: "var(--fg)" }}>Frontend Developer</strong>{" "}
              with around{" "}
              <strong style={{ color: "var(--fg)" }}>
                2 years of experience
              </strong>{" "}
              building scalable, production-grade web apps. Skilled in
              component-driven architecture, REST API integration, and Agile
              delivery.
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 10,
                  background: "var(--primary)",
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--primary-fg)",
                  boxShadow: "var(--shadow-btn)",
                }}
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--fg)",
                }}
              >
                Get In Touch
              </a>
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <SocialBtn
                href="mailto:kumaranbalachandran642@gmail.com"
                icon={Mail}
                label="Email"
              />
              <SocialBtn
                href="https://www.linkedin.com/in/kumaran-balachandran-4b315b227/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialBtn
                href="https://github.com/Kumaran-2002"
                icon={Github}
                label="GitHub"
              />
            </div>
          </div>
          <ProfileCard />
        </div>
      </div>
      <style>{`
        .hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
      `}</style>
    </section>
  );
}

function SocialBtn({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 10,
        border: "1px solid var(--border)",
        background: "var(--card)",
        padding: "8px 12px",
        fontSize: 12,
        fontWeight: 500,
        color: "var(--fg)",
        transition: "all .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.color = "var(--primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--fg)";
      }}
    >
      <Icon size={16} /> {label}
    </a>
  );
}

function ProfileCard() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        border: "1px solid var(--border)",
        background: "var(--card)",
        padding: 24,
        boxShadow: "var(--shadow-card)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "var(--gradient)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 16,
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "var(--gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 700,
            color: "var(--primary-fg)",
          }}
        >
          KB
        </div>
        <h3 style={{ marginTop: 16, fontSize: 18, fontWeight: 700 }}>
          Kumaran Balachandran
        </h3>
        <p style={{ fontSize: 14, color: "var(--primary)", fontWeight: 500 }}>
          Frontend Developer
        </p>
        <p style={{ fontSize: 12, color: "var(--fg3)" }}>@ Gove Technologies</p>
        <span
          style={{
            marginTop: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 999,
            background: "rgba(34,197,94,.1)",
            padding: "4px 12px",
            fontSize: 12,
            fontWeight: 500,
            color: "var(--success)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--success)",
            }}
          />{" "}
          Open to work
        </span>
      </div>
      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "16px 0",
        }}
      >
        <Stat n="2" l="Years Exp." />
        <Stat n="3" l="Apps Shipped" />
        <Stat n="1" l="Company" />
      </div>
      <div
        style={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
        }}
      >
        <Row k="Role" v="Frontend Developer" />
        <Row k="Company" v="Gove Technologies" />
        <Row k="Stack" v="React · Next.js · TS" />
        <Row k="Location" v="Chennai, India" />
      </div>
      <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
        {[
          "React.js",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "Material UI",
        ].map((t) => (
          <span
            key={t}
            style={{
              borderRadius: 6,
              border: "1px solid var(--border)",
              padding: "4px 8px",
              fontSize: 12,
              color: "var(--fg3)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 700, color: "var(--primary)" }}>
        {n}
      </div>
      <div style={{ fontSize: 10, color: "var(--fg3)" }}>{l}</div>
    </div>
  );
}
function Row({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ color: "var(--fg3)" }}>{k}</span>
      <span style={{ color: "var(--fg)", fontWeight: 500 }}>{v}</span>
    </div>
  );
}
