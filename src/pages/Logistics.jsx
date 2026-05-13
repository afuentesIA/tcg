import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useReveal } from '../components/useReveal'

const STEPS = [
  { n:'01', title:'Buyer Issues ICPO',                    body:'The buyer submits an Irrevocable Corporate Purchase Order specifying product, volume, destination port and preferred delivery terms.' },
  { n:'02', title:'Seller Issues Commercial Invoice',      body:'Seller issues a full Commercial Invoice detailing product specifications, unit pricing, total value and all relevant transaction terms.' },
  { n:'03', title:'Buyer Signs & Returns CI',              body:'Buyer reviews, executes and returns the signed CI along with required company documentation for KYC verification and due diligence.' },
  { n:'04', title:'Seller Issues DTA / SPA',               body:'Seller issues the Deed of Trust Agreement or Sales & Purchase Agreement as the binding legal contract governing the transaction.' },
  { n:'05', title:'Buyer Makes Payment via MT103',          body:'Buyer initiates payment by MT103 bank wire transfer to the designated account. Escrow arrangements are available upon mutual agreement.' },
  { n:'06', title:'Seller Transfers Title',                body:'Upon confirmed receipt of payment, seller transfers legal product title to the buyer and initiates loading at the designated port.' },
  { n:'07', title:'Product Injected & Documents Released', body:'Product is loaded and injected. SGS inspection is confirmed. All shipping documents — B/L, COA, Invoice, Packing List, Origin Certificate — are released.' },
]

const INFO = [
  { k:'Loading Ports',   v:'Rotterdam · Antwerp · Hamburg · Amsterdam · As per product origin' },
  { k:'Vessel Range',    v:'1,000 – 150,000 MT depending on product and contractual arrangement' },
  { k:'Delivery Basis',  v:'FOB ASWP / CIF / TTO / TTV — tailored to buyer requirements' },
  { k:'Payment Terms',   v:'MT103 bank wire transfer. Escrow-protected arrangements available.' },
  { k:'Inspection',      v:'SGS / INTERTEK / BV / CIQ — independent inspection at loading and destination' },
  { k:'Lead Time',       v:'5 – 15 working days from payment confirmation for liquid fuel products' },
  { k:'Documentation',   v:'COA · SGS Report · Bill of Lading · Commercial Invoice · Packing List · Certificate of Origin' },
  { k:'Compliance',      v:'Full KYC, AML compliance and legal SPA on every transaction' },
]

const TERMS = [
  { code:'FOB', name:'Free On Board',             body:'Seller delivers on board the buyer\'s vessel at the named loading port. Risk and cost transfer to buyer at that point.' },
  { code:'CIF', name:'Cost, Insurance & Freight', body:'Seller arranges and pays for transport, insurance and freight to the named destination port. Risk transfers upon loading.' },
  { code:'TTO', name:'Tanker Take Over',           body:'Product is transferred into the buyer\'s vessel at a named port or terminal. Title passes upon confirmed measurement.' },
  { code:'TTV', name:'Tanker To Vessel',           body:'Product transferred directly from seller\'s vessel to buyer\'s vessel at sea or port. Common for large volume LPG and LNG.' },
]

export default function Logistics() {
  useReveal()
  const [active, setActive] = useState(0)

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animation:'fadeIn .5s ease both'}}>Transaction & Delivery</p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            Supply &amp; <span className="gold">Logistics</span>
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            A transparent seven-step transaction procedure designed for security, compliance and
            efficiency — from initial offer to confirmed delivery at any safe world port.
          </p>
        </div>
      </section>

      {/* Transaction process */}
      <section className="section">
        <div className="wrap">
          <p className="t-label" style={{marginBottom:36}} data-reveal>
            FOB ASWP Transaction Procedure
          </p>

          <div className="logi-layout">
            {/* Step list */}
            <div className="logi-list">
              {STEPS.map((s, i) => (
                <button
                  key={i}
                  className={`logi-step-btn${active === i ? ' on' : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="logi-step-n">{s.n}</span>
                  <span className="logi-step-title">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="logi-detail" key={active}>
              <div className="logi-detail-ghost" aria-hidden="true">{STEPS[active].n}</div>
              <p className="t-label" style={{marginBottom:12, position:'relative', zIndex:1}}>Step {active + 1} of {STEPS.length}</p>
              <h3 className="t-display logi-detail-title">{STEPS[active].title}</h3>
              <div className="rule" />
              <p className="logi-detail-body">{STEPS[active].body}</p>
              <div className="logi-progress">
                <div className="logi-progress-fill" style={{width:`${((active + 1) / STEPS.length) * 100}%`}} />
              </div>
              <div className="logi-nav">
                <button
                  className="btn btn-secondary"
                  onClick={() => setActive(a => Math.max(0, a - 1))}
                  disabled={active === 0}
                  style={{opacity: active === 0 ? 0.3 : 1, pointerEvents: active === 0 ? 'none' : 'auto'}}
                >
                  &larr; Previous
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setActive(a => Math.min(STEPS.length - 1, a + 1))}
                  disabled={active === STEPS.length - 1}
                  style={{opacity: active === STEPS.length - 1 ? 0.3 : 1, pointerEvents: active === STEPS.length - 1 ? 'none' : 'auto'}}
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info table */}
      <section className="section section-dark">
        <div className="wrap">
          <p className="t-label" style={{marginBottom:32}} data-reveal>
            Supply &amp; Delivery Information
          </p>
          <div className="logi-info">
            {INFO.map((r, i) => (
              <div key={i} className="logi-info-row" data-reveal data-delay={String((i % 3) + 1)}>
                <span className="logi-info-k">{r.k}</span>
                <span className="logi-info-v">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery terms */}
      <section className="section section-mid">
        <div className="wrap">
          <div className="sh">
            <p className="t-label" data-reveal>Available Delivery Terms</p>
            <h2 className="t-display sh-h" data-reveal data-delay="1">
              Delivery <span className="gold">Options</span>
            </h2>
            <div className="rule" data-reveal data-delay="2" />
          </div>
          <div className="logi-terms">
            {TERMS.map((t, i) => (
              <div key={i} className="logi-term" data-reveal data-delay={String(i + 1)}>
                <p className="logi-term-code">{t.code}</p>
                <p className="logi-term-name">{t.name}</p>
                <p className="logi-term-body">{t.body}</p>
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
                Ready to <span className="gold">start a transaction?</span>
              </h3>
              <p className="cta-band-sub">
                Our commercial team will respond within 24 hours with a formal
                Commercial Invoice and full transaction documentation.
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
