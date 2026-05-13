import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NAV = [
  { to: '/',          label: 'Home'      },
  { to: '/products',  label: 'Products'  },
  { to: '/about',     label: 'About'     },
  { to: '/mandate',   label: 'Mandate'   },
  { to: '/logistics', label: 'Logistics' },
  { to: '/contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 30)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [])

  return (
    <>
      <header className={`navbar${solid ? ' solid' : ''}`}>
        <div className="navbar-inner wrap">
          <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
            <div className="navbar-brandmark">B</div>
            <div className="navbar-wordmark">
              <span className="navbar-name">TCG</span>
              <span className="navbar-tagline">Global Energy Solutions</span>
            </div>
          </NavLink>

          <nav className="navbar-links" aria-label="Primary navigation">
            {NAV.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="btn btn-primary navbar-cta">
            Get Quote
          </NavLink>

          <button
            className="navbar-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open
              ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5"/><line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5"/></svg>
              : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5"/><line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5"/><line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5"/></svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile drawer — separate element, sits below navbar via fixed positioning */}
      <div className={`navbar-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="navbar-drawer-inner">
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => `navbar-drawer-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary navbar-drawer-cta" onClick={() => setOpen(false)}>
            Get Quote
          </NavLink>
        </div>
      </div>
    </>
  )
}
