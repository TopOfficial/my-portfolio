"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI / LLMs / NLP",
    accentColor: "#D4AF37",
    skills: [
      { name: "RAG Pipelines", pct: 92 },
      { name: "Prompt Engineering", pct: 90 },
      { name: "LLM Fine-tuning", pct: 86 },
      { name: "Embeddings", pct: 86 },
      { name: "NLP Pipelines", pct: 82 },
      { name: "Text Classification", pct: 78 },
    ],
  },
  {
    category: "Data Engineering",
    accentColor: "#B8921A",
    skills: [
      { name: "Data Preprocessing", pct: 90 },
      { name: "SQL / NoSQL", pct: 88 },
      { name: "ETL Pipeline Design", pct: 85 },
      { name: "EDA", pct: 85 },
      { name: "Feature Engineering", pct: 80 },
      { name: "Power BI", pct: 78 },
    ],
  },
  {
    category: "Machine Learning",
    accentColor: "#9A7A10",
    skills: [
      { name: "Scikit-learn", pct: 86 },
      { name: "Logistic Regression", pct: 88 },
      { name: "PCA", pct: 82 },
      { name: "PyTorch", pct: 78 },
      { name: "CNN", pct: 74 },
      { name: "Computer Vision", pct: 74 },
      { name: "Backtesting", pct: 80 },
    ],
  },
  {
    category: "Languages & Frameworks",
    accentColor: "#C9A030",
    skills: [
      { name: "Python", pct: 94 },
      { name: "Java", pct: 82 },
      { name: "JavaScript", pct: 84 },
      { name: "TypeScript", pct: 72 },
      { name: "C", pct: 76 },
      { name: "C++", pct: 74 },
      { name: "React", pct: 78 },
      { name: "Node.js", pct: 76 },
      { name: "FastAPI", pct: 86 },
    ],
  },
  {
    category: "Dev & Tooling",
    accentColor: "#D4AF37",
    skills: [
      { name: "REST APIs", pct: 86 },
      { name: "Docker", pct: 80 },
      { name: "Git", pct: 88 },
      { name: "CI/CD", pct: 75 },
      { name: "Linux / Bash", pct: 78 },
      { name: "System Design", pct: 80 },
    ],
  },
  {
    category: "Software Process",
    accentColor: "#B8921A",
    skills: [
      { name: "Agile / Scrum", pct: 85 },
      { name: "OOP & Design Patterns", pct: 84 },
      { name: "Unit & Integration Testing", pct: 80 },
      { name: "Requirements Analysis", pct: 78 },
      { name: "Code Review", pct: 82 },
    ],
  },
];

const stats = [
  { label: "Internships", value: "2", color: "#D4AF37" },
  { label: "Award", value: "IFTH 2025", color: "#B8921A" },
  { label: "IELTS Score", value: "7.0", color: "#C9A030" },
  { label: "Graduated", value: "Apr 2026", color: "#9A7A10" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>

      {/* Floating gold orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-drift-a absolute w-115 h-115 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.11) 0%, transparent 68%)", filter: "blur(55px)", top: "-5%", right: "-4%", animationDelay: "0s" }} />
        <div className="orb-drift-b absolute w-[320px] h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,146,26,0.10) 0%, transparent 68%)", filter: "blur(50px)", top: "28%", left: "12%", animationDelay: "-4s" }} />
        <div className="orb-drift-c absolute w-55 h-55 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(154,122,16,0.09) 0%, transparent 68%)", filter: "blur(40px)", top: "55%", right: "22%", animationDelay: "-2s" }} />
        <div className="orb-drift-a absolute w-95 h-95 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,160,48,0.08) 0%, transparent 68%)", filter: "blur(60px)", bottom: "-8%", left: "-5%", animationDelay: "-6s" }} />
        <div className="orb-drift-b absolute w-65 h-65 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 68%)", filter: "blur(45px)", top: "15%", left: "48%", animationDelay: "-9s" }} />
      </div>

      {/* Background numeral */}
      <div aria-hidden className="absolute right-6 top-16 font-display italic text-[--foreground] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 25vw, 320px)", opacity: 0.025 }}>
        03
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
              03 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">ABOUT</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(184,146,26,0.25), transparent)" }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display italic font-light leading-tight mb-8"
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                background: "linear-gradient(135deg, #F4EFE6 60%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Builder by curiosity,{" "}
              <span style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F0D060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>engineer by choice</span>
            </h2>

            <div className="space-y-4 text-[--muted] leading-relaxed text-[15px] font-medium">
              <p>
                I&apos;m a Software Engineering graduate from KMITL (Data &amp; AI Track),
                based in Bangkok. Most of my work is in LLM systems, RAG pipelines, and
                data engineering.
              </p>
              <p>
                During my internship at Infineon Technologies I built a RAG pipeline for
                analyzing semiconductor test logs. It took 1st place at the IFTH BE
                Symposium 2025. Before that I worked on fraud detection models at IBotnoi,
                and on my own time I build trading bots and AI agents.
              </p>
              <p>
                I like working on the whole system, not just the model: retrieval quality,
                API design, and pipelines that hold up in production. IELTS 7.0. Fluent in
                Thai and English, conversational Hindi.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-5 relative"
              style={{
                background: "linear-gradient(var(--surface-2), var(--surface-2)) padding-box, linear-gradient(135deg, #8A6B10, #D4AF37) border-box",
                border: "1px solid transparent",
              }}>
              <p className="font-mono text-[10px] tracking-[0.2em] mb-3"
                style={{ background: "linear-gradient(90deg, #8A6B10, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                EDUCATION
              </p>
              <p className="text-sm font-medium text-[--foreground]">B.Eng. Software Engineering (Data &amp; AI Track)</p>
              <p className="text-sm text-[--muted] mt-0.5">King Mongkut&apos;s Institute of Technology Ladkrabang</p>
              <p className="font-mono text-[10px] text-[--muted] tracking-wider mt-2">BANGKOK, THAILAND · GRADUATED APR 2026</p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map(({ label, value, color }) => (
                <div key={label} className="p-4"
                  style={{
                    background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, " + color + "44, " + color + "22) border-box",
                    border: "1px solid transparent",
                  }}>
                  <p className="font-mono text-[10px] text-[--muted] tracking-wider mb-1.5">{label.toUpperCase()}</p>
                  <p className="font-display italic text-xl font-light" style={{ color }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-8"
          >
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="font-mono text-[12px] font-medium tracking-[0.2em] mb-4"
                  style={{ color: group.accentColor }}>
                  {group.category.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.08 + si * 0.05 }}
                      className="text-[13px] font-semibold px-3 py-1.5 tracking-wide"
                      style={{
                        color: group.accentColor,
                        border: `1px solid ${group.accentColor}40`,
                        background: `${group.accentColor}10`,
                      }}>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
