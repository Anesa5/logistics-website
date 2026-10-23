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
                    <span className="hero-eyebrow">Reliable Logistics. Smarter Shipping.</span>
                    <h1>Connecting Destinations,<br /><span>Delivering Trust</span></h1>
                    <p className="hero-copy">
                        From freight forwarding to global procurement, ICL Logistics helps
                        businesses manage the movement of goods with practical solutions, clear
                        communication, and dependable coordination.
                    </p>

                    <div className="hero-buttons">
                        <a href="tel:+923111444224" className="btn btn-orange">
                            <i className="fa-solid fa-phone" /> Call Us Now
                        </a>
                        <Link href="/about" className="btn btn-outline-white">
                            Learn More <i className="fa-solid fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="hero-facts">
                        <div className="hero-fact">
                            <i className="fa-solid fa-globe" />
                            <div><strong>Global Network</strong><span>38+ Countries Served</span></div>
                        </div>
                        <div className="hero-fact">
                            <i className="fa-solid fa-award" />
                            <div><strong>14 Years</strong><span>Industry Experience</span></div>
                        </div>
                        <div className="hero-fact">
                            <i className="fa-solid fa-layer-group" />
                            <div><strong>Integrated Solutions</strong><span>Multiple Service Options</span></div>
                        </div>
                    </div>
                </div>

                <div className="hero-art reveal is-visible">
                    <div className="hero-quote">
                        <h3>Request a Quote</h3>
                        <p>Tell us what needs to move. We&apos;ll reply within one business hour.</p>

                        <div className="field">
                            <label htmlFor="quote-name">Name</label>
                            <input id="quote-name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-company">Company Name</label>
                            <input id="quote-company" type="text" placeholder="Your Company" />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-email">Email</label>
                            <input id="quote-email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-phone">Phone</label>
                            <input id="quote-phone" type="tel" placeholder="+92 300 1234567" />
                        </div>

                        <div className="field">
                            <label htmlFor="quote-businesstype">Business Type</label>
                            <select id="quote-businesstype">
                                <option value="">Select Business Type</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Retail">Retail & FMCG</option>
                                <option value="Textiles">Textiles & Apparel</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="quote-service">Services Needed</label>
                            <select id="quote-service">
                                {SERVICES.map((s) => (
                                    <option key={s.slug} value={s.slug}>{s.title}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="quote-shipping">Shipping Method</label>
                            <select id="quote-shipping">
                                <option value="Air">Air Freight</option>
                                <option value="Ocean">Ocean Freight</option>
                                <option value="Road">Road Transport</option>
                                <option value="Not Sure">Not Sure Yet</option>
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