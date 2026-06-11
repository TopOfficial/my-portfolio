"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const cardAccents = [
  { color: "#D4AF37", border: "rgba(212,175,55,0.35)" },
  { color: "#F0D060", border: "rgba(240,208,96,0.30)" },
  { color: "#C9A030", border: "rgba(201,160,48,0.35)" },
  { color: "#B8921A", border: "rgba(184,146,26,0.35)" },
];

type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  type: string;
  github: string | null;
  demo: string | null;
  badge: string | null;
};

const featuredProject: Project = {
  title: "Solarr",
  description:
    "Multi-agent AI consulting pipeline for SMEs. Upload a client's financials and interview notes, and a 5-phase agent pipeline — six parallel specialists, an adversarial debate over every finding, then strategy synthesis — produces a bilingual English/Thai consulting report.",
  highlights: [
    "5-phase pipeline: ingestion → 6 specialists (finance, ops, market, tech, risk, analytics) → debate → strategy → report",
    "Adversarial validation: advocate vs challenger agents argue each finding before a judge scores it",
    "Recommendations ranked by impact × feasibility, full report translated EN → TH",
    "FastAPI + Claude Sonnet with live phase, cost, and progress tracking in the browser",
  ],
  tags: ["Python", "Multi-Agent", "Claude API", "FastAPI", "Pandas"],
  type: "Freelance Product",
  github: null,
  demo: null,
  badge: "Latest",
};

