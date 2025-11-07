"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" }
];

const expertise = [
  {
    heading: "Product Engineering",
    description:
      "Designs resilient systems that scale from zero to millions while keeping latency low and UX delightful.",
    tags: ["TypeScript", "Next.js", "Edge APIs"]
  },
  {
    heading: "Design Systems",
    description:
      "Composes immersive visual languages grounded in accessibility, rhythm, and tactile motion heuristics.",
    tags: ["Design Tokens", "Storybook", "Interactive Motion"]
  },
  {
    heading: "Creative Tech",
    description:
      "Experiments with data art, WebGL, and generative narratives to craft memorable product launches.",
    tags: ["Three.js", "Shader Art", "Realtime"]
  }
];

const timeline = [
  {
    title: "Principal Full Stack Engineer — Orbital",
    timeframe: "2022 — Present",
    description:
      "Leading a platform rewrite to a modular micro-frontend architecture, cutting deployment friction by 63% and shipping 2x faster. Championing autonomous product squads and outcome-driven metrics."
  },
  {
    title: "Staff Frontend Architect — Lumen",
    timeframe: "2019 — 2022",
    description:
      "Shipped a design system spanning 14 product surfaces with focus on accessibility. Rolled out SSR caching strategy that reduced TTFB from 2.4s to 640ms across regions."
  },
  {
    title: "Senior Product Engineer — Atlas",
    timeframe: "2016 — 2019",
    description:
      "Built collaborative tools blending spatial interfaces with AI assistance, leading to 40% lift in weekly active usage."
  }
];

const projects = [
  {
    title: "Celestial Sprint",
    summary:
      "A multiplayer sprint planning suite that visualizes team capacity through immersive constellations and predictive models.",
    result: "Adopted by 25+ distributed orgs within 3 months",
    cta: "Explore playbook",
    href: "https://dribbble.com",
    palette: ["#5cf1ff", "#6b5bff"]
  },
  {
    title: "Neon Verse",
    summary:
      "An interactive storytelling engine that stitches marketing copy with live telemetry to surface product wins in real time.",
    result: "Drove 3.2x conversion in flagship launch",
    cta: "Read narrative",
    href: "https://www.behance.net",
    palette: ["#ff56df", "#6b5bff"]
  },
  {
    title: "Atlas Atlas",
    summary:
      "Spatial knowledge graph that syncs product strategy, OKRs, and engineering delivery with heatmap guidance.",
    result: "Shortened discovery cycles by 45%",
    cta: "View system",
    href: "https://github.com",
    palette: ["#9fe870", "#5cf1ff"]
  }
];

const philosophies = [
  {
    title: "Design for Depth",
    copy: "Create interfaces that invite exploration. Every pixel should hint at the next story, blending clarity with delightful easter eggs."
  },
  {
    title: "Systems over Pages",
    copy: "Treat products as ecosystems. Compose primitives, rituals, and automation so teams ship faster with fewer regressions."
  },
  {
    title: "Friction as Signal",
    copy: "Instrument moments of user hesitation. Convert them into insight loops that protect experience quality as features scale."
  }
];

