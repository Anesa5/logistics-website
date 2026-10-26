import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StatsCounter from '@/components/StatsCounter';
import { TEAM } from '@/lib/data';

export const metadata = { title: 'About Us — ICL Logistics' };

export default function AboutPage() {
    return (
        <main>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>About Us</span>
                    </nav>
                    <h1>Connecting businesses through smarter logistics.</h1>

                </div>
            </section>

            {/* ABOUT STORY */}
            <section className="section">
                <div className="container about-story-grid">
                    <Reveal>
                        <span className="section-eyebrow">Our Story</span>
                        <div className="about-quote">&quot;</div>
                    </Reveal>

                    <Reveal>
                        <h2>ICL focus on the practical needs of businesses moving and sourcing goods.</h2>
                        <p>
                            ICL Logistics is a Pakistan-based logistics and freight forwarding company established in 2012. ICL Logistics delivers reliable freight forwarding, transportation, and supply chain solutions backed by industry experience and professional coordination. With a focus on clear communication, operational efficiency, and your business requirements, every shipment is managed with care and commitment.
                            ICL focus on the practical needs of businesses moving and sourcing goods. As customer requirements evolve, we aim to provide relevant services, thoughtful coordination, and solutions that support changing business operations.
                            Our focus remains on building productive relationships and helping customers navigate the details of logistics with confidence.

                        </p>

                        <Link href="/contact" className="btn btn-blue">
                            Get in Touch <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* MISSION, VISION & VALUES (New Section Added in standard layout) */}
            <section className="section section-bg-gray">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Our Core</span>
                        <h2>Mission, Vision & Values</h2>
                    </div>
                    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <Reveal>
                            <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-bullseye" style={{ fontSize: '28px', color: 'var(--orange)', marginBottom: '16px' }} />
                                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Mission</h4>
                                <p style={{ fontSize: '15px', color: 'var(--text)', margin: 0 }}>
                                    To provide practical and professionally coordinated logistics solutions that help businesses move goods, manage sourcing, and meet their operational requirements.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-eye" style={{ fontSize: '28px', color: 'var(--orange)', marginBottom: '16px' }} />
                                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Vision</h4>
                                <p style={{ fontSize: '15px', color: 'var(--text)', margin: 0 }}>
                                    To be a trusted logistics partner for businesses seeking dependable freight forwarding, procurement, and supply chain support.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-gem" style={{ fontSize: '28px', color: 'var(--orange)', marginBottom: '16px' }} />
                                <h4 style={{ fontSize: '20px', marginBottom: '12px' }}>Our Values</h4>
                                <p style={{ fontSize: '15px', color: 'var(--text)', margin: 0 }}>
                                    Professionalism, transparency, accountability, customer focus, and long-term business relationships guide our approach to service.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CEO MESSAGE (Added to keep content complete) */}
            <section className="section">
                <div className="container split">
                    <Reveal className="split-visual">
                        <div className="split-visual-main" style={{ backgroundImage: "url('/css/about-image.jpg')" }}>
                        </div>
                        <div className="split-visual-badge">
                            <strong>2012</strong>
                            <span>Established</span>
                        </div>
                    </Reveal>

                    <Reveal className="split-copy">
                        <span className="section-eyebrow">CEO's Message</span>
                        <h2>Building trust through every business relationship.</h2>
                        <p>
                            At ICL Logistics, we believe that successful logistics begins with understanding our customers' businesses. Every shipment carries a purpose, whether it supports production, fulfils an order, or creates a new business opportunity.
                        </p>
                        <p>
                            Since establishing ICL Logistics in 2012, our focus has been on helping customers manage their logistics requirements through practical solutions, professional coordination, and clear communication.
                        </p>
                        <p>
                            We recognize that trust is earned through the way we handle responsibilities, respond to challenges, and work with our customers and partners. As we move forward, we remain committed to strengthening these relationships and supporting businesses in an increasingly connected world.
                        </p>
                        <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Thank you for considering ICL Logistics as your logistics partner.</p>
                        <div style={{ marginTop: '20px' }}>
                            <strong style={{ display: 'block', fontSize: '18px' }}>Muhammad Waseem</strong>
                            <span style={{ color: 'var(--text)' }}>Chief Executive Officer, ICL Logistics</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* STATS BANNER */}
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Our Capabilities</span>
                        <h2>A Coordinated Approach to logistic Requirements.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                            Our service portfolio covers several parts of the logistics process, allowing customers to discuss freight, cargo storage, customs-related requirements, product sourcing, and supply chain coordination with one team.
                        </p>
                    </div>
                    <StatsCounter />
                </div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="section">
                <div className="container split">
                    <Reveal className="split-copy">
                        <span className="section-eyebrow">Why Work With Us?</span>
                        <h2>A Practical Partner for Your Logistics Needs</h2>
                        <ul className="check-list">
                            {[
                                'Experience in the logistics sector since 2012.',
                                'A broad range of freight and supply chain services.',
                                'Solutions considered around cargo and business requirements.',
                                'Professional communication and service coordination.',
                                'A focus on long-term customer relationships.'
                            ].map((item) => (
                                <li key={item}><i className="fa-solid fa-check" /> {item}</li>
                            ))}
                        </ul>
                        <Link href="/contact" className="btn btn-blue" style={{ marginTop: '20px' }}>
                            Talk to Us <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>

                    <Reveal className="split-visual">
                        <div className="split-visual-main">

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Let's Build a Better Way to Move Your Cargo.</h2>
                        <p>Whether you need freight forwarding, sourcing assistance, or ongoing logistics support, contact ICL Logistics to discuss your business needs.</p>
                    </div>
                    <div className="cta-actions">
                        <a href="tel:+923111444224" className="btn btn-orange">
                            Get in Touch <i className="fa-solid fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}