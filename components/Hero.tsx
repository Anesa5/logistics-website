'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SERVICES } from '@/lib/data';

export default function Hero() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = () => {
        if (!name.trim() || !email.trim()) {
            alert('Please fill in your name and email so we can reply.');
            return;
        }
        setSent(true);
        setTimeout(() => {
            setSent(false);
            setName('');
            setEmail('');
        }, 3200);
    };

    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="reveal is-visible">
                    <span className="hero-eyebrow">Global Freight &amp; ICL Logistics</span>
                    <h1>Connecting Destinations,<br /><span>Delivering Trust</span></h1>
                    <p className="hero-copy">
                        From a single urgent consignment to a complete supply chain, we
                        bring the people, planning, and practical control to move your
                        goods across worldwide — on time, every time.
                    </p>

                    <div className="hero-buttons">
                        <Link href="/services" className="btn btn-orange">
                            Our Services <i className="fa-solid fa-arrow-right" />
                        </Link>
                        <Link href="/contact" className="btn btn-outline-white">
                            Get a Quote <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="hero-facts">
                        <div className="hero-fact">
                            <i className="fa-solid fa-globe" />
                            <div><strong>38+</strong><span>Countries Served</span></div>
                        </div>
                        <div className="hero-fact">
                            <i className="fa-solid fa-truck-fast" />
                            <div><strong>12k+</strong><span>Shipments / Year</span></div>
                        </div>
                        <div className="hero-fact">
                            <i className="fa-solid fa-award" />
                            <div><strong>16 Yrs</strong><span>In Business</span></div>
                        </div>
                    </div>
                </div>

                <div className="hero-art reveal is-visible">
                    <div className="hero-quote">
                        <h3>Request a Quote</h3>
                        <p>Tell us what needs to move. We&apos;ll reply within one business hour.</p>

                        <div className="field">
                            <label htmlFor="quote-name">Full Name</label>
                            <input id="quote-name" type="text" placeholder="e.g. Jane Doe" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-email">Email Address</label>
                            <input id="quote-email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-service">Service Needed</label>
                            <select id="quote-service" defaultValue="">
                                {SERVICES.map((s) => (
                                    <option key={s.slug} value={s.slug}>{s.title}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            className="btn btn-orange"
                            onClick={handleSubmit}
                            style={sent ? { background: '#22c55e', pointerEvents: 'none' } : {}}
                        >
                            {sent ? '✓ Request Sent' : <>Send Request <i className="fa-solid fa-paper-plane" /></>}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}