const testimonials = [
  {
    quote:
      "Nova maps strategy into pixels and packets with rare fluency. Our launch cadence doubled without sacrificing craft or joy.",
    name: "Amelia Sparks",
    title: "Chief Product Officer, Orbital"
  },
  {
    quote:
      "From code to choreography, every interaction felt intentional. We gained a north star for how great software should feel.",
    name: "David Ng",
    title: "Head of Design, Lumen"
  }
];

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <motion.span
            className="nav-brand"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            nova orbit
          </motion.span>
          <div className="nav-links">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <div className="hero-left">
            <motion.div className="hero-badges" initial="hidden" animate="visible">
              <motion.span
                className="tag"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                Full Stack Polymath
              </motion.span>
              <motion.span
                className="tag"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Building Resonant Products
              </motion.span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Crafting the future of human + software collaboration.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              I build immersive product surfaces and resilient infrastructure that feel alive at scale. From orchestrating
              micro-services to choreographing motion design, my work bridges delightful interactions with measurable outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <Link href="#contact" className="primary-button">
                Request collaboration
              </Link>
            </motion.div>
          </div>
          <div className="hero-right">
            <motion.div
              className="hero-orbital"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div className="hero-orbit-ring">
                <div className="hero-orbit-dot" />
              </div>
              <div className="hero-avatar">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  NO
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="section-header">
            <div>
              <p className="section-title">Signature Craft</p>
              <h2 className="section-subtitle">Engineering stories that scale</h2>
            </div>
          </div>
          <div className="card-grid">
            {expertise.map((item, idx) => (
              <motion.article
                key={item.heading}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="tag">{item.heading}</span>
                <p style={{ marginTop: "22px", color: "var(--muted)", fontSize: "18px", lineHeight: 1.7 }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "28px" }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: "11px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <div>
              <p className="section-title">Experience</p>
              <h2 className="section-subtitle">Orbit of impact</h2>
            </div>
          </div>
          <div className="card">
            <div className="timeline">
              {timeline.map(role => (
                <div className="timeline-item" key={role.title}>
                  <h3 style={{ margin: 0, fontSize: "22px" }}>{role.title}</h3>
                  <p style={{ margin: "8px 0", color: "var(--accent)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    {role.timeframe}
                  </p>
                  <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <div>
              <p className="section-title">Selected Work</p>
              <h2 className="section-subtitle">Explorations & launches</h2>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
              >
                <div className="project-preview">
                  <svg viewBox="0 0 320 180" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
                    <defs>
                      <linearGradient id={`projectGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="10%" stopColor={project.palette[0]} stopOpacity="0.76" />
                        <stop offset="90%" stopColor={project.palette[1]} stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="180" fill="#050b18" />
                    <circle cx="40" cy="40" r="32" fill={`url(#projectGradient-${idx})`} opacity="0.9" />
                    <circle cx="240" cy="70" r="24" fill={`url(#projectGradient-${idx})`} opacity="0.6" />
                    <path
                      d="M40 140 Q150 40 280 150"
                      stroke={`url(#projectGradient-${idx})`}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </svg>
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{project.summary}</p>
                  <p style={{ margin: 0, color: "var(--accent)", fontWeight: 600 }}>{project.result}</p>
                  <motion.a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {project.cta}
                    <span aria-hidden>↗</span>
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="philosophy">
          <div className="section-header">
            <div>
              <p className="section-title">Creative Operating System</p>
              <h2 className="section-subtitle">Principles in orbit</h2>
            </div>
          </div>
          <div className="card-grid">
            {philosophies.map((item, idx) => (
              <motion.article
                key={item.title}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <h3 style={{ margin: 0, fontSize: "24px" }}>{item.title}</h3>
                <p style={{ marginTop: "18px", color: "var(--muted)", lineHeight: 1.7 }}>{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-header">
            <div>
              <p className="section-title">Voices</p>
              <h2 className="section-subtitle">Reflections from collaborators</h2>
            </div>
          </div>
          <div className="testimonials">
            {testimonials.map((item, idx) => (
              <motion.article
                key={item.name}
                className="card testimonial"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <p>“{item.quote}”</p>
                <div className="signature">
                  <span style={{ fontWeight: 600 }}>{item.name}</span>
                  <span style={{ color: "var(--muted)", fontSize: "14px" }}>{item.title}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="card" style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
              style={{
                position: "absolute",
                inset: "-40%",
                background: "radial-gradient(circle, rgba(92,241,255,0.18), transparent 60%)",
                filter: "blur(80px)",
                zIndex: 0
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="section-header" style={{ marginBottom: "28px" }}>
                <div>
                  <p className="section-title">Collaborate</p>
                  <h2 className="section-subtitle">Let’s engineer what’s next</h2>
                </div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "18px", lineHeight: 1.7 }}>
                I partner with product teams and founders to ship ambitious experiences — from zero-to-one incubations to
                large-scale transformations. Tell me about your orbit.
              </p>
              <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "18px" }}>
                <motion.a
                  href="mailto:hola@novaorbit.studio"
                  className="primary-button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  hola@novaorbit.studio
                </motion.a>
                <motion.a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                  style={{
                    background: "rgba(107, 91, 255, 0.12)",
                    color: "var(--accent)",
                    boxShadow: "none",
                    border: "1px solid rgba(107, 91, 255, 0.3)"
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule constellation
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Nova Orbit — Crafted in the glow between art & systems</span>
        <span>Open for explorations worldwide</span>
      </footer>
    </>
  );
}
