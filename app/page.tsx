"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  HeartPulse,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
  Coffee,
  Activity,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────── DATA ─────────────────────── */

const projects = [
  {
    id: "churn",
    title: "Customer Churn Prediction Pipeline",
    icon: BarChart3,
    accent: "from-sky-400/12 via-cyan-500/6 to-transparent",
    github: "https://github.com/nikhild738ND/Customer-Churn-Prediction-Pipeline",
    stack: ["R", "C5.0 Boosted", "ROC-AUC", "Classification"],
    summary:
      "End-to-end churn modeling on a 7,043-record dataset with 21 variables. Covers preprocessing, train-test validation, model benchmarking, and final selection for business-facing prediction.",
    highlights: [
      "Benchmarked 8 classification models in R, selecting the optimal performer via ROC-AUC",
      "Boosted C5.0 emerged as best-in-class across precision, recall, and AUC thresholds",
      "Produced holdout-set churn probabilities ready for direct business decision-making",
      "Structured as a fully reproducible, end-to-end ML pipeline with clean documentation",
    ],
  },
  {
    id: "remote",
    title: "Remote Work Mental Health & Productivity Analysis",
    icon: Brain,
    accent: "from-violet-400/12 via-fuchsia-500/6 to-transparent",
    github: "https://github.com/nikhild738ND/Remote-Work-Mental-Health-Productivity-Analysis",
    stack: ["ANOVA", "Logistic Regression", "Chi-Square", "Python"],
    summary:
      "Statistical analysis of a 5,000-employee dataset examining how remote, hybrid, and onsite arrangements affect mental health, isolation, work-life balance, and productivity outcomes.",
    highlights: [
      "Applied ANOVA, Chi-Square, Pearson correlation, and logistic regression across work modes",
      "Quantified the productivity delta between remote, hybrid, and onsite arrangements",
      "Examined social isolation and support systems as mediating outcome variables",
      "Delivered workforce-ready findings with executive-level clarity and business applicability",
    ],
  },
  {
    id: "coffee",
    title: "Coffee, Stress & Productivity Analysis",
    icon: Coffee,
    accent: "from-amber-400/12 via-orange-500/6 to-transparent",
    github: "https://github.com/nikhild738ND/coffee-stress-productivity-analysis",
    stack: ["R", "Multiple Regression", "EDA", "Visualization"],
    summary:
      "Regression-based study quantifying the relationship between coffee consumption, stress, age, sleep quality, and workplace productivity using structured exploratory and inferential methods.",
    highlights: [
      "Built and validated a multiple linear regression workflow from the ground up",
      "Identified consumption thresholds where marginal productivity gains reverse",
      "Controlled for stress and age as confounding predictors with coefficient interpretation",
      "Delivered research-style report with diagnostics, residual analysis, and clear takeaways",
    ],
  },
  {
    id: "cardio",
    title: "Cardiovascular Performance ANOVA Study",
    icon: HeartPulse,
    accent: "from-rose-400/12 via-red-500/6 to-transparent",
    github: "https://github.com/nikhild738ND/Cardiovascular_Performance_ANOVA_Study",
    stack: ["R", "One-Way ANOVA", "Multi-Factor ANOVA", "Clinical Data"],
    summary:
      "Clinical ANOVA study evaluating how demographic and physiological features influence maximum heart rate and cardiovascular performance, with full assumption validation.",
    highlights: [
      "Designed one-way and multi-factor ANOVA experiments on structured clinical data",
      "Validated Levene's test, normality, and homogeneity of variance assumptions throughout",
      "Isolated key demographic and clinical predictors of cardiovascular peak performance",
      "Translated statistical findings into accessible language for non-technical stakeholders",
    ],
  },
];

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/* ─────────────────────── HOOKS ─────────────────────── */

function useScrolled(threshold = 44) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () =>
      setP(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
}

/* ─────────────────────── SECTION TITLE ─────────────────────── */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/28">
        <span className="block h-px w-5 bg-white/18" />
        {eyebrow}
      </p>
      <h2 className="text-[2.1rem] font-semibold leading-[1.14] tracking-tight text-white md:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-5 text-[15px] leading-[1.88] text-white/44">{description}</p>
    </div>
  );
}

/* ─────────────────────── BACKGROUND ─────────────────────── */

