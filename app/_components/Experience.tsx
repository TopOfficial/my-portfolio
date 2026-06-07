"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Infineon Technologies",
    role: "AI R&D Intern — Wafer Test Team",
    period: "May – Jul 2025",
    location: "Bangkok, Thailand",
    badge: "1st Place · IFTH BE Symposium 2025",
    accentColor: "#D4AF37",
    glowColor: "rgba(212,175,55,0.5)",
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
    accentColor: "#B8921A",
    glowColor: "rgba(184,146,26,0.5)",
    bullets: [
      "Built a fraud detection model using Logistic Regression + PCA on transactional data, improving classification accuracy via dimensionality reduction.",
      "Delivered end-to-end data pipeline: collection, cleaning, preprocessing, EDA, and root-cause analysis — surfaced key failure patterns for voice bot model improvement.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">

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
              style={{ background: "linear-gradient(90deg, #8A6B10, #D4AF37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              02 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">EXPERIENCE</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,112,94,0.3), transparent)" }} />
          </div>
          <h2 className="font-display italic font-light text-[--foreground] leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            Work Experiences
          </h2>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #D4AF37 0%, #B8921A 50%, #8A6B10 100%)" }} />

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
                <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 hidden sm:block"
                  style={{
                    background: job.accentColor,
                    boxShadow: `0 0 10px ${job.glowColor}, 0 0 20px ${job.glowColor}`,
                  }} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display italic font-light leading-none mb-1"
                      style={{
                        fontSize: "clamp(22px, 3vw, 30px)",
                        background: `linear-gradient(135deg, #1A1612 50%, ${job.accentColor} 100%)`,
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
