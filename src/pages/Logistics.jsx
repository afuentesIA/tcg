import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useReveal } from '../components/useReveal'

const TERMS = [
  { code:'FOB', name:'Free On Board',             body:'Seller delivers on board the buyer\'s vessel at the named loading port. Risk and cost transfer to buyer at that point.' },
  { code:'CIF', name:'Cost, Insurance & Freight', body:'Seller arranges and pays for transport, insurance and freight to the named destination port. Risk transfers upon loading.' },
  { code:'TTO', name:'Tanker Take Over',           body:'Product is transferred into the buyer\'s vessel at a named port or terminal. Title passes upon confirmed measurement.' },
  { code:'TTV', name:'Tanker To Vessel',           body:'Product transferred directly from seller\'s vessel to buyer\'s vessel at sea or port. Common for large volume LPG and LNG.' },
]

export default function Logistics() {
  useReveal()

  const seo = {
    title: 'Supply & Logistics — FOB, CIF, TTO, TTV Delivery Terms | TCG',
    description: 'TCG offers flexible delivery terms: FOB, CIF, TTO, and TTV for oil, gas and petrochemical commodities. Global shipping from Houston, Rotterdam, Fujairah, Singapore and Lagos. ASWP loading operations.',
    canonical: 'https://tcgglobal.us/logistics',
    ogImage: 'https://tcgglobal.us/img/og-logistics.jpg'
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Supply & Logistics — Energy Commodity Delivery',
    description: seo.description,
    provider: {
      '@type': 'Organization',
      name: 'TCG',
      url: 'https://tcgglobal.us'
    },
    areaServed: ['Asia Pacific', 'North America', 'Middle East', 'Europe', 'Africa', 'Latin America'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Delivery Terms',
      itemListElement: TERMS.map((t, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${t.code} — ${t.name}`,
          description: t.body
        }
      }))
    }
  }

  return (
    <main>
      {/* ========== SEO META TAGS ========== */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="TCG" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seo.canonical} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.ogImage} />
        
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <section className="page-hero">
        <div className="page-hero-lines" aria-hidden="true" />
        <div className="wrap page-hero-content">
          <p className="t-label page-hero-label" style={{animation:'fadeIn .5s ease both'}}>Transaction & Delivery</p>
          <h1 className="t-display page-hero-title" style={{animation:'slideUp .6s ease .1s both'}}>
            Supply &amp; <span className="gold">Logistics</span>
          </h1>
          <div className="rule" style={{animation:'fadeIn .5s ease .2s both'}} />
          <p className="page-hero-body" style={{animation:'fadeIn .5s ease .25s both'}}>
            A transparent transaction procedure designed for security, compliance and
            efficiency — from initial offer to confirmed delivery at any safe world port.
          </p>
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
                Our commercial team will respond within 24 hours.
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