const projects: Project[] = [
  {
    title: "PRISM",
    description:
      "Stock investment brief web app. Enter any US ticker and get a full data snapshot — valuation, financials, earnings history, recent news, and a rule-based verdict — in seconds.",
    highlights: [
      "Price & range, P/E, P/B, P/S, EV/EBITDA vs sector P/E",
      "Earnings history: last 4 quarters with EPS estimate vs actual and beat/miss",
      "Rule-based verdict: UNDERVALUED / FAIR VALUE / OVERVALUED with bull and bear case",
      "FastAPI backend + React/Vite frontend, deployed on Render + Vercel",
    ],
    tags: ["Python", "FastAPI", "React", "yfinance", "Tailwind CSS"],
    type: "Personal Project",
    github: "https://github.com/TopOfficial/prism",
    demo: null,
    badge: null,
  },
  {
    title: "Wafer Log Sentiment Analysis",
    description:
      "End-to-end LLM + RAG pipeline for automated semiconductor wafer log analysis. Ingests unstructured test logs, embeds into a vector store, retrieves fault history, and generates actionable engineering recommendations via LLM.",
    highlights: [
      "Full RAG pipeline: ingestion → embedding → retrieval → LLM",
      "Natural language queries over fault history",
      "Validated against real defect patterns with test engineers",
      "Won 1st place at IFTH BE Symposium 2025",
    ],
    tags: ["Python", "LLMs", "RAG", "Embeddings", "Semiconductor Data"],
    type: "Internship Project · Infineon Technologies",
    github: "https://github.com/TopOfficial/Log-Sentiment-Analysis",
    demo: null,
    badge: "Award Winner",
  },
  {
    title: "Nexus Analytics",
    description:
      "Autonomous data analysis platform powered by 9 specialized AI agents. Pose any business or research question — with or without your data — and an orchestrator dispatches specialists to hunt for data, clean it, analyze it, visualize it, and compile a full report.",
    highlights: [
      "Orchestrator + 9 agents: Bruce Wayne dispatches Hermione, JARVIS, Sherlock, DaVinci, Rick Sanchez, and more",
      "Two modes: Research (auto data-hunt via World Bank / IMF) and Uploaded Data (CSV/Excel)",
      "Generates Plotly charts, EDA trend analysis, and downloadable PDF reports",
      "Built on Python, Streamlit, and the Anthropic Claude API",
    ],
    tags: ["Python", "Multi-Agent", "Claude API", "Streamlit", "Data Analysis"],
    type: "Personal Project",
    github: "https://github.com/TopOfficial/nexus-analytics",
    demo: null,
    badge: null,
  },
  {
    title: "Stock Alert Bot",
    description:
      "Swing-trading alert system using a 6-EMA ribbon strategy translated directly from Pine Script. Sends real-time buy/sell signals to LINE Messaging API. Backtested on AAPL 2y data: 39% win rate, 2.6 R/R, +19.5% return.",
    highlights: [
      "6-EMA ribbon crossover strategy (5, 12, 34, 55, 100, 200)",
      "Real-time LINE alerts + macOS desktop notifications",
      "Backtesting engine with equity curve visualization",
      "Runs on automated cron schedule",
    ],
    tags: ["Python", "EMA Ribbon", "LINE API", "yfinance", "Backtesting"],
    type: "Personal Project",
    github: "https://github.com/TopOfficial/stock-alert-bot",
    demo: null,
    badge: null,
  },
  {
    title: "Clinic Appointment Chatbot",
    description:
      "AI-powered bilingual chatbot for Top Health & Spa Clinic. Patients book, cancel, and check appointments through natural conversation via LINE or an embeddable web widget. Uses Anthropic prompt caching for low-latency responses.",
    highlights: [
      "Thai & English — detects language per user",
      "LINE OA integration + embeddable web widget",
      "Prompt caching via Anthropic API",
      "SQLite conversation memory (last 20 msgs/user)",
    ],
    tags: ["Python", "Claude API", "LINE API", "FastAPI", "SQLite"],
    type: "Personal Project",
    github: "https://github.com/TopOfficial/clinic-chatbot",
    demo: null,
    badge: null,
  },
  {
    title: "SmartAI Voice Assistant",
    description:
      "Voice-activated Python code execution system. Uses NLP and compiler design principles (CFG/BNF parsing) to understand spoken commands, dynamically generate and execute Python code, and return results within a web application.",
    highlights: [
      "CFG/BNF grammar for structured NLP command parsing",
      "Dynamic Python code generation and execution",
      "Speech recognition pipeline integrated into web UI",
      "Applies compiler design principles to NLP",
    ],
    tags: ["Python", "NLP", "CFG/BNF Parsing", "Speech Recognition", "Compiler Design"],
    type: "Thesis Project",
    github: "https://github.com/ptk18/python-talk",
    demo: null,
    badge: null,
  },
  {
    title: "Markov Scanner",
    description:
      "Automated daily stock scanner covering ~566 tickers (S&P 500, NASDAQ-100, SET50) using the Markov Method — a probabilistic model computing bull/bear transition probabilities from daily closes. Ranks buy candidates by a composite quant score and sends a full report to LINE every weekday at 4:05 PM.",
    highlights: [
      "Markov transition matrix: Bull tmr, Bear tmr, Stickiness, Net Edge computed per ticker",
      "Composite buy score: 50% Net Edge + 30% 5-day momentum + 20% volume ratio",
      "Portfolio tracking via LINE commands (/add, /remove, /report) over Flask webhook + ngrok",
      "Sell alerts: Markov turns bearish OR 5% stop-loss hit",
    ],
    tags: ["Python", "yfinance", "NumPy", "Flask", "LINE API"],
    type: "Personal Project",
    github: null,
    demo: null,
    badge: null,
  },
  {
    title: "Market Briefing",
    description:
      "Automated daily market briefing delivered every morning via LINE. Pulls live prices for major US equities, gold, DXY, and crypto, fetches top financial news, then calls the Claude API to generate a structured analysis — macro outlook, sector moves, crypto summary, and key risks.",
    highlights: [
      "Covers SPY, NVDA, AAPL, MSFT, META, GOOGL, AMZN, gold, DXY, BTC/ETH/SOL",
      "Claude API generates full structured briefing with macro, sector, and crypto sections",
      "Extracts condensed LINE-ready summary (<1000 chars) from full report",
      "Runs on cron at 10 AM Bangkok time via NewsAPI + CoinGecko + yfinance",
    ],
    tags: ["Python", "Claude API", "yfinance", "CoinGecko", "LINE API"],
    type: "Personal Project",
    github: null,
    demo: null,
    badge: null,
  },
  {
    title: "CompeteWatch",
    description:
      "Full-stack competitor intelligence platform. Users create projects, add competitors, and the system scrapes their websites, GitHub repos, Hacker News mentions, and Product Hunt listings on a schedule. Claude generates AI-written digests summarising what changed — new features, GitHub activity, community buzz.",
    highlights: [
      "Scrapers: website (BeautifulSoup4), GitHub API, Hacker News, Product Hunt",
      "Claude API generates structured change digests per competitor on a schedule",
      "JWT-based auth, PDF file uploads, stats dashboard",
      "FastAPI backend + React SPA frontend",
    ],
    tags: ["Python", "FastAPI", "Claude API", "BeautifulSoup4", "SQLite"],
    type: "Personal Project",
    github: null,
    demo: null,
    badge: null,
  },
];

/* 3D tilt — card rotates toward the cursor with a moving glare highlight */
function Tilt({ children, max = 6 }: { children: React.ReactNode; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 260, damping: 22 });
  const glareX = useTransform(px, [0, 1], ["20%", "80%"]);
  const glareY = useTransform(py, [0, 1], ["20%", "80%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(244,228,160,0.07) 0%, transparent 55%)`;

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        className="relative h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={e => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
        }}
        onMouseLeave={() => { px.set(0.5); py.set(0.5); }}
      >
        {children}
        <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: glare }} />
      </motion.div>
    </div>
  );
}

