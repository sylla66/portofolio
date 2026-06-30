import { useState } from "react";

// ---------------------------------------------------------------------------
// CONTENU À PERSONNALISER : modifie les objets ci-dessous avec tes infos.
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Hamidou Sylla",
  role: "Full-Stack Software Engineer",
  location: "Dakar, Sénégal",
  tagline:
    "Je construis des applications full-stack robustes — d'Angular/Spring Boot vers Node.js/React.",
  email: "ton.email@example.com",
  github: "https://github.com/sylla66",
  linkedin: "https://linkedin.com/in/ton-profil",
};

const STACK_STATUS = [
  { key: "experience", value: "3+ ans" },
  { key: "core_stack", value: "Angular · Spring Boot · MySQL/PostgreSQL" },
  { key: "growing_into", value: "Node.js · Express · React · MongoDB" },
  { key: "availability", value: "Freelance · Missions remote" },
];

const MIGRATION = [
  {
    period: "2022 — 2024",
    title: "Fondations Angular + Spring Boot",
    body: "PRODAC (archivage documentaire, Ministère de l'Agriculture) et Groupe Sonatel (dashboards KPI pour Orange Finance Mobile). Auth JWT, RBAC, logs d'audit asynchrones, documentation REST.",
  },
  {
    period: "2025 — 2026",
    title: "Montée en puissance Node.js + React",
    body: "Construction de RentalCar en autonomie : Express 5, MongoDB, React 19, Stripe, CI/CD GitHub Actions. Architecture pensée comme en environnement de production.",
  },
  {
    period: "Aujourd'hui",
    title: "Polyvalent sur les deux écosystèmes",
    body: "Capable d'intervenir sur du legacy Java/Angular comme sur du Node/React moderne — un vrai atout pour des équipes en transition technique.",
  },
];

const PROJECTS = [
  {
    name: "RentalCar",
    tag: "Projet phare",
    description:
      "Plateforme complète de location et vente de véhicules. Backend Express 5 + MongoDB avec auth JWT, paiement Stripe (réservation + vente), système d'avis, dashboard admin. Frontend React 19 + Tailwind v4.",
    stack: ["Node.js", "Express", "MongoDB", "React 19", "Stripe", "CI/CD"],
    links: [
      { label: "Code backend", href: "https://github.com/sylla66/backend-rental-car" },
      { label: "Code frontend", href: "https://github.com/sylla66/rental-car" },
      { label: "Démo live", href: "#" },
    ],
  },
  {
    name: "AgriPoultry",
    tag: "Agri-tech",
    description:
      "Application de gestion d'élevage avicole combinée à une vraie exploitation familiale. Roadmap 12 mois, du MVP interne au SaaS commercial.",
    stack: ["Supabase", "Node.js", "React Native"],
    links: [{ label: "Détails sur demande", href: "#contact" }],
  },
];

const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Full-Stack Software Engineer",
    period: "2026 — présent",
    body: "Conception et développement de RentalCar comme projet portfolio ; recherche active de missions remote et de rôles digital banking.",
  },
  {
    company: "Groupe Sonatel (Orange)",
    role: "Software Engineer",
    period: "—",
    body: "Dashboards KPI stratégiques pour Orange Finance Mobile et autres business units.",
  },
  {
    company: "PRODAC",
    role: "Software Engineer",
    period: "—",
    body: "Plateforme d'archivage documentaire pour le Ministère de l'Agriculture. Auth JWT, RBAC, audit logging.",
  },
];

// ---------------------------------------------------------------------------

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#stack", label: "Parcours" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-wide text-paper">
          {PROFILE.name}
        </a>
        <button
          className="text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? "Fermer" : "Menu"}
        </button>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-wider text-paper-dim md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-amber">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line/60 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-wider text-paper-dim md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {PROFILE.location}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-paper md:text-6xl">
            {PROFILE.role}.
          </h1>
          <p className="mt-6 max-w-md text-paper-dim">{PROFILE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-sm bg-amber px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-opacity hover:opacity-90"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-amber hover:text-amber"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Signature element : panneau "status" façon terminal/API */}
        <div className="rounded-sm border border-line bg-ink-raised font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-paper-dim">
            <span className="h-2 w-2 rounded-full bg-amber" />
            engineer.status()
          </div>
          <pre className="overflow-x-auto px-4 py-4 leading-relaxed text-paper-dim">
            <code>
              {"{\n"}
              {STACK_STATUS.map(
                (item, i) =>
                  `  "${item.key}": "${item.value}"${
                    i < STACK_STATUS.length - 1 ? "," : ""
                  }\n`
              ).join("")}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          À propos
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium text-paper md:text-3xl">
          Trois ans à construire des systèmes qui tiennent en production —
          aujourd'hui en transition active vers l'écosystème JavaScript.
        </h2>
        <p className="mt-6 max-w-2xl text-paper-dim">
          {/* Remplace ce paragraphe par 2-3 phrases sur ton parcours, ce qui
          te motive et ce que tu cherches (mission remote, rôle digital
          banking, etc.) */}
          Mon socle est Angular + Spring Boot, construit sur des projets
          d'archivage documentaire et de dashboards KPI pour des structures
          publiques et des opérateurs télécom. Je développe aujourd'hui en
          autonomie sur Node.js et React, avec RentalCar comme terrain
          d'expérimentation réel.
        </p>
      </div>
    </section>
  );
}

function StackTimeline() {
  return (
    <section id="stack" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          Parcours technique
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium text-paper md:text-3xl">
          De Java à JavaScript, une transition assumée.
        </h2>
        <ol className="mt-10 space-y-8 border-l border-line pl-8">
          {MIGRATION.map((step) => (
            <li key={step.period} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-amber bg-ink" />
              <p className="font-mono text-xs uppercase tracking-wider text-amber">
                {step.period}
              </p>
              <h3 className="mt-2 font-display text-lg text-paper">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm text-paper-dim">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          Projets
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium text-paper md:text-3xl">
          Ce que j'ai construit.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-sm border border-line bg-ink-raised p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display text-xl text-paper">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-sm text-paper-dim">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-paper-dim"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:text-amber"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          Expérience
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium text-paper md:text-3xl">
          Où j'ai travaillé.
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              <div>
                <h3 className="font-display text-lg text-paper">
                  {job.company}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-amber">
                  {job.role}
                </p>
                <p className="mt-1 font-mono text-xs text-paper-dim">
                  {job.period}
                </p>
              </div>
              <p className="text-sm text-paper-dim">{job.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-medium text-paper md:text-3xl">
          Disponible pour des missions remote et des opportunités full-stack.
        </h2>
        <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-paper transition-colors hover:text-amber"
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.github}
            className="text-paper transition-colors hover:text-amber"
          >
            GitHub →
          </a>
          <a
            href={PROFILE.linkedin}
            className="text-paper transition-colors hover:text-amber"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-8">
      <p className="mx-auto max-w-5xl font-mono text-xs text-paper-dim">
        © {new Date().getFullYear()} {PROFILE.name} — construit avec React +
        Tailwind, déployé sur Vercel.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-body">
      <NavBar />
      <Hero />
      <About />
      <StackTimeline />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
