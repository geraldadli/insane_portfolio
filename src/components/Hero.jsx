import { useEffect, useRef } from 'react'

const roles = ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Full-Stack Dev']

export default function Hero() {
  const roleRef = useRef(null)
  const idx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer
    const tick = () => {
      const current = roles[idx.current]
      if (!roleRef.current) return

      if (!deleting.current) {
        charIdx.current++
        roleRef.current.textContent = current.slice(0, charIdx.current)
        if (charIdx.current === current.length) {
          deleting.current = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        charIdx.current--
        roleRef.current.textContent = current.slice(0, charIdx.current)
        if (charIdx.current === 0) {
          deleting.current = false
          idx.current = (idx.current + 1) % roles.length
        }
      }
      timer = setTimeout(tick, deleting.current ? 55 : 90)
    }
    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 clamp(1.5rem, 8vw, 8rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient orb */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Scan line */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)',
          animation: 'scan 8s linear infinite',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', animation: 'fadeUp 0.9s ease both' }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase',
          marginBottom: '2rem',
          padding: '0.4rem 0.9rem',
          border: '1px solid rgba(212,168,83,0.25)',
          borderRadius: '2px',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse-dot 1.8s ease-in-out infinite',
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 9vw, 7.5rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}>
          Gerald<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Adli</span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
          color: 'var(--text-secondary)', letterSpacing: '0.05em',
          marginBottom: '2.5rem', height: '1.6rem', display: 'flex', alignItems: 'center', gap: '2px',
        }}>
          <span ref={roleRef} />
          <span style={{
            display: 'inline-block', width: '2px', height: '1.1em',
            background: 'var(--accent)', animation: 'pulse-dot 0.9s ease-in-out infinite',
          }} />
        </div>

        {/* Bio */}
        <p style={{
          maxWidth: '520px',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '3rem',
        }}>
          Computer Science student at BINUS University, specializing in machine learning,
          deep learning, and data analytics. IBM & Meta certified.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2rem',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#e6bc6b'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)' }}
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-primary)' }}
          >
            View Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        zIndex: 2, animation: 'fadeIn 1.5s 1.2s both',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
          SCROLL
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'pulse-dot 1.8s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
