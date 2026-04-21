import { Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="label">About Me</p>
        <h2 className="heading">
          Turning ideas into{" "}
          <span style={{ color: "var(--primary)" }}>production software</span>
        </h2>
        <p className="subtext">
          A product-focused developer who cares about code quality, performance,
          and real-world impact.
        </p>
        <div className="about-grid" style={{ marginTop: 48 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              color: "var(--fg2)",
              lineHeight: 1.7,
            }}
          >
            <p>
              I'm a{" "}
              <strong style={{ color: "var(--fg)" }}>Frontend Developer</strong>{" "}
              based in Chennai with a strong foundation in React.js, Next.js,
              and TypeScript. I've spent ~2 years at{" "}
              <strong style={{ color: "var(--fg)" }}>Gove Technologies</strong>{" "}
              shipping real-world enterprise apps.
            </p>
            <p>
              My core strength is{" "}
              <strong style={{ color: "var(--fg)" }}>
                component-driven architecture
              </strong>{" "}
              with Redux Toolkit, Context API, REST API integration, and
              performance optimization (code splitting, lazy loading,
              memoization).
            </p>
            <p>
              I collaborate closely with backend, QA, and UX teams in
              Agile/Scrum cycles, lead code reviews, and maintain clean,
              well-documented codebases.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                paddingTop: 8,
              }}
            >
              {[
                "UI Performance",
                "Clean Code",
                "Component Design",
                "API Integration",
                "Agile Delivery",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    borderRadius: 999,
                    background: "rgba(108,60,224,.1)",
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--primary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 12,
              }}
            >
              <BigStat n="2" l="Years" />
              <BigStat n="3" l="Apps" />
              <BigStat n="1" l="Company" />
            </div>
            <InfoRow icon={MapPin} k="Location" v="Chennai, India" />
            <InfoRow
              icon={Mail}
              k="Email"
              v="kumaranbalachandran642@gmail.com"
            />
            <InfoRow
              icon={GraduationCap}
              k="Degree"
              v="B.Tech – AI & Data Science"
            />
            <InfoRow icon={Briefcase} k="Status" v="Open to opportunities" />
          </div>
        </div>
      </div>
      <style>{`
        .about-grid{display:grid;grid-template-columns:2fr 1fr;gap:32px}
        @media(max-width:900px){.about-grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}

function BigStat({ n, l }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--card)",
        padding: 16,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, color: "var(--primary)" }}>
        {n}
      </div>
      <div style={{ fontSize: 12, color: "var(--fg3)" }}>{l}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, k, v }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        borderRadius: 10,
        border: "1px solid var(--border)",
        background: "var(--card)",
        padding: 12,
      }}
    >
      <Icon
        size={16}
        style={{ color: "var(--primary)", marginTop: 2, flexShrink: 0 }}
      />
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "var(--fg3)",
          }}
        >
          {k}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {v}
        </div>
      </div>
    </div>
  );
}
