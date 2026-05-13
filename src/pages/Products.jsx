import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useReveal } from '../components/useReveal'
import { products } from '../data/products'

export default function Products() {
  useReveal()
  const [sel, setSel]   = useState(products[0])
  const [tab, setTab]   = useState('specs')
  const hasTypical      = sel.specs.some(s => s.t !== '—')

  const colClass = hasTypical ? 'specs-4' : 'specs-3'

  return (
    <main>
      {/* Page hero */}
      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animationDelay:'.05s', animation:'fadeIn .5s ease both'}}>
            Energy Portfolio
          </p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            Our <span className="gold">Products</span>
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            Seven high-specification energy commodities sourced directly from top-tier refineries
            and trusted producers. Full technical data sheets and Certificates of Analysis available on request.
          </p>
        </div>
      </section>

      {/* Product selector + detail */}
      <div className="wrap">
        <div className="prods-wrap">
          {/* Sidebar */}
          <aside className="prods-sidebar">
            {products.map(p => (
              <button
                key={p.id}
                className={`prods-btn${sel.id === p.id ? ' sel' : ''}`}
                onClick={() => { setSel(p); setTab('specs') }}
                aria-pressed={sel.id === p.id}
              >
                <span className="prods-btn-cat">{p.cat}</span>
                <span className="prods-btn-name">{p.name}</span>
                <span className="prods-btn-code">{p.code}</span>
              </button>
            ))}
          </aside>

          {/* Detail panel */}
          <div className="prods-panel" key={sel.id}>
            <div className="prods-panel-head">
              <div>
                <p className="t-label">{sel.cat}</p>
                <h2 className="t-display prods-name">{sel.name}</h2>
                <p className="prods-code">{sel.code}</p>
              </div>
              <NavLink to="/contact" className="btn btn-primary" style={{flexShrink:0}}>
                Request Quote
              </NavLink>
            </div>

            <p className="prods-desc">{sel.desc}</p>

            {/* Meta */}
            <div className="prods-meta">
              {[
                ['Standard',     sel.std],
                ['CAS Number',   sel.cas],
                ['HS Code',      sel.hs],
                ['Origin',       sel.origin],
                ['Delivery',     sel.delivery],
                ['Load Port',    sel.port],
                ['Vessel Range', sel.vessel],
                ['Payment',      sel.payment],
                ['Lead Time',    sel.lead],
              ].map(([k, v]) => (
                <div key={k} className="meta-row">
                  <span className="meta-k">{k}</span>
                  <span className="meta-v">{v}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="prods-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={tab === 'specs'}
                className={`prods-tab${tab === 'specs' ? ' on' : ''}`}
                onClick={() => setTab('specs')}
              >
                Technical Specifications
              </button>
              <button
                role="tab"
                aria-selected={tab === 'logi'}
                className={`prods-tab${tab === 'logi' ? ' on' : ''}`}
                onClick={() => setTab('logi')}
              >
                Logistics &amp; Delivery
              </button>
            </div>

            {/* Specs table */}
            {tab === 'specs' && (
              <div className="specs-table" role="tabpanel">
                <div className={`specs-head ${colClass}`}>
                  <span>Parameter</span>
                  <span>Unit</span>
                  <span>Specification / Limit</span>
                  {hasTypical && <span>Typical</span>}
                </div>
                {sel.specs.map((s, i) => (
                  <div key={i} className={`spec-row ${colClass}`}>
                    <span className="spec-p">{s.p}</span>
                    <span className="spec-u">{s.u}</span>
                    <span className="spec-l">{s.l}</span>
                    {hasTypical && <span className="spec-t">{s.t}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Logistics table */}
            {tab === 'logi' && (
              <div className="logi-table" role="tabpanel">
                {[
                  ['Origin',         sel.origin],
                  ['Delivery Basis', sel.delivery],
                  ['Load Port',      sel.port],
                  ['Vessel Range',   sel.vessel],
                  ['Payment Terms',  sel.payment],
                  ['Lead Time',      sel.lead],
                  ['Inspection',     'SGS / INTERTEK / BV / CIQ (at buyer\'s option)'],
                  ['Packing',        'Bulk'],
                  ['Documents',      'COA · SGS Report · Bill of Lading · Commercial Invoice · Packing List · Certificate of Origin'],
                ].map(([k, v]) => (
                  <div key={k} className="logi-row">
                    <span className="logi-k">{k}</span>
                    <span className="logi-v">{v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="prods-cta">
          <div>
            <h3 className="t-display prods-cta-h">
              Need a formal <span className="gold">data sheet?</span>
            </h3>
            <p className="prods-cta-sub">
              Full technical data sheets and Certificates of Analysis are available on request
              for all products in our portfolio.
            </p>
          </div>
          <NavLink to="/contact" className="btn btn-primary">
            Request Data Sheet
          </NavLink>
        </div>
      </div>
    </main>
  )
}
