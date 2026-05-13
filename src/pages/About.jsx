import { NavLink } from 'react-router-dom'
import { useReveal } from '../components/useReveal'

const PILLARS = [
  { n:'01', title:'Not Resellers',    body:'We are not a reseller, middleman or retail broker. We do not buy and resell. We represent, negotiate and deliver under direct mandate.' },
  { n:'02', title:'Direct Access',    body:'Official mandates from private refineries, verified title holders and top global producers granting full authorization to negotiate on their behalf.' },
  { n:'03', title:'Best Pricing',     body:'No layers. No resellers. No unnecessary margins. Direct allocation channels translate into the most competitive pricing in the market.' },
  { n:'04', title:'Secure Volumes',   body:'Real allocations from real capacity backed by institutional agreements with world-class refineries and strategic partners across six continents.' },
  { n:'05', title:'Full Compliance',  body:'AML compliant. Full KYC on every counterparty. Legal contracts and independent inspection on every transaction without exception.' },
  { n:'06', title:'Long-Term Focus',  body:'We build on trust, performance and transparency. Our goal is not a single transaction — it is a lasting partnership that delivers consistent value.' },
]

const HQS = [
  { city:'Houston',   country:'United States', role:'Americas — Private Refineries & Title Holders' },
  { city:'Rotterdam', country:'Netherlands',   role:'Europe — ASWP Loading Operations'              },
  { city:'Fujairah',  country:'UAE',           role:'Middle East — Strategic Partners & Supply'     },
  { city:'Singapore', country:'Singapore',     role:'Asia Pacific — Private Refineries & Title Holders' },
  { city:'Lagos',     country:'Nigeria',       role:'Africa — Regional Distribution'                },
]

export default function About() {
  useReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animation:'fadeIn .5s ease both'}}>Who We Are</p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            About <span className="gold">TCG</span>
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            An international energy company built on real partnerships, direct mandates
            and long-term relationships with world-class producers across six continents.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="wrap">
          <div className="about-split">
            <div data-reveal>
              <p className="t-label" style={{marginBottom:18}}>Our Mission</p>
              <h2 className="t-display about-mission-h">
                We represent.<br />We negotiate.<br /><span className="gold">We deliver.</span>
              </h2>
              <div className="rule" style={{marginTop:24}} />
            </div>
            <div className="about-mission-text" data-reveal data-delay="2">
              <p>
                TCG is an international energy company built on real partnerships,
                direct mandates and long-term relationships with world-class producers. Our mandate
                structure eliminates layers, ensures direct allocation and delivers the most competitive
                pricing available.
              </p>
              <p>
                We are not a reseller. We are not a middleman. We hold official mandates from
                private refineries, state-owned producers and verified title holders — and we act
                with full authorization on their behalf in every negotiation.
              </p>
              <p>
                Every transaction is backed by legal contracts, independent third-party inspection,
                and full compliance with international AML regulations. We protect the interests
                of both buyer and seller at every step.
              </p>
              <NavLink to="/contact" className="btn btn-primary" style={{marginTop:8}}>
                Start a Transaction &rarr;
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Core principles */}
      <section className="section section-dark">
        <div className="wrap">
          <div className="sh">
            <p className="t-label" data-reveal>Core Principles</p>
            <h2 className="t-display sh-h" data-reveal data-delay="1">
              How We <span className="gold">Operate</span>
            </h2>
            <div className="rule" data-reveal data-delay="2" />
          </div>
          <div className="about-pillars">
            {PILLARS.map((p, i) => (
              <div key={i} className="about-pillar" data-reveal data-delay={String((i % 3) + 1)}>
                <p className="about-pillar-n">{p.n}</p>
                <p className="about-pillar-title">{p.title}</p>
                <p className="about-pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global offices */}
      <section className="section section-mid">
        <div className="wrap">
          <p className="t-label" style={{marginBottom:36}} data-reveal>Global Headquarters</p>
          <div className="about-hqs">
            {HQS.map((o, i) => (
              <div key={i} className="about-hq" data-reveal data-delay={String(i + 1)}>
                <p className="about-hq-city">{o.city}</p>
                <p className="about-hq-country">{o.country}</p>
                <p className="about-hq-role">{o.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-steel">
        <div className="wrap">
          <div className="about-contact" data-reveal>
            <div>
              <p className="t-label" style={{marginBottom:16}}>Get In Touch</p>
              <a href="mailto:info@tcg.us" className="about-email">
                info@tcg.us
              </a>
              <a href="https://www.tcg.us" className="about-site" target="_blank" rel="noreferrer">
                www.tcg.us
              </a>
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
