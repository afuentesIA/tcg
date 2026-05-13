import { NavLink } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import { products } from '../data/products'

const STATS = [
  { n:'7',      u:'Products', d:'Energy commodities'       },
  { n:'150,000',u:'MT',       d:'Maximum vessel capacity'  },
  { n:'5',      u:'Offices',  d:'Global headquarters'      },
  { n:'15',     u:'Days',     d:'Maximum delivery time'    },
]

const PILLARS = [
  { n:'01', title:'Direct Mandate',  body:'Official mandates from private refineries and verified title holders. No resellers, no middlemen, no inflated margins.' },
  { n:'02', title:'Best Pricing',    body:'Direct allocation channels eliminate unnecessary layers, translating into the most competitive pricing available in the market.' },
  { n:'03', title:'Secure Volumes',  body:'Real allocations from real capacity, backed by institutional agreements with world-class refineries across six continents.' },
  { n:'04', title:'Full Compliance', body:'AML compliant. Full KYC on every counterparty. Legal contracts and SGS or INTERTEK inspection on every transaction.' },
]

const OFFICES = [
  { city:'Houston',    role:'Americas',     detail:'Private Refineries & Title Holders' },
  { city:'Rotterdam',  role:'Europe',       detail:'ASWP Loading Operations'            },
  { city:'Fujairah',   role:'Middle East',  detail:'Strategic Partners & Supply'        },
  { city:'Singapore',  role:'Asia Pacific', detail:'Private Refineries & Title Holders' },
  { city:'Lagos',      role:'Africa',       detail:'Regional Distribution'              },
]

export default function Home() {
  useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-lines" aria-hidden="true" />
        <div className="home-hero-body wrap">
          <div className="home-hero-content">
            <p className="t-label home-hero-label">Global Energy Solutions</p>
            <h1 className="t-display home-hero-title">
              <span className="hero-line-1">TCG</span>
            </h1>
            <p className="home-hero-sub">
              Direct Mandate &nbsp;&mdash;&nbsp; Real Energy &nbsp;&mdash;&nbsp; Real Results
            </p>
            <p className="home-hero-desc">
              International energy company built on real partnerships, direct mandates and
              long-term relationships with world-class producers. We represent, negotiate and deliver.
            </p>
            <div className="home-hero-actions">
              <NavLink to="/products" className="btn btn-primary">View Products</NavLink>
              <NavLink to="/contact"  className="btn btn-secondary">Request Quote</NavLink>
            </div>
          </div>
        </div>

        <div className="home-hero-bar">
          {STATS.map((s, i) => (
            <div key={i} className="hero-stat">
              <div className="hero-stat-n">{s.n}<span className="hero-stat-u">&thinsp;{s.u}</span></div>
              <div className="hero-stat-d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="section">
        <div className="wrap">
          <div className="sh">
            <p className="t-label" data-reveal>Our Structure</p>
            <h2 className="t-display sh-h" data-reveal data-delay="1">
              Why <span className="gold">TCG</span>
            </h2>
            <div className="rule" data-reveal data-delay="2" />
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar" data-reveal data-delay={String(i + 1)}>
                <div className="pillar-num">{p.n}</div>
                <div className="pillar-title">{p.title}</div>
                <p className="pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="products-preview-head">
            <div>
              <p className="t-label" data-reveal>Energy Portfolio</p>
              <h2 className="t-display sh-h" data-reveal data-delay="1">
                Our <span className="gold">Products</span>
              </h2>
              <div className="rule" data-reveal data-delay="2" />
            </div>
            <NavLink to="/products" className="btn btn-secondary" data-reveal data-delay="2">
              All Products &rarr;
            </NavLink>
          </div>

          <div className="products-grid">
            {products.map((p, i) => (
              <NavLink
                key={p.id}
                to="/products"
                className="product-card"
                data-reveal
                data-delay={String((i % 4) + 1)}
              >
                <p className="product-card-cat">{p.cat}</p>
                <p className="product-card-name">{p.name}</p>
                <p className="product-card-code">{p.code}</p>
                <p className="product-card-std">{p.std}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANDATE STRIP ── */}
      <section className="section section-mid">
        <div className="wrap">
          <div className="mandate-strip" data-reveal>
            <div>
              <p className="t-label" style={{marginBottom:14}}>Direct Mandate Network</p>
              <p className="mandate-strip-text">
                We hold mandates from private refineries in Asia &amp; USA, verified title holders,
                major public refineries, and direct sourcing relationships with the largest
                producers across six regions worldwide.
              </p>
            </div>
            <div className="mandate-regions">
              {['Asia Pacific','North America','Middle East','Europe','Africa','Latin America'].map(r => (
                <span key={r} className="mandate-region">{r}</span>
              ))}
            </div>
            <NavLink to="/mandate" className="btn btn-primary" style={{alignSelf:'center'}}>
              Our Mandate
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="section section-dark">
        <div className="wrap">
          <p className="t-label" style={{marginBottom:32}} data-reveal>Global Headquarters</p>
          <div className="offices">
            {OFFICES.map((o, i) => (
              <div key={i} className="office" data-reveal data-delay={String(i + 1)}>
                <p className="office-city">{o.city}</p>
                <p className="office-role">{o.role}</p>
                <p className="office-detail">{o.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-steel">
        <div className="wrap">
          <div className="cta-band" data-reveal>
            <div>
              <h2 className="t-display cta-band-h">
                Ready to <span className="gold">start a transaction?</span>
              </h2>
              <p className="cta-band-sub">
                Submit your inquiry and our commercial team will respond within 24 hours
                with a formal Commercial Invoice and full transaction documentation.
              </p>
            </div>
            <NavLink to="/contact" className="btn btn-primary">
              Contact Us &rarr;
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}
