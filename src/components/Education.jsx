const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Bina Nusantara University (BINUS)',
    period: '2024 — 2028',
    focus: 'Machine Learning · Data Analysis · Web Development',
    status: 'In Progress',
  },
  {
    degree: 'High School Diploma',
    institution: 'Darma Yudha School',
    period: '2024',
    focus: 'Natural Sciences',
    status: 'Graduated',
  },
]

const certs = [
  {
    name: 'IBM Data Science Professional',
    issuer: 'IBM / Coursera',
    icon: '🔬',
    link: 'https://drive.google.com/file/d/1ExzsYloGWsX9QQmRIn9SJS8zG9DJ4nrR/view?usp=sharing',
  },
  {
    name: 'Meta Data Analyst Professional',
    issuer: 'Meta / Coursera',
    icon: '📊',
    link: 'https://drive.google.com/file/d/1kSdUkZ8uL6y-g85SbZ9dh2Fi7Oj7p8C3/view?usp=sharing',
  },
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Label>Background</Label>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          Education &{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Credentials</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="edu-grid">
          {/* Education */}
          <div>
            <SectionLabel>Academic</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.2rem' }}>
              {education.map((e, i) => (
                <div key={i} style={{
                  padding: '1.6rem 1.8rem',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={ev => ev.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'}
                  onMouseLeave={ev => ev.currentTarget.style.borderColor = 'var(--border)'}
                >
                  {/* Status badge */}
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1.2rem',
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    color: e.status === 'In Progress' ? 'var(--accent)' : 'var(--text-muted)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    {e.status === 'In Progress' && (
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: 'var(--accent)', animation: 'pulse-dot 1.8s infinite',
                      }} />
                    )}
                    {e.status}
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem',
                  }}>{e.period}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.1rem', marginBottom: '0.3rem',
                  }}>{e.degree}</h3>
                  <div style={{
                    fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.6rem',
                  }}>{e.institution}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--text-muted)', letterSpacing: '0.05em',
                  }}>{e.focus}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionLabel>Certifications</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.2rem' }}>
              {certs.map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block',
                  padding: '1.6rem 1.8rem',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'
                    e.currentTarget.style.background = 'var(--accent-dim)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--bg-2)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{c.icon}</span>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>↗</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.05rem', margin: '0.8rem 0 0.3rem',
                  }}>{c.name}</h3>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text-muted)', letterSpacing: '0.08em',
                  }}>{c.issuer}</div>
                </a>
              ))}

              {/* Conference */}
              <a href="https://drive.google.com/file/d/1TBNQT2IWn89VfHb9PwhlzAyUficDu04P/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '1.6rem 1.8rem',
                background: 'linear-gradient(135deg, rgba(212,168,83,0.08), transparent)',
                border: '1px solid rgba(212,168,83,0.25)',
                transition: 'all 0.2s', textDecoration: 'none',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,83,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,168,83,0.25)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.8rem' }}>📄</span>
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>↗</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'var(--accent)', letterSpacing: '0.12em',
                  textTransform: 'uppercase', margin: '0.8rem 0 0.3rem',
                }}>Paper Presentation</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.05rem', marginBottom: '0.3rem',
                }}>ICISML 2025</h3>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                }}>5th Int'l Conf. on Intelligent Systems & ML · May 2025</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
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

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
      color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase',
    }}>{children}</div>
  )
}
