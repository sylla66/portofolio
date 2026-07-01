import { useState } from "react";

// ---------------------------------------------------------------------------
// CONTENU À PERSONNALISER : modifie les objets ci-dessous avec tes infos.
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Hamidou Sylla",
  role: "Ingénieur Full-Stack",
  location: "Dakar, Sénégal",
  tagline:
    "Plus de 3 ans à concevoir et déployer des applications web robustes — à l'aise sur Angular/Spring Boot comme sur Node.js/React. Spécialisé APIs REST, paiements Stripe, dashboards analytiques et CI/CD.",
  email: "sylla.66.hamidou@gmail.com",
  phone: "+221 77 823 55 61",
  github: "https://github.com/sylla66",
  linkedin: "https://www.linkedin.com/in/hamidou-sylla/",
  formspreeEndpoint: "https://formspree.io/f/xlgywazj",
};

const STACK_STATUS = [
  { key: "experience", value: "3+ ans" },
  { key: "core_stack", value: "Angular · Spring Boot · Java 21 · PostgreSQL/MySQL" },
  { key: "growing_into", value: "Node.js · Express 5 · React 19 · MongoDB" },
  { key: "availability", value: "Missions locales ou remote" },
];

// Parcours technique : PRODAC (mission pro) et RentalCar (projet perso) sont
// bien distincts, même s'ils se déroulent sur la même période.
const MIGRATION = [
  {
    period: "2022 — 2024",
    title: "Fondations Angular + Spring Boot",
    body: "SIHITY Hi-Tech (Casablanca), puis Groupe Sonatel : dashboard de KPIs stratégiques pour la Direction Générale, dashboards Orange Finance Mobile, monitoring fibre optique Saytu-DRPS, migration SQL Server vers PostgreSQL.",
  },
  {
    period: "2024 — 2026",
    title: "PRODAC — Mission professionnelle",
    body: "Choix des technologies et développement backend de deux applications au Ministère de l'Agriculture — Archivage documentaire et Plan de travail mensuel — toutes deux en production. Suivi de l'équipe pour garantir la réussite des projets. Stack : Spring Boot 3, Java 21, Angular.",
  },
  {
    period: "En parallèle, 2024 — 2026",
    title: "RentalCar — Projet personnel",
    body: "Construction en autonomie, hors PRODAC, d'une plateforme complète de location/vente de véhicules sur Node.js/Express/React, pour monter en puissance sur cet écosystème.",
  },
  {
    period: "Aujourd'hui",
    title: "Polyvalent sur les deux écosystèmes",
    body: "Capable d'intervenir sur du legacy Java/Angular comme sur du Node/React moderne — un vrai atout pour des équipes en transition technique ou en environnement digital banking.",
  },
];

const PROJECTS = [
  {
    name: "RentalCar",
    tag: "Projet personnel",
    description:
      "Application full-stack de location et vente de véhicules, développée en autonomie (hors cadre professionnel). API REST complète : auth JWT, catalogue véhicules, réservations anti-chevauchement, paiement Stripe end-to-end (PaymentIntent → Elements → Webhook), avis clients et dashboard admin avec KPIs temps réel. Sécurité : Helmet, rate limiting, CORS multi-origines, bcrypt. 44 tests automatisés.",
    stack: ["Node.js", "Express 5", "MongoDB", "React 19", "Stripe", "Jest", "GitHub Actions"],
    links: [
      { label: "Code backend", href: "https://github.com/sylla66/backend-rental-car" },
      { label: "Code frontend", href: "https://github.com/sylla66/rental-car" },
      { label: "Démo live", href: "https://rental-car-beryl-six.vercel.app" },
    ],
  },
  {
    name: "PRODAC — Archivage documentaire & Plan de travail mensuel",
    tag: "Mission professionnelle · Ministère de l'Agriculture · En production",
    description:
      "Deux applications déployées en production pour le Ministère de l'Agriculture. Responsable du choix des technologies et du développement backend, avec suivi de l'équipe pour garantir la réussite des projets. Archivage documentaire : numérisation et archivage institutionnel en architecture hexagonale, audit logging asynchrone (@Async + AOP), accès JWT avec traçage IP/User-Agent, RBAC multi-niveaux. Plan de travail mensuel : suivi et validation des plans de travail des équipes, avec reporting pour les responsables.",
    stack: ["Spring Boot 3", "Java 21", "Angular", "MySQL", "JWT"],
    links: [{ label: "Confidentiel — détails sur demande", href: "#contact" }],
  },
];

