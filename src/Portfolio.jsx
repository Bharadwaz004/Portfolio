import { useState, useEffect, useRef } from "react";

const PROFILE_IMG = "/profile.jpeg";

// ── Data ──
const personalData = {
  name: "Bharadwaz Avula",
  title: "Software & AI Engineer",
  tagline: "Building intelligent, production-grade systems that bridge the gap between AI and real-world software engineering.",
  about: `I am an aspiring AI Engineer and Computer Engineering graduate with hands-on experience in Agentic AI, Full-Stack Development and Data Science. I enjoy building intelligent applications that combine data, automation, and modern software engineering to solve real-world problems.

My experience includes developing AI-powered systems using Python, FastAPI, Hugging Face models, LangChain, React, Node.js, PyTorch and vector databases. I've worked on projects involving RAG applications, MCP, NLP, recommendation systems, and data analytics.

I'm continuously exploring advancements in AI, LLMs, and scalable software systems while strengthening my problem-solving and development skills.`,
  email: "bharadwaz004@gmail.com",
  github: "https://github.com/Bharadwaz004",
  linkedin: "https://www.linkedin.com/in/bharadwazavula",
  phone: "7032975357",
  location: "Hyderabad, India",
  resumeLink: "/Bharadwaz_2026.pdf", // place resume.pdf in the public/ folder
};

const roles = [
  "Software & AI Engineer",
  "Agentic AI Developer",
  "Data Science Enthusiast",
];

const skills = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "LangChain", category: "AI/ML" },
  { name: "HuggingFace", category: "AI/ML" },
  { name: "RAG", category: "AI/ML" },
  { name: "MCP", category: "AI/ML" },
  { name: "LLM", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Git", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "GCP", category: "Cloud & DevOps" },
];

const skillCategories = ["Languages", "Frameworks", "AI/ML", "Databases", "Cloud & DevOps"];

const projects = [
  {
    id: 1,
    title: "AskMyDB",
    description: "A natural language to SQL query generator that connects to SQLite databases, dynamically extracts schema metadata, and uses a Graph + Vector RAG pipeline with Llama LLM to convert plain English questions into optimized SQL queries.",
    tech: ["Python", "LangChain", "Llama LLM", "SQLite", "HuggingFace"],
    github: "https://github.com/Bharadwaz004/nat_db_querier",
    live: "https://nat-db-querier.vercel.app/",
    category: "Data",
    color: "#4169e1",
  },
  {
    id: 2,
    title: "QuizForge",
    description: "A full-stack RAG-powered multi-user quiz platform with JWT authentication, role-based access, and a real-time leaderboard. Auto-generates quiz questions from uploaded documents using a three-layer anti-hallucination guardrail system.",
    tech: ["React", "FastAPI", "MongoDB Atlas", "HuggingFace", "RAG", "JWT"],
    github: "https://github.com/Bharadwaz004/Quiz_Forge",
    live: "",
    category: "AI",
    color: "#e8c26a",
  },
  {
    id: 3,
    title: "ResumeMatch AI",
    description: "An AI-powered job matching platform that analyzes resumes and finds the perfect roles using LLM integration and real-time job search via the Adzuna API. Built with a modern React frontend and FastAPI backend.",
    tech: ["React", "FastAPI", "HuggingFace", "Llama-3.1", "Adzuna API"],
    github: "https://github.com/Bharadwaz004/AI_Job_finder",
    live: "https://ai-job-finder-ten.vercel.app/",
    category: "AI",
    color: "#6d8dff",
  },
  {
    id: 4,
    title: "Fake News Detector",
    description: "A fine-tuned DistilBERT transformer model for fake news classification, achieving 92% accuracy. Includes a complete data pipeline for preprocessing and tokenizing raw labeled text data into tensor representations.",
    tech: ["TensorFlow", "DistilBERT", "NLP", "Python"],
    github: "",
    live: "",
    category: "AI",
    color: "#d9a441",
  },
  {
    id: 5,
    title: "DesiCart Support Copilot",
    description: "A customer support agent for an e-commerce store that answers policy and order questions entirely through a live MCP server. A \"glass box\" UI streams the conversation alongside the real MCP protocol trace, showing tool discovery and calls as they happen — nothing is stubbed for the demo.",
    tech: ["Python", "FastAPI", "MCP", "Qdrant", "HuggingFace", "Docker"],
    github: "https://github.com/Bharadwaz004/ecom_support",
    live: "https://ecomsupport-production.up.railway.app/",
    category: "AI",
    color: "#e0783c",
  },
  {
    id: 6,
    title: "Distributed Rate Limiter",
    description: "A token-bucket rate limiter that stays exact across load-balanced API replicas by running its read-refill-decide-write logic as an atomic Redis Lua script. Verified at 2,000 concurrent requests against a 100-token rule — exactly 100 allowed, 1,900 denied — for ~0.8ms added latency.",
    tech: ["Python", "FastAPI", "Redis", "Lua", "nginx", "Docker"],
    github: "https://github.com/Bharadwaz004/rate-limiter",
    live: "",
    category: "Systems",
    color: "#3fa796",
  },
];

