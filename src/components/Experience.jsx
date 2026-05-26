const experiences = [
  {
    org: 'Data Science Indonesia',
    venue: 'Tiket.com HQ',
    role: 'Event Volunteer',
    period: '2024',
    type: 'Volunteering',
    bullets: [
      'Verified email confirmations ensuring secure and validated event admission.',
      'Coordinated participant registration, entry, and exit flow for smooth event operations.',
    ],
  },
  {
    org: 'Data Science Indonesia',
    venue: 'GoTo HQ',
    role: 'Event Volunteer',
    period: '2024',
    type: 'Volunteering',
    bullets: [
      'Distributed participant ID cards and maintained accurate records database for event access.',
      'Guided attendees and speakers to designated areas, ensuring efficient movement and organization.',
    ],
  },
  {
    org: 'ICISML 2025',
    venue: '5th Int\'l Conference on Intelligent Systems & Machine Learning',
    role: 'Paper Presenter',
    period: 'May 16–17, 2025',
    type: 'Conference',
    bullets: [
      'Presented an accepted research paper at the 5th ICISML, conducted in hybrid mode.',
      'Contributed original research at the intersection of intelligent systems and machine learning.',
    ],
    link: 'https://www.icisml.org',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg-2)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Label>Experience</Label>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          Community &{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Research</em>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: '0px',
            width: '1px', background: 'var(--border)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index }) {
  return (
    <div style={{
      paddingLeft: '2.5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
    }}>
      {/* Dot */}
      <div style={{
        position: 'absolute', left: '-4px', top: '4px',
        width: '9px', height: '9px', borderRadius: '50%',
        background: 'var(--accent)',
        boxShadow: '0 0 12px var(--accent-glow)',
      }} />

      <div style={{
        padding: '1.8rem 2rem',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        {/* Header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '0.5rem', marginBottom: '0.2rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--accent)', letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
            border: '1px solid rgba(212,168,83,0.25)',
          }}>{exp.type}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            color: 'var(--text-muted)',
          }}>{exp.period}</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.3rem',
          margin: '0.7rem 0 0.2rem',
          lineHeight: 1.2,
        }}>{exp.role}</h3>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
          color: 'var(--text-secondary)', marginBottom: '1rem',
          letterSpacing: '0.05em',
        }}>
          {exp.org}{exp.venue && ` — ${exp.venue}`}
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--accent)', marginLeft: '0.5rem', fontSize: '0.65rem',
            }}>↗</a>
          )}
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {exp.bullets.map((b, j) => (
            <li key={j} style={{
              fontSize: '0.9rem', color: 'var(--text-secondary)',
              display: 'flex', gap: '0.75rem',
            }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Label({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
      color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase',
      marginBottom: '1rem',
      display: 'flex', alignItems: 'center', gap: '0.6rem',
    }}>
      <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--accent)' }} />
      {children}
    </div>
  )
}
