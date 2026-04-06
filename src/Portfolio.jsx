import { useState, useEffect, useRef } from "react";

const PROFILE_IMG = "/profile.jpeg";

// ── Data ──
const personalData = {
  name: "Bharadwaz Avula",
  title: "Software & AI Engineer",
  tagline: "Building intelligent, production-grade systems that bridge the gap between data science and real-world software engineering.",
  about: `I'm a Software & AI Engineer with a strong foundation in full-stack development, machine learning, and modern AI tooling. I specialize in building production-ready applications using Python, React, FastAPI, and LLM integrations via LangChain and HuggingFace. With certifications from Google and IBM, and hands-on experience shipping end-to-end projects — from architecture to deployment — I'm passionate about crafting intelligent software systems that solve real-world problems.`,
  email: "bharadwaz004@gmail.com",
  github: "https://github.com/Bharadwaz004",
  linkedin: "https://www.linkedin.com/in/bharadwazavula",
  phone: "7032975357",
  location: "Hyderabad, India",
  resumeLink: "#",
};

const skills = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "LangChain", category: "AI/ML" },
  { name: "HuggingFace", category: "AI/ML" },
  { name: "RAG", category: "AI/ML" },
  { name: "LLMs", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "MongoDB", category: "Data & DevOps" },
  { name: "BigQuery", category: "Data & DevOps" },
  { name: "AWS", category: "Data & DevOps" },
  { name: "Docker", category: "Data & DevOps" },
  { name: "Git", category: "Data & DevOps" },
  { name: "GCP", category: "Data & DevOps" },
];

const projects = [
  {
    id: 1,
    title: "QuizForge",
    description: "A full-stack RAG-powered multi-user quiz platform with JWT authentication, role-based access, and a real-time leaderboard. Auto-generates quiz questions from uploaded documents using a three-layer anti-hallucination guardrail system.",
    tech: ["React", "FastAPI", "MongoDB Atlas", "HuggingFace", "RAG", "JWT"],
    github: "https://github.com/Bharadwaz004/Quiz_Forge",
    live: "",
    category: "AI",
    color: "#F97316",
  },
  {
    id: 2,
    title: "ResumeMatch AI",
    description: "An AI-powered job matching platform that analyzes resumes and finds the perfect roles using LLM integration and real-time job search via the Adzuna API. Built with a modern React frontend and FastAPI backend.",
    tech: ["React", "FastAPI", "HuggingFace", "Llama-3.1", "Adzuna API"],
    github: "https://github.com/Bharadwaz004/AI_Job_finder",
    live: "https://ai-job-finder-ten.vercel.app/",
    category: "AI",
    color: "#EF4444",
  },
  {
    id: 3,
    title: "GATE Study Planner",
    description: "An AI-powered GATE exam preparation assistant that helps students plan their study schedule, track progress, and prepare effectively for one of India's most competitive engineering exams.",
    tech: ["React", "AI/LLM", "Vercel"],
    github: "https://github.com/Bharadwaz004/GATE_Assistant",
    live: "https://gate-assistant.vercel.app/",
    category: "Web",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Text2DB",
    description: "A natural language to SQL query generator that connects to SQLite databases, dynamically extracts schema metadata, and uses a LangChain pipeline with Qwen LLM to convert plain English questions into optimized SQL queries.",
    tech: ["Python", "LangChain", "Qwen LLM", "SQLite", "HuggingFace"],
    github: "https://github.com/Bharadwaz004/nat_db_querier",
    live: "",
    category: "Data",
    color: "#8B5CF6",
  },
  {
    id: 5,
    title: "Fake News Detector",
    description: "A fine-tuned DistilBERT transformer model for fake news classification, achieving 92% accuracy. Includes a complete data pipeline for preprocessing and tokenizing raw labeled text data into tensor representations.",
    tech: ["TensorFlow", "DistilBERT", "NLP", "Python"],
    github: "",
    live: "",
    category: "AI",
    color: "#EC4899",
  },
];

const categories = ["All", "AI", "Web", "Data"];

// ── Icons ──
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ── Animations hook ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

