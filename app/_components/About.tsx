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
      { name: "Backtesting", pct: 80 },
    ],
  },
  {
    category: "Engineering",
    accentColor: "#C9A030",
    skills: [
      { name: "Python", pct: 94 },
      { name: "FastAPI", pct: 86 },
      { name: "REST APIs", pct: 86 },
      { name: "Docker", pct: 80 },
      { name: "Git", pct: 88 },
      { name: "TypeScript", pct: 72 },
    ],
  },
];

const stats = [
  { label: "Internships", value: "2", color: "#D4AF37" },
  { label: "Award", value: "IFTH 2025", color: "#B8921A" },
  { label: "IELTS Score", value: "7.0", color: "#C9A030" },
  { label: "Graduating", value: "Mar 2026", color: "#9A7A10" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>

      {/* Floating gold orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-drift-a absolute w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.11) 0%, transparent 68%)", filter: "blur(55px)", top: "-5%", right: "-4%", animationDelay: "0s" }} />
        <div className="orb-drift-b absolute w-[320px] h-[320px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,146,26,0.10) 0%, transparent 68%)", filter: "blur(50px)", top: "28%", left: "12%", animationDelay: "-4s" }} />
        <div className="orb-drift-c absolute w-[220px] h-[220px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(154,122,16,0.09) 0%, transparent 68%)", filter: "blur(40px)", top: "55%", right: "22%", animationDelay: "-2s" }} />
        <div className="orb-drift-a absolute w-[380px] h-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,160,48,0.08) 0%, transparent 68%)", filter: "blur(60px)", bottom: "-8%", left: "-5%", animationDelay: "-6s" }} />
        <div className="orb-drift-b absolute w-[260px] h-[260px] rounded-full"
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
                background: "linear-gradient(135deg, #0C0A09 60%, #B8921A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Builder by curiosity,{" "}
              <span style={{
                background: "linear-gradient(135deg, #9A7A10 0%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>engineer by choice</span>
            </h2>

            <div className="space-y-4 text-[--muted] leading-relaxed text-[15px] font-medium">
              <p>
                I&apos;m a final-year Software Engineering student (Data &amp; AI Track) at
                KMITL, Bangkok. I specialize in shipping LLM-based systems, RAG
                architectures, and data pipelines that go beyond prototypes into production.
              </p>
              <p>
                At Infineon Technologies, I built a full RAG pipeline over semiconductor
                test logs that won 1st place at the IFTH BE Symposium 2025. Before that, I
                built fraud detection models at IBotnoi and automated swing-trading systems
                in my own time.
              </p>
              <p>
                I care equally about the model and the system around it — retrieval
                precision, API design, ETL reliability, and the business insight buried in
                the data. IELTS 7.0, fluent in Thai, English, and conversational Hindi.
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
              <p className="font-mono text-[10px] text-[--muted] tracking-wider mt-2">BANGKOK, THAILAND · GRADUATED MAR 2026</p>
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
