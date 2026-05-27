"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const cardAccents = [
  { color: "#D4AF37", glow: "rgba(212,175,55,0.25)", border: "rgba(212,175,55,0.25)" },
  { color: "#B8921A", glow: "rgba(184,146,26,0.25)", border: "rgba(184,146,26,0.25)" },
  { color: "#C9A030", glow: "rgba(201,160,48,0.25)", border: "rgba(201,160,48,0.25)" },
  { color: "#9A7A10", glow: "rgba(154,122,16,0.25)", border: "rgba(154,122,16,0.25)" },
];

const projects = [
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
];

function OrnamentalCorner({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M0,16 L0,0 L16,0" stroke={color} strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
}) {
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`group relative flex flex-col gap-4 p-6 transition-all duration-300 ${featured ? "sm:flex-row sm:gap-10 sm:p-8" : ""}`}
      style={{
        background: featured
          ? `linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 60%, rgba(200,168,75,0.06) 100%)`
          : `linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)`,
        border: featured ? `1px solid rgba(200,168,75,0.22)` : "1px solid var(--border)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = accent.border;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px ${featured ? "48px" : "32px"} rgba(0,0,0,0.1), 0 0 0 1px ${accent.border}`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = featured ? "rgba(200,168,75,0.22)" : "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
      }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
        style={{ background: `linear-gradient(to top, ${accent.color}, transparent)` }} />

      {/* Corner ornaments */}
      <div className="absolute top-2 right-2" style={{ color: accent.color }}>
        <OrnamentalCorner color={accent.color} />
      </div>

      {/* Featured: left meta column */}
      {featured && (
        <div className="sm:w-56 shrink-0 flex flex-col gap-4">
          <div>
            <span className="font-mono text-[10px] text-[--muted] tracking-widest uppercase block mb-2">
              {project.type}
            </span>
            <h3 className="font-display italic leading-tight text-[--foreground]"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              {project.title}
            </h3>
          </div>
          {project.badge && (
            <span className="self-start font-mono text-[10px] tracking-widest uppercase px-2 py-1"
              style={{ background: accent.color, color: "#060D10" }}>
              {project.badge}
            </span>
          )}
          <div className="flex gap-2 mt-auto pt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-1.5 text-[--muted] transition-colors"
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accent.color}
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
        </div>
      )}

      {/* Right (or full) content column */}
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        {/* Non-featured header */}
        {!featured && (
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
                      style={{ background: accent.color, color: "#060D10" }}>
                      {project.badge}
                    </span>
                  </>
                )}
              </div>
              <h3 className="font-display italic text-xl font-light text-[--foreground] leading-snug">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-1 shrink-0 mt-1">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="p-1.5 text-[--muted] transition-colors"
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = accent.color}
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
          </div>
        )}

        <p className="text-sm text-[--muted] leading-relaxed">{project.description}</p>

        <ul className="space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-[--muted]">
              <span className="mt-[7px] w-1 h-1 shrink-0" style={{ background: accent.color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-[--border]">
          {project.tags.map((tag, ti) => {
            const tagColors = [accent.color, "#4ECDC4", "#E8705E"];
            const tagColor = tagColors[ti % tagColors.length];
            return (
              <span key={tag} className="font-mono text-[10px] px-2 py-0.5 tracking-wider"
                style={{ color: tagColor, border: `1px solid ${tagColor}33` }}>
                [{tag}]
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Section background gradient */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(78,205,196,0.04) 0%, transparent 60%)" }} />

      {/* Decorative background numeral */}
      <div aria-hidden className="absolute right-6 top-16 font-display italic text-[--foreground] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 25vw, 320px)", opacity: 0.025 }}>
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
              style={{ background: "linear-gradient(90deg, #8A6B10, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              01 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">SELECTED WORK</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(200,168,75,0.3), transparent)" }} />
          </div>
          <h2 className="font-display italic font-light text-[--foreground] leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            Things I&apos;ve built
          </h2>
          <p className="text-[--muted] max-w-lg text-sm leading-relaxed">
            LLM systems, data pipelines, and intelligent automation — built for
            real environments, not just demos.
          </p>
        </motion.div>

        {/* Featured project — full width */}
        <ProjectCard key={projects[0].title} project={projects[0]} index={0} featured />

        {/* Remaining projects — 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
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
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-[--muted] hover:text-[--accent-cyan] transition-colors group">
            <GithubIcon size={13} />
            <span>SEE EVERYTHING ON GITHUB</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
