const stats = [
  { value: '2024–28', label: 'B.Sc. Computer Science' },
  { value: '2+', label: 'Languages spoken' },
  { value: '2', label: 'Professional certifications' },
  { value: '1', label: 'Int\'l conference paper' },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg-2)',
      position: 'relative',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        maxWidth: '1100px',
        margin: '0 auto',
        alignItems: 'center',
      }} className="about-grid">

        {/* Left */}
        <div>
          <Label>About me</Label>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            lineHeight: 1.05,
            marginBottom: '1.8rem',
            letterSpacing: '-0.02em',
          }}>
            Turning raw data<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>into insights.</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem' }}>
            I'm Gerald Adli, a Computer Science student at Bina Nusantara University (BINUS),
            Jakarta — focused on machine learning, data analysis, and full-stack web development.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
            I hold professional certifications from IBM and Meta, and have presented research at
            the 5th International Conference on Intelligent Systems and Machine Learning (ICISML 2025).
            Beyond the data, I'm actively engaged in the Data Science Indonesia community.
          </p>
        </div>

        {/* Right — stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2.2rem 1.8rem',
              background: 'var(--bg-2)',
              borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                lineHeight: 1.4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
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
