'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">

                {/* LEFT SIDE: TEXT */}
                <div className="reveal is-visible">
                    <span className="hero-eyebrow">Reliable Logistics. Smarter Shipping.</span>
                    <h1>Connecting Destinations,<br /><span>Delivering Trust</span></h1>
                    <p className="hero-copy">
                        From freight forwarding to global procurement, ICL Logistics helps businesses manage the movement of goods with practical solutions, clear communication, and dependable coordination.
                    </p>

                    <div className="hero-buttons">
                        <a href="tel:+923111444224" className="btn btn-orange">
                            <i className="fa-solid fa-phone" /> Call Us
                        </a>
                        <Link href="/services" className="btn btn-outline-white">
                            Our Services <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE: GLASSMORPHIC HIGHLIGHTS CARD */}
                <div className="reveal is-visible" style={{ width: '100%' }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                            Why Partner With Us?
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '30px' }}>
                            Delivering excellence across the globe.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Highlight 1 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(93, 187, 42, 0.15)', display: 'grid', placeItems: 'center', color: 'var(--orange)', fontSize: '20px' }}>
                                    <i className="fa-solid fa-globe" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: '#fff', fontSize: '16px' }}>Global Network</strong>
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Operating in 38+ Countries</span>
                                </div>
                            </div>

                            {/* Highlight 2 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(93, 187, 42, 0.15)', display: 'grid', placeItems: 'center', color: 'var(--orange)', fontSize: '20px' }}>
                                    <i className="fa-solid fa-award" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: '#fff', fontSize: '16px' }}>14+ Years Experience</strong>
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Trusted since 2012</span>
                                </div>
                            </div>

                            {/* Highlight 3 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(93, 187, 42, 0.15)', display: 'grid', placeItems: 'center', color: 'var(--orange)', fontSize: '20px' }}>
                                    <i className="fa-solid fa-layer-group" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: '#fff', fontSize: '16px' }}>Integrated Solutions</strong>
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Multiple Service Options</span>
                                </div>
                            </div>

                            {/* Highlight 4 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(93, 187, 42, 0.15)', display: 'grid', placeItems: 'center', color: 'var(--orange)', fontSize: '20px' }}>
                                    <i className="fa-solid fa-headset" />
                                </div>
                                <div>
                                    <strong style={{ display: 'block', color: '#fff', fontSize: '16px' }}>24/7 Support</strong>
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Real humans, ready to help</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <Link href="/about" style={{ color: 'var(--orange)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Learn more about us <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}