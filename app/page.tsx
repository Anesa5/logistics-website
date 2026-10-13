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

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow">What We Do</span>
            <h2>Complete Logistics Solutions</h2>
            <p>
              Every lane has its own logic. We bring the people, planning,
              and practical control to make yours work better.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* About Split */}
      <section className="section section-bg-gray">
        <div className="container split">
          <Reveal className="split-visual">
            <div className="split-visual-main">
              <i className="fa-solid fa-truck-fast" />
            </div>
            <div className="split-visual-badge">
              <strong>16+</strong>
              <span>Years Experience</span>
            </div>
          </Reveal>

          <Reveal className="split-copy">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2>The Partner You Can Rely On</h2>
            <p>
              We built the logistics partner we always wanted to work with.
              Global reach, local attention, and a team that takes the
              outcome personally — because your business depends on it.
            </p>

            <ul className="check-list">
              {[
                'One accountable operations team',
                'Updates with signal, not noise',
                'Plans built for real-world change',
                'Global reach, local attention',
                'Fully insured cargo programmes',
                'Transparent, honest pricing',
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

      {/* Stats */}
      <section className="section section-bg-blue">
        <div className="container">
          <div className="section-head reveal is-visible">
            <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>By the Numbers</span>
            <h2>Scale Without Losing the Thread</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>
              Every shipment is connected to a promise. We keep the full
              picture in view, so your team can make decisions with confidence.
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Blog */}
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

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready to Move Your Freight?</h2>
            <p>
              Give us the shape of the challenge. We&apos;ll help you find the
              cleanest route through it — with a quote in 24 hours.
            </p>
          </Reveal>

          <Reveal className="cta-actions">
            <Link href="/contact" className="btn btn-orange">
              Request a Quote <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/services" className="btn btn-outline-white">
              Explore Services
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}