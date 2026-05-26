export default function Footer() {
  return (
    <footer style={{
      padding: '2rem clamp(1.5rem, 8vw, 8rem)',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: 'var(--text-muted)', letterSpacing: '0.08em',
      }}>
        © {new Date().getFullYear()} Gerald Adli. All rights reserved.
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
        color: 'var(--text-muted)', letterSpacing: '0.08em',
      }}>
        Kemanggisan, Jakarta 🇮🇩
      </span>
    </footer>
  )
}
