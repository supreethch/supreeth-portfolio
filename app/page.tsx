import type { ReactNode } from "react";
import {
  aboutStories,
  education,
  experiences,
  navItems,
  projects,
  sitePath,
  stackGroups
} from "./site-data";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 3h7l4 4v14h-11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M13.5 3v5h4M8 12h6M8 16h6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

function ContactLink({ href, icon, children, external = false }: { href: string; icon: ReactNode; children: ReactNode; external?: boolean }) {
  return (
    <a className="contact-link" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {icon}
      <span>{children}</span>
    </a>
  );
}

function SectionHeading({ number, label, title, id }: { number: string; label: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{number} · {label}</p>
      <div className="section-heading-row">
        <h2 id={id}>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <a className="identity-link" href="#top" aria-label="Supreeth Chittaluri home">
            <span className="monogram">SC</span>
            <span className="identity-copy">
              <strong>Supreeth Chittaluri</strong>
              <small>Software Engineer</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </nav>

          <a className="resume-nav" href={sitePath("/resume.pdf")} target="_blank" rel="noreferrer">Résumé</a>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
              <a href={sitePath("/resume.pdf")} target="_blank" rel="noreferrer">Résumé</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science · University of Michigan</p>
          <h1 id="hero-title">Supreeth Chittaluri</h1>
          <p className="hero-lede">I build software for messy, real-world problems.</p>
          <p className="hero-detail">Junior studying Computer Science at Michigan, interested in backend systems, full-stack products, and applied AI.</p>
          <div className="contact-row">
            <ContactLink href="mailto:supreetc@umich.edu" icon={<MailIcon />}>supreetc@umich.edu</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/supreeth-chittaluri" icon={<LinkedInIcon />} external>LinkedIn</ContactLink>
            <ContactLink href="https://github.com/supreethch" icon={<GitHubIcon />} external>GitHub</ContactLink>
            <ContactLink href={sitePath("/resume.pdf")} icon={<DocumentIcon />} external>Résumé</ContactLink>
          </div>
          <a className="scroll-cue" href="#experience">Explore the portfolio <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="anchor-section section-shell" id="experience" aria-labelledby="experience-heading">
        <SectionHeading number="01" label="Timeline" title="Experience" id="experience-heading" />
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.company}>
              <div className="card-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="experience-topline">
                <div>
                  <p className="company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                </div>
                <p className="experience-meta">{experience.period ? <>{experience.period}<br /></> : null}{experience.location}</p>
              </div>
              <ul>
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-section section-shell" id="projects" aria-labelledby="projects-heading">
        <SectionHeading number="02" label="Passion work" title="Projects" id="projects-heading" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card${project.image ? "" : " project-card-text"}`} key={project.title}>
              {project.image ? (
                <div className="project-visual">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sitePath(project.image)} alt={project.imageAlt ?? ""} loading="lazy" />
                </div>
              ) : (
                <div className="project-visual project-visual-empty" aria-hidden="true">
                  <span>SET project status</span>
                  <span>GET coming soon</span>
                  <span>OK</span>
                </div>
              )}
              <div className="project-body">
                <div className="project-topline">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="eyebrow">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="evidence-list">
                  {project.evidence.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="project-stack">{project.stack.join(" · ")}</p>
                <div className="project-links">
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live <ArrowIcon /></a> : null}
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a> : null}
                  {project.status ? <span>{project.status}</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-section section-shell" id="stack" aria-labelledby="stack-heading">
        <SectionHeading number="03" label="Stack" title="Tools I use" id="stack-heading" />
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.name}>
              <h3>{group.name}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <figure className="skill" key={skill.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <span className="skill-icon"><img src={skill.icon} alt="" width="32" height="32" loading="lazy" /></span>
                    <figcaption>{skill.name}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-section section-shell about-section" id="about" aria-labelledby="about-heading">
        <SectionHeading number="04" label="About me" title="A little more context" id="about-heading" />

        <div className="about-profile">
          <div className="headshot-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sitePath("/about/headshot.webp")} alt="Supreeth Chittaluri" loading="lazy" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">Who I am</p>
            <p>
              I’m a junior at the University of Michigan studying Computer Science. I’m interested in software engineering and applied AI, especially when algorithms and data have to become something people can actually use.
            </p>
            <p>
              My work ranges from real-time transit routing and recommendation systems to forecasting tools at OneStream. I like working across the whole system, from the model or backend service to testing, performance, and the final interface.
            </p>
          </div>
        </div>

        <div className="subsection-heading">
          <p className="eyebrow">Education</p>
          <h3>University of Michigan</h3>
        </div>
        <article className="education-card">
          <div className="education-summary">
            <p>College of Engineering · Ann Arbor, Michigan</p>
            <h4>Bachelor of Science in Engineering in Computer Science</h4>
            <span>Junior</span>
          </div>
          <div className="course-grid" aria-label="Relevant coursework">
            {education.map((course) => (
              <p key={course.code}><strong>{course.code}</strong><span>{course.title}</span></p>
            ))}
          </div>
        </article>

        <div className="subsection-heading life-heading">
          <p className="eyebrow">Life outside software</p>
          <h3>Friends, food, sports, travel, and music.</h3>
        </div>
        <div className="life-grid">
          {aboutStories.map((story) => (
            <figure className="life-card" key={story.id}>
              <div className={`life-photos life-photos-${story.files.length}`}>
                {story.files.map((file, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sitePath(`/about/${file}`)} alt={story.alts[index]} loading="lazy" key={file} />
                ))}
              </div>
              <figcaption>{story.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 Supreeth Chittaluri</span>
        <span>Ann Arbor, Michigan</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