// Update with your real certificate names, years, and credential URLs.
// If you have certificate images/PDFs, put them in public/certificates/ and
// point `link` at them (e.g. "/certificates/google-data-analytics.pdf").
const certifications = [
  {
    title: "Claude using Google Cloud Vertex AI",
    issuer: "Anthropic",
    year: "2026",
    link: "https://verify.skilljar.com/c/inszee8butf8",
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/LX686GAYNCOV",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    link: "https://verify.skilljar.com/c/u9u9s86ok372",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/7P6LLA4MF37L",
  },
];

// ── Icons ──
function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

// ── Brand logos ──
function AnthropicLogo() {
  return (
    <svg width="26" height="18" viewBox="0 0 46 32" fill="#1F1F1E">
      <path d="M32.73 0h-6.945L38.459 32h6.945L32.73 0zM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function IBMLogo() {
  return <span className="ibm-wordmark">IBM</span>;
}

function CodeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayersIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function SparklesIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function DatabaseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  );
}

function CloudIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

const categoryMeta = {
  "Languages": { color: "#4169e1", icon: <CodeIcon /> },
  "Frameworks": { color: "#e8c26a", icon: <LayersIcon /> },
  "AI/ML": { color: "#6d8dff", icon: <SparklesIcon /> },
  "Databases": { color: "#d9a441", icon: <DatabaseIcon /> },
  "Cloud & DevOps": { color: "#8fa8ff", icon: <CloudIcon /> },
};

const issuerBrands = {
  Anthropic: { color: "#D97757", logo: <AnthropicLogo /> },
  Google: { color: "#4285F4", logo: <GoogleLogo /> },
  IBM: { color: "#0F62FE", logo: <IBMLogo /> },
};

function AwardIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function LocationIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

