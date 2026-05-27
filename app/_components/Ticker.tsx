"use client";

const items = [
  "AI ENGINEER", "DATA ENGINEER", "LLM SYSTEMS", "RAG PIPELINES",
  "MULTI-AGENT AI", "PROMPT ENGINEERING", "BANGKOK, TH",
  "OPEN TO WORK", "CLAUDE API", "PYTHON", "PYTORCH", "FASTAPI",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop: "1px solid rgba(184,146,26,0.20)",
        borderBottom: "1px solid rgba(184,146,26,0.20)",
        background: "linear-gradient(90deg, var(--surface) 0%, var(--background) 50%, var(--surface) 100%)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="ticker-track flex gap-10 whitespace-nowrap"
        style={{ animation: "ticker 22s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] shrink-0"
            style={{ color: "var(--muted)" }}
          >
            <span style={{
              background: "linear-gradient(135deg, #B8921A, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "8px",
            }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
