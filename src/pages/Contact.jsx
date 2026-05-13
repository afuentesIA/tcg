import { useState } from 'react'
import { useReveal } from '../components/useReveal'
import { products } from '../data/products'

const TERMS   = ['FOB ASWP', 'CIF', 'TTO', 'TTV', 'CFR', 'Other / To Be Agreed']
const STEPS   = ['ICPO', 'Commercial Invoice', 'Sign & Return CI', 'DTA / SPA', 'Payment MT103', 'Title Transfer', 'Documents Released']
const COMP    = ['Full KYC & Due Diligence', 'SGS / INTERTEK Inspection', 'AML Compliant', 'Escrow-Protected Transactions', 'Legal SPA on Every Transaction']

const EMPTY = { name:'', company:'', email:'', country:'', product:'', volume:'', terms:'', message:'' }

function Field({ label, error, children }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
      {error && <span className="form-err">{error}</span>}
    </div>
  )
}

export default function Contact() {
  useReveal()
  const [form,   setForm]   = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent,   setSent]   = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.product)        e.product = 'Required'
    return e
  }

  const submit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animation:'fadeIn .5s ease both'}}>Start a Transaction</p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            Request <span className="gold">a Quote</span>
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            Submit your inquiry and our commercial team will respond within 24 hours
            with a formal Commercial Invoice and full transaction documentation.
          </p>
        </div>
      </section>

      <div className="contact-layout">
        {/* Sidebar */}
        <aside className="contact-aside">

          <div className="contact-info-block" data-reveal>
            <p className="contact-info-label">Email</p>
            <a href="mailto:info@tcg.us" className="contact-info-val">
              info@tcg.us
            </a>
          </div>

          <div className="contact-info-block" data-reveal data-delay="1">
            <p className="contact-info-label">Website</p>
            <a href="https://www.tcg.us" className="contact-info-val" target="_blank" rel="noreferrer">
              www.tcg.us
            </a>
          </div>

          <div className="contact-info-block" data-reveal data-delay="2">
            <p className="contact-info-label">Global Offices</p>
            <div className="contact-hubs">
              {['Houston', 'Rotterdam', 'Fujairah', 'Singapore', 'Lagos'].map(c => (
                <span key={c} className="contact-hub">{c}</span>
              ))}
            </div>
          </div>

          <div className="contact-comp" data-reveal data-delay="3">
            <p className="contact-comp-head">Compliance &amp; Security</p>
            {COMP.map(t => (
              <div key={t} className="contact-comp-item">
                <span className="contact-comp-dot" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="contact-steps" data-reveal data-delay="4">
            <p className="contact-comp-head">Transaction Steps</p>
            {STEPS.map((s, i) => (
              <div key={i} className="contact-step">
                <span className="contact-step-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="contact-step-label">{s}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Form */}
        <div className="contact-main">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-ring">
                <span className="contact-success-check">&#10003;</span>
              </div>
              <h2 className="t-display contact-success-h">Inquiry Submitted</h2>
              <p className="contact-success-body">
                Thank you, <strong>{form.name}</strong>. Our commercial team will contact you
                at <strong>{form.email}</strong> within 24 hours with a formal offer and next steps.
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => { setSent(false); setForm(EMPTY); setErrors({}) }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="contact-form-head">
                <h2 className="t-display contact-form-title">Transaction Inquiry</h2>
                <p className="contact-form-note">Fields marked * are required</p>
              </div>

              <div className="form-row">
                <Field label="Full Name *" error={errors.name}>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={set('name')} className={errors.name ? 'err' : ''} />
                </Field>
                <Field label="Company *" error={errors.company}>
                  <input type="text" placeholder="Company name" value={form.company} onChange={set('company')} className={errors.company ? 'err' : ''} />
                </Field>
              </div>

              <div className="form-row">
                <Field label="Email Address *" error={errors.email}>
                  <input type="email" placeholder="email@company.com" value={form.email} onChange={set('email')} className={errors.email ? 'err' : ''} />
                </Field>
                <Field label="Country">
                  <input type="text" placeholder="Country of registration" value={form.country} onChange={set('country')} />
                </Field>
              </div>

              <div className="form-row">
                <Field label="Product of Interest *" error={errors.product}>
                  <select value={form.product} onChange={set('product')} className={errors.product ? 'err' : ''}>
                    <option value="">Select product...</option>
                    {products.map(p => (
                      <option key={p.id} value={p.id}>{p.name} — {p.code}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Volume (MT)">
                  <input type="text" placeholder="e.g. 50,000 MT" value={form.volume} onChange={set('volume')} />
                </Field>
              </div>

              <Field label="Preferred Delivery Terms">
                <select value={form.terms} onChange={set('terms')}>
                  <option value="">Select delivery terms...</option>
                  {TERMS.map(t => <option key={t}>{t}</option>)}
                </select>
              </Field>

              <Field label="Additional Information">
                <textarea
                  rows={5}
                  placeholder="Destination port, frequency, specific requirements or any other relevant details..."
                  value={form.message}
                  onChange={set('message')}
                />
              </Field>

              <button type="submit" className="btn btn-primary form-submit">
                Submit Inquiry &rarr;
              </button>

              <p className="form-disclaimer">
                All inquiries are treated with strict confidentiality. Full KYC and due
                diligence apply to all transactions. TCG is AML compliant.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