function Links({ project, accent }: { project: Project; accent: string }) {
  return (
    <div className="flex gap-1 shrink-0">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="p-1.5 text-[--muted] transition-colors"
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accent}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--muted)"}>
          <GithubIcon size={15} />
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
          className="p-1.5 text-[--muted] hover:text-[--accent] transition-colors">
          <ExternalLink size={15} />
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  const tagColors = ["#D4AF37", "#A89D8A", "#F0D060"];
  return (
    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[--border]">
      {tags.map((tag, ti) => {
        const tagColor = tagColors[ti % tagColors.length];
        return (
          <span key={tag} className="font-mono text-[10px] px-2 py-0.5 tracking-wider"
            style={{ color: tagColor, border: `1px solid ${tagColor}33` }}>
            [{tag}]
          </span>
        );
      })}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6"
    >
      <Tilt max={3}>
        <article
          className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 p-7 sm:p-10 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 60%, rgba(212,175,55,0.07) 100%)",
            border: "1px solid rgba(212,175,55,0.30)",
            boxShadow: "0 0 50px rgba(212,175,55,0.07), 0 12px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Corner glow */}
          <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)", filter: "blur(30px)" }} />

          <div className="sm:w-64 shrink-0 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1"
                  style={{ background: "linear-gradient(135deg, #B8921A, #D4AF37)", color: "#0B0908" }}>
                  {project.badge}
                </span>
                <span className="font-mono text-[10px] text-[--muted] tracking-widest uppercase">
                  {project.type}
                </span>
              </div>
              <h3 className="font-display italic leading-tight text-[--foreground]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
                {project.title}
              </h3>
            </div>
            <p className="font-mono text-[10px] text-[--muted-dim] tracking-wider leading-relaxed mt-auto">
              UPLOAD → 6 SPECIALISTS → DEBATE
              <br />→ STRATEGY → REPORT EN/TH
            </p>
            <Links project={project} accent="#D4AF37" />
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-0">
            <p className="text-sm text-[--muted] leading-relaxed">{project.description}</p>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-[--muted]">
                  <span className="mt-1.75 w-1 h-1 shrink-0" style={{ background: "#D4AF37" }} />
                  {h}
                </li>
              ))}
            </ul>
            <Tags tags={project.tags} />
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="h-full"
    >
      <Tilt>
        <article
          className="group relative flex flex-col gap-4 p-6 h-full transition-colors duration-300"
          style={{
            background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
            border: "1px solid var(--border)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px rgba(0,0,0,0.45), 0 0 24px ${accent.color}14`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
            style={{ background: `linear-gradient(to top, ${accent.color}, transparent)` }} />

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="font-mono text-[10px] text-[--muted] tracking-widest uppercase">
                  {project.type}
                </span>
                {project.badge && (
                  <>
                    <span className="text-[--muted-dim]">·</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase px-1.5 py-0.5"
                      style={{ background: accent.color, color: "#0B0908" }}>
                      {project.badge}
                    </span>
                  </>
                )}
              </div>
              <h3 className="font-display italic text-xl font-light text-[--foreground] leading-snug">
                {project.title}
              </h3>
            </div>
            <Links project={project} accent={accent.color} />
          </div>

          <p className="text-sm text-[--muted] leading-relaxed">{project.description}</p>

          <ul className="space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-[--muted]">
                <span className="mt-1.75 w-1 h-1 shrink-0" style={{ background: accent.color }} />
                {h}
              </li>
            ))}
          </ul>

          <Tags tags={project.tags} />
        </article>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Section background gradient */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }} />

      {/* Decorative background numeral */}
      <div aria-hidden className="absolute right-6 top-16 font-display italic text-[--foreground] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 25vw, 320px)", opacity: 0.03 }}>
        01
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.25em]"
              style={{ background: "linear-gradient(90deg, #B8921A, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              01 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">PROJECTS</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.3), transparent)" }} />
          </div>
          <h2 className="font-display italic font-light text-[--foreground] leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            Projects
          </h2>
          <p className="text-[--muted] max-w-lg text-sm leading-relaxed">
            LLM systems, data pipelines, and intelligent automation — built for
            real environments, not just demos.
          </p>
        </motion.div>

        {/* Featured */}
        <FeaturedCard project={featuredProject} />

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-[--border]"
        >
          <a href="https://github.com/TopOfficial" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-[--muted] hover:text-[--accent] transition-colors group">
            <GithubIcon size={13} />
            <span>SEE EVERYTHING ON GITHUB</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
