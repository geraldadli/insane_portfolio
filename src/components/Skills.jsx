const skills = [
  { name: 'Python', level: 92, cat: 'Core' },
  { name: 'Machine Learning', level: 88, cat: 'AI / ML' },
  { name: 'Deep Learning', level: 82, cat: 'AI / ML' },
  { name: 'Data Analytics', level: 90, cat: 'Analytics' },
  { name: 'SQL', level: 85, cat: 'Data' },
  { name: 'React + Vite', level: 78, cat: 'Web' },
]

const tools = [
  'Scikit-Learn', 'TensorFlow / Keras', 'Pandas', 'NumPy',
  'Matplotlib', 'Seaborn', 'Jupyter', 'Git',
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Label>Expertise</Label>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          letterSpacing: '-0.02em', marginBottom: '3.5rem',
        }}>
          Skills & <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Tools</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }} className="skills-grid">
          {/* Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skills.map((s, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  marginBottom: '0.6rem',
                }}>
                  <div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 400 }}>
                      {s.name}
                    </span>
                    <span style={{
                      marginLeft: '0.6rem',
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      color: 'var(--text-muted)', letterSpacing: '0.1em',
                    }}>
                      {s.cat}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--accent)',
                  }}>
                    {s.level}%
                  </span>
                </div>
                {/* Bar track */}
                <div style={{
                  height: '2px', background: 'var(--bg-3)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${s.level}%`,
                    background: `linear-gradient(90deg, var(--accent), rgba(212,168,83,0.5))`,
                    transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    animationDelay: `${i * 0.1}s`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tool pills + languages */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '1.2rem',
            }}>Libraries & Tools</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
              {tools.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  padding: '0.4rem 0.9rem',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.color = 'var(--accent)'
                    e.target.style.background = 'var(--accent-dim)'
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.color = 'var(--text-secondary)'
                    e.target.style.background = 'transparent'
                  }}
                >{t}</span>
              ))}
            </div>

            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--text-muted)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '1.2rem',
            }}>Languages</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { lang: 'Indonesian', level: 'Native' },
                { lang: 'English', level: 'Professional' },
              ].map((l, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '0.9rem' }}>{l.lang}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                    color: 'var(--accent)', letterSpacing: '0.08em',
                  }}>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
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
