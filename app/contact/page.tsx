'use client';

import { useState, FormEvent } from 'react';
import { SERVICES } from '@/lib/data';

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.querySelector('#c-name') as HTMLInputElement)?.value.trim();
        const email = (form.querySelector('#c-email') as HTMLInputElement)?.value.trim();
        const message = (form.querySelector('#c-message') as HTMLTextAreaElement)?.value.trim();

        if (!name || !email || !message) {
            setError('Please fill in all required fields marked with *.');
            setSent(false);
            return;
        }

        setError('');
        setSent(true);
        form.reset();
    };

    return (
        <main>
            <section className="page-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <a href="/">Home</a>
                        <i className="fa-solid fa-chevron-right" />
                        <span>Contact</span>
                    </nav>
                    <h1>Get in Touch</h1>
                    <p>Tell us what needs to move. Our operations team will come back with the right questions — not a canned pitch.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    <div className="contact-info-card reveal is-visible">
                        <h3>Contact Information</h3>
                        <p>Whether you have a lane to price, a warehouse to relocate, or a supply chain that needs a second set of eyes, we&apos;re ready to listen.</p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-location-dot" /></div>
                                <div>
                                    <small>Visit Us</small>
                                    <strong> Plaza No. 543, Block A, Main Boulevard, Jubilee Town, Lahore, Pakistan</strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-phone" /></div>
                                <div>
                                    <small>Call Operations</small>
                                    <strong><a href="tel:+92 3-111-444-224">+92 3-111-444-224</a></strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-envelope" /></div>
                                <div>
                                    <small>Email the Team</small>
                                    <strong><a href="mailto:info@logistics.com">info@icllogisticgroup.com</a></strong>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon"><i className="fa-solid fa-clock" /></div>
                                <div>
                                    <small>Working Hours</small>
                                    <strong>Mon – Sat: 8:00 – 18:00<br />Sun: Closed</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form reveal is-visible" onSubmit={handleSubmit}>
                        <h3>Request a Quote</h3>
                        <p>Fill in the form below and we&apos;ll get back to you within one business hour.</p>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="c-name">Full Name *</label>
                                <input id="c-name" name="name" type="text" placeholder="e.g. Jane Doe" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="c-email">Email Address *</label>
                                <input id="c-email" name="email" type="email" placeholder="you@company.com" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="c-phone">Phone Number</label>
                                <input id="c-phone" name="phone" type="tel" placeholder="+1 (___) ___-____" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="c-service">Service Needed</label>
                                <select id="c-service" name="service" defaultValue="">
                                    {SERVICES.map((s) => (
                                        <option key={s.slug} value={s.slug}>{s.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-field full">
                                <label htmlFor="c-message">Message *</label>
                                <textarea id="c-message" name="message" placeholder="Origin, destination, timing, and anything else that matters..." required />
                            </div>
                        </div>

                        <button className="btn btn-orange" type="submit">
                            Send Message <i className="fa-solid fa-paper-plane" />
                        </button>

                        {error && (
                            <div className="form-success" style={{ background: '#fee2e2', borderLeftColor: '#ef4444', color: '#991b1b' }}>
                                {error}
                            </div>
                        )}

                        {sent && (
                            <div className="form-success">
                                Thanks! Your message has been received. A member of our operations team will be in touch within one business hour.
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </main>
    );
}