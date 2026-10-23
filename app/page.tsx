import Link from 'next/link';
import Hero from '@/components/Hero';
import HighlightsStrip from '@/components/HighlightsStrip';
import MovingBand from '@/components/MovingBand';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import StatsCounter from '@/components/StatsCounter';
import Reveal from '@/components/Reveal';
import { SERVICES, ARTICLES, TESTIMONIALS } from '@/lib/data';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HighlightsStrip />
      <MovingBand />

      {/* SECTION 2: Introduction */}
      <section className="section">
        <div className="container split">
          <Reveal className="split-visual">
            <div className="split-visual-main">
              <i className="fa-solid fa-handshake" />
            </div>
            <div className="split-visual-badge">
              <strong>14+</strong>
              <span>Years Experience</span>
            </div>
          </Reveal>

          <Reveal className="split-copy">
            <span className="section-eyebrow">ICL Logistics</span>
            <h2>Logistics That Works for Your Business</h2>
            <p>
              Since 2012, ICL Logistics has been supporting business operations through freight forwarding, transportation, procurement, and supply chain services. Based in Pakistan, we work to simplify the movement of goods, coordinate the details, and help customers make informed shipping decisions.
            </p>
            <p>
              Whether you are importing materials, exporting finished products, or managing ongoing cargo requirements, we aim to make logistics easier to manage.
            </p>
            <p>
              With a practical understanding of business logistics, ICL Logistics focuses on clear communication, dependable coordination, and solutions that meet each customer's operational requirements.
            </p>
            <Link href="/about" className="btn btn-blue mt-4">
              More About Us <i className="fa-solid fa-arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: Services */}
      <section className="section section-bg-gray">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">What We Do</span>
            <h2>Complete Logistics Solutions</h2>
            <p>
              Simplifying logistics, reducing costs, and keeping supply chains moving with reliable, end-to-end solutions.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Central Banner (Stats) */}
      <section className="section section-bg-blue">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Experience That Moves Business Forward</span>
            <h2>Serving Business Logistics Needs Since 2012</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>
              Established in 2012, ICL Logistics delivers practical freight forwarding and logistics solutions through professional coordination, efficient planning, and a clear understanding of business needs.
            </p>
          </div>

          {/* Using StatsCounter component but we'll update the text inside it later if needed */}
          <StatsCounter />
        </div>
      </section>

      {/* SECTION 5: Industries We Serve */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">Industries We Serve</span>
            <h2>Supporting the Businesses That Keep Trade Moving</h2>
            <p>ICL Logistics supports business shipping and sourcing requirements across relevant sectors, subject to cargo type and service availability.</p>
          </div>

          <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              'Manufacturing & Industrial Supplies', 'Retail, Wholesale & FMCG', 'Textiles, Apparel & Leather',
              'Electronics, Electrical & Technology', 'Automotive & Engineering', 'Food, Beverage & Agriculture',
              'Pharmaceuticals & Healthcare', 'Construction & Building Materials', 'Chemicals, Plastics & Packaging',
              'Energy, Oil & Gas', 'E-commerce & Consumer Goods', 'Importers, Exporters & Trading',
              'Government & Public Sector', 'General Commercial & Project Cargo'
            ].map((ind, i) => (
              <Reveal key={i} delay={i * 20}>
                <div className="industry-item" style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--orange)' }} /> {ind}
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services" className="btn btn-blue">Explore Services <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: Certifications */}
      <section className="section section-bg-gray" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-head reveal is-visible" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Industry Memberships & Certifications</h3>
            <p style={{ fontSize: '15px' }}>Committed to professional standards, reliable coordination, and trusted logistics partnerships.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', alignItems: 'center', opacity: 0.7 }}>
            {/* Note: Replace these text with <img> tags for actual logos */}
            <h4 style={{ fontSize: '24px', fontWeight: 800 }}>PIFFA</h4>
            <h4 style={{ fontSize: '24px', fontWeight: 800 }}>FIATA</h4>
            <h4 style={{ fontSize: '24px', fontWeight: 800 }}>ISO 9001</h4>
            <h4 style={{ fontSize: '24px', fontWeight: 800 }}>IATA</h4>
            <h4 style={{ fontSize: '24px', fontWeight: 800 }}>LCCI</h4>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready to Move Your Freight?</h2>
            <p>
              Tell us what you need to ship, source, or manage. ICL Logistics is ready to discuss a suitable solution for your business.
            </p>
          </Reveal>

          <Reveal className="cta-actions">
            <a href="tel:+923111444224" className="btn btn-orange">
              <i className="fa-solid fa-phone" /> Call Now
            </a>
            <a href="https://wa.me/923111444224" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              <i className="fa-brands fa-whatsapp" /> WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}