function BackgroundOrbs() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        left: `${8 + (i * 13) % 82}%`,
        top: `${6 + (i * 19) % 88}%`,
        delay: i * 0.32,
        duration: 8 + (i % 3) * 1.8,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Ambient radial glow */}
      <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.05)_0%,transparent_62%)]" />
      <div className="absolute right-[-8%] top-[22%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.045)_0%,transparent_62%)]" />
      <div className="absolute bottom-[12%] left-[-6%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_62%)]" />

      {/* Precise grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_40%,black,transparent)]" />

      {/* Floating nodes */}
      {nodes.map((n) => (
        <motion.div
          key={n.id}
          className="absolute h-[4px] w-[4px] rounded-full bg-sky-300/22"
          style={{ left: n.left, top: n.top }}
          animate={{ y: [0, -11, 0], opacity: [0.08, 0.38, 0.08] }}
          transition={{ duration: n.duration, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── MINI VIZZES ─────────────────────── */

function CardioMiniViz() {
  return (
    <div className="relative h-14 overflow-hidden rounded-xl border border-white/[0.06] bg-black/18">
      <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />
      <motion.svg viewBox="0 0 320 70" className="absolute inset-0 h-full w-full">
        <motion.path
          d="M0 35 L35 35 L55 35 L72 15 L88 55 L108 28 L130 35 L175 35 L192 35 L210 10 L228 56 L248 30 L270 35 L320 35"
          fill="none"
          stroke="rgba(251,113,133,0.85)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.45, 0.95, 0.45] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

function ChurnMiniViz() {
  const bars = [58, 78, 52, 86, 64, 38, 28];
  return (
    <div className="flex h-14 items-end gap-1.5 rounded-xl border border-white/[0.06] bg-black/18 px-3 pb-2.5 pt-2">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="w-full rounded-t-[4px] bg-gradient-to-t from-sky-500/85 to-cyan-300/85"
          style={{ height: `${bar}%`, transformOrigin: "bottom" }}
          animate={{ scaleY: [0.97, 1, 0.97] }}
          transition={{ duration: 3, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function RemoteMiniViz() {
  return (
    <div className="relative flex h-14 items-center justify-center rounded-xl border border-white/[0.06] bg-black/18">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-violet-300/22"
          style={{ width: 22 + i * 24, height: 22 + i * 24 }}
          animate={{ scale: [0.97, 1.04, 0.97], opacity: [0.18, 0.48, 0.18] }}
          transition={{ duration: 3.4, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.65)]" />
    </div>
  );
}

function CoffeeMiniViz() {
  return (
    <div className="relative h-14 overflow-hidden rounded-xl border border-white/[0.06] bg-black/18">
      <div className="absolute bottom-2 left-1/2 h-5 w-9 -translate-x-1/2 rounded-b-2xl rounded-t-md border border-amber-200/18 bg-amber-400/[0.07]" />
      <div className="absolute bottom-3.5 left-[57%] h-2.5 w-1 rounded-r-full border border-amber-100/18" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-6 h-5 w-px bg-gradient-to-t from-amber-300/0 to-amber-200/65"
          style={{ left: `${42 + i * 8}%` }}
          animate={{ y: [0, -9, -17], opacity: [0, 0.68, 0] }}
          transition={{ duration: 2.4, delay: i * 0.45, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "cardio") return <CardioMiniViz />;
  if (id === "churn") return <ChurnMiniViz />;
  if (id === "remote") return <RemoteMiniViz />;
  return <CoffeeMiniViz />;
}

/* ─────────────────────── PROJECT CARD ─────────────────────── */

function ProjectFlipCard({ project }: { project: (typeof projects)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = project.icon;

  return (
    <div className="[perspective:2000px]">
      <motion.button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-[450px] w-full text-left"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full rounded-[22px] [transform-style:preserve-3d]"
        >
          {/* ── FRONT ── */}
          <div className="absolute inset-0 rounded-[22px] border border-white/[0.07] bg-[#070a1c]/72 p-6 shadow-[0_24px_88px_rgba(0,0,0,0.48)] backdrop-blur-xl [backface-visibility:hidden]">
            <div className={`absolute inset-0 rounded-[22px] bg-gradient-to-br ${project.accent}`} />

            <div className="relative flex h-full flex-col">
              {/* Icon + flip hint */}
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-[13px] border border-white/[0.07] bg-white/[0.04] p-3 text-white/55">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/[0.06] px-2.5 py-1">
                  <span className="h-1 w-1 rounded-full bg-sky-400/60" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/28">
                    click to flip
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 max-w-[280px] text-[21px] font-semibold leading-[1.22] tracking-tight text-white">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="mt-3 text-[13px] leading-[1.82] text-white/45">{project.summary}</p>

              {/* Mini viz */}
              <div className="mt-4">
                <ProjectVisual id={project.id} />
              </div>

              {/* 2 highlights */}
              <div className="mt-4 space-y-2">
                {project.highlights.slice(0, 2).map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[12.5px] text-white/50">
                    <ChevronRight className="mt-[3px] h-3 w-3 flex-shrink-0 text-sky-400/65" />
                    <span className="leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.055] bg-white/[0.025] px-2 py-0.5 font-mono text-[10px] text-white/28"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
                  Flip for more <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="absolute inset-0 rounded-[22px] border border-white/[0.07] bg-[#060819]/98 p-6 shadow-[0_24px_88px_rgba(0,0,0,0.5)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.38em] text-white/22">
                    Project breakdown
                  </p>
                  <h3 className="max-w-[230px] text-[18px] font-semibold leading-[1.25] tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-[11px] text-white/50 transition-all hover:border-sky-400/35 hover:text-sky-300"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/[0.055] bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-white/38"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* All highlights */}
              <div className="mt-4 space-y-2">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[13px] border border-white/[0.05] bg-white/[0.022] px-4 py-3 text-[13px] leading-[1.78] text-white/55"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.10)]"
                >
                  View Repository
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/20">
                  Click to close
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.button>
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function PortfolioPage() {
  const scrolled = useScrolled();
  const progress = useScrollProgress();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050915] text-white selection:bg-sky-400/22 selection:text-sky-100">
      <BackgroundOrbs />

      {/* Scroll progress */}
      <div
        className="fixed left-0 top-0 z-[100] h-[1.5px] origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
        style={{ width: `${progress * 100}%` }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-5 sm:px-8 lg:px-10">

        {/* ─── NAV ─── */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className={`sticky top-4 z-50 mx-auto mb-8 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border border-white/[0.07] bg-[#050915]/88 shadow-[0_8px_44px_rgba(0,0,0,0.58)] backdrop-blur-2xl"
              : "border border-transparent"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.2em] text-white/65 transition hover:text-white"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-white/[0.08] bg-white/[0.035]">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            </div>
            NIKHIL KUMAR
          </a>

          <nav className="hidden items-center gap-0.5 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-xl px-3.5 py-1.5 text-[12.5px] text-white/42 transition-all hover:bg-white/[0.035] hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com/nikhild738ND"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-[12px] text-white/55 transition-all hover:border-sky-400/32 hover:text-sky-300"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            GitHub
          </a>
        </motion.header>

        {/* ─── HERO ─── */}
        <section
          id="home"
          ref={heroRef}
          className="mx-auto grid max-w-6xl gap-10 pt-10 md:grid-cols-[1.2fr_0.8fr] md:pt-14"
        >
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/18 bg-emerald-400/[0.055] px-4 py-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-55" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300/75">
                Open to opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-[66px]"
            >
              Statistics.{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                Machine
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                Learning.
              </span>{" "}
              Insight.
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.76, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[460px] text-[15px] leading-[1.88] text-white/44"
            >
              I'm{" "}
              <span className="font-medium text-white/75">Nikhil Kumar</span> — a graduate student in
              Statistics (Data Science) at{" "}
              <span className="text-white/58">California State University, East Bay</span>. I build
              ML pipelines, statistical models, and analytics systems with a bias toward precision,
              reproducibility, and clear business impact.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[13px] font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(255,255,255,0.13)]"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilkumar000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-6 py-3 text-[13px] text-white/60 transition-all hover:border-sky-400/32 hover:text-sky-300"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/nikhild738ND"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-6 py-3 text-[13px] text-white/60 transition-all hover:border-sky-400/32 hover:text-sky-300"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-6 py-3 text-[13px] text-white/60 transition-all hover:border-sky-400/32 hover:text-sky-300"
              >
                <BookOpen className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                { label: "Graduate GPA", value: "4.0", note: "/ 4.0" },
                { label: "Undergrad GPA", value: "3.0", note: "/ 4.0" },
                { label: "Focus", value: "AI · ML", note: "" },
                { label: "Foundation", value: "Statistics", note: "" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-[17px] border border-white/[0.065] bg-white/[0.022] p-4 backdrop-blur-sm"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/24">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[19px] font-semibold text-white">
                    {item.value}
                    {item.note && (
                      <span className="text-[12px] font-normal text-white/28"> {item.note}</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile card ── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.82, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[26px] border border-white/[0.065] bg-white/[0.022] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl"
          >
            {/* Photo */}
            <div className="relative mb-5 overflow-hidden rounded-[20px] border border-white/[0.07] bg-black/18">
              <div className="relative h-[360px] w-full">
                <Image
                  src="/profile.jpeg"
                  alt="Nikhil Kumar"
                  fill
                  className="object-cover object-[center_78%] transition-transform duration-700 hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-[#050915]/22 to-transparent" />

                {/* Floating badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-black/48 px-3 py-1.5 backdrop-blur-sm">
                  <Activity className="h-3 w-3 text-sky-300" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    Data Science Portfolio
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-sky-300/55">
                    Profile
                  </p>
                  <h3 className="mt-1.5 text-[22px] font-semibold tracking-tight text-white">
                    Nikhil Kumar
                  </h3>
                  <p className="mt-0.5 text-[12px] text-white/42">
                    M.S. Statistics · Data Science
                  </p>
                </div>
              </div>
            </div>

            {/* TOC */}
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5 text-white/28" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
                Table of Contents
              </p>
            </div>

            <div className="space-y-0.5">
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center justify-between rounded-xl border border-transparent px-3.5 py-2.5 text-[13px] text-white/42 transition-all hover:border-white/[0.055] hover:bg-white/[0.022] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-white/18">0{i + 1}</span>
                    {section.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.aside>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="mx-auto max-w-6xl pt-32">
          <SectionTitle
            eyebrow="About"
            title="Applied data science, AI, ML, and analytics grounded in statistical rigor."
            description="I build data science projects that combine machine learning, statistical analysis, and business analytics into clear, decision-ready insight. My work blends predictive modeling, experimentation, KPI analysis, and applied statistics — with a focus on rigor, reproducibility, and communicating results with precision."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Machine Learning",
                body: "End-to-end ML pipelines with rigorous model selection, validation, and evaluation frameworks. Emphasis on interpretability and measurable business performance.",
              },
              {
                label: "Statistical Analysis",
                body: "ANOVA, regression, hypothesis testing, and correlation studies — translated from raw inference into decisions that stakeholders can act on immediately.",
              },
              {
                label: "Portfolio Execution",
                body: "Every project is production-level: clean methodology, reproducible code, documented assumptions, and recruiter-ready GitHub structure throughout.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22 }}
                className="rounded-[20px] border border-white/[0.065] bg-white/[0.022] p-6 backdrop-blur-sm"
              >
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-400/55">
                  {item.label}
                </p>
                <p className="text-[14px] leading-[1.82] text-white/45">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── EDUCATION ─── */}
        <section id="education" className="mx-auto max-w-6xl pt-32">
          <SectionTitle
            eyebrow="Education"
            title="Academic foundation in statistics, data science, and engineering."
            description="Graduate-level statistical training built on an engineering undergraduate — covering machine learning, analytics, experimentation, and applied data science."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                badge: "Graduate",
                name: "California State University, East Bay",
                degree: "M.S. Statistics — Concentration in Data Science",
                gpa: "4.0 / 4.0",
                link: "https://www.csueastbay.edu/",
                featured: true,
              },
              {
                badge: "Undergraduate",
                name: "Guru Gobind Singh Indraprastha University",
                degree: "B.Tech — Electrical and Electronics Engineering",
                gpa: "3.0 / 4.0",
                link: "http://www.ipu.ac.in/",
                featured: false,
              },
            ].map((inst) => (
              <motion.div
                key={inst.name}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22 }}
                className={`rounded-[22px] border p-7 backdrop-blur-xl ${
                  inst.featured
                    ? "border-sky-400/14 bg-sky-400/[0.022] shadow-[0_0_55px_rgba(56,189,248,0.035)]"
                    : "border-white/[0.065] bg-white/[0.022]"
                }`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="rounded-[13px] border border-white/[0.065] bg-white/[0.035] p-3 text-white/48">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span
                    className={`rounded-lg px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.24em] ${
                      inst.featured
                        ? "border border-sky-400/18 bg-sky-400/[0.065] text-sky-300/75"
                        : "border border-white/[0.055] bg-white/[0.025] text-white/22"
                    }`}
                  >
                    {inst.badge}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold tracking-tight text-white">{inst.name}</h3>
                <p className="mt-2 text-[14px] text-white/48">{inst.degree}</p>

                <div className="mt-3.5 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400/55" />
                  <span className="font-mono text-[12px] text-amber-300/55">GPA: {inst.gpa}</span>
                </div>

                <a
                  href={inst.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-[12px] text-white/28 transition-all hover:text-sky-300"
                >
                  Visit institution
                  <ExternalLink className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="mx-auto max-w-6xl pt-32">
          <SectionTitle
            eyebrow="Experience"
            title="Professional exposure in analytics and business intelligence."
            description="Analytics-focused roles centered on translating data into operational visibility, decision support, and measurable business performance across high-growth EdTech environments."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-white/[0.07] via-white/[0.035] to-transparent" />

            <div className="space-y-6">
              {[
                {
                  company: "UNIVO",
                  role: "Business Intelligence Analyst",
                  text: "Designed and maintained BI reporting workflows to surface operational visibility, track KPIs, and support data-backed strategic decisions in a growth-stage education environment.",
                  tags: ["Business Intelligence", "KPI Reporting", "Data Analysis"],
                },
                {
                  company: "BYJU'S",
                  role: "Growth Analyst",
                  text: "Led growth analytics initiatives including funnel analysis, performance monitoring, and strategic reporting to support business outcomes across one of the world's largest EdTech platforms.",
                  tags: ["Growth Analytics", "Funnel Analysis", "Strategic Reporting"],
                },
              ].map((item) => (
                <div key={item.company} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-[22px] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-[#050915]">
                    <Briefcase className="h-4 w-4 text-sky-400/65" />
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.22 }}
                    className="flex-1 rounded-[20px] border border-white/[0.065] bg-white/[0.022] p-6 backdrop-blur-sm"
                  >
                    <div className="mb-3 flex flex-wrap items-baseline gap-3">
                      <h3 className="text-[19px] font-semibold tracking-tight text-white">
                        {item.company}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/28">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.82] text-white/43">{item.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/[0.05] bg-white/[0.018] px-2.5 py-1 text-[10.5px] text-white/32"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="mx-auto max-w-6xl pt-32">
          <SectionTitle
            eyebrow="Projects"
            title="Applied Projects Across Data Science, AI, Machine Learning, and Analytics"
            description="These projects reflect my approach to building decision-ready solutions through machine learning, statistical modeling, and applied analytics — with rigorous evaluation, interpretability, and practical business value at the core."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectFlipCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="mx-auto max-w-6xl pt-32">
          <SectionTitle
            eyebrow="Contact"
            title="Let's connect."
            description="Open to full-time roles, internships, and conversations around data science, ML, AI, and business intelligence."
          />

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.22 }}
            className="rounded-[26px] border border-white/[0.065] bg-white/[0.022] p-8 backdrop-blur-xl"
          >
            {/* Header strip */}
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.045] pb-7">
              <div>
                <h3 className="text-[20px] font-semibold tracking-tight text-white">
                  Nikhil Kumar
                </h3>
                <p className="mt-1 text-[13px] text-white/32">
                  M.S. Statistics (Data Science) · CSU East Bay · 4.0 GPA
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/18 bg-emerald-400/[0.055] px-4 py-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-55" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/72">
                  Available now
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Mail, label: "Email", value: "nikhild738@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=nikhild738@gmail.com" },
                { icon: Phone, label: "Phone", value: "(341) 345-2395", href: "tel:3413452395" },
                { icon: ExternalLink, label: "LinkedIn", value: "linkedin.com/in/nikhilkumar000", href: "https://www.linkedin.com/in/nikhilkumar000" },
                { icon: ExternalLink, label: "GitHub", value: "github.com/nikhild738ND", href: "https://github.com/nikhild738ND" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-[16px] border border-white/[0.052] bg-white/[0.018] px-4 py-4 transition-all hover:border-sky-400/22 hover:bg-sky-400/[0.025]"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.055] bg-white/[0.028] transition group-hover:border-sky-400/18">
                    <Icon className="h-4 w-4 text-white/38 transition group-hover:text-sky-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/18">
                      {label}
                    </p>
                    <p className="mt-0.5 truncate text-[13px] text-white/55 transition group-hover:text-white/82">
                      {value}
                    </p>
                  </div>
                  <ExternalLink className="ml-auto h-3 w-3 flex-shrink-0 text-white/15 transition group-hover:text-sky-400/55" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="mx-auto mt-24 max-w-6xl border-t border-white/[0.038] py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] text-white/18">
              © {new Date().getFullYear()} Nikhil Kumar. Built with precision.
            </p>
            <div className="flex gap-6">
              {[
                { l: "GitHub", h: "https://github.com/nikhild738ND" },
                { l: "LinkedIn", h: "https://www.linkedin.com/in/nikhilkumar000" },
                { l: "Resume", h: "/resume.pdf" },
              ].map((x) => (
                <a
                  key={x.l}
                  href={x.h}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-white/22 transition hover:text-white/55"
                >
                  {x.l}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}