// ── Components ──
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(15,15,20,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(249,115,22,0.1)" : "none",
      transition: "all 0.4s ease",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 72,
      }}>
        <a href="#" style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 700,
          color: "#F97316", textDecoration: "none", letterSpacing: "-0.5px",
        }}>
          BA<span style={{ color: "#fff", opacity: 0.6 }}>.</span>
        </a>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "#a1a1aa", fontSize: 14,
              fontFamily: "'DM Sans', sans-serif", cursor: "pointer", padding: "8px 0",
              fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase",
              transition: "color 0.3s",
            }}
              onMouseEnter={(e) => e.target.style.color = "#F97316"}
              onMouseLeave={(e) => e.target.style.color = "#a1a1aa"}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle" style={{
          background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none",
        }}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0,
          background: "rgba(15,15,20,0.98)", backdropFilter: "blur(20px)",
          padding: "24px", borderBottom: "1px solid rgba(249,115,22,0.15)",
        }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              display: "block", width: "100%", background: "none", border: "none",
              color: "#d4d4d8", fontSize: 16, padding: "16px 0", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", textAlign: "left",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "-30%", right: "-10%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", left: "-5%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200, width: "100%", display: "flex", alignItems: "center",
        gap: 64, flexWrap: "wrap", justifyContent: "center",
      }}>
        {/* Text */}
        <div style={{
          flex: "1 1 500px", maxWidth: 640,
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            color: "#F97316", textTransform: "uppercase", letterSpacing: 3,
            marginBottom: 16,
          }}>
            Hello, I'm
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 700, color: "#fafafa", lineHeight: 1.1, marginBottom: 12,
          }}>
            {personalData.name}
          </h1>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)",
            fontWeight: 400, color: "#F97316", marginBottom: 24, opacity: 0.9,
          }}>
            {personalData.title}
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#a1a1aa",
            lineHeight: 1.7, marginBottom: 40, maxWidth: 520,
          }}>
            {personalData.tagline}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "14px 32px", background: "linear-gradient(135deg, #F97316, #EF4444)",
                border: "none", borderRadius: 12, color: "#fff", fontSize: 15, fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
                boxShadow: "0 4px 24px rgba(249,115,22,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(249,115,22,0.4)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 24px rgba(249,115,22,0.3)"; }}
            >
              Get In Touch
            </button>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                padding: "14px 32px", background: "transparent",
                border: "1px solid rgba(249,115,22,0.3)", borderRadius: 12,
                color: "#F97316", fontSize: 15, fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(249,115,22,0.08)"; e.target.style.borderColor = "rgba(249,115,22,0.6)"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(249,115,22,0.3)"; }}
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Photo */}
        <div style={{
          flex: "0 0 auto",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}>
          <div style={{
            width: 280, height: 340, borderRadius: 24, overflow: "hidden",
            border: "3px solid rgba(249,115,22,0.3)", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(249,115,22,0.1)",
          }}>
            <img src={PROFILE_IMG} alt="Bharadwaz Avula" style={{
              width: "100%", height: "100%", objectFit: "cover",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 60%, rgba(15,15,20,0.6) 100%)",
            }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        animation: "float 2s ease-in-out infinite", color: "#52525b",
      }}>
        <ArrowDownIcon />
      </div>
    </section>
  );
}

