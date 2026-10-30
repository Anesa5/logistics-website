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

      {/* 1. INTRODUCTION SECTION */}
      <section className="section">
        <div className="container split">
          <Reveal className="split-visual">
            <div className="split-visual-main">

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
              Whether you are importing materials, exporting finished products, or managing ongoing cargo requirements, we aim to make logistics easier to manage. With a practical understanding of business logistics, ICL Logistics focuses on clear communication, dependable coordination, and solutions that meet each customer's operational requirements.
            </p>

            <ul className="check-list">
              {[
                'Industry Experience',
                'Multiple Service Options',
                'Customer-Centric Service',
                'Business-Focused Solutions',
                'One accountable operations team',
                'Global reach, local attention',
              ].map((item) => (
                <li key={item}><i className="fa-solid fa-check" /> {item}</li>
              ))}
            </ul>

            <Link href="/about" className="btn btn-blue">
              Learn More <i className="fa-solid fa-arrow-right" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="section section-bg-gray">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">What We Do</span>
            <h2>Complete Logistics Solutions</h2>
            <p>
              Simplifying logistics, reducing costs, and keeping supply chains moving with reliable, end-to-end solutions. Every lane has its own logic. We bring the people, planning, and practical control to make yours work better.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION (Banner) */}
      <section className="section section-bg-blue">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Experience That Moves Business Forward</span>
            <h2>Serving business logistics needs since 2012.</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>
              Established in 2012, ICL Logistics delivers practical freight forwarding and logistics solutions through professional coordination, efficient planning, and a clear understanding of business needs. Every shipment is connected to a promise. We keep the full picture in view, so your team can make decisions with confidence.
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="section">
        <div className="container split">
          <Reveal className="split-visual">
            <div className="split-visual-main">

            </div>
            <div className="split-visual-badge">
              <strong>14+</strong>
              <span>Years Experience</span>
            </div>
          </Reveal>

          <Reveal className="split-copy">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2>Connecting Businesses Through Reliable Logistics</h2>
            <p>
              Reliable freight forwarding and logistics solutions backed by industry experience. We focus on efficient coordination, clear communication, and your business needs.
            </p>

            <ul className="check-list">
              {[
                'Industry Experience',
                'Multiple Service Options',
                'Comprehensive Logistics Solutions',
                'Reliable Shipment Coordination',
                'Business-Focused Solutions and budget',
                'Transparent Communication',
                'Customer-Centric Service',
                'Professional Service Standards',
              ].map((item) => (
                <li key={item}><i className="fa-solid fa-check" /> {item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE SECTION */}
      <section className="section section-bg-gray">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">Industries We Serve</span>
            <h2>Supporting the Businesses That Keep Trade Moving</h2>
            <p>ICL Logistics supports business shipping and sourcing requirements across relevant sectors, subject to cargo type and service availability.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              'Manufacturing & Industrial Supplies', 'Retail, Wholesale & FMCG', 'Textiles, Apparel & Leather',
              'Electronics, Electrical & Technology', 'Automotive & Engineering', 'Food, Beverage & Agriculture',
              'Pharmaceuticals & Healthcare', 'Construction & Building Materials', 'Chemicals, Plastics & Packaging',
              'Energy, Oil & Gas', 'E-commerce & Consumer Goods', 'Importers, Exporters & Trading Companies',
              'Government & Public Sector', 'General Commercial & Project Cargo'
            ].map((ind, i) => (
              <Reveal key={i} delay={i * 20}>
                <div style={{ background: '#fff', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, color: 'var(--ink)' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--orange)', fontSize: '18px' }} /> {ind}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS / LOGOS SECTION */}
      {/* 5. CERTIFICATIONS / LOGOS SECTION */}
      <section className="section section-bg-gray" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-head reveal is-visible" style={{ marginBottom: '40px' }}>
            <span className="section-eyebrow">Our Standards</span>
            <h2>Industry Memberships & Certifications</h2>
            <p>Committed to professional standards, reliable coordination, and trusted logistics partnerships.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', alignItems: 'center' }}>

            <Reveal delay={100}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-piffa.png" alt="PIFFA" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>PIFFA</h4>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-fiata.png" alt="FIATA" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>FIATA</h4>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-lcci.png" alt="LCCI" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>LCCI</h4>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-iso.png" alt="ISO 9001" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>ISO 9001</h4>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-iata.png" alt="IATA" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>IATA</h4>
              </div>
            </Reveal>

            {/* Naye 4 Logos */}
            <Reveal delay={600}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-secp.png" alt="SECP" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>SECP</h4>
              </div>
            </Reveal>

            <Reveal delay={700}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-fbr.png" alt="FBR" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>FBR</h4>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-psw.png" alt="PSW" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>PSW</h4>
              </div>
            </Reveal>

            <Reveal delay={900}>
              <div style={{ textAlign: 'center', width: '160px' }}>
                <img src="/css/logo-pra.png" alt="PRA" style={{ height: '90px', objectFit: 'contain', margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>PRA</h4>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK SECTION */}
      <section className="section section-bg-gray">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">How We Work</span>
            <h2>From Planning to Delivery, Made Simple</h2>
            <p>Clear processes. Reliable coordination. Smooth shipments.</p>
          </div>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Understand Your Requirements', desc: 'Identify your cargo needs, routes, and timelines.' },
              { step: '02', title: 'Plan the Right Solution', desc: 'Select suitable logistics options for your shipment.' },
              { step: '03', title: 'Coordinate Every Detail', desc: 'Manage bookings, documentation, and transportation coordination.' },
              { step: '04', title: 'Keep You Informed', desc: 'Provide timely updates throughout the agreed process.' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ padding: '30px', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)', height: '100%' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--orange)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>{item.step}</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text)', margin: 0 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Real feedback from operations teams who ship with us every week.</p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <div className="testimonial">
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <p>{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BLOG SECTION */}
      <section className="section section-bg-gray">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">Latest Insights</span>
            <h2>From Our Blog</h2>
            <p>
              Practical thinking on freight, supply chains, and the details
              that decide whether a shipment arrives on time.
            </p>
          </div>

          <div className="blog-grid">
            {ARTICLES.slice(0, 3).map((a) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 46 }}>
            <Link href="/blog" className="btn btn-blue">
              View All Articles <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready to Move Your Freight?</h2>
            <p>
              Let's Move Your Business Forward. Tell us what you need to ship, source, or manage. ICL Logistics is ready to discuss a suitable solution for your business. Give us the shape of the challenge, we'll help you find the cleanest route through it.
            </p>
          </Reveal>

          <Reveal className="cta-actions">
            <a href="tel:+923111444224" className="btn btn-orange">
              <i className="fa-solid fa-phone" /> Call Now
            </a>
            <a href="https://wa.me/923111444224" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              <i className="fa-brands fa-whatsapp" /> WhatsApp
            </a>
            <Link href="/services" className="btn btn-outline-white" style={{ marginLeft: '10px' }}>
              Explore Services
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}