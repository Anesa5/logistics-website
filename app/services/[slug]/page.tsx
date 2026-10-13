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

const PROCESS_STEPS = [
    { num: '01', title: 'Consultation', desc: 'We understand your lane, volume, and timing requirements.' },
    { num: '02', title: 'Planning', desc: 'We design the route, book capacity, and prepare documentation.' },
    { num: '03', title: 'Execution', desc: 'Cargo moves with milestone alerts and a named operator on call.' },
    { num: '04', title: 'Delivery', desc: 'Proof of delivery, final paperwork, and post-shipment review.' },
];

const FAQS = [
    {
        q: 'How fast can you provide a quote?',
        a: 'Most quotes are delivered within 24 hours. For urgent shipments, we can turn around pricing in as little as 2 hours.',
    },
    {
        q: 'Do you handle customs clearance?',
        a: 'Yes. Our AEO-certified brokerage network clears cargo in 38 countries. We handle import and export documentation end-to-end.',
    },
    {
        q: 'Is my cargo insured?',
        a: 'Every shipment is covered up to $2M. Additional coverage is available on request for high-value or specialised cargo.',
    },
    {
        q: 'Can I track my shipment in real-time?',
        a: 'Yes. Live GPS tracking is available on every container, with milestone alerts sent to your preferred contact method.',
    },
];

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const s = SERVICES.find((x) => x.slug === slug);
    if (!s) notFound();

    const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);

    return (
        <main>
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

            <section className="section">
                <div className="container detail-grid">
                    <Reveal className="detail-visual">
                        <i className={`fa-solid ${s.icon}`} />
                    </Reveal>

                    <Reveal className="detail-body">
                        <span className="section-eyebrow">Service Overview</span>
                        <h2>Built for the Way This Lane Actually Behaves</h2>
                        <p>{s.intro}</p>

                        <h3 style={{ fontSize: 20, margin: '26px 0 16px' }}>What&apos;s Included</h3>
                        <ul className="detail-features">
                            {s.features.map((f) => (
                                <li key={f}>
                                    <i className="fa-solid fa-check-circle" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="detail-stats">
                            {s.stats.map((st) => (
                                <div className="detail-stat" key={st.label}>
                                    <strong>{st.value}</strong>
                                    <span>{st.label}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="btn btn-orange">
                            Request a Quote <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="section section-bg-gray">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">How We Work</span>
                        <h2>Simple Process, Serious Execution</h2>
                        <p>
                            From first contact to final delivery, you work with one team —
                            one named contact from start to finish.
                        </p>
                    </div>

                    <div className="process-grid">
                        {PROCESS_STEPS.map((step) => (
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

            <section className="section">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Common Questions</span>
                        <h2>Frequently Asked</h2>
                        <p>
                            Everything you need to know about {s.title.toLowerCase()}. Still
                            have questions? Our team answers in minutes.
                        </p>
                    </div>

                    <div className="faq-grid">
                        {FAQS.map((faq) => (
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

            <section className="section section-bg-gray">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Related Services</span>
                        <h2>Pairs Well With</h2>
                        <p>
                            Most shipments need more than one service. These are the ones
                            that usually sit next to {s.title.toLowerCase()}.
                        </p>
                    </div>

                    <div className="services-grid">
                        {others.map((o) => (
                            <ServiceCard key={o.slug} service={o} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Ready to Get Started?</h2>
                        <p>
                            Tell us what needs to move. We&apos;ll come back with a plan and
                            pricing within 24 hours.
                        </p>
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