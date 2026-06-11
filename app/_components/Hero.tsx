"use client";

import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

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

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz·/";

function useScramble(text: string, delayMs: number = 0) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    // display already initialized to the final text — nothing to do for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const raf = requestAnimationFrame(() => {
      setDisplay(
        text.split("").map(c => c === " " ? " " : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]).join("")
      );
    });
    const timeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = 22;
      const interval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) { setDisplay(text); clearInterval(interval); return; }
        setDisplay(
          text.split("").map((char, i) =>
            char === " " ? " " :
            i < Math.floor((frame / totalFrames) * text.length) ? char :
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          ).join("")
        );
      }, 38);
      return () => clearInterval(interval);
    }, delayMs);
    return () => { cancelAnimationFrame(raf); clearTimeout(timeout); };
  }, []); // eslint-disable-line

  return display;
}

/* Magnetic hover — element eases toward the cursor, springs back on leave */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.32);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const nameRise: Variants = {
  hidden: { opacity: 0, y: 64 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const roleText = useScramble("AI / ML Engineer · Data Engineer", 1100);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">

      {/* 3D neural particle field */}
      <HeroScene />

      {/* Gold atmospheric glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(184,146,26,0.06) 0%, transparent 65%)", filter: "blur(70px)" }} />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full mx-auto relative"
        style={{ zIndex: 1 }}
      >

        {/* Header rule */}
        <motion.div variants={rise} className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.25em]"
            style={{ background: "linear-gradient(90deg, #B8921A, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            00 —
          </span>
          <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">INTRODUCTION</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.4), transparent)" }} />
          <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">BANGKOK · TH</span>
        </motion.div>

        {/* Availability + award badges */}
        <motion.div variants={rise} className="flex flex-wrap items-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.30)" }}>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#10B981" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10B981" }} />
            </span>
            <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: "#34D399" }}>
              OPEN TO WORK · AVAILABLE FOR FREELANCE
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 opacity-70">
            <span style={{ color: "#D4AF37", fontSize: "11px" }}>✦</span>
            <span className="font-mono text-[10px] tracking-[0.13em] text-[--muted]">1ST PLACE · IFTH 2025</span>
          </div>
        </motion.div>

        {/* Name — Bodoni italic with shimmer on last name */}
        <motion.h1
          variants={nameRise}
          className="font-display italic font-normal text-[--foreground] leading-[0.88] tracking-tight mb-1"
          style={{ fontSize: "clamp(72px, 12vw, 164px)" }}
        >
          Suriya
        </motion.h1>
        <motion.h1
          variants={nameRise}
          className="shimmer-text font-display italic font-normal leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(72px, 12vw, 164px)", paddingBottom: "0.2em", marginBottom: "-0.2em" }}
        >
          Chaubey
        </motion.h1>

        {/* Gold scan line */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            show: { scaleX: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="h-px my-8"
          style={{ background: "linear-gradient(90deg, #8A6B10 0%, #D4AF37 40%, #FFF3B0 60%, #D4AF37 80%, transparent 100%)" }}
        />

        {/* Role / bio row */}
        <motion.div variants={rise} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <p className="font-mono text-[10px] text-[--muted] tracking-[0.2em] mb-2">ROLE</p>
            <p className="text-[--foreground] text-base leading-snug font-mono tracking-wide">
              {roleText}
              <br />
              <span className="text-[--muted] font-sans font-normal tracking-normal">Bangkok, Thailand</span>
            </p>
          </div>
          <p className="text-[--muted] text-sm leading-relaxed max-w-sm sm:text-right">
            LLM-based systems, RAG pipelines, and end-to-end
            data products built for production — not just demos.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={rise} className="flex flex-wrap items-center gap-4 mb-16">
          <Magnetic>
            <a
              href="#projects"
              className="inline-block font-mono text-[11px] tracking-[0.18em] px-6 py-3 hover:brightness-110 transition-all cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #B8921A 0%, #D4AF37 100%)",
                color: "#0B0908",
                boxShadow: "0 0 24px rgba(212,175,55,0.25)",
              }}
            >
              VIEW WORK
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:suriyachaubey@gmail.com"
              className="inline-block font-mono text-[11px] tracking-[0.18em] px-6 py-3 text-[--muted] hover:text-[--accent] transition-all cursor-pointer"
              style={{
                background: "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, rgba(212,175,55,0.5), rgba(212,175,55,0.2)) border-box",
                border: "1px solid transparent",
              }}
            >
              GET IN TOUCH
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] px-6 py-3 text-[--muted] hover:text-[--foreground] transition-all cursor-pointer"
              style={{
                background: "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.12)) border-box",
                border: "1px solid transparent",
              }}
            >
              ↓ DOWNLOAD CV
            </a>
          </Magnetic>
        </motion.div>

        {/* Social links */}
        <motion.div variants={rise} className="flex items-center gap-6">
          <a href="https://github.com/TopOfficial" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent] transition-colors cursor-pointer">
            <GithubIcon size={13} /> GITHUB
          </a>
          <span className="text-[--muted-dim]">·</span>
          <a href="https://linkedin.com/in/suriya-chaubey" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent] transition-colors cursor-pointer">
            <LinkedinIcon size={13} /> LINKEDIN
          </a>
          <span className="text-[--muted-dim]">·</span>
          <a href="mailto:suriyachaubey@gmail.com"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-[--muted] hover:text-[--accent] transition-colors cursor-pointer">
            <Mail size={13} /> EMAIL
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          aria-hidden
          className="absolute -bottom-14 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-[--muted-dim]">SCROLL</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-8"
            style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)" }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