function useTypewriter(words, typeSpeed = 70, deleteSpeed = 40, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

// Sets --mx/--my so the .spotlight glow follows the cursor.
function setSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function Reveal({ children, delay = 0, variant = "up", className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ index, title, subtitle }) {
  return (
    <Reveal>
      <div className="section-header">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

// ── Components ──
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            BA<span className="logo-dot">.</span>
          </button>

          <div className="desktop-nav">
            {links.map((link) => (
              <button
                key={link}
                className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            ))}
            <a className="btn btn-small btn-primary" href={personalData.resumeLink} target="_blank" rel="noreferrer">
              <DownloadIcon size={15} /> Resume
            </a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          {links.map((link, i) => (
            <button key={link} className="mobile-link" style={{ animationDelay: `${i * 60}ms` }} onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
          <a className="btn btn-primary" href={personalData.resumeLink} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
            <DownloadIcon /> Resume
          </a>
        </div>
      )}
    </>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const typed = useTypewriter(roles);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", (e.clientX - rect.left) / rect.width - 0.5);
    el.style.setProperty("--py", (e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={handleMove}>
      <div className="hero-bg">
        <div className="orb-layer">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>
        <div className="grid-overlay" />
      </div>

      <div
        className="hero-content"
        style={{
          opacity: Math.max(1 - scrollY / 550, 0),
          transform: `translateY(${Math.min(scrollY * 0.3, 260)}px)`,
        }}
      >
        <div className="hero-badge">
          <span className="pulse-dot" />
          Open to opportunities
        </div>

        <h1 className="hero-name">
          {personalData.name.split(" ")[0]}{" "}
          <span className="gradient-text">{personalData.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <p className="hero-title">
          {typed}
          <span className="caret" />
        </p>
        <p className="hero-tagline">{personalData.tagline}</p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View my work
          </button>
          <a className="btn btn-ghost" href={personalData.resumeLink} target="_blank" rel="noreferrer">
            <DownloadIcon /> Download resume
          </a>
        </div>

        <div className="hero-socials">
          <a href={personalData.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><GitHubIcon /></a>
          <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${personalData.email}`} className="social-link" aria-label="Email"><MailIcon /></a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function About() {
  // Photo hangs as an ID badge that drops down on its lanyard each time the section scrolls into view.
  const [idRef, idVisible] = useInView(0.3);
  return (
    <section id="about" className="section">
      <SectionHeader index="01" title="About me" />
      <div className="about-grid">
        <div className={`id-holder ${idVisible ? "show" : ""}`} ref={idRef}>
          <div className="id-drop">
            <div className="id-swing">
              <div className="id-lanyard" />
              <div className="id-card">
                <div className="id-clip" />
                <img src={PROFILE_IMG} alt={personalData.name} className="id-photo" />
                <div className="id-name">{personalData.name}</div>
                <div className="id-role">{personalData.title}</div>
                <div className="id-barcode" />
              </div>
            </div>
          </div>
        </div>
        <Reveal delay={120} variant="right">
          <div className="about-body">
            {personalData.about.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="about-text">{paragraph}</p>
            ))}
            <div className="about-facts">
              <span className="fact"><LocationIcon /> {personalData.location}</span>
              <a className="fact" href={`mailto:${personalData.email}`}><MailIcon size={16} /> {personalData.email}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader index="02" title="Skills" subtitle="The tools I reach for when building things." />
      <div className="skills-grid">
        {skillCategories.map((cat, i) => {
          const meta = categoryMeta[cat] || { color: "#4169e1", icon: <CodeIcon /> };
          const items = skills.filter((s) => s.category === cat);
          return (
            <Reveal key={cat} delay={i * 90} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="skill-card spotlight" style={{ "--cat-color": meta.color }} onMouseMove={setSpotlight}>
                <div className="skill-head">
                  <div className="skill-icon">{meta.icon}</div>
                  <h3 className="skill-cat">{cat}</h3>
                  <span className="skill-count">{items.length}</span>
                </div>
                <div className="chip-row">
                  {items.map((s, j) => (
                    <span key={s.name} className="chip chip-reveal" style={{ "--d": `${250 + j * 70}ms` }}>{s.name}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const handleMove = (e) => {
    setSpotlight(e);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -5;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <Reveal delay={index * 90}>
      <article
        className="project-card spotlight"
        style={{ "--project-color": project.color }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="project-top">
          <span className="project-number">0{index + 1}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="chip-row">
          {project.tech.map((t, j) => (
            <span key={t} className="chip chip-small chip-reveal" style={{ "--d": `${300 + j * 60}ms` }}>{t}</span>
          ))}
        </div>
        {(project.live || project.github) && (
          <div className="project-actions">
            {project.live && (
              <a className="btn btn-small btn-primary" href={project.live} target="_blank" rel="noreferrer">
                <ExternalLinkIcon size={15} /> Live demo
              </a>
            )}
            {project.github && (
              <a className="btn btn-small btn-ghost" href={project.github} target="_blank" rel="noreferrer">
                <GitHubIcon size={15} /> GitHub
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader index="03" title="Projects" subtitle="A few things I've designed, built, and shipped." />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader index="04" title="Certifications" subtitle="Credentials that back up the craft." />
      <div className="certs-grid">
        {certifications.map((cert, i) => {
          const brand = issuerBrands[cert.issuer] || { color: "#4169e1", logo: <AwardIcon /> };
          return (
            <Reveal key={cert.title} delay={i * 90} variant="zoom">
              <article
                className="cert-card spotlight"
                style={{ "--cert-color": brand.color }}
                onMouseMove={setSpotlight}
              >
                <div className="cert-top">
                  <div className="cert-logo">{brand.logo}</div>
                  {cert.year && <span className="cert-year">{cert.year}</span>}
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-meta">
                  Issued by <span className="cert-issuer">{cert.issuer}</span>
                </p>
                {cert.link && (
                  <a className="cert-link" href={cert.link} target="_blank" rel="noreferrer">
                    View credential <ExternalLinkIcon size={14} />
                  </a>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeader index="05" title="Let's build something" subtitle="I'm currently open to new opportunities — my inbox is always open." />
      <Reveal delay={120}>
        <div className="contact-actions">
          <a className="btn btn-primary btn-large" href={`mailto:${personalData.email}`}>
            <MailIcon size={18} /> Say hello
          </a>
          <a className="btn btn-ghost btn-large" href={personalData.resumeLink} target="_blank" rel="noreferrer">
            <DownloadIcon /> Resume
          </a>
        </div>
        <div className="contact-facts">
          <span className="fact"><PhoneIcon /> {personalData.phone}</span>
          <span className="fact"><LocationIcon /> {personalData.location}</span>
        </div>
        <div className="hero-socials contact-socials">
          <a href={personalData.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><GitHubIcon /></a>
          <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${personalData.email}`} className="social-link" aria-label="Email"><MailIcon /></a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & built by <span className="gradient-text">{personalData.name}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ── Main App ──
export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --bg: #09090b;
          --surface: rgba(255, 255, 255, 0.03);
          --surface-hover: rgba(255, 255, 255, 0.06);
          --border: rgba(255, 255, 255, 0.08);
          --border-strong: rgba(255, 255, 255, 0.16);
          --text: #e4e4e7;
          --muted: #a1a1aa;
          --faint: #52525b;
          --accent: #4169e1;
          --accent-2: #8fa8ff;
          --gold: #e8c26a;
          --gradient: linear-gradient(120deg, #1a3faa, #4169e1 55%, #e8c26a);
          --heading: 'Space Grotesk', system-ui, sans-serif;
          --body: 'Inter', system-ui, sans-serif;
        }

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--body);
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        /* Animated gradient backdrop behind all content */
        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          background: linear-gradient(-45deg, #0a0d1c, #101323, #0d1226, #1a1508, #0a0d1c);
          background-size: 400% 400%;
          animation: bgShift 26s ease infinite;
        }
        @keyframes bgShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        h1, h2, h3 { font-family: var(--heading); }
        button { font-family: inherit; cursor: pointer; }
        a { color: inherit; text-decoration: none; }
        section { scroll-margin-top: 90px; }

        ::selection { background: rgba(65, 105, 225, 0.45); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }

        .gradient-text {
          background: linear-gradient(120deg, #6d8dff, #f5cf6b, #e8c26a, #6d8dff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .scroll-progress {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--gradient);
          transform-origin: left;
          transform: scaleX(0);
          z-index: 110;
        }

        /* ── Cursor spotlight ── */
        .spotlight {
          position: relative;
          overflow: hidden;
        }
        .spotlight::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.07), transparent 65%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .spotlight:hover::before { opacity: 1; }

        /* ── Reveal animations ── */
        .reveal {
          opacity: 0;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up { transform: translateY(28px); }
        .reveal-left { transform: translateX(-44px); }
        .reveal-right { transform: translateX(44px); }
        .reveal-zoom { transform: scale(0.9); }
        .reveal.in { opacity: 1; transform: none; }

        /* Staggered chip entrance — parent Reveal must be .in */
        .chip-reveal { opacity: 0; }
        .reveal.in .chip-reveal {
          animation: chipIn 0.5s ease var(--d, 0ms) both;
        }
        @keyframes chipIn {
          from { opacity: 0; transform: translateY(12px) scale(0.9); }
          to { opacity: 1; }
        }

        /* ── Buttons ── */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 15px;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .btn-primary {
          background: linear-gradient(120deg, #e8c26a, #6d8dff);
          color: #093d1c;
          box-shadow: 0 4px 24px rgba(65, 105, 225, 0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(65, 105, 225, 0.5); }
        .btn-ghost {
          background: var(--surface);
          border-color: var(--border);
          color: var(--text);
        }
        .btn-ghost:hover { border-color: var(--border-strong); background: var(--surface-hover); transform: translateY(-2px); }
        .btn-small { padding: 8px 18px; font-size: 14px; }
        .btn-large { padding: 14px 30px; font-size: 16px; }

        /* ── Navbar ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-scrolled {
          background: rgba(9, 9, 11, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: var(--border);
        }
        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          background: none;
          border: none;
          color: var(--text);
          font-family: var(--heading);
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .logo-dot { color: var(--gold); }
        .desktop-nav { display: flex; align-items: center; gap: 6px; }
        .nav-link {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 15px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-link:hover { color: var(--text); background: var(--surface-hover); }
        .nav-link.active { color: var(--accent); }
        .desktop-nav .btn { margin-left: 10px; }
        .mobile-toggle { display: none; background: none; border: none; color: var(--text); }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(9, 9, 11, 0.96);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .mobile-link {
          background: none;
          border: none;
          color: var(--text);
          font-family: var(--heading);
          font-size: 26px;
          font-weight: 600;
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }

        /* ── ID card (About section) ── */
        .id-holder {
          overflow: hidden;
          padding: 0 18px 30px; /* side/bottom room so the swing isn't clipped */
        }
        .id-drop {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-105%);
          transition: transform 0.85s cubic-bezier(0.34, 1.35, 0.5, 1);
        }
        .id-holder.show .id-drop { transform: translateY(0); }
        .id-swing {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform-origin: top center;
        }
        .id-holder.show .id-swing { animation: idSwing 1.8s ease-in-out 0.5s; }
        @keyframes idSwing {
          0%, 100% { transform: rotate(0deg); }
          22% { transform: rotate(4deg); }
          52% { transform: rotate(-2.8deg); }
          78% { transform: rotate(1.4deg); }
        }
        .id-lanyard {
          width: 22px;
          height: 88px;
          background: var(--gradient);
          clip-path: polygon(24% 0, 76% 0, 100% 100%, 0 100%);
        }
        .id-card {
          width: 100%;
          max-width: 280px;
          padding: 26px 18px 18px;
          background: #101019;
          border: 1px solid var(--border-strong);
          border-radius: 18px;
          box-shadow: 0 28px 56px -18px rgba(0, 0, 0, 0.65);
          text-align: center;
        }
        .id-clip {
          width: 46px;
          height: 10px;
          margin: 0 auto 16px;
          border-radius: 6px;
          background: var(--bg);
          border: 1px solid var(--border-strong);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.7);
        }
        .id-photo {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid var(--border);
          display: block;
        }
        .id-name {
          font-family: var(--heading);
          font-size: 18px;
          font-weight: 600;
          margin-top: 14px;
          line-height: 1.3;
        }
        .id-role {
          font-size: 12.5px;
          color: var(--gold);
          letter-spacing: 0.5px;
          margin-top: 3px;
        }
        .id-barcode {
          height: 28px;
          margin-top: 14px;
          background: repeating-linear-gradient(90deg, var(--muted) 0, var(--muted) 2px, transparent 2px, transparent 5px);
          opacity: 0.5;
          border-radius: 2px;
        }

        /* ── Hero ── */
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; pointer-events: none; }
        .orb-layer {
          position: absolute;
          inset: 0;
          transform: translate3d(calc(var(--px, 0) * 28px), calc(var(--py, 0) * 28px), 0);
          transition: transform 0.4s ease-out;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.32;
        }
        .orb-1 {
          width: 480px; height: 480px;
          background: #2f54d0;
          top: -140px; right: -100px;
          animation: drift 14s ease-in-out infinite;
        }
        .orb-2 {
          width: 420px; height: 420px;
          background: #c09a35;
          bottom: -160px; left: -120px;
          animation: drift 18s ease-in-out infinite reverse;
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);
        }
        .hero-content {
          position: relative;
          text-align: center;
          max-width: 760px;
          animation: fadeUp 0.8s ease backwards;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
          font-size: 13.5px;
          font-weight: 500;
          margin-bottom: 28px;
        }
        .pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e8c26a;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232, 194, 106, 0.5); }
          50% { box-shadow: 0 0 0 6px rgba(232, 194, 106, 0); }
        }
        .hero-name {
          font-size: clamp(44px, 8vw, 76px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 18px;
        }
        .hero-title {
          font-family: var(--heading);
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 500;
          color: var(--muted);
          margin-bottom: 18px;
          min-height: 1.6em;
        }
        .caret {
          display: inline-block;
          width: 2px;
          height: 1.05em;
          margin-left: 5px;
          vertical-align: -0.15em;
          background: var(--accent);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .hero-tagline {
          font-size: 16.5px;
          color: var(--muted);
          max-width: 560px;
          margin: 0 auto 36px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .hero-socials {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .social-link:hover { color: var(--text); border-color: var(--border-strong); transform: translateY(-3px); }
        .scroll-hint {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
        }
        .scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--faint), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* ── Sections ── */
        .section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 110px 24px 0;
        }
        .section-header { margin-bottom: 48px; }
        .section-index {
          font-family: var(--heading);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          color: var(--gold);
        }
        .section-title {
          font-size: clamp(30px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: -1px;
          margin-top: 8px;
        }
        .section-subtitle { color: var(--muted); margin-top: 10px; max-width: 520px; }

        /* ── About ── */
        .about-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 56px;
          align-items: start;
        }
        .about-text { font-size: 17px; color: var(--muted); }
        .about-text + .about-text { margin-top: 16px; }
        .about-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
        .fact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--muted);
          font-size: 14px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        a.fact:hover { color: var(--text); border-color: var(--border-strong); }

        /* ── Skills ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-card {
          height: 100%;
          padding: 28px;
          border-radius: 18px;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .skill-card::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--cat-color), transparent 70%);
          opacity: 0.65;
        }
        .skill-card:hover {
          background: var(--surface-hover);
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--cat-color) 50%, transparent);
          box-shadow: 0 18px 44px -20px color-mix(in srgb, var(--cat-color) 40%, transparent);
        }
        .skill-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 12px;
          color: var(--cat-color);
          background: color-mix(in srgb, var(--cat-color) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--cat-color) 28%, transparent);
          transition: transform 0.25s ease;
        }
        .skill-card:hover .skill-icon { transform: scale(1.1) rotate(-5deg); }
        .skill-cat {
          font-size: 17px;
          font-weight: 600;
          flex: 1;
        }
        .skill-count {
          font-family: var(--heading);
          font-size: 13px;
          font-weight: 600;
          padding: 3px 11px;
          border-radius: 999px;
          color: var(--cat-color);
          border: 1px solid color-mix(in srgb, var(--cat-color) 30%, transparent);
        }
        .skill-card .chip:hover {
          color: var(--cat-color);
          border-color: color-mix(in srgb, var(--cat-color) 50%, transparent);
        }
        .chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          padding: 7px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.02);
          color: var(--muted);
          font-size: 13.5px;
          font-weight: 500;
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .chip:hover { color: var(--text); border-color: var(--border-strong); transform: translateY(-2px); }
        .chip-small { padding: 5px 11px; font-size: 12.5px; }

        /* ── Projects ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .project-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .project-card:hover {
          border-color: color-mix(in srgb, var(--project-color) 55%, transparent);
          box-shadow: 0 18px 44px -18px color-mix(in srgb, var(--project-color) 45%, transparent);
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }
        .project-number {
          font-family: var(--heading);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--project-color);
        }
        .project-title { font-size: 21px; font-weight: 600; margin-bottom: 10px; }
        .project-desc { font-size: 15px; color: var(--muted); flex: 1; margin-bottom: 20px; }
        .project-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        /* ── Certifications ── */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .cert-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 28px;
          border-radius: 18px;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--cert-color) 55%, transparent);
          box-shadow: 0 18px 44px -18px color-mix(in srgb, var(--cert-color) 45%, transparent);
        }
        .cert-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .cert-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px; height: 56px;
          border-radius: 14px;
          background: #fdfcf8;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          transition: transform 0.25s ease;
        }
        .cert-card:hover .cert-logo { transform: scale(1.08) rotate(-4deg); }
        .ibm-wordmark {
          font-family: var(--heading);
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: repeating-linear-gradient(to bottom, #0F62FE 0, #0F62FE 2px, transparent 2px, transparent 3.5px);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .cert-year {
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--cert-color) 40%, transparent);
          color: color-mix(in srgb, var(--cert-color) 80%, #fff);
          font-size: 12.5px;
          font-weight: 600;
        }
        .cert-title { font-size: 18px; font-weight: 600; margin-bottom: 6px; }
        .cert-meta { color: var(--muted); font-size: 14px; flex: 1; margin-bottom: 16px; }
        .cert-issuer { color: var(--text); font-weight: 600; }
        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: color-mix(in srgb, var(--cert-color) 75%, #fff);
          font-size: 14px;
          font-weight: 600;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .cert-link:hover { gap: 10px; opacity: 0.85; }

        /* ── Contact ── */
        .contact { text-align: center; padding-bottom: 40px; }
        .contact .section-header { margin-bottom: 36px; }
        .contact .section-subtitle { margin-inline: auto; }
        .contact-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .contact-facts {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .contact-socials { margin-bottom: 8px; }

        /* ── Back to top ── */
        .back-to-top {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 90;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border: none;
          border-radius: 50%;
          background: linear-gradient(120deg, #e8c26a, #6d8dff);
          color: #093d1c;
          box-shadow: 0 6px 24px rgba(65, 105, 225, 0.45);
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .back-to-top.show {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }
        .back-to-top:hover { transform: translateY(-3px); }

        /* ── Footer ── */
        .footer {
          margin-top: 80px;
          padding: 28px 24px;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--faint);
          font-size: 14px;
        }
        .footer .gradient-text { font-weight: 600; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .skills-grid, .projects-grid, .certs-grid { grid-template-columns: 1fr; }
          .section { padding-top: 84px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      <div>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
