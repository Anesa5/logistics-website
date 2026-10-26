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
                    {/* Icon hata diya hai, sirf normal div rakha hai image ke liye */}
                    <div className="detail-visual" style={{ backgroundImage: `url(${s.image})` }}></div>

                    <Reveal className="detail-body">
                        <span className="section-eyebrow">Our Core Services</span>
                        <h2>{s.overviewTitle || s.short}</h2>
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
            {(slug === 'air-freight' || slug === 'ocean-freight' || slug === 'road-transport' || slug === 'warehousing' || slug === 'customs-clearance' || slug === 'buyers-consolidation' || slug === 'global-procurement' || slug === 'supply-chain' || slug === 'project-logistics') && (
                <section className="section section-bg-blue" style={{ padding: '80px 0' }}>
                    <div className="container split">
                        <div className="split-copy">
                            <Reveal>
                                <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>
                                    {slug === 'warehousing' ? 'Who can benefit?' :
                                        slug === 'buyers-consolidation' ? 'Benefits' :
                                            slug === 'supply-chain' ? 'Our approach' : 'Advantages'}
                                </span>
                                <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)' }}>
                                    {slug === 'air-freight' && 'Why choose air freight?'}
                                    {slug === 'ocean-freight' && 'Why choose ocean freight?'}
                                    {slug === 'road-transport' && 'Why choose road transport?'}
                                    {slug === 'warehousing' && 'Warehousing Solutions'}
                                    {slug === 'customs-clearance' && 'Why Choose Customs Clearance Services?'}
                                    {slug === 'buyers-consolidation' && 'Why Consolidated Shipment: Benefits for buyers'}
                                    {slug === 'global-procurement' && 'Why Choose Global Procurement Services?'}
                                    {slug === 'supply-chain' && 'Why Choose Supply Chain Services'}
                                    {slug === 'project-logistics' && 'Why Choose Project Logistics?'}
                                </h2>

                                {slug === 'buyers-consolidation' ? (
                                    <ul className="check-list" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '20px' }}>
                                        <li><i className="fa-solid fa-check" style={{ color: 'var(--orange)' }} /> Fewer separate shipment arrangements.</li>
                                        <li><i className="fa-solid fa-check" style={{ color: 'var(--orange)' }} /> More organized cargo planning.</li>
                                        <li><i className="fa-solid fa-check" style={{ color: 'var(--orange)' }} /> Potential savings in shipping and handling costs.</li>
                                        <li><i className="fa-solid fa-check" style={{ color: 'var(--orange)' }} /> Easier coordination of purchases from multiple suppliers.</li>
                                    </ul>
                                ) : (
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7 }}>
                                        {slug === 'air-freight' && 'Air freight can be suitable for urgent consignments, high-value goods, samples, spare parts, and shipments where faster transit is important. The final choice depends on cargo restrictions, route availability, cost, and timing.'}
                                        {slug === 'ocean-freight' && 'It can be suitable for larger shipments, bulk commercial goods, machinery, raw materials, and planned inventory replenishment. Transit times, costs, and availability depend on the route and service.'}
                                        {slug === 'road-transport' && 'Road freight offers flexibility for domestic cargo movement and can connect with air and ocean freight as part of a wider logistics arrangement.'}
                                        {slug === 'warehousing' && 'Importers, distributors, retailers, manufacturers, and businesses that need storage between receipt and delivery.'}
                                        {slug === 'customs-clearance' && 'ICL Logistics helps reduce customs delays, documentation errors, and unexpected costs through efficient clearance coordination, compliance support, and integrated logistics solutions—keeping your cargo moving and business operations on track.'}
                                        {slug === 'global-procurement' && 'ICL Logistics simplifies global sourcing through supplier coordination, purchasing support, and integrated logistics, helping importers, exporters, manufacturers, retailers, wholesalers, and e-commerce businesses save time, reduce sourcing challenges, and manage international procurement more efficiently.'}
                                        {slug === 'supply-chain' && 'We begin by understanding how your goods move, where delays or coordination issues occur, and which logistics services may help. We then discuss a practical service arrangement suited to your business.'}
                                        {slug === 'project-logistics' && 'Project cargo often involves complex handling, multiple transport stages, strict schedules, and coordination between several parties. ICL Logistics helps simplify these challenges through structured planning, freight coordination, and clear communication—helping businesses manage transport complexity, reduce avoidable delays, and keep critical project cargo moving toward its destination.'}
                                    </p>
                                )}

                                <Link href="/contact" className="btn btn-orange" style={{ marginTop: '20px' }}>
                                    Request a Quote <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </Reveal>
                        </div>

                        <div className="split-visual">
                            <Reveal>
                                <div className="split-visual-main" style={{
                                    backgroundImage:
                                        slug === 'air-freight' ? 'url(https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format&fit=crop)' :
                                            slug === 'ocean-freight' ? 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop)' :
                                                slug === 'road-transport' ? 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop)' :
                                                    slug === 'warehousing' ? 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop)' :
                                                        slug === 'customs-clearance' ? 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop)' :
                                                            slug === 'buyers-consolidation' ? 'url(/css/buyers-consolidation.jpg)' :
                                                                slug === 'global-procurement' ? 'url(/css/global-procurement.jpg)' :
                                                                    slug === 'supply-chain' ? 'url(/css/supply-chain.png)' :
                                                                        'url(/css/project.jpg)',
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
                        <h2>
                            {slug === 'ocean-freight' ? 'From Sea Freight Booking to Final Delivery' :
                                slug === 'road-transport' ? 'Road Transportation, From Planning to Delivery' :
                                    slug === 'warehousing' ? 'Warehousing, From Storage to Dispatch' :
                                        slug === 'customs-clearance' ? 'Customs Clearance, From Documentation to Release' :
                                            slug === 'buyers-consolidation' ? 'Buyer Consolidation, From Multiple Suppliers to One Shipment' :
                                                slug === 'global-procurement' ? 'Global Procurement, From Sourcing to Delivery' :
                                                    slug === 'supply-chain' ? 'Supply Chain, From Planning to Delivery' :
                                                        slug === 'project-logistics' ? 'From Project Planning to Final Delivery' :
                                                            'Simple Process, Serious Execution'}
                        </h2>
                        <p>
                            {slug === 'ocean-freight' ? 'Reliable ocean freight coordination from cargo planning to destination arrival.' :
                                slug === 'road-transport' ? 'From pickup to final delivery, every shipment is coordinated with clear communication and reliable transport arrangements.' :
                                    slug === 'warehousing' ? 'From receiving goods to final dispatch, every step is coordinated to support efficient storage, careful handling, and smooth distribution.' :
                                        slug === 'customs-clearance' ? 'From document preparation to cargo release, every step is coordinated to support smooth and compliant customs clearance.' :
                                            slug === 'buyers-consolidation' ? 'We coordinate goods from multiple suppliers into a consolidated shipment, helping simplify shipping, documentation, and cargo management.' :
                                                slug === 'global-procurement' ? 'From identifying suppliers to coordinating shipments, we help simplify international purchasing and keep procurement activities organised.' :
                                                    slug === 'supply-chain' ? 'We coordinate key supply chain activities to improve efficiency, minimise disruptions, and keep goods moving smoothly.' :
                                                        slug === 'project-logistics' ? 'Every project shipment is coordinated around cargo requirements, transport feasibility, and delivery priorities.' :
                                                            'From first contact to final delivery, you work with one team — one named contact from start to finish.'}
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
                            {slug === 'warehousing'
                                ? 'Connect warehousing with complementary logistics services for efficient cargo storage, handling, and distribution.'
                                : slug === 'customs-clearance'
                                    ? 'Simplify import and export processes with integrated logistics services that support documentation, customs compliance, and smooth cargo movement from origin to destination.'
                                    : slug === 'buyers-consolidation'
                                        ? 'Combine purchases from multiple suppliers into one coordinated shipment, simplifying cargo management, reducing shipping complexity, and streamlining delivery to your destination.'
                                        : slug === 'global-procurement'
                                            ? 'Simplify international sourcing with coordinated supplier management, purchasing support, and integrated logistics to help streamline procurement and deliver goods efficiently to your destination.'
                                            : slug === 'supply-chain'
                                                ? 'Streamline your supply chain with coordinated transportation, warehousing, and distribution to reduce operational complexity and keep goods moving efficiently from supplier to destination.'
                                                : slug === 'project-logistics'
                                                    ? 'Coordinate complex project cargo with integrated transport, documentation, and delivery solutions to keep critical shipments moving safely and on schedule.'
                                                    : `Connect ${s.title.toLowerCase()} with complementary logistics services to support your cargo movement from origin to destination.`}
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
                        <h2>Ready to Get Started?</h2>
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