const EXPERIENCE = [
  {
    company: "PRODAC — Ministère de l'Agriculture",
    role: "Développeur Full-Stack & Administrateur BDD",
    period: "2024 — 2026",
    body: "Choix des technologies et développement backend de deux applications en production : Archivage documentaire (numérisation et archivage institutionnel) et Plan de travail mensuel (suivi des équipes). Suivi de l'équipe de développement pour garantir la réussite des projets. Optimisation des performances MySQL et dashboards analytiques pour les équipes métier.",
  },
  {
    company: "Groupe Sonatel SA (Orange Sénégal)",
    role: "Développeur Full-Stack (intérim puis poste permanent)",
    period: "2022 — 2024",
    body: "Conception et développement d'un dashboard de KPIs stratégiques pour la Direction Générale, permettant le suivi en temps réel des indicateurs clés de performance. Développement de Saytu-DRPS (monitoring temps réel de la fibre optique) puis de dashboards analytiques pour le Marketing et Orange Finance Mobile. APIs REST pour formulaires métier, migration de données SQL Server vers PostgreSQL, déploiement de la plateforme AirDBM.",
  },
  {
    company: "SIHITY Hi-Tech",
    role: "Développeur Web (Apprentissage)",
    period: "2022 · Casablanca, Maroc",
    body: "Plateforme d'automatisation de la feuille de soin marocaine. Template frontend, APIs backend et intégration backend/frontend.",
  },
];

const EDUCATION = [
  {
    period: "2020 — 2022",
    title: "Diplôme d'Ingénieur — Ingénierie des Systèmes d'Information",
    place: "ESTEM, Casablanca, Maroc",
  },
  {
    period: "2019 — 2020",
    title: "Licence — Sciences de l'Ingénieur",
    place: "ESMT, Dakar, Sénégal",
  },
  {
    period: "2017 — 2019",
    title: "BTS — Informatique de Gestion",
    place: "ISI, Dakar, Sénégal",
  },
];

const CERTIFICATIONS = [
  "Agile Scrum & Kanban — Udemy",
  "Suivi & Évaluation de projet — AFD",
];

const LANGUAGES = [
  { name: "Français · Wolof", level: "Bilingue" },
  { name: "Anglais", level: "Professionnel" },
  { name: "Soninké", level: "Intermédiaire" },
];

