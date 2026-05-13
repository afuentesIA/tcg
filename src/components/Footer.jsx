import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-mark">B</div>
              <div>
                <span className="footer-brand-name">TCG</span>
                <span className="footer-brand-sub">Global Energy Solutions</span>
              </div>
            </div>
            <p className="footer-desc">
              International energy company built on real partnerships,
              direct mandates and long-term relationships with world-class producers.
            </p>
            <div className="footer-hubs">
              {['Houston','Rotterdam','Fujairah','Singapore','Lagos'].map(c => (
                <span key={c} className="footer-hub">{c}</span>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Navigation</p>
            {[['/', 'Home'],['/products','Products'],['/about','About'],['/mandate','Mandate'],['/logistics','Logistics'],['/contact','Contact']].map(([to,l]) => (
              <NavLink key={to} to={to} end={to==='/'} className="footer-link">{l}</NavLink>
            ))}
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Products</p>
            {['EN590 Diesel','D6 Fuel Oil','Jet Fuel A-1','LNG','LPG','Pet Coke','Urea 46%'].map(p => (
              <NavLink key={p} to="/products" className="footer-link">{p}</NavLink>
            ))}
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <a href="mailto:info@tcg.us" className="footer-link">info@tcg.us</a>
            <a href="https://www.tcg.us" className="footer-link" target="_blank" rel="noreferrer">www.tcg.us</a>
            <p className="footer-col-title" style={{marginTop:24}}>Standards</p>
            {['AML Compliant','SGS Inspected','KYC Verified','Escrow Protected'].map(t=>(
              <span key={t} className="footer-link t-tag" style={{cursor:'default'}}>{t}</span>
            ))}
          </div>
        </div>

        <div className="footer-strip">
          {['Secure','Transparent','Reliable','Refinery Backed','Global Delivery'].map((t,i)=>(
            <span key={i} className="footer-strip-item">
              <span className="footer-strip-dot" />{t}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TCG. All rights reserved.</span>
          <span>Direct Mandate &middot; Real Energy &middot; Real Results</span>
        </div>
      </div>
    </footer>
  )
}
