"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI / LLMs / NLP",
    accentColor: "#4ECDC4",
    items: ["LLM Fine-tuning", "RAG", "Prompt Engineering", "NLP Pipelines", "Text Classification", "Embeddings"],
  },
  {
    category: "Data Engineering & Analysis",
    accentColor: "#C8A84B",
    items: ["SQL/NoSQL", "ETL Pipeline Design", "Data Preprocessing", "EDA", "Feature Engineering", "Power BI"],
  },
  {
    category: "Machine Learning",
    accentColor: "#E8705E",
    items: ["PyTorch", "Scikit-learn", "Logistic Regression", "PCA", "CNN", "Backtesting"],
  },
  {
    category: "Engineering",
    accentColor: "#4ECDC4",
    items: ["Python", "REST APIs", "Docker", "Git", "Node.js", "React", "TypeScript", "FastAPI"],
  },
];

const stats = [
  { label: "Internships", value: "2", color: "#C8A84B" },
  { label: "Award", value: "IFTH 2025", color: "#E8705E" },
  { label: "IELTS Score", value: "7.0", color: "#4ECDC4" },
  { label: "Graduating", value: "Mar 2026", color: "#C8A84B" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>

      {/* Background orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,112,94,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
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
              style={{ background: "linear-gradient(90deg, #4ECDC4, #C8A84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              03 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">ABOUT</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(78,205,196,0.3), transparent)" }} />
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
                background: "linear-gradient(135deg, #F0EBD8 60%, #C8A84B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Builder by curiosity,{" "}
              <span style={{
                background: "linear-gradient(135deg, #4ECDC4 0%, #E8705E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>engineer by choice</span>
            </h2>

            <div className="space-y-4 text-[--muted] leading-relaxed text-sm">
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
                background: "linear-gradient(var(--surface-2), var(--surface-2)) padding-box, linear-gradient(135deg, #4ECDC4, #C8A84B) border-box",
                border: "1px solid transparent",
              }}>
              <p className="font-mono text-[10px] tracking-[0.2em] mb-3"
                style={{ background: "linear-gradient(90deg, #4ECDC4, #C8A84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
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
                <p className="font-mono text-[10px] tracking-[0.2em] mb-3"
                  style={{ color: group.accentColor }}>
                  {group.category.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map((skill) => (
                    <span key={skill}
                      className="text-sm text-[--muted] pb-0.5 transition-colors cursor-default hover:text-[--foreground]"
                      style={{ borderBottom: `1px solid ${group.accentColor}33` }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderBottomColor = group.accentColor}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderBottomColor = group.accentColor + "33"}>
                      {skill}
                    </span>
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
