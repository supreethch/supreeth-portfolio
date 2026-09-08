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
import TypedIntro from "./typewriter";

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
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
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

      <section className="hero-shell">
        <div className="hero-content">
          <TypedIntro />
          <div className="contact-actions">
            <ContactLink href="mailto:supreetc@umich.edu" icon={<MailIcon />}>supreetc@umich.edu</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/supreeth-chittaluri" icon={<LinkedInIcon />} external>LinkedIn</ContactLink>
            <ContactLink href="https://github.com/supreethch" icon={<GitHubIcon />} external>GitHub</ContactLink>
            <ContactLink href={sitePath("/resume.pdf")} icon={<DocumentIcon />} external>Résumé</ContactLink>
          </div>
          <nav className="hero-explore" aria-label="Explore the portfolio">
            <span>Explore the portfolio</span>
            <div>
              {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
            </div>
          </nav>
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

      <section className="anchor-section" id="stack" aria-labelledby="stack-heading">
        <div className="page-intro in-page-intro">
          <p className="eyebrow">03 · Stack</p>
          <h1 id="stack-heading">Skills</h1>
          <p>Technologies used across projects, coursework, and experience.</p>
        </div>
        <div className="content-shell stack-directory" aria-label="Technology groups">
          {stackGroups.map((group) => (
            <article className="stack-group" key={group.name}>
              <h2>{group.name}</h2>
              <div className="skill-logo-row">
                {group.skills.map((skill) => (
                  <figure className="skill-logo" key={skill.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={skill.icon} alt="" width="46" height="46" loading="lazy" />
                    <figcaption>{skill.name}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="stack-text">
                {group.skills.map((skill) => skill.name).join(" · ")}
                {"extra" in group && group.extra ? ` · ${group.extra}` : ""}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="anchor-section" id="about" aria-labelledby="about-heading">
        <div className="about-page-intro">
          <p className="eyebrow" id="about-heading">04 · About Me</p>
        </div>

        <section className="content-shell about-education" aria-labelledby="education-heading">
          <p className="eyebrow education-section-label" id="education-heading">Education</p>
          <article className="education-card">
            <div className="education-main">
              <div>
                <p className="eyebrow">Ann Arbor, Michigan</p>
                <h2>University of Michigan</h2>
                <div className="education-degree-row">
                  <p className="education-degree">Bachelor of Science in Engineering in Computer Science (B.S.E. C.S.)</p>
                  <p className="education-standing">Junior</p>
                </div>
              </div>
            </div>
            <div className="coursework coursework-visible">
              <p className="coursework-title">Relevant coursework</p>
              <div className="course-grid">
                {education.map((course) => (
                  <p key={course.code}><strong>{course.code}</strong><span>{course.title}</span></p>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="content-shell about-profile" aria-label="Introduction">
          <div className="about-headshot-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-headshot" src={sitePath("/about/headshot.webp")} alt="Supreeth Chittaluri" loading="lazy" />
          </div>
          <div className="about-profile-copy">
            <p className="eyebrow">Supreeth Chittaluri</p>
            <div className="about-introduction">
              <p>
                I am a junior at the University of Michigan studying Computer Science, with a focus on software engineering and applied AI. I am drawn to problems where algorithms, data, and product decisions all matter, especially when the result can make something complicated easier to understand or use.
              </p>
              <p>
                That interest shapes the work I choose. I built a2transit to connect Ann Arbor’s two bus systems in one route search, Pulse to separate meaningful market activity from background noise, and Undrift to make skill growth visible through real development history. Alongside my experience building AI and production software at OneStream, these projects have taught me to work across the full product, measure whether an idea actually works, and stay with difficult technical problems until I understand them.
              </p>
            </div>
          </div>
        </section>

        <section className="content-shell off-clock-heading" aria-labelledby="off-clock-heading">
          <h2 className="eyebrow" id="off-clock-heading">Life outside software</h2>
        </section>
        <section className="about-collage" aria-label="Personal photo collage">
          {aboutStories.map((story) => (
            <figure className={`about-story about-story-${story.id}`} key={story.id}>
              <div className={`about-photos about-photos-${story.files.length}`}>
                {story.files.map((file, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="about-photo" src={sitePath(`/about/${file}`)} alt={story.alts[index]} loading="lazy" key={file} />
                ))}
              </div>
              <figcaption>{story.caption}</figcaption>
            </figure>
          ))}
        </section>
      </section>

      <footer className="site-footer">
        <span>© 2026 Supreeth Chittaluri</span>
        <span>Ann Arbor, Michigan</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
