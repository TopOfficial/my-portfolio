"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Infineon Technologies",
    role: "AI R&D Intern — Wafer Test Team",
    period: "May – Jul 2025",
    location: "Bangkok, Thailand",
    badge: "1st Place · IFTH BE Symposium 2025",
    accentColor: "#C8A84B",
    glowColor: "rgba(200,168,75,0.5)",
    bullets: [
      "Designed and deployed a full LLM + RAG pipeline for automated wafer log analysis — ingestion, embedding, retrieval, and LLM-generated engineering recommendations.",
      "Built structured data pipelines to ingest and process unstructured semiconductor test logs into queryable vector stores, enabling natural language fault history queries.",
      "Validated AI outputs against real defect patterns with test engineers, iterating on retrieval precision and model accuracy.",
    ],
  },
  {
    company: "IBotnoi Consulting",
    role: "Data Scientist Intern",
    period: "May – Jun 2023",
    location: "Bangkok, Thailand",
    badge: null,
    accentColor: "#4ECDC4",
    glowColor: "rgba(78,205,196,0.5)",
    bullets: [
      "Built a fraud detection model using Logistic Regression + PCA on transactional data, improving classification accuracy via dimensionality reduction.",
      "Delivered end-to-end data pipeline: collection, cleaning, preprocessing, EDA, and root-cause analysis — surfaced key failure patterns for voice bot model improvement.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">

      {/* Background leaf decoration */}
      <div aria-hidden className="absolute bottom-0 right-0 w-[400px] h-[500px] pointer-events-none opacity-[0.06]"
        style={{ transform: "translate(20%, 10%) rotate(30deg)" }}>
        <svg viewBox="0 0 400 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="leafExp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8705E" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
          <path d="M200,20 C290,20 360,90 380,200 C400,310 370,430 300,500 C250,540 150,540 100,500 C30,430 0,310 20,200 C40,90 110,20 200,20Z" fill="url(#leafExp)" />
          <path d="M200,20 C200,20 200,280 200,540" stroke="rgba(232,112,94,0.5)" strokeWidth="1" />
        </svg>
      </div>

      {/* Background numeral */}
      <div aria-hidden className="absolute left-0 top-16 font-display italic text-[--foreground] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 25vw, 320px)", opacity: 0.025 }}>
        02
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
              style={{ background: "linear-gradient(90deg, #E8705E, #C8A84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              02 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">EXPERIENCE</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,112,94,0.3), transparent)" }} />
          </div>
          <h2 className="font-display italic font-light text-[--foreground] leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #C8A84B 0%, #4ECDC4 50%, #E8705E 100%)" }} />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="sm:pl-10 relative"
              >
                {/* Glowing dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 hidden sm:block"
                  style={{
                    background: job.accentColor,
                    boxShadow: `0 0 10px ${job.glowColor}, 0 0 20px ${job.glowColor}`,
                  }} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display italic font-light leading-none mb-1"
                      style={{
                        fontSize: "clamp(22px, 3vw, 30px)",
                        background: `linear-gradient(135deg, #F0EBD8 50%, ${job.accentColor} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}>
                      {job.company}
                    </h3>
                    <p className="text-sm text-[--muted]">{job.role}</p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="font-mono text-[11px] tracking-wider" style={{ color: job.accentColor }}>
                      {job.period}
                    </p>
                    <p className="font-mono text-[10px] text-[--muted] tracking-wider mt-0.5">{job.location}</p>
                  </div>
                </div>

                {job.badge && (
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <span className="text-xs" style={{ color: job.accentColor }}>✦</span>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: job.accentColor }}>
                      {job.badge}
                    </span>
                  </div>
                )}

                <ul className="space-y-2.5 pl-4" style={{ borderLeft: `1px solid ${job.accentColor}22` }}>
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-[--muted] leading-relaxed">{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
