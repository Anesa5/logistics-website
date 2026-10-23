import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StatsCounter from '@/components/StatsCounter';
import { TEAM } from '@/lib/data';

export const metadata = { title: 'About Us — ICL Logistics' };

export default function AboutPage() {
    return (
        <main>
            {/* SECTION 1: Page Hero Banner */}
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" />
                        <span>About Us</span>
                    </nav>
                    <h1>Connecting businesses through smarter logistics.</h1>
                    <p>
                        ICL Logistics is a Pakistan-based logistics and freight forwarding company established in 2012. We deliver reliable freight forwarding, transportation, and supply chain solutions backed by industry experience and professional coordination.
                    </p>
                </div>
            </section>

            {/* Story / Intro */}
            <section className="section">
                <div className="container about-story-grid">
                    <Reveal>
                        <span className="section-eyebrow">Our Focus</span>
                        <div className="about-quote">&quot;</div>
                    </Reveal>

                    <Reveal>
                        <h2>Practical needs of businesses moving and sourcing goods.</h2>
                        <p>
                            As customer requirements evolve, we aim to provide relevant services, thoughtful coordination, and solutions that support changing business operations.
                        </p>
                        <p>
                            Our focus remains on building productive relationships and helping customers navigate the details of logistics with confidence. With a focus on clear communication, operational efficiency, and your business requirements, every shipment is managed with care and commitment.
                        </p>
                        <Link href="/contact" className="btn btn-blue mt-4">
                            Get in Touch <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* SECTION 2: Mission, Vision & Values */}
            <section className="section section-bg-gray">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow">Who We Are</span>
                        <h2>Mission, Vision & Values</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <Reveal>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-bullseye" style={{ fontSize: '32px', color: 'var(--orange)', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Our Mission</h3>
                                <p style={{ color: 'var(--text)' }}>To provide practical and professionally coordinated logistics solutions that help businesses move goods, manage sourcing, and meet their operational requirements.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-eye" style={{ fontSize: '32px', color: 'var(--orange)', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Our Vision</h3>
                                <p style={{ color: 'var(--text)' }}>To be a trusted logistics partner for businesses seeking dependable freight forwarding, procurement, and supply chain support.</p>
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', height: '100%', border: '1px solid var(--line)' }}>
                                <i className="fa-solid fa-gem" style={{ fontSize: '32px', color: 'var(--orange)', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Our Values</h3>
                                <p style={{ color: 'var(--text)' }}>Professionalism, transparency, accountability, customer focus, and long-term business relationships guide our approach to service.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CEO Message */}
            <section className="section">
                <div className="container split">
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
                        <p><strong>Thank you for considering ICL Logistics as your logistics partner.</strong></p>

                        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--blue-100)', display: 'grid', placeItems: 'center', color: 'var(--blue-600)', fontSize: '24px' }}>
                                <i className="fa-solid fa-user-tie" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>Muhammad Waseem</h4>
                                <span style={{ fontSize: '14px', color: 'var(--text)' }}>Chief Executive Officer, ICL Logistics</span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="split-visual">
                        <div className="split-visual-main" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80&auto=format&fit=crop)' }}>
                        </div>
                        <div className="split-visual-badge">
                            <strong>2012</strong>
                            <span>Established</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* SECTION 4: Central Banner (Stats) */}
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="section-head reveal is-visible">
                        <span className="section-eyebrow" style={{ color: 'var(--orange)' }}>Our Impact</span>
                        <h2>A Coordinated Approach to Logistics Requirements</h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                            Our service portfolio covers several parts of the logistics process, allowing customers to discuss freight, cargo storage, customs-related requirements, product sourcing, and supply chain coordination with one team.
                        </p>
                    </div>
                    <StatsCounter />
                </div>
            </section>

            {/* SECTION 6: Why Work With Us */}
            <section className="section section-bg-gray">
                <div className="container split">
                    <Reveal className="split-visual">
                        <div className="split-visual-main">
                            <i className="fa-solid fa-handshake-angle" />
                        </div>
                    </Reveal>

                    <Reveal className="split-copy">
                        <span className="section-eyebrow">Why Work With Us?</span>
                        <h2>A Practical Partner for Your Logistics Needs</h2>
                        <ul className="check-list">
                            <li><i className="fa-solid fa-check" /> Experience in the logistics sector since 2012.</li>
                            <li><i className="fa-solid fa-check" /> A broad range of freight and supply chain services.</li>
                            <li><i className="fa-solid fa-check" /> Solutions considered around cargo and business requirements.</li>
                            <li><i className="fa-solid fa-check" /> Professional communication and service coordination.</li>
                            <li><i className="fa-solid fa-check" /> A focus on long-term customer relationships.</li>
                        </ul>
                    </Reveal>
                </div>
            </section>

            {/* SECTION 8: About Us CTA */}
            <section className="cta-band">
                <div className="container cta-inner">
                    <div>
                        <h2>Let's Build a Better Way to Move Your Cargo.</h2>
                        <p>Whether you need freight forwarding, sourcing assistance, or ongoing logistics support, contact ICL Logistics to discuss your business needs.</p>
                    </div>
                    <div className="cta-actions">
                        <a href="tel:+923111444224" className="btn btn-orange">
                            <i className="fa-solid fa-phone" /> Call Us Now
                        </a>
                        <Link href="/contact" className="btn btn-outline-white">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}