import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
        background: scrolled ? 'rgba(11,13,17,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
        }}>GA_</span>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--text-secondary)', letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >{l}</button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: '5px',
          padding: '4px',
        }} className="hamburger" aria-label="Menu">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1px',
              background: 'var(--accent)',
              transition: 'all 0.3s',
              transform: open && i === 0 ? 'rotate(45deg) translateY(6px)' :
                         open && i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(11,13,17,0.98)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                color: 'var(--text-secondary)', letterSpacing: '0.1em',
                textTransform: 'uppercase', textAlign: 'left',
              }}
            >{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
