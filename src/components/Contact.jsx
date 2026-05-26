export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'gerald.adli@binus.ac.id',
      href: 'mailto:gerald.adli@binus.ac.id',
      icon: '✉',
    },
    {
      label: 'Phone / WhatsApp',
      value: '+62 822-6883-8232',
      href: 'https://wa.me/6282268838232',
      icon: '◎',
    },
    {
      label: 'Location',
      value: 'Kemanggisan, Jakarta, Indonesia',
      href: 'https://maps.google.com/?q=Kemanggisan,Jakarta',
      icon: '◈',
    },
  ]

  return (
    <section id="contact" style={{
      padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg-2)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Big decorative text */}
      <div style={{
        position: 'absolute', bottom: '-2rem', right: '-1rem',
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(6rem, 18vw, 16rem)',
        color: 'rgba(212,168,83,0.03)',
        lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>
        hello.
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Label>Contact</Label>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.05,
        }}>
          Let's build something<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>together.</em>
        </h2>
        <p style={{
          color: 'var(--text-secondary)', maxWidth: '440px',
          marginBottom: '3.5rem', lineHeight: 1.8,
        }}>
          Open to data science internships, research collaborations, and freelance
          data projects. Don't hesitate to reach out.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', padding: '1.8rem',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              textDecoration: 'none',
              transition: 'all 0.25s',
              group: true,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,168,83,0.4)'
                e.currentTarget.style.background = 'var(--accent-dim)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '1.2rem',
                color: 'var(--accent)', marginBottom: '1rem',
              }}>{c.icon}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--text-muted)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '0.4rem',
              }}>{c.label}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
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