function About() {
  const [ref, visible] = useInView();
  return (
    <section id="about" ref={ref} style={{
      padding: "100px 24px", maxWidth: 900, margin: "0 auto",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, color: "#fafafa",
        marginBottom: 8,
      }}>
        About <span style={{ color: "#F97316" }}>Me</span>
      </h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #F97316, #EF4444)", borderRadius: 2, marginBottom: 32 }} />
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#a1a1aa", lineHeight: 1.8,
      }}>
        {personalData.about}
      </p>
      <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#71717a", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
          <LocationIcon /> {personalData.location}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#71717a", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
          <MailIcon /> {personalData.email}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [ref, visible] = useInView();
  const grouped = {};
  skills.forEach((s) => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s.name);
  });

  const catColors = {
    "Languages": "#F97316",
    "Frameworks": "#EF4444",
    "AI/ML": "#8B5CF6",
    "Data & DevOps": "#06B6D4",
  };

  return (
    <section id="skills" ref={ref} style={{
      padding: "100px 24px", maxWidth: 1000, margin: "0 auto",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, color: "#fafafa",
        marginBottom: 8,
      }}>
        Skills & <span style={{ color: "#F97316" }}>Expertise</span>
      </h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #F97316, #EF4444)", borderRadius: 2, marginBottom: 48 }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
        {Object.entries(grouped).map(([cat, items], i) => (
          <div key={cat} style={{
            background: "rgba(255,255,255,0.03)", borderRadius: 16, padding: 24,
            border: "1px solid rgba(255,255,255,0.06)",
            transition: "all 0.3s ease",
            transitionDelay: `${i * 0.1}s`,
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${catColors[cat]}44`; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
          >
            <h3 style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
              color: catColors[cat], textTransform: "uppercase", letterSpacing: 1.5,
              marginBottom: 16,
            }}>
              {cat}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map((s) => (
                <span key={s} style={{
                  padding: "6px 14px", borderRadius: 8, fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  color: "#d4d4d8",
                  background: `${catColors[cat]}11`,
                  border: `1px solid ${catColors[cat]}22`,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  // Generate placeholder gradient for project image
  const placeholderBg = `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 50%, rgba(15,15,20,0.95) 100%)`;

  return (
    <div ref={ref} style={{
      borderRadius: 20, overflow: "hidden",
      background: "rgba(255,255,255,0.03)",
      border: hovered ? `1px solid ${project.color}55` : "1px solid rgba(255,255,255,0.06)",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${index * 0.1}s`,
      opacity: visible ? 1 : 0,
      transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(40px)",
      boxShadow: hovered ? `0 20px 60px ${project.color}15` : "0 4px 20px rgba(0,0,0,0.2)",
      cursor: "default",
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / Placeholder */}
      <div style={{
        height: 200, background: placeholderBg, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute", top: 20, left: 20, width: 80, height: 80,
          border: `2px solid ${project.color}33`, borderRadius: 16,
          transform: hovered ? "rotate(12deg) scale(1.1)" : "rotate(6deg)",
          transition: "all 0.5s ease",
        }} />
        <div style={{
          position: "absolute", bottom: 20, right: 20, width: 50, height: 50,
          background: `${project.color}15`, borderRadius: "50%",
          transform: hovered ? "scale(1.3)" : "scale(1)",
          transition: "all 0.5s ease",
        }} />
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 48, fontWeight: 700, color: `${project.color}30`,
          zIndex: 1, userSelect: "none",
        }}>
          {project.title.charAt(0)}
        </span>

        {/* Category badge */}
        <span style={{
          position: "absolute", top: 16, right: 16, padding: "4px 12px",
          background: `${project.color}22`, borderRadius: 20, fontSize: 11,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          color: project.color, textTransform: "uppercase", letterSpacing: 1,
          border: `1px solid ${project.color}33`,
        }}>
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22,
          color: "#fafafa", marginBottom: 10, fontWeight: 600,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#71717a",
          lineHeight: 1.65, marginBottom: 20, minHeight: 66,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "4px 10px", borderRadius: 6, fontSize: 11,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              color: "#a1a1aa", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 12 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 16px",
              borderRadius: 10, fontSize: 13, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
              color: "#d4d4d8", background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              <GitHubIcon /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 16px",
              borderRadius: 10, fontSize: 13, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
              color: "#fff", background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
              transition: "all 0.3s ease",
              boxShadow: `0 2px 12px ${project.color}33`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px ${project.color}55`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 2px 12px ${project.color}33`; }}
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [ref, visible] = useInView();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} style={{
      padding: "100px 24px", maxWidth: 1200, margin: "0 auto",
    }}>
      <div style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, color: "#fafafa",
          marginBottom: 8,
        }}>
          Featured <span style={{ color: "#F97316" }}>Projects</span>
        </h2>
        <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #F97316, #EF4444)", borderRadius: 2, marginBottom: 32 }} />

        {/* Filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: "8px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
              border: filter === c ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.1)",
              background: filter === c ? "rgba(249,115,22,0.12)" : "transparent",
              color: filter === c ? "#F97316" : "#71717a",
              transition: "all 0.3s ease",
            }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: 28,
      }}>
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useInView();
  return (
    <section id="contact" ref={ref} style={{
      padding: "100px 24px 80px", maxWidth: 800, margin: "0 auto",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, color: "#fafafa",
        marginBottom: 8, textAlign: "center",
      }}>
        Let's <span style={{ color: "#F97316" }}>Connect</span>
      </h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #F97316, #EF4444)", borderRadius: 2, marginBottom: 20, margin: "0 auto 20px" }} />
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#71717a",
        textAlign: "center", marginBottom: 48, lineHeight: 1.7,
      }}>
        I'm actively exploring new opportunities in Software & AI Engineering. Whether you have a role in mind, a project idea, or just want to say hello — I'd love to hear from you.
      </p>

      <div style={{
        display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap",
      }}>
        {[
          { icon: <MailIcon />, label: "Email", href: `mailto:${personalData.email}`, color: "#F97316" },
          { icon: <GitHubIcon />, label: "GitHub", href: personalData.github, color: "#fafafa" },
          { icon: <LinkedInIcon />, label: "LinkedIn", href: personalData.linkedin, color: "#0A66C2" },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 10, padding: "16px 28px",
              borderRadius: 14, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, fontWeight: 600, color: "#d4d4d8",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${item.color}55`; e.currentTarget.style.background = `${item.color}11`; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.05)",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#52525b",
      }}>
        Designed & Built by <span style={{ color: "#F97316" }}>Bharadwaz Avula</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ── Main App ──
export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0e; color: #fafafa; overflow-x: hidden; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0e; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
        
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#0a0a0e" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