const SERVICES = [
  {
    title: "Applications web modernes",
    body: "Interfaces React/Angular rapides, propres et pensées pour l’utilisateur, avec une vraie cohérence UX/UI.",
  },
  {
    title: "Architecture & performance",
    body: "Conception d’APIs REST robustes, gestion des données, sécurité et optimisation des performances.",
  },
  {
    title: "Accompagnement produit",
    body: "De la conception à la mise en production, avec un regard pratique sur les besoins métier et la stabilité.",
  },
];

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
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm tracking-[0.25em] text-paper">
          {PROFILE.name}
        </a>
        <button
          className="rounded-full border border-line px-3 py-1.5 text-sm text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? "Fermer" : "Menu"}
        </button>
        <ul className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim md:flex">
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
        <ul className="flex flex-col gap-1 border-t border-line/60 bg-ink px-6 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim md:hidden">
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
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
            <span className="h-2 w-2 rounded-full bg-amber" />
            {PROFILE.location}
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-paper md:text-6xl">
            {PROFILE.role}.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-paper-dim">
            {PROFILE.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper transition-colors hover:border-amber hover:text-amber"
            >
              Me contacter
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "3+ ans d’expérience" },
              { label: "Remote / Local" },
              { label: "React · Java · APIs" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="rounded-full border border-line/80 bg-ink/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-dim"
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-line/80 bg-ink-raised/80 p-6 shadow-[0_0_80px_rgba(217,142,59,0.12)]">
          <div className="flex items-center justify-between border-b border-line/70 pb-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
              engineer.status()
            </p>
            <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
              Disponible
            </span>
          </div>
          <pre className="mt-4 overflow-x-auto text-sm leading-7 text-paper-dim">
            <code>
              {"{\n"}
              {STACK_STATUS.map((item, i) => `  "${item.key}": "${item.value}"${i < STACK_STATUS.length - 1 ? "," : ""}\n`).join("")}
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
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          À propos
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-2xl font-display text-2xl font-semibold text-paper md:text-3xl">
              Je construis des produits fiables, propres et prêts pour la production.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-paper-dim">
              Mon socle est Angular + Spring Boot, construit chez Groupe Sonatel et PRODAC, sur des dashboards stratégiques, du monitoring temps réel et des systèmes d'archivage sécurisés. En parallèle de ces missions, je développe en autonomie sur Node.js et React, avec RentalCar — un projet personnel — comme terrain d'expérimentation réel.
            </p>
          </div>
          <div className="rounded-3xl border border-line/70 bg-ink-raised/70 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              Ce que je peux apporter
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-paper-dim">
              <li>• APIs REST solides, documentées et sécurisées</li>
              <li>• Interfaces modernes avec une attention UX forte</li>
              <li>• Intégration de paiements, authentification et analytics</li>
              <li>• Mise en place d'un workflow CI/CD clair et fiable</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          Services
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">
          Une approche claire pour transformer une idée en produit solide.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-line/70 bg-ink-raised/70 p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="font-display text-lg text-paper">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paper-dim">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackTimeline() {
  return (
    <section id="stack" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          Parcours technique
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">
          De Java à JavaScript, une transition assumée.
        </h2>
        <ol className="mt-10 space-y-8 border-l border-line pl-8">
          {MIGRATION.map((step) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-amber bg-ink" />
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                {step.period}
              </p>
              <h3 className="mt-2 font-display text-lg text-paper">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-paper-dim">{step.body}</p>
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
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          Projets
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">
          Ce que j’ai construit.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-3xl border border-line/70 bg-ink-raised/70 p-6 shadow-[0_0_40px_rgba(15,28,31,0.45)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display text-xl text-paper">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-paper-dim">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-dim"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-line/70 pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper transition-colors hover:text-amber"
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
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          Expérience
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper md:text-3xl">
          Où j’ai travaillé.
        </h2>
        <div className="mt-10 divide-y divide-line/70 border-y border-line/70">
          {EXPERIENCE.map((job) => (
            <div key={job.company + job.period} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:gap-8">
              <div>
                <h3 className="font-display text-lg text-paper">{job.company}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
                  {job.role}
                </p>
                <p className="mt-1 font-mono text-[11px] text-paper-dim">{job.period}</p>
              </div>
              <p className="text-sm leading-7 text-paper-dim">{job.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              Formation
            </p>
            <ul className="mt-5 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <p className="font-mono text-[11px] text-paper-dim">{e.period}</p>
                  <p className="mt-1 text-sm font-medium text-paper">{e.title}</p>
                  <p className="text-sm text-paper-dim">{e.place}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
              Certifications & Langues
            </p>
            <ul className="mt-5 space-y-2 text-sm text-paper-dim">
              {CERTIFICATIONS.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <li
                  key={l.name}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper-dim"
                >
                  {l.name} · {l.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Formspree recommande un POST en JSON pour les apps SPA (React/Vue) :
      // c'est plus fiable que FormData dans ce contexte.
      const response = await fetch(PROFILE.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus({ type: "success", message: "Merci ! Votre message a bien été envoyé." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const errorMsg = data?.errors?.map((err) => err.message).join(", ");
        throw new Error(errorMsg || "Le formulaire n’a pas pu être envoyé.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Une erreur est survenue. Vous pouvez aussi m’écrire directement à " + PROFILE.email + ".",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber">
          Contact
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-xl font-display text-2xl font-semibold text-paper md:text-3xl">
              Disponible pour des missions remote et des opportunités full-stack.
            </h2>
            <div className="mt-6 space-y-3 font-mono text-sm text-paper-dim">
              <a href={`mailto:${PROFILE.email}`} className="block transition-colors hover:text-amber">
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="block transition-colors hover:text-amber">
                {PROFILE.phone}
              </a>
              <a href={PROFILE.github} className="block transition-colors hover:text-amber">
                GitHub →
              </a>
              <a href={PROFILE.linkedin} className="block transition-colors hover:text-amber">
                LinkedIn →
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line/70 bg-ink-raised/70 p-6 shadow-[0_0_40px_rgba(15,28,31,0.45)]"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-paper-dim">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-paper">
                  Nom
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition focus:border-amber"
                />
              </label>
              <label className="text-sm text-paper-dim">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-paper">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition focus:border-amber"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-paper-dim">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-paper">
                Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full rounded-2xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition focus:border-amber"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-amber px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Envoi…" : "Envoyer"}
              </button>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Réponse rapide via Formspree
              </span>
            </div>

            {status.message ? (
              <p
                className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border border-amber/30 bg-amber/10 text-amber-200"
                }`}
                aria-live="polite"
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/60 px-6 py-8">
      <p className="mx-auto max-w-5xl font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
        © {new Date().getFullYear()} {PROFILE.name} — construit avec React + Vite.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(217,142,59,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(217,142,59,0.08),_transparent_30%)] font-body">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <StackTimeline />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}