import { NavLink } from 'react-router-dom'
import { useReveal } from '../components/useReveal'

const TYPES = [
  { code:'M-01', title:'Private Refineries',  body:'Direct mandate from selected private refineries in Asia and the USA, granting exclusive allocation rights and direct pricing access without intermediaries.' },
  { code:'M-02', title:'Title Holders',        body:'Official mandate from verified Title Holders with full ownership rights. We act as the fully authorized representative in all negotiations and closings.' },
  { code:'M-03', title:'Public Refineries',    body:'Strategic access to major public (state-owned) refineries worldwide through established institutional agreements and long-term supply contracts.' },
  { code:'M-04', title:'Global Producers',     body:'Direct sourcing relationships with the largest and most reputable producers, ensuring volume security, supply reliability and price competitiveness.' },
]

const ADVANTAGES = [
  { title:'Direct Access',    body:'Direct mandate equals direct access to refineries and producers — no intermediaries, no opacity, no inflated costs.' },
  { title:'No Layers',        body:'No resellers, no unnecessary margins. You engage directly with the source and receive the most competitive pricing.' },
  { title:'Secure Volumes',   body:'Real allocations from real capacity with reliable, documented supply commitments on every contract.' },
  { title:'Flexible Terms',   body:'FOB / CIF / TTO / TTV — delivery terms tailored entirely to the buyer\'s operational and commercial requirements.' },
  { title:'Long-Term Focus',  body:'We build relationships on trust, performance and transparency. Partnership, not a single transaction.' },
  { title:'Full Compliance',  body:'AML compliant. Full KYC on every counterparty. Legal SPA and independent inspection as standard practice.' },
]

const COMPLIANCE = [
  { title:'KYC & Due Diligence',     body:'Verified companies, documents and ownership on every transaction without exception.' },
  { title:'Inspection Certificates', body:'SGS / INTERTEK / BV / CIQ independent third-party inspection at loading and destination.' },
  { title:'Legal Contracts',         body:'All transactions backed by formal Sales & Purchase Agreements and full legal documentation.' },
  { title:'AML Compliance',          body:'Full adherence to international Anti-Money Laundering regulations and compliance standards.' },
]

export default function Mandate() {
  useReveal()

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animation:'fadeIn .5s ease both'}}>Our Structure</p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            Direct <span className="gold">Mandate</span> Model
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            TCG operates under official mandates — not as a reseller or middleman.
            We hold full authorization to negotiate and conclude transactions on behalf of
            refineries and title holders.
          </p>
        </div>
      </section>

      {/* Intro + mandate types */}
      <section className="section">
        <div className="wrap">
          <div className="mand-intro">
            <div data-reveal>
              <p className="t-label" style={{marginBottom:18}}>What This Means</p>
              <h2 className="t-display mand-intro-h">
                We are not<br /><span className="gold">resellers</span>
              </h2>
              <div className="rule" style={{marginTop:22}} />
              <p className="mand-intro-body">
                TCG is not a reseller, not a middleman, and not a retail broker.
                We do not buy and resell. We represent. We negotiate. We deliver.
              </p>
              <p className="mand-intro-body">
                This distinction is fundamental: it is the difference between competitive
                pricing and inflated margins, between secure volumes and unverifiable promises.
              </p>
              <div className="mand-badge">
                Direct Allocation &nbsp;&bull;&nbsp; Real Volumes &nbsp;&bull;&nbsp; Real Refineries
              </div>
            </div>

            <div className="mand-types" data-reveal data-delay="2">
              {TYPES.map((t, i) => (
                <div key={i} className="mand-type">
                  <p className="mand-type-code">{t.code}</p>
                  <p className="mand-type-title">{t.title}</p>
                  <p className="mand-type-body">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global network */}
      <section className="section section-dark">
        <div className="wrap">
          <p className="t-label" style={{textAlign:'center', marginBottom:40}} data-reveal>
            Global Mandate Network
          </p>
          <div className="mand-regions-grid">
            {['Asia Pacific','North America','Middle East','Europe','Africa','Latin America'].map((r, i) => (
              <div key={i} className="mand-region" data-reveal data-delay={String((i % 3) + 1)}>
                <div className="mand-region-dot" />
                <p className="mand-region-name">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section section-mid">
        <div className="wrap">
          <div className="sh sh-center">
            <p className="t-label" data-reveal>Why the Mandate Model Matters</p>
            <h2 className="t-display sh-h" data-reveal data-delay="1">
              The <span className="gold">Difference</span>
            </h2>
            <div className="rule rule-c" data-reveal data-delay="2" />
          </div>
          <div className="mand-adv-grid">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="mand-adv" data-reveal data-delay={String((i % 3) + 1)}>
                <p className="mand-adv-n">{String(i + 1).padStart(2, '0')}</p>
                <p className="mand-adv-title">{a.title}</p>
                <p className="mand-adv-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section section-dark">
        <div className="wrap">
          <p className="t-label" style={{marginBottom:36}} data-reveal>Compliance &amp; Transparency</p>
          <div className="mand-comp-grid">
            {COMPLIANCE.map((c, i) => (
              <div key={i} className="mand-comp" data-reveal data-delay={String(i + 1)}>
                <p className="mand-comp-title">{c.title}</p>
                <p className="mand-comp-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-steel">
        <div className="wrap">
          <div className="cta-band" data-reveal>
            <div>
              <h3 className="t-display cta-band-h">
                Ready to work with a <span className="gold">direct mandate?</span>
              </h3>
              <p className="cta-band-sub">
                Contact our team to begin the transaction process.
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
