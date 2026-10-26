import Link from 'next/link';
import { notFound } from 'next/navigation';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';
import { SERVICES } from '@/lib/data';

export async function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const s = SERVICES.find((x) => x.slug === slug);
    return {
        title: s ? `${s.title} — Logistics` : 'Service',
        description: s?.short,
    };
}

const DEFAULT_PROCESS = [
    { num: '01', title: 'Consultation', desc: 'We understand your lane, volume, and timing requirements.' },
    { num: '02', title: 'Planning', desc: 'We design the route, book capacity, and prepare documentation.' },
    { num: '03', title: 'Execution', desc: 'Cargo moves with milestone alerts and a named operator on call.' },
    { num: '04', title: 'Delivery', desc: 'Proof of delivery, final paperwork, and post-shipment review.' },
];

const DEFAULT_FAQS = [
    { q: 'How fast can you provide a quote?', a: 'Most quotes are delivered within 24 hours. For urgent shipments, we can turn around pricing in as little as 2 hours.' },
    { q: 'Do you handle customs clearance?', a: 'Yes. Our AEO-certified brokerage network clears cargo in 38 countries. We handle import and export documentation end-to-end.' },
    { q: 'Is my cargo insured?', a: 'Every shipment is covered up to $2M. Additional coverage is available on request for high-value or specialised cargo.' },
    { q: 'Can I track my shipment in real-time?', a: 'Yes. Live GPS tracking is available on every container, with milestone alerts sent to your preferred contact method.' },
];

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const s = SERVICES.find((x) => x.slug === slug);
    if (!s) notFound();

    const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);

    const stepsToShow = s.process || DEFAULT_PROCESS;
    const faqsToShow = s.faqs || DEFAULT_FAQS;

    return (
        <main>
            {/* 1. HERO */}
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <Link href="/services">Services</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>{s.title}</span>
                    </nav>
                    <h1>{s.title}</h1>
                    <p>{s.short}</p>
                </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="section">
                <div className="container detail-grid">
                    <Reveal className="detail-visual">
                        <i className={`fa-solid ${s.icon}`} />
                    </Reveal>

                    <Reveal className="detail-body">
                        <span className="section-eyebrow">Our Core Services</span>
                        <h2>{s.intro}</h2>

                        <h3 style={{ fontSize: 20, margin: '26px 0 16px' }}>What&apos;s included?</h3>
                        <ul className="detail-features">
                            {s.features.map((f) => (
                                <li key={f}>
                                    <i className="fa-solid fa-check-circle" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="detail-stats" style={{ marginBottom: '30px' }}>
                            {s.stats.map((st) => (
                                <div className="detail-stat" key={st.label}>
                                    <strong>{st.value}</strong>
                                    <span>{st.label}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <a href="tel:+923111444224" className="btn btn-orange">
                                Call Us <i className="fa-solid fa-phone" />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 3. WHY CHOOSE (BANNER TYPE) */}
            {(slug === 'air-freight' || slug === 'ocean-freight') && (
                <section className="section section-bg-blue" style={{ padding: '80px 0' }}>
                    <div className="container split">
                        <div className="split-copy">
                            <Reveal>
                                <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Advantages</span>
                                <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)' }}>
                                    {slug === 'air-freight' ? 'Why choose air freight?' : 'Why choose ocean freight?'}
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7 }}>
                                    {slug === 'air-freight'
                                        ? 'Air freight can be suitable for urgent consignments, high-value goods, samples, spare parts, and shipments where faster transit is important. The final choice depends on cargo restrictions, route availability, cost, and timing.'
                                        : 'It can be suitable for larger shipments, bulk commercial goods, machinery, raw materials, and planned inventory replenishment. Transit times, costs, and availability depend on the route and service.'}
                                </p>
                                <Link href="/contact" className="btn btn-orange" style={{ marginTop: '20px' }}>
                                    Request a Quote <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </Reveal>
                        </div>

                        <div className="split-visual">
                            <Reveal>
                                <div className="split-visual-main" style={{
                                    backgroundImage: slug === 'air-freight'
                                        ? 'url(https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format&fit=crop)'
                                        : 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop)',
                                    minHeight: '350px'
                                }}>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>
            )}

            {/* 4. HOW WE WORK (CARDS) */}
            <section className="section">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">How We Work</span>
                        {/* Yahan heading change ki hai taake Ocean Freight ke liye alag ho */}
                        <h2>{slug === 'ocean-freight' ? 'From Sea Freight Booking to Final Delivery' : 'Simple Process, Serious Execution'}</h2>
                        <p>
                            {slug === 'ocean-freight'
                                ? 'Reliable ocean freight coordination from cargo planning to destination arrival.'
                                : 'From first contact to final delivery, you work with one team — one named contact from start to finish.'}
                        </p>
                    </div>

                    <div className="process-grid">
                        {stepsToShow.map((step) => (
                            <Reveal key={step.num}>
                                <div className="process-card">
                                    <span className="process-num">{step.num}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="section section-bg-gray">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">FAQs</span>
                        <h2>Common Questions</h2>
                    </div>

                    <div className="faq-grid">
                        {faqsToShow.map((faq) => (
                            <Reveal key={faq.q}>
                                <div className="faq-card">
                                    <h4>
                                        <i className="fa-solid fa-circle-question" />
                                        {faq.q}
                                    </h4>
                                    <p>{faq.a}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. RELATED SERVICES */}
            <section className="section">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Related Services</span>
                        <h2>Explore Related Solutions</h2>
                        <p>
                            Connect {s.title.toLowerCase()} with complementary logistics services to support your shipment requirements from origin to destination.
                        </p>
                    </div>

                    <div className="services-grid">
                        {others.map((o) => (
                            <ServiceCard key={o.slug} service={o} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Need to Move Cargo?</h2>
                        <p>Tell us what needs to move. We&apos;ll come back with a plan and pricing within 24 hours.</p>
                    </div>
                    <div className="cta-actions">
                        <Link href="/contact" className="btn btn-orange">
                            Request a Quote <i className="fa-solid fa-arrow-right" />
                        </Link>
                        <Link href="/services" className="btn btn-outline-white">
                            All Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}