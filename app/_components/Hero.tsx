"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">

      {/* Atmospheric glow orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gold orb — top right */}
        <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,168,75,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
        {/* Coral orb — bottom left */}
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,112,94,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />
        {/* Cyan orb — center top */}
        <div className="absolute top-1/4 left-1/3 w-[360px] h-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Large botanical leaf — top right */}
      <div aria-hidden className="absolute -top-10 right-0 w-[480px] h-[640px] pointer-events-none opacity-[0.08] translate-x-1/4"
        style={{ transform: "translateX(20%) rotate(-18deg)" }}>
        <svg viewBox="0 0 400 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="leafHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ECDC4" />
              <stop offset="50%" stopColor="#C8A84B" />
              <stop offset="100%" stopColor="#E8705E" />
            </linearGradient>
          </defs>
          <path d="M200,20 C290,20 360,90 380,200 C400,310 370,430 300,500 C250,540 150,540 100,500 C30,430 0,310 20,200 C40,90 110,20 200,20Z" fill="url(#leafHero)" />
          <path d="M200,20 C200,20 200,280 200,540" stroke="rgba(200,168,75,0.4)" strokeWidth="1" />
          <path d="M200,150 C240,170 280,180 310,200" stroke="rgba(200,168,75,0.3)" strokeWidth="0.8" />
          <path d="M200,220 C240,240 270,250 300,270" stroke="rgba(200,168,75,0.3)" strokeWidth="0.8" />
          <path d="M200,290 C230,310 255,320 278,340" stroke="rgba(200,168,75,0.25)" strokeWidth="0.8" />
          <path d="M200,150 C160,170 120,180 90,200" stroke="rgba(78,205,196,0.3)" strokeWidth="0.8" />
          <path d="M200,220 C160,240 130,250 100,270" stroke="rgba(78,205,196,0.3)" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Constellation background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="rgba(200,168,75,0.6)" strokeWidth="0.5">
            <line x1="5%" y1="15%" x2="18%" y2="30%" />
            <line x1="18%" y1="30%" x2="35%" y2="22%" />
            <line x1="35%" y1="22%" x2="48%" y2="40%" />
            <line x1="70%" y1="10%" x2="82%" y2="25%" />
            <line x1="82%" y1="25%" x2="90%" y2="18%" />
            <line x1="10%" y1="70%" x2="22%" y2="60%" />
            <line x1="22%" y1="60%" x2="30%" y2="75%" />
            <line x1="75%" y1="65%" x2="88%" y2="72%" />
          </g>
          <g fill="rgba(200,168,75,0.7)">
            <circle cx="5%" cy="15%" r="1.5" />
            <circle cx="18%" cy="30%" r="2" />
            <circle cx="35%" cy="22%" r="1.5" />
            <circle cx="48%" cy="40%" r="1" />
            <circle cx="70%" cy="10%" r="2" />
            <circle cx="82%" cy="25%" r="1.5" />
            <circle cx="90%" cy="18%" r="1" />
            <circle cx="10%" cy="70%" r="1.5" />
            <circle cx="22%" cy="60%" r="2" />
            <circle cx="30%" cy="75%" r="1" />
            <circle cx="75%" cy="65%" r="1.5" />
            <circle cx="88%" cy="72%" r="2" />
          </g>
        </svg>
      </div>

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(78,205,196,0.1) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="max-w-6xl w-full mx-auto relative">

        {/* Header rule — gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-[11px] tracking-[0.25em]"
            style={{ background: "linear-gradient(90deg, #C8A84B, #4ECDC4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            00 —
          </span>
          <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">INTRODUCTION</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(200,168,75,0.3), transparent)" }} />
          <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">BANGKOK · TH</span>
        </motion.div>

        {/* Award badge — gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8"
          style={{
            background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #C8A84B, #4ECDC4) border-box",
            border: "1px solid transparent",
          }}
        >
          <span className="text-sm leading-none"
            style={{ background: "linear-gradient(135deg, #C8A84B, #4ECDC4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ✦
          </span>
          <span className="font-mono text-[11px] tracking-[0.15em]"
            style={{ background: "linear-gradient(135deg, #C8A84B, #4ECDC4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            1ST PLACE · IFTH BE SYMPOSIUM 2025
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-display italic font-light text-[--foreground] leading-[0.86] tracking-tight"
            style={{ fontSize: "clamp(68px, 11.5vw, 156px)" }}
          >
            Suriya
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="font-display italic font-light leading-[0.86] tracking-tight"
            style={{
              fontSize: "clamp(68px, 11.5vw, 156px)",
              background: "linear-gradient(135deg, #F0EBD8 40%, #C8A84B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chaubey
          </motion.h1>
        </div>

        {/* Scanning gradient line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="h-px my-7"
          style={{
            background: "linear-gradient(90deg, #C8A84B 0%, #4ECDC4 50%, #E8705E 100%)",
            boxShadow: "0 0 16px rgba(200,168,75,0.35), 0 0 32px rgba(78,205,196,0.15)",
          }}
        />

        {/* Role / bio row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.68 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10"
        >
          <div>
            <p className="font-mono text-[10px] text-[--muted] tracking-[0.2em] mb-2">ROLE</p>
            <p className="text-[--foreground] text-base leading-snug">
              AI / ML Engineer · Data Engineer
              <br />
              <span className="text-[--muted]">Bangkok, Thailand</span>
            </p>
          </div>
          <p className="text-[--muted] text-sm leading-relaxed max-w-sm sm:text-right">
            LLM-based systems, RAG pipelines, and end-to-end
            data products built for production — not just demos.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="font-mono text-[11px] tracking-[0.18em] px-6 py-3 text-[--background] hover:brightness-110 transition-all"
            style={{ background: "linear-gradient(135deg, #C8A84B 0%, #E8A030 100%)" }}
          >
            VIEW WORK
          </a>
          <a
            href="mailto:suriyachaubey@gmail.com"
            className="font-mono text-[11px] tracking-[0.18em] px-6 py-3 text-[--muted] hover:text-[--accent-cyan] transition-all"
            style={{
              background: "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, rgba(78,205,196,0.3), rgba(200,168,75,0.3)) border-box",
              border: "1px solid transparent",
            }}
          >
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/TopOfficial" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent-cyan] transition-colors">
            <GithubIcon size={13} /> GITHUB
          </a>
          <span className="text-[--muted-dim]">·</span>
          <a href="https://linkedin.com/in/suriya-chaubey" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent] transition-colors">
            <LinkedinIcon size={13} /> LINKEDIN
          </a>
          <span className="text-[--muted-dim]">·</span>
          <a href="mailto:suriyachaubey@gmail.com"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent-coral] transition-colors">
            <Mail size={13} /> EMAIL
          </a>
        </motion.div>

      </div>
    </section>
  );
}
