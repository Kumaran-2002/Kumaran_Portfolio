import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_upzgndn",
        "template_ijglewv",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "B8NJiKCGQSgcNUmVW",
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputStyle = {
    width: "100%",
    borderRadius: 10,
    border: "1px solid var(--border)",
    background: "var(--bg)",
    padding: "8px 12px",
    fontSize: 14,
    color: "var(--fg)",
    outline: "none",
    fontFamily: "var(--font-sans)",
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="label">Get In Touch</p>
        <h2 className="heading">Contact Me</h2>
        <p className="subtext">
          Open to new opportunities, freelance projects, or just a conversation.
          Drop a message — it goes straight to my inbox.
        </p>
        <div className="contact-grid" style={{ marginTop: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContactRow
              icon={Mail}
              k="Email"
              v="kumaranbalachandran642@gmail.com"
              href="mailto:kumaranbalachandran642@gmail.com"
            />
            <ContactRow
              icon={Phone}
              k="Phone"
              v="+91 84280 23295"
              href="tel:+918428023295"
            />
            <ContactRow
              icon={Linkedin}
              k="LinkedIn"
              v="Connect with me"
              href="https://linkedin.com"
            />
            <ContactRow icon={MapPin} k="Location" v="Chennai, Tamil Nadu" />
            <div
              style={{
                borderRadius: 16,
                border: "1px solid var(--border)",
                background: "var(--card)",
                padding: 24,
                marginTop: 12,
              }}
            >
              <h4 style={{ fontWeight: 600 }}>Available for Opportunities</h4>
              <p style={{ fontSize: 14, color: "var(--fg2)", marginTop: 4 }}>
                Full-time · Contract · Freelance
              </p>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  fontFamily: "var(--font-mono)",
                  color: "var(--success)",
                }}
              >
                ⚡ Quick response
              </p>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            style={{
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--card)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700 }}>Send a Message</h3>
            <Field
              label="Full Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              style={inputStyle}
            />
            <Field
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              style={inputStyle}
            />
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              style={inputStyle}
            />
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--fg3)",
                  marginBottom: 4,
                }}
              >
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderRadius: 10,
                background: "var(--primary)",
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--primary-fg)",
                border: "none",
                boxShadow: "var(--shadow-btn)",
                width: "100%",
                transition: "opacity .2s",
              }}
            >
              <Send size={16} /> Send via Email
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", style }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          color: "var(--fg3)",
          marginBottom: 4,
        }}
      >
        {label} *
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={style}
      />
    </div>
  );
}

function ContactRow({ icon: Icon, k, v, href }) {
  const inner = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--card)",
        padding: 16,
        transition: "border-color .2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(108,60,224,.4)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "rgba(108,60,224,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} style={{ color: "var(--primary)" }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: "var(--fg3)" }}>{k}</div>
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
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{ display: "block